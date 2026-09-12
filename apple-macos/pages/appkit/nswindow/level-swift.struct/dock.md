> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/level-swift.struct/dock](https://developer.apple.com/documentation/appkit/nswindow/level-swift.struct/dock)

# dock (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The level for the dock.

> Deprecated. There is no replacement.

## Declaration

```swift
static var dock: NSWindow.Level { get }
```

## See Also

### Constants

- [floating](floating.md): Useful for floating palettes.
- [mainMenu](mainmenu.md): Reserved for the application’s main menu.
- [modalPanel](modalpanel.md): The level for a modal panel.
- [normal](normal.md): The default level for `NSWindow` objects.
- [popUpMenu](popupmenu.md): The level for a pop-up menu.
- [screenSaver](screensaver.md): The level for a screen saver.
- [statusBar](statusbar.md): The level for a status window.
- [submenu](submenu.md): Reserved for submenus. Synonymous with `NSTornOffMenuWindowLevel`, which is preferred.
- [tornOffMenu](tornoffmenu.md): The level for a torn-off menu. Synonymous with `NSSubmenuWindowLevel`.

# NSDockWindowLevel (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The level for the dock.

> Deprecated. There is no replacement.

## Declaration

```objectivec
static const NSWindowLevel NSDockWindowLevel;
```

## See Also

### Constants

- [NSFloatingWindowLevel](floating.md): Useful for floating palettes.
- [NSMainMenuWindowLevel](mainmenu.md): Reserved for the application’s main menu.
- [NSModalPanelWindowLevel](modalpanel.md): The level for a modal panel.
- [NSNormalWindowLevel](normal.md): The default level for `NSWindow` objects.
- [NSPopUpMenuWindowLevel](popupmenu.md): The level for a pop-up menu.
- [NSScreenSaverWindowLevel](screensaver.md): The level for a screen saver.
- [NSStatusWindowLevel](statusbar.md): The level for a status window.
- [NSSubmenuWindowLevel](submenu.md): Reserved for submenus. Synonymous with `NSTornOffMenuWindowLevel`, which is preferred.
- [NSTornOffMenuWindowLevel](tornoffmenu.md): The level for a torn-off menu. Synonymous with `NSSubmenuWindowLevel`.
