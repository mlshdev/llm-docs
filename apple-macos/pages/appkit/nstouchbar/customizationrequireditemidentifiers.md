> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbar/customizationrequireditemidentifiers](https://developer.apple.com/documentation/appkit/nstouchbar/customizationrequireditemidentifiers)

# customizationRequiredItemIdentifiers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

An optional list of identifiers for items you want to always appear in the Touch Bar and which the user can’t remove during customization.

## Declaration

```swift
var customizationRequiredItemIdentifiers: [NSTouchBarItem.Identifier] { get set }
```

<a id="Discussion"></a>

## Discussion

Configure this property at your discretion, depending on the design of your app.

The system archives this property.

## See Also

### Related Documentation

- [defaultItemIdentifiers](defaultitemidentifiers.md): A required list of identifiers for items that you want to appear in the Touch Bar after instantiating it.
- [itemIdentifiers](itemidentifiers.md): The list of identifiers for the current items in the Touch Bar.

### Configuring user customization

- [customizationIdentifier](customizationidentifier-swift.property.md): A globally unique string that makes the Touch Bar eligible for user customization.
- [customizationAllowedItemIdentifiers](customizationalloweditemidentifiers.md): A list of identifiers for items to show in the Touch Bar’s customization UI.
- [NSTouchBar.CustomizationIdentifier](customizationidentifier-swift.typealias.md): The default type for a Touch Bar customization identifier.
- [isAutomaticCustomizeTouchBarMenuItemEnabled](isautomaticcustomizetouchbarmenuitemenabled.md): A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.

# customizationRequiredItemIdentifiers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

An optional list of identifiers for items you want to always appear in the Touch Bar and which the user can’t remove during customization.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * customizationRequiredItemIdentifiers;
```

<a id="Discussion"></a>

## Discussion

Configure this property at your discretion, depending on the design of your app.

The system archives this property.

## See Also

### Related Documentation

- [defaultItemIdentifiers](defaultitemidentifiers.md): A required list of identifiers for items that you want to appear in the Touch Bar after instantiating it.
- [itemIdentifiers](itemidentifiers.md): The list of identifiers for the current items in the Touch Bar.

### Configuring user customization

- [customizationIdentifier](customizationidentifier-swift.property.md): A globally unique string that makes the Touch Bar eligible for user customization.
- [customizationAllowedItemIdentifiers](customizationalloweditemidentifiers.md): A list of identifiers for items to show in the Touch Bar’s customization UI.
- [NSTouchBarCustomizationIdentifier](customizationidentifier-swift.typealias.md): The default type for a Touch Bar customization identifier.
- [automaticCustomizeTouchBarMenuItemEnabled](isautomaticcustomizetouchbarmenuitemenabled.md): A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.
