> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitembadge/updates(count:)](https://developer.apple.com/documentation/appkit/nsmenuitembadge/updates(count:))

# updates(count:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Creates an update-style badge with an integer count and a predefined label that represents the number of available updates.

## Declaration

```swift
class func updates(count itemCount: Int) -> Self
```

## Parameters

- `itemCount`: The badge count.

<a id="return-value"></a>

## Return Value

Returns a new badge item of type [NSMenuItemBadge.BadgeType.updates](badgetype/updates.md).

## See Also

### Creating badges of a specific type

- [alerts(count:)](alerts%28count_%29.md): Creates an alert-style badge with an integer count and a predefined label that represents the number of alerts.
- [newItems(count:)](newitems%28count_%29.md): Creates a new item-style badge with an integer count and a predefined label that represents the number of new items.
- [NSMenuItemBadge.BadgeType](badgetype.md): Constants that define types of badges for display.

# updatesWithCount: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Creates an update-style badge with an integer count and a predefined label that represents the number of available updates.

## Declaration

```objectivec
+ (instancetype) updatesWithCount:(NSInteger) itemCount;
```

## Parameters

- `itemCount`: The badge count.

<a id="return-value"></a>

## Return Value

Returns a new badge item of type [NSMenuItemBadgeTypeUpdates](badgetype/updates.md).

## See Also

### Creating badges of a specific type

- [alertsWithCount:](alerts%28count_%29.md): Creates an alert-style badge with an integer count and a predefined label that represents the number of alerts.
- [newItemsWithCount:](newitems%28count_%29.md): Creates a new item-style badge with an integer count and a predefined label that represents the number of new items.
- [NSMenuItemBadgeType](badgetype.md): Constants that define types of badges for display.
