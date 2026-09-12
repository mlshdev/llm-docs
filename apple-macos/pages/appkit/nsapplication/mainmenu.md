> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/mainmenu](https://developer.apple.com/documentation/appkit/nsapplication/mainmenu)

# mainMenu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The app’s main menu bar.

## Declaration

```swift
var mainMenu: NSMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to assign a new menu bar for your app or to access the current menu bar.

## See Also

### Accessing the Main Menu

- [isAutomaticCustomizeTouchBarMenuItemEnabled](isautomaticcustomizetouchbarmenuitemenabled.md): A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.

# mainMenu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The app’s main menu bar.

## Declaration

```objectivec
@property (strong, nullable) NSMenu * mainMenu;
```

<a id="Discussion"></a>

## Discussion

Use this property to assign a new menu bar for your app or to access the current menu bar.

## See Also

### Accessing the Main Menu

- [automaticCustomizeTouchBarMenuItemEnabled](isautomaticcustomizetouchbarmenuitemenabled.md): A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.
