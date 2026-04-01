# anygochi

Tamagotchi-style ASCII buddies for your CLI coding tools.

anygochi injects a cute ASCII companion into your CLI workflow. It supports session tracking, creature evolution, and integration with the Gemini CLI.

## Features

- **6 Unique Creatures:** debugrix, velocode, refactoron, nullbyte, wizardex, and compilox.
- **Evolution System:** Egg -> Baby -> Adult -> Elder based on session counts.
- **CLI Integration:** Built-in support for wrapping tools like `codex`, `gemini`, and `opencode`.
- **Gemini CLI Buddy Panel:** A custom Ink component for Gemini CLI users.

## Components

- `bin/anygochi`: Main Python application for managing your buddy.
- `bin/anygochi-wrap`: Tool to wrap other CLI commands with anygochi.
- `share/BuddyPanel.js`: Custom Ink component for Gemini CLI.
- `share/gemini-patch.sh`: Script to patch Gemini CLI with the anygochi buddy panel.

## Installation

1. Clone this repository.
2. Link or copy the binaries to your path:
   ```bash
   ln -s $(pwd)/bin/anygochi ~/.local/bin/anygochi
   ln -s $(pwd)/bin/anygochi-wrap ~/.local/bin/anygochi-wrap
   ```
3. Initialize your buddy:
   ```bash
   anygochi show
   ```
4. Wrap a tool:
   ```bash
   anygochi-wrap codex
   ```

## Usage

```bash
anygochi show            # Show your buddy
anygochi session [tool]  # Increment session count
anygochi watch           # Live refresh mode (e.g., for tmux panes)
anygochi info            # Show brief buddy info
anygochi list            # List all creature types
```

## Gemini CLI Integration

To add anygochi to your Gemini CLI:
```bash
cd share
sudo bash gemini-patch.sh
```

## Development Status

- Currently debugging an issue where `opencode` session closes immediately in a 50-column pane.
- Planned: Integration with `cursor` scripts.

## License

MIT
