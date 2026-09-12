> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbar/delegate](https://developer.apple.com/documentation/appkit/nstouchbar/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The delegate that provides items to the Touch Bar.

## Declaration

```swift
weak var delegate: (any NSTouchBarDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Employ a bar delegate, according to the needs of your app, to dynamically create items ([NSTouchBarItem](../nstouchbaritem.md) instances). For more information, see [Item objects](../nstouchbar.md#Item-objects).

This property is conditionally archived, as described in the [encodeConditionalObject(\_:forKey:)](https://developer.apple.com/documentation/foundation/nskeyedarchiver/encodeconditionalobject%28_:forkey:%29) method.

## See Also

### Providing bar items

- [templateItems](templateitems.md): The primary source of items that the Touch Bar uses to fill its private items array, unless you provide items using a delegate.
- [defaultItemIdentifiers](defaultitemidentifiers.md): A required list of identifiers for items that you want to appear in the Touch Bar after instantiating it.
- [principalItemIdentifier](principalitemidentifier.md): The identifier of an item you want the system to center in the Touch Bar.
- [escapeKeyReplacementItemIdentifier](escapekeyreplacementitemidentifier.md): The identifier of an item that replaces the system-provided button in the Touch Bar.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The delegate that provides items to the Touch Bar.

## Declaration

```objectivec
@property (weak, nullable) id<NSTouchBarDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Employ a bar delegate, according to the needs of your app, to dynamically create items ([NSTouchBarItem](../nstouchbaritem.md) instances). For more information, see [Item objects](../nstouchbar.md#Item-objects).

This property is conditionally archived, as described in the [encodeConditionalObject:forKey:](https://developer.apple.com/documentation/foundation/nskeyedarchiver/encodeconditionalobject%28_:forkey:%29) method.

## See Also

### Providing bar items

- [templateItems](templateitems.md): The primary source of items that the Touch Bar uses to fill its private items array, unless you provide items using a delegate.
- [defaultItemIdentifiers](defaultitemidentifiers.md): A required list of identifiers for items that you want to appear in the Touch Bar after instantiating it.
- [principalItemIdentifier](principalitemidentifier.md): The identifier of an item you want the system to center in the Touch Bar.
- [escapeKeyReplacementItemIdentifier](escapekeyreplacementitemidentifier.md): The identifier of an item that replaces the system-provided button in the Touch Bar.
