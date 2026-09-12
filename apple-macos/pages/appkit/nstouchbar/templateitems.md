> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbar/templateitems](https://developer.apple.com/documentation/appkit/nstouchbar/templateitems)

# templateItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The primary source of items that the Touch Bar uses to fill its private items array, unless you provide items using a delegate.

## Declaration

```swift
var templateItems: Set<NSTouchBarItem> { get set }
```

<a id="Discussion"></a>

## Discussion

When a bar needs to fill its private items array with items ([NSTouchBarItem](../nstouchbaritem.md) instances), it employs a variety of potential sources. The first place it looks is this property. For more information, see [Item objects](../nstouchbar.md#Item-objects).

The system archives this property.

## See Also

### Providing bar items

- [delegate](delegate.md): The delegate that provides items to the Touch Bar.
- [defaultItemIdentifiers](defaultitemidentifiers.md): A required list of identifiers for items that you want to appear in the Touch Bar after instantiating it.
- [principalItemIdentifier](principalitemidentifier.md): The identifier of an item you want the system to center in the Touch Bar.
- [escapeKeyReplacementItemIdentifier](escapekeyreplacementitemidentifier.md): The identifier of an item that replaces the system-provided button in the Touch Bar.

# templateItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The primary source of items that the Touch Bar uses to fill its private items array, unless you provide items using a delegate.

## Declaration

```objectivec
@property (copy) NSSet<NSTouchBarItem *> * templateItems;
```

<a id="Discussion"></a>

## Discussion

When a bar needs to fill its private items array with items ([NSTouchBarItem](../nstouchbaritem.md) instances), it employs a variety of potential sources. The first place it looks is this property. For more information, see [Item objects](../nstouchbar.md#Item-objects).

The system archives this property.

## See Also

### Providing bar items

- [delegate](delegate.md): The delegate that provides items to the Touch Bar.
- [defaultItemIdentifiers](defaultitemidentifiers.md): A required list of identifiers for items that you want to appear in the Touch Bar after instantiating it.
- [principalItemIdentifier](principalitemidentifier.md): The identifier of an item you want the system to center in the Touch Bar.
- [escapeKeyReplacementItemIdentifier](escapekeyreplacementitemidentifier.md): The identifier of an item that replaces the system-provided button in the Touch Bar.
