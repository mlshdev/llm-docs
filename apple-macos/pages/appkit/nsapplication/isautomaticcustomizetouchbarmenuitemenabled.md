> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/isautomaticcustomizetouchbarmenuitemenabled](https://developer.apple.com/documentation/appkit/nsapplication/isautomaticcustomizetouchbarmenuitemenabled)

# isAutomaticCustomizeTouchBarMenuItemEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.

## Declaration

```swift
var isAutomaticCustomizeTouchBarMenuItemEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), AppKit adds a standard item to the app’s View menu that users can select to customize the Touch Bar contents, but only if a Touch Bar is present. If the View menu is unavailable, AppKit adds the item to either the Windows or App menu.

If you prefer to provide a customize menu item, set [isAutomaticCustomizeTouchBarMenuItemEnabled](isautomaticcustomizetouchbarmenuitemenabled.md) to [false](https://developer.apple.com/documentation/swift/false), and create the menu item with an action of [toggleTouchBarCustomizationPalette(\_:)](toggletouchbarcustomizationpalette%28__%29.md).

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing the Main Menu

- [mainMenu](mainmenu.md): The app’s main menu bar.

# automaticCustomizeTouchBarMenuItemEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.

## Declaration

```objectivec
@property (getter=isAutomaticCustomizeTouchBarMenuItemEnabled) BOOL automaticCustomizeTouchBarMenuItemEnabled;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), AppKit adds a standard item to the app’s View menu that users can select to customize the Touch Bar contents, but only if a Touch Bar is present. If the View menu is unavailable, AppKit adds the item to either the Windows or App menu.

If you prefer to provide a customize menu item, set [automaticCustomizeTouchBarMenuItemEnabled](isautomaticcustomizetouchbarmenuitemenabled.md) to [false](https://developer.apple.com/documentation/swift/false), and create the menu item with an action of [toggleTouchBarCustomizationPalette:](toggletouchbarcustomizationpalette%28__%29.md).

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing the Main Menu

- [mainMenu](mainmenu.md): The app’s main menu bar.
