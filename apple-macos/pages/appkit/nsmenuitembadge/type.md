> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitembadge/type](https://developer.apple.com/documentation/appkit/nsmenuitembadge/type)

# type (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The type of items the badge displays.

## Declaration

```swift
var type: NSMenuItemBadge.BadgeType { get }
```

<a id="Discussion"></a>

## Discussion

If you create a badge with a custom string, this value is [NSMenuItemBadge.BadgeType.none](badgetype/none.md).

## See Also

### Accessing menu item badge attributes

- [itemCount](itemcount.md): The number of items the badge displays.
- [stringValue](stringvalue-fc9f.md): The string representation of the badge when it displays.

# type (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The type of items the badge displays.

## Declaration

```objectivec
@property (readonly) NSMenuItemBadgeType type;
```

<a id="Discussion"></a>

## Discussion

If you create a badge with a custom string, this value is [NSMenuItemBadgeTypeNone](badgetype/none.md).

## See Also

### Accessing menu item badge attributes

- [itemCount](itemcount.md): The number of items the badge displays.
- [stringValue](stringvalue-fc9f.md): The string representation of the badge when it displays.
