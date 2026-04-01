#!/usr/bin/env bash
# anygochi Gemini CLI unpatch — run with sudo

set -euo pipefail

GEMINI_UI="/usr/lib/node_modules/@google/gemini-cli/dist/src/ui"

if [[ -f "$GEMINI_UI/layouts/DefaultAppLayout.js.orig" ]]; then
    cp "$GEMINI_UI/layouts/DefaultAppLayout.js.orig" \
       "$GEMINI_UI/layouts/DefaultAppLayout.js"
    echo "  ✓ Restored DefaultAppLayout.js"
fi

if [[ -f "$GEMINI_UI/components/BuddyPanel.js" ]]; then
    rm "$GEMINI_UI/components/BuddyPanel.js"
    echo "  ✓ Removed BuddyPanel.js"
fi

echo "  Reverted to original Gemini CLI."
