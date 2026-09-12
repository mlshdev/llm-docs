> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbar/customizationidentifier-swift.property](https://developer.apple.com/documentation/appkit/nstouchbar/customizationidentifier-swift.property)

# customizationIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

A globally unique string that makes the Touch Bar eligible for user customization.

## Declaration

```swift
var customizationIdentifier: NSTouchBar.CustomizationIdentifier? { get set }
```

<a id="Discussion"></a>

## Discussion

To make an [NSTouchBar](../nstouchbar.md) object eligible for user customization, assign it a globally unique [customizationIdentifier](customizationidentifier-swift.property.md) identifier. For the identifier string, use reverse-DNS style, such as “`com.company-name.app-name.alphanumeric-ID`”.

The system archives this property.

## See Also

### Configuring user customization

- [customizationAllowedItemIdentifiers](customizationalloweditemidentifiers.md): A list of identifiers for items to show in the Touch Bar’s customization UI.
- [customizationRequiredItemIdentifiers](customizationrequireditemidentifiers.md): An optional list of identifiers for items you want to always appear in the Touch Bar and which the user can’t remove during customization.
- [NSTouchBar.CustomizationIdentifier](customizationidentifier-swift.typealias.md): The default type for a Touch Bar customization identifier.
- [isAutomaticCustomizeTouchBarMenuItemEnabled](isautomaticcustomizetouchbarmenuitemenabled.md): A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.

# customizationIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

A globally unique string that makes the Touch Bar eligible for user customization.

## Declaration

```objectivec
@property (copy, nullable) NSTouchBarCustomizationIdentifier customizationIdentifier;
```

<a id="Discussion"></a>

## Discussion

To make an [NSTouchBar](../nstouchbar.md) object eligible for user customization, assign it a globally unique [customizationIdentifier](customizationidentifier-swift.property.md) identifier. For the identifier string, use reverse-DNS style, such as “`com.company-name.app-name.alphanumeric-ID`”.

The system archives this property.

## See Also

### Configuring user customization

- [customizationAllowedItemIdentifiers](customizationalloweditemidentifiers.md): A list of identifiers for items to show in the Touch Bar’s customization UI.
- [customizationRequiredItemIdentifiers](customizationrequireditemidentifiers.md): An optional list of identifiers for items you want to always appear in the Touch Bar and which the user can’t remove during customization.
- [NSTouchBarCustomizationIdentifier](customizationidentifier-swift.typealias.md): The default type for a Touch Bar customization identifier.
- [automaticCustomizeTouchBarMenuItemEnabled](isautomaticcustomizetouchbarmenuitemenabled.md): A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.
