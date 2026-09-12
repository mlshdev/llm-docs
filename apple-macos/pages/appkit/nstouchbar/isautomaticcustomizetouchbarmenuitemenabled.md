> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbar/isautomaticcustomizetouchbarmenuitemenabled](https://developer.apple.com/documentation/appkit/nstouchbar/isautomaticcustomizetouchbarmenuitemenabled)

# isAutomaticCustomizeTouchBarMenuItemEnabled (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.

## Declaration

```swift
class var isAutomaticCustomizeTouchBarMenuItemEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), AppKit adds a standard item to the app’s View menu that users can select to customize the Touch Bar contents, but only if a Touch Bar is present. If the View menu is unavailable, AppKit adds the item to either the Windows or App menu.

If you prefer to provide a customize menu item, set [isAutomaticCustomizeTouchBarMenuItemEnabled](isautomaticcustomizetouchbarmenuitemenabled.md) to [false](https://developer.apple.com/documentation/swift/false), and create the menu item with an action of [toggleTouchBarCustomizationPalette(\_:)](../nsapplication/toggletouchbarcustomizationpalette%28__%29.md).

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring user customization

- [customizationIdentifier](customizationidentifier-swift.property.md): A globally unique string that makes the Touch Bar eligible for user customization.
- [customizationAllowedItemIdentifiers](customizationalloweditemidentifiers.md): A list of identifiers for items to show in the Touch Bar’s customization UI.
- [customizationRequiredItemIdentifiers](customizationrequireditemidentifiers.md): An optional list of identifiers for items you want to always appear in the Touch Bar and which the user can’t remove during customization.
- [NSTouchBar.CustomizationIdentifier](customizationidentifier-swift.typealias.md): The default type for a Touch Bar customization identifier.

# automaticCustomizeTouchBarMenuItemEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.

## Declaration

```objectivec
@property (class, getter=isAutomaticCustomizeTouchBarMenuItemEnabled) BOOL automaticCustomizeTouchBarMenuItemEnabled;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), AppKit adds a standard item to the app’s View menu that users can select to customize the Touch Bar contents, but only if a Touch Bar is present. If the View menu is unavailable, AppKit adds the item to either the Windows or App menu.

If you prefer to provide a customize menu item, set [automaticCustomizeTouchBarMenuItemEnabled](isautomaticcustomizetouchbarmenuitemenabled.md) to [false](https://developer.apple.com/documentation/swift/false), and create the menu item with an action of [toggleTouchBarCustomizationPalette:](../nsapplication/toggletouchbarcustomizationpalette%28__%29.md).

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring user customization

- [customizationIdentifier](customizationidentifier-swift.property.md): A globally unique string that makes the Touch Bar eligible for user customization.
- [customizationAllowedItemIdentifiers](customizationalloweditemidentifiers.md): A list of identifiers for items to show in the Touch Bar’s customization UI.
- [customizationRequiredItemIdentifiers](customizationrequireditemidentifiers.md): An optional list of identifiers for items you want to always appear in the Touch Bar and which the user can’t remove during customization.
- [NSTouchBarCustomizationIdentifier](customizationidentifier-swift.typealias.md): The default type for a Touch Bar customization identifier.
