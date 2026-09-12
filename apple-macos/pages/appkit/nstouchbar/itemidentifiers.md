> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbar/itemidentifiers](https://developer.apple.com/documentation/appkit/nstouchbar/itemidentifiers)

# itemIdentifiers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The list of identifiers for the current items in the Touch Bar.

## Declaration

```swift
var itemIdentifiers: [NSTouchBarItem.Identifier] { get }
```

<a id="Discussion"></a>

## Discussion

If the user has not customized the bar, this property’s value is the same as that of the [defaultItemIdentifiers](defaultitemidentifiers.md) property.

The system *does not* archive this property.

## See Also

### Related Documentation

- [customizationIdentifier](customizationidentifier-swift.property.md): A globally unique string that makes the Touch Bar eligible for user customization.
- [customizationRequiredItemIdentifiers](customizationrequireditemidentifiers.md): An optional list of identifiers for items you want to always appear in the Touch Bar and which the user can’t remove during customization.
- [customizationAllowedItemIdentifiers](customizationalloweditemidentifiers.md): A list of identifiers for items to show in the Touch Bar’s customization UI.
- [defaultItemIdentifiers](defaultitemidentifiers.md): A required list of identifiers for items that you want to appear in the Touch Bar after instantiating it.

### Observing bar status

- [isVisible](isvisible.md): A Boolean value that Indicates whether the Touch Bar is eligible for display.
- [item(forIdentifier:)](item%28foridentifier_%29.md): Returns the Touch Bar item that corresponds to a given identifier.

# itemIdentifiers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The list of identifiers for the current items in the Touch Bar.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * itemIdentifiers;
```

<a id="Discussion"></a>

## Discussion

If the user has not customized the bar, this property’s value is the same as that of the [defaultItemIdentifiers](defaultitemidentifiers.md) property.

The system *does not* archive this property.

## See Also

### Related Documentation

- [customizationIdentifier](customizationidentifier-swift.property.md): A globally unique string that makes the Touch Bar eligible for user customization.
- [customizationRequiredItemIdentifiers](customizationrequireditemidentifiers.md): An optional list of identifiers for items you want to always appear in the Touch Bar and which the user can’t remove during customization.
- [customizationAllowedItemIdentifiers](customizationalloweditemidentifiers.md): A list of identifiers for items to show in the Touch Bar’s customization UI.
- [defaultItemIdentifiers](defaultitemidentifiers.md): A required list of identifiers for items that you want to appear in the Touch Bar after instantiating it.

### Observing bar status

- [visible](isvisible.md): A Boolean value that Indicates whether the Touch Bar is eligible for display.
- [itemForIdentifier:](item%28foridentifier_%29.md): Returns the Touch Bar item that corresponds to a given identifier.
