# 📁 Multi File Generator (Python GUI App)

This is a simple Python desktop application that allows users to generate multiple `.txt` files based on a base name, starting number, and count. The app is built using `tkinter` for the GUI and packaged into a `.exe` for Windows using `PyInstaller`.

---

## 🚀 Features

- Simple and clean user interface
- Enter the base filename
- Specify the starting number
- Choose how many files to generate
- All files will be created as `.txt` with incremental numbers

---

## 🖥️ How It Works

1. **Run the app**: Double-click the `.exe` file (after building it or downloading).
2. **Enter details**:
   - **Base File Name** (e.g., `file` → file1.txt, file2.txt, ...)
   - **Starting Number** (e.g., `1`)
   - **Number of Files** (e.g., `5`)
3. **Click "Generate Files"**
4. The files will be created in the **same folder** where the `.exe` is located.

---

## 🛠️ How to Build (.exe from .py)

Make sure you have Python installed, and then install PyInstaller:

```bash
pip install pyinstaller
pyinstaller --noconsole --onefile --windowed --icon=app_icon.ico MultiFileGenerator.py
```
## 📂 Project Structure
📦 your_project_folder
 ┣ 📜 MultiFileGenerator.py
 ┣ 📜 app_icon.ico
 ┣ 📁 dist/
 ┃ ┗ 📦 MultiFileGenerator.exe
 ┗ 📁 build/
---

## ✅ Requirements
Python 3.6+
tkinter (comes pre-installed with Python)

## 🧑‍💻 Author
Jalal Khan
University project – 6th Semester (Flutter + Python Desktop App)
