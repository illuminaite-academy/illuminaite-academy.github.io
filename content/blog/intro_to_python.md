# Healthcare_bot

## Installing Python 3

**macOS:**

- Make sure your system does not already have Python installed (search in Terminal app)

```bash
python
```

- You should receive an error message, if you receive a prompt, you already have it installed

If you do not have python already installed:

1.Install Brew
2.Install Python using Brew:

```bash
brew install python@3
```

3.Make sure Brew executables `bin` directory is in the `PATH` variable

**Windows:**

- Make sure your system does not already have Python installed (search in Command Prompt)

```bash
python
```

- If you already have it installed, you will see a message indicating the version

If you do not have Python already installed:

1. Download Python from [Windows Download](https://www.python.org/downloads/windows/) page
2. Run installer, make sure to *check* the box on to have Python added to your `PATH` (if the installer offers that option)

**Linux:**

- Make sure your system does not already have any Python version installed

```bash
python --version
python2 --version
python3 --version
```

1.Install Python using [atp-get](https://linux.die.net/man/8/apt-get)

```bash
sudo apt-get update
sudo apt-get install python3
```

2.It is recommended to also install extensions and `pip` to install packages globally

```bash
sudo apt-get install python3-dev python3-pip
```

## Jupyter extension

**Step 1:** Follow the linked instructions to install [VS Code](https://code.visualstudio.com/download) for your OS

**Step 2:** Install one of the two Python environments ([Anaconda](https://docs.anaconda.com/anaconda/install/index.html), [Miniconda](https://docs.anaconda.com/miniconda/))

**Step 3:** Install the [Jupyter Extension](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter), the [Python Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python), and [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv) using the provided links.

**Step 4:** Create a notebook file by opening the Command Palette (`Ctrl+Shift+P`) and select `Jupyter: Create New Jupyter Notebook`
