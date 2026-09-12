> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationpresentationoptions/nsapplicationpresentationdefault](https://developer.apple.com/documentation/appkit/nsapplicationpresentationoptions/nsapplicationpresentationdefault)

# NSApplicationPresentationDefault

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

This is the default presentation mode.

## Declaration

```objectivec
NSApplicationPresentationDefault
```

<a id="Discussion"></a>

## Discussion

In the default presentation mode, the dock icon and menu bar are displayed, process switching, force quit, session termination, and the “Hide” menu option are all enabled, and the menu bar transparency is normal.

## See Also

### Presentation Options

- [NSApplicationPresentationAutoHideDock](../nsapplication/presentationoptions-swift.struct/autohidedock.md): The dock is normally hidden, but automatically appears when moused near.
- [NSApplicationPresentationHideDock](../nsapplication/presentationoptions-swift.struct/hidedock.md): The dock is entirely hidden and disabled.
- [NSApplicationPresentationAutoHideMenuBar](../nsapplication/presentationoptions-swift.struct/autohidemenubar.md): The menu bar is normally hidden, but automatically appears when moused near.
- [NSApplicationPresentationHideMenuBar](../nsapplication/presentationoptions-swift.struct/hidemenubar.md): The menu bar is entirely hidden and disabled.
- [NSApplicationPresentationDisableAppleMenu](../nsapplication/presentationoptions-swift.struct/disableapplemenu.md): All Apple Menu items are disabled.
- [NSApplicationPresentationDisableProcessSwitching](../nsapplication/presentationoptions-swift.struct/disableprocessswitching.md): The process switching user interface (Command + Tab to cycle through apps) is disabled.
- [NSApplicationPresentationDisableForceQuit](../nsapplication/presentationoptions-swift.struct/disableforcequit.md): The force quit panel (displayed by pressing Command + Option + Esc) is disabled
- [NSApplicationPresentationDisableSessionTermination](../nsapplication/presentationoptions-swift.struct/disablesessiontermination.md): The panel that shows the Restart, Shut Down, and Log Out options that are displayed as a result of pushing the power key is disabled.
- [NSApplicationPresentationDisableHideApplication](../nsapplication/presentationoptions-swift.struct/disablehideapplication.md): The app’s “Hide” menu item is disabled.
- [NSApplicationPresentationDisableMenuBarTransparency](../nsapplication/presentationoptions-swift.struct/disablemenubartransparency.md): The menu bar transparency appearance is disabled.
- [NSApplicationPresentationFullScreen](../nsapplication/presentationoptions-swift.struct/fullscreen.md): The app is in fullscreen mode.
- [NSApplicationPresentationAutoHideToolbar](../nsapplication/presentationoptions-swift.struct/autohidetoolbar.md): When in fullscreen mode the window toolbar is detached from window and hides and shows with autoHidden menuBar.
- [NSApplicationPresentationDisableCursorLocationAssistance](../nsapplication/presentationoptions-swift.struct/disablecursorlocationassistance.md): The behavior that allows the user to shake the mouse to locate the cursor is disabled.
