> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitembadge/alerts(count:)](https://developer.apple.com/documentation/appkit/nsmenuitembadge/alerts(count:))

# alerts(count:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Creates an alert-style badge with an integer count and a predefined label that represents the number of alerts.

## Declaration

```swift
class func alerts(count itemCount: Int) -> Self
```

## Parameters

- `itemCount`: The badge count.

<a id="return-value"></a>

## Return Value

Returns a new badge item of type [NSMenuItemBadge.BadgeType.alerts](badgetype/alerts.md).

## See Also

### Creating badges of a specific type

- [newItems(count:)](newitems%28count_%29.md): Creates a new item-style badge with an integer count and a predefined label that represents the number of new items.
- [updates(count:)](updates%28count_%29.md): Creates an update-style badge with an integer count and a predefined label that represents the number of available updates.
- [NSMenuItemBadge.BadgeType](badgetype.md): Constants that define types of badges for display.

# alertsWithCount: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Creates an alert-style badge with an integer count and a predefined label that represents the number of alerts.

## Declaration

```objectivec
+ (instancetype) alertsWithCount:(NSInteger) itemCount;
```

## Parameters

- `itemCount`: The badge count.

<a id="return-value"></a>

## Return Value

Returns a new badge item of type [NSMenuItemBadgeTypeAlerts](badgetype/alerts.md).

## See Also

### Creating badges of a specific type

- [newItemsWithCount:](newitems%28count_%29.md): Creates a new item-style badge with an integer count and a predefined label that represents the number of new items.
- [updatesWithCount:](updates%28count_%29.md): Creates an update-style badge with an integer count and a predefined label that represents the number of available updates.
- [NSMenuItemBadgeType](badgetype.md): Constants that define types of badges for display.
