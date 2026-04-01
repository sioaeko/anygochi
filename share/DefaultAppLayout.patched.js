import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from 'ink';
import { Notifications } from '../components/Notifications.js';
import { MainContent } from '../components/MainContent.js';
import { DialogManager } from '../components/DialogManager.js';
import { Composer } from '../components/Composer.js';
import { ExitWarning } from '../components/ExitWarning.js';
import { useUIState } from '../contexts/UIStateContext.js';
import { useFlickerDetector } from '../hooks/useFlickerDetector.js';
import { useAlternateBuffer } from '../hooks/useAlternateBuffer.js';
import { CopyModeWarning } from '../components/CopyModeWarning.js';
import { BackgroundShellDisplay } from '../components/BackgroundShellDisplay.js';
import { StreamingState } from '../types.js';
import { BuddyPanel, getBuddyWidth } from '../components/BuddyPanel.js';
export const DefaultAppLayout = () => {
    const uiState = useUIState();
    const isAlternateBuffer = useAlternateBuffer();
    const { rootUiRef, terminalHeight } = uiState;
    useFlickerDetector(rootUiRef, terminalHeight);
    // Reserve right-side space for the buddy overlay so text doesn't bleed under it.
    const buddyW  = getBuddyWidth(uiState.terminalWidth);
    const mainW   = uiState.terminalWidth - buddyW;
    // If in alternate buffer mode, need to leave room to draw the scrollbar on
    // the right side of the terminal.
    return (_jsxs(Box, { flexDirection: "column", width: mainW, height: isAlternateBuffer ? terminalHeight : undefined, paddingBottom: isAlternateBuffer && !uiState.copyModeEnabled ? 1 : undefined, flexShrink: 0, flexGrow: 0, overflow: "hidden", ref: uiState.rootUiRef, children: [_jsx(MainContent, {}), uiState.isBackgroundShellVisible &&
                uiState.backgroundShells.size > 0 &&
                uiState.activeBackgroundShellPid &&
                uiState.backgroundShellHeight > 0 &&
                uiState.streamingState !== StreamingState.WaitingForConfirmation && (_jsx(Box, { height: uiState.backgroundShellHeight, flexShrink: 0, children: _jsx(BackgroundShellDisplay, { shells: uiState.backgroundShells, activePid: uiState.activeBackgroundShellPid, width: mainW, height: uiState.backgroundShellHeight, isFocused: uiState.embeddedShellFocused && !uiState.dialogsVisible, isListOpenProp: uiState.isBackgroundShellListOpen }) })), _jsxs(Box, { flexDirection: "column", ref: uiState.mainControlsRef, flexShrink: 0, flexGrow: 0, width: mainW, children: [_jsx(Notifications, {}), _jsx(CopyModeWarning, {}), uiState.customDialog ? (uiState.customDialog) : uiState.dialogsVisible ? (_jsx(DialogManager, { terminalWidth: mainW, addItem: uiState.historyManager.addItem })) : (_jsx(Composer, { isFocused: true })), _jsx(ExitWarning, {})] }), buddyW > 0 && _jsx(BuddyPanel, { terminalWidth: uiState.terminalWidth })] }));
};
//# sourceMappingURL=DefaultAppLayout.js.map
