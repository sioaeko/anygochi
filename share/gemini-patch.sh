#!/usr/bin/env bash
# anygochi Gemini CLI patch — run with sudo
# Adds BuddyPanel to Gemini CLI's Ink UI

set -euo pipefail

GEMINI_UI="/usr/lib/node_modules/@google/gemini-cli/dist/src/ui"
PATCH_SRC="/home/shibuki/.local/share/anygochi"

echo "  Patching Gemini CLI with anygochi buddy panel..."

# Backup originals (skip if already backed up)
if [[ ! -f "$GEMINI_UI/layouts/DefaultAppLayout.js.orig" ]]; then
    cp "$GEMINI_UI/layouts/DefaultAppLayout.js" \
       "$GEMINI_UI/layouts/DefaultAppLayout.js.orig"
    echo "  ✓ Backed up DefaultAppLayout.js"
fi

# Install BuddyPanel component
cp "$PATCH_SRC/BuddyPanel.js" "$GEMINI_UI/components/BuddyPanel.js"
echo "  ✓ Installed BuddyPanel.js"

# Apply patched layout
cp "$PATCH_SRC/DefaultAppLayout.patched.js" \
   "$GEMINI_UI/layouts/DefaultAppLayout.js"
echo "  ✓ Patched DefaultAppLayout.js"

echo ""
echo "  Done! Run 'gemini' to see your buddy."
echo "  To revert: sudo bash /home/shibuki/.local/share/anygochi/gemini-unpatch.sh"
