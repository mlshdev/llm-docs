> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/level-swift.struct](https://developer.apple.com/documentation/appkit/nswindow/level-swift.struct)

# NSWindow.Level (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The standard window levels in macOS.

## Declaration

```swift
struct Level
```

<a id="Discussion"></a>

## Discussion

The stacking of levels takes precedence over the stacking of windows within each level. That is, even the bottom window in a level will obscure the top window of the next level down. Levels are listed in order from lowest to highest. These constants are mapped (using `#define` statements) to corresponding elements in [CGWindowLevelKey](https://developer.apple.com/documentation/coregraphics/cgwindowlevelkey).

## Topics

### Constants

- [dock](level-swift.struct/dock.md): Deprecated. The level for the dock.
- [floating](level-swift.struct/floating.md): Useful for floating palettes.
- [mainMenu](level-swift.struct/mainmenu.md): Reserved for the application’s main menu.
- [modalPanel](level-swift.struct/modalpanel.md): The level for a modal panel.
- [normal](level-swift.struct/normal.md): The default level for `NSWindow` objects.
- [popUpMenu](level-swift.struct/popupmenu.md): The level for a pop-up menu.
- [screenSaver](level-swift.struct/screensaver.md): The level for a screen saver.
- [statusBar](level-swift.struct/statusbar.md): The level for a status window.
- [submenu](level-swift.struct/submenu.md): Reserved for submenus. Synonymous with `NSTornOffMenuWindowLevel`, which is preferred.
- [tornOffMenu](level-swift.struct/tornoffmenu.md): The level for a torn-off menu. Synonymous with `NSSubmenuWindowLevel`.

### Creating a Window Level

- [init(\_:)](level-swift.struct/init%28__%29.md): Creates a window level using the given integer value.
- [init(rawValue:)](level-swift.struct/init%28rawvalue_%29.md): Creates a window level using the given raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Window Layers

- [orderOut(\_:)](orderout%28__%29.md): Removes the window from the screen list, which hides the window.
- [orderBack(\_:)](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront(\_:)](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [orderFrontRegardless()](orderfrontregardless%28%29.md): Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.
- [order(\_:relativeTo:)](order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [level](level-swift.property.md): The window level of the window.

# NSWindowLevel (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The standard window levels in macOS.

## Declaration

```objectivec
typedef NSInteger NSWindowLevel;
```

<a id="Discussion"></a>

## Discussion

The stacking of levels takes precedence over the stacking of windows within each level. That is, even the bottom window in a level will obscure the top window of the next level down. Levels are listed in order from lowest to highest. These constants are mapped (using `#define` statements) to corresponding elements in [CGWindowLevelKey](https://developer.apple.com/documentation/coregraphics/cgwindowlevelkey).

## Topics

### Constants

- [NSDockWindowLevel](level-swift.struct/dock.md): Deprecated. The level for the dock.
- [NSFloatingWindowLevel](level-swift.struct/floating.md): Useful for floating palettes.
- [NSMainMenuWindowLevel](level-swift.struct/mainmenu.md): Reserved for the application’s main menu.
- [NSModalPanelWindowLevel](level-swift.struct/modalpanel.md): The level for a modal panel.
- [NSNormalWindowLevel](level-swift.struct/normal.md): The default level for `NSWindow` objects.
- [NSPopUpMenuWindowLevel](level-swift.struct/popupmenu.md): The level for a pop-up menu.
- [NSScreenSaverWindowLevel](level-swift.struct/screensaver.md): The level for a screen saver.
- [NSStatusWindowLevel](level-swift.struct/statusbar.md): The level for a status window.
- [NSSubmenuWindowLevel](level-swift.struct/submenu.md): Reserved for submenus. Synonymous with `NSTornOffMenuWindowLevel`, which is preferred.
- [NSTornOffMenuWindowLevel](level-swift.struct/tornoffmenu.md): The level for a torn-off menu. Synonymous with `NSSubmenuWindowLevel`.

## See Also

### Managing Window Layers

- [orderOut:](orderout%28__%29.md): Removes the window from the screen list, which hides the window.
- [orderBack:](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront:](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [orderFrontRegardless](orderfrontregardless%28%29.md): Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.
- [orderWindow:relativeTo:](order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [level](level-swift.property.md): The window level of the window.
