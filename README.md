# 🏝️ Npro Dark

> A modern, minimal dark theme for Visual Studio Code.

Clean, calm, and distraction-free — built for long coding sessions.

---

## ✨ Features

- Deep background (`#181a1d`) for reduced eye strain  
- Clean, balanced syntax highlighting  
- Minimal UI noise  
- High readability across languages  

---

## 🎨 Color Palette

- Background: `#181a1d`  
- Foreground: `#bcbec4`  
- Blue: `#548af7`  
- Green: `#73b00a`  
- Red: `#f75464`  
- Orange: `#e8a33e`  
- Purple: `#d09cf7`  
- Cyan: `#2aacb8`  

---

## 📸 Screenshots

![Preview](screenshots/s1.png)  
![Preview](screenshots/s2.png)

---

## 🚀 Installation

### Marketplace (coming soon)

```bash
code --install-extension ninoc-dev.npro-dark
```

---

### Manual (recommended for now)

1. Go to **Releases**  
2. Download the `.vsix` file  
3. Open VS Code  
4. Press `Ctrl+Shift+P`  
5. Run:  
   ```
   Extensions: Install from VSIX
   ```
6. Select the file  

---

## 🧩 Usage

1. Open Command Palette (`Ctrl+Shift+P`)  
2. Search: `Color Theme`  
3. Select **Npro Dark**

---

## 🎯 Supported Languages

- JavaScript / TypeScript  
- Python, Go, Rust  
- HTML / CSS / SCSS  
- JSON, YAML, Markdown  
- and more  

---

## ⚙️ Customization

```json
"workbench.colorCustomizations": {
  "[Npro Dark]": {
    "editor.background": "#1e2024"
  }
}
```

---

## 🎨 Optional UI tweak (Centered Activity Bar)

You can center the activity bar using custom CSS.

**Requires:**  
Custom CSS and JS Loader (by be5invis)

```css
.composite-bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.composite-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.monaco-action-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.actions-container {
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
}
```

> ⚠️ Uses unsupported VS Code customization — may break on updates

---

## 🤝 Contributing

PRs welcome. Open an issue first for bigger changes.

---

## 📄 License

MIT

---

## 🙌 Credits

Inspired by the excellent  
[Dark Islands](https://github.com/bwya77/vscode-dark-islands)

---

Made by Nino  
https://github.com/ninoc-dev/Npro-dark