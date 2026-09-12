> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitembadge/newitems(count:)](https://developer.apple.com/documentation/appkit/nsmenuitembadge/newitems(count:))

# newItems(count:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Creates a new item-style badge with an integer count and a predefined label that represents the number of new items.

## Declaration

```swift
class func newItems(count itemCount: Int) -> Self
```

## Parameters

- `itemCount`: The badge count.

<a id="return-value"></a>

## Return Value

Returns a new badge item of type [NSMenuItemBadge.BadgeType.newItems](badgetype/newitems.md).

## See Also

### Creating badges of a specific type

- [alerts(count:)](alerts%28count_%29.md): Creates an alert-style badge with an integer count and a predefined label that represents the number of alerts.
- [updates(count:)](updates%28count_%29.md): Creates an update-style badge with an integer count and a predefined label that represents the number of available updates.
- [NSMenuItemBadge.BadgeType](badgetype.md): Constants that define types of badges for display.

# newItemsWithCount: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Creates a new item-style badge with an integer count and a predefined label that represents the number of new items.

## Declaration

```objectivec
+ (instancetype) newItemsWithCount:(NSInteger) itemCount;
```

## Parameters

- `itemCount`: The badge count.

<a id="return-value"></a>

## Return Value

Returns a new badge item of type [NSMenuItemBadgeTypeNewItems](badgetype/newitems.md).

## See Also

### Creating badges of a specific type

- [alertsWithCount:](alerts%28count_%29.md): Creates an alert-style badge with an integer count and a predefined label that represents the number of alerts.
- [updatesWithCount:](updates%28count_%29.md): Creates an update-style badge with an integer count and a predefined label that represents the number of available updates.
- [NSMenuItemBadgeType](badgetype.md): Constants that define types of badges for display.
