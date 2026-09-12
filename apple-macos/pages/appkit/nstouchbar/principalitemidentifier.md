> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbar/principalitemidentifier](https://developer.apple.com/documentation/appkit/nstouchbar/principalitemidentifier)

# principalItemIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The identifier of an item you want the system to center in the Touch Bar.

## Declaration

```swift
var principalItemIdentifier: NSTouchBarItem.Identifier? { get set }
```

<a id="Discussion"></a>

## Discussion

The system attempts to center a principal item within the Touch Bar. If you want a group of items to appear centered in the Touch Bar, designate the group item (of type [NSGroupTouchBarItem](../nsgrouptouchbaritem.md)) as the principal item.

If more than one bar in the responder chain is eligible to be visible in the Touch Bar, and more than one of those has a principal item, the system determines which one to center in the Touch Bar.

The system archives this property.

## See Also

### Providing bar items

- [delegate](delegate.md): The delegate that provides items to the Touch Bar.
- [templateItems](templateitems.md): The primary source of items that the Touch Bar uses to fill its private items array, unless you provide items using a delegate.
- [defaultItemIdentifiers](defaultitemidentifiers.md): A required list of identifiers for items that you want to appear in the Touch Bar after instantiating it.
- [escapeKeyReplacementItemIdentifier](escapekeyreplacementitemidentifier.md): The identifier of an item that replaces the system-provided button in the Touch Bar.

# principalItemIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The identifier of an item you want the system to center in the Touch Bar.

## Declaration

```objectivec
@property (copy, nullable) NSTouchBarItemIdentifier principalItemIdentifier;
```

<a id="Discussion"></a>

## Discussion

The system attempts to center a principal item within the Touch Bar. If you want a group of items to appear centered in the Touch Bar, designate the group item (of type [NSGroupTouchBarItem](../nsgrouptouchbaritem.md)) as the principal item.

If more than one bar in the responder chain is eligible to be visible in the Touch Bar, and more than one of those has a principal item, the system determines which one to center in the Touch Bar.

The system archives this property.

## See Also

### Providing bar items

- [delegate](delegate.md): The delegate that provides items to the Touch Bar.
- [templateItems](templateitems.md): The primary source of items that the Touch Bar uses to fill its private items array, unless you provide items using a delegate.
- [defaultItemIdentifiers](defaultitemidentifiers.md): A required list of identifiers for items that you want to appear in the Touch Bar after instantiating it.
- [escapeKeyReplacementItemIdentifier](escapekeyreplacementitemidentifier.md): The identifier of an item that replaces the system-provided button in the Touch Bar.
