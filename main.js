// Islands Dark theme demo (random-ish but nice looking)

import fs from "fs/promises";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

class IslandService {
  #cache = new Map();

  constructor(name = "Islands") {
    this.name = name;
  }

  async fetchUser(id) {
    if (this.#cache.has(id)) return this.#cache.get(id);

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }

    const data = await res.json();
    this.#cache.set(id, data);
    return data;
  }

  formatUser(user) {
    const { name, email, company } = user;
    return `${name} <${email}> — ${company?.name ?? "No company"}`;
  }
}

const colors = {
  ok: "#73b00a",
  warn: "#e8a33e",
  err: "#f75464",
  info: "#548af7",
};

async function main() {
  const service = new IslandService();

  try {
    console.log("%cLoading user...", `color:${colors.info}`);
    const user = await service.fetchUser(1);

    await sleep(300);

    console.log("%cUser loaded:", `color:${colors.ok}`);
    console.log(service.formatUser(user));

    const file = "./user.json";
    await fs.writeFile(file, JSON.stringify(user, null, 2));

    console.log(`Saved to ${file}`);
  } catch (err) {
    console.error("%cError:", `color:${colors.err}`, err.message);
  } finally {
    console.log("Done ✅");
  }
}

main();