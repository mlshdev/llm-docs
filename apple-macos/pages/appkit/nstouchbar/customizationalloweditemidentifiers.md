> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbar/customizationalloweditemidentifiers](https://developer.apple.com/documentation/appkit/nstouchbar/customizationalloweditemidentifiers)

# customizationAllowedItemIdentifiers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

A list of identifiers for items to show in the Touch Bar’s customization UI.

## Declaration

```swift
var customizationAllowedItemIdentifiers: [NSTouchBarItem.Identifier] { get set }
```

<a id="Discussion"></a>

## Discussion

The customization UI shows these items in additional to the items in [defaultItemIdentifiers](defaultitemidentifiers.md).

The items you include in [customizationAllowedItemIdentifiers](customizationalloweditemidentifiers.md) appear individually in the customization UI, arranged in the same order as you specify in the array. As long as there’s available geometric space, a user can drag in to the associated bar any of the items in this list.

Always configure this property for a customizable bar.

The system archives this property.

## See Also

### Related Documentation

- [defaultItemIdentifiers](defaultitemidentifiers.md): A required list of identifiers for items that you want to appear in the Touch Bar after instantiating it.
- [itemIdentifiers](itemidentifiers.md): The list of identifiers for the current items in the Touch Bar.

### Configuring user customization

- [customizationIdentifier](customizationidentifier-swift.property.md): A globally unique string that makes the Touch Bar eligible for user customization.
- [customizationRequiredItemIdentifiers](customizationrequireditemidentifiers.md): An optional list of identifiers for items you want to always appear in the Touch Bar and which the user can’t remove during customization.
- [NSTouchBar.CustomizationIdentifier](customizationidentifier-swift.typealias.md): The default type for a Touch Bar customization identifier.
- [isAutomaticCustomizeTouchBarMenuItemEnabled](isautomaticcustomizetouchbarmenuitemenabled.md): A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.

# customizationAllowedItemIdentifiers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

A list of identifiers for items to show in the Touch Bar’s customization UI.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * customizationAllowedItemIdentifiers;
```

<a id="Discussion"></a>

## Discussion

The customization UI shows these items in additional to the items in [defaultItemIdentifiers](defaultitemidentifiers.md).

The items you include in [customizationAllowedItemIdentifiers](customizationalloweditemidentifiers.md) appear individually in the customization UI, arranged in the same order as you specify in the array. As long as there’s available geometric space, a user can drag in to the associated bar any of the items in this list.

Always configure this property for a customizable bar.

The system archives this property.

## See Also

### Related Documentation

- [defaultItemIdentifiers](defaultitemidentifiers.md): A required list of identifiers for items that you want to appear in the Touch Bar after instantiating it.
- [itemIdentifiers](itemidentifiers.md): The list of identifiers for the current items in the Touch Bar.

### Configuring user customization

- [customizationIdentifier](customizationidentifier-swift.property.md): A globally unique string that makes the Touch Bar eligible for user customization.
- [customizationRequiredItemIdentifiers](customizationrequireditemidentifiers.md): An optional list of identifiers for items you want to always appear in the Touch Bar and which the user can’t remove during customization.
- [NSTouchBarCustomizationIdentifier](customizationidentifier-swift.typealias.md): The default type for a Touch Bar customization identifier.
- [automaticCustomizeTouchBarMenuItemEnabled](isautomaticcustomizetouchbarmenuitemenabled.md): A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.
