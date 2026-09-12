> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/level-swift.struct/screensaver](https://developer.apple.com/documentation/appkit/nswindow/level-swift.struct/screensaver)

# screenSaver (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The level for a screen saver.

## Declaration

```swift
static var screenSaver: NSWindow.Level { get }
```

## See Also

### Constants

- [dock](dock.md): Deprecated. The level for the dock.
- [floating](floating.md): Useful for floating palettes.
- [mainMenu](mainmenu.md): Reserved for the application’s main menu.
- [modalPanel](modalpanel.md): The level for a modal panel.
- [normal](normal.md): The default level for `NSWindow` objects.
- [popUpMenu](popupmenu.md): The level for a pop-up menu.
- [statusBar](statusbar.md): The level for a status window.
- [submenu](submenu.md): Reserved for submenus. Synonymous with `NSTornOffMenuWindowLevel`, which is preferred.
- [tornOffMenu](tornoffmenu.md): The level for a torn-off menu. Synonymous with `NSSubmenuWindowLevel`.

# NSScreenSaverWindowLevel (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The level for a screen saver.

## Declaration

```objectivec
static const NSWindowLevel NSScreenSaverWindowLevel;
```

## See Also

### Constants

- [NSDockWindowLevel](dock.md): Deprecated. The level for the dock.
- [NSFloatingWindowLevel](floating.md): Useful for floating palettes.
- [NSMainMenuWindowLevel](mainmenu.md): Reserved for the application’s main menu.
- [NSModalPanelWindowLevel](modalpanel.md): The level for a modal panel.
- [NSNormalWindowLevel](normal.md): The default level for `NSWindow` objects.
- [NSPopUpMenuWindowLevel](popupmenu.md): The level for a pop-up menu.
- [NSStatusWindowLevel](statusbar.md): The level for a status window.
- [NSSubmenuWindowLevel](submenu.md): Reserved for submenus. Synonymous with `NSTornOffMenuWindowLevel`, which is preferred.
- [NSTornOffMenuWindowLevel](tornoffmenu.md): The level for a torn-off menu. Synonymous with `NSSubmenuWindowLevel`.
