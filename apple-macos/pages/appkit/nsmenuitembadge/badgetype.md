> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitembadge/badgetype](https://developer.apple.com/documentation/appkit/nsmenuitembadge/badgetype)

# NSMenuItemBadge.BadgeType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Constants that define types of badges for display.

## Declaration

```swift
enum BadgeType
```

<a id="overview"></a>

## Overview

The predefined strings that display are localizable and automatically handle any pluralization of [itemCount](itemcount.md).

## Topics

### Getting badge types

- [NSMenuItemBadge.BadgeType.alerts](badgetype/alerts.md): A badge representing the number of alerts.
- [NSMenuItemBadge.BadgeType.newItems](badgetype/newitems.md): A badge representing the number of new items.
- [NSMenuItemBadge.BadgeType.none](badgetype/none.md): A badge with no string portion.
- [NSMenuItemBadge.BadgeType.updates](badgetype/updates.md): A badge representing the number of available updates.

### Initializers

- [init(rawValue:)](badgetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating badges of a specific type

- [alerts(count:)](alerts%28count_%29.md): Creates an alert-style badge with an integer count and a predefined label that represents the number of alerts.
- [newItems(count:)](newitems%28count_%29.md): Creates a new item-style badge with an integer count and a predefined label that represents the number of new items.
- [updates(count:)](updates%28count_%29.md): Creates an update-style badge with an integer count and a predefined label that represents the number of available updates.

# NSMenuItemBadgeType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Constants that define types of badges for display.

## Declaration

```objectivec
enum NSMenuItemBadgeType : NSInteger;
```

<a id="overview"></a>

## Overview

The predefined strings that display are localizable and automatically handle any pluralization of [itemCount](itemcount.md).

## Topics

### Getting badge types

- [NSMenuItemBadgeTypeAlerts](badgetype/alerts.md): A badge representing the number of alerts.
- [NSMenuItemBadgeTypeNewItems](badgetype/newitems.md): A badge representing the number of new items.
- [NSMenuItemBadgeTypeNone](badgetype/none.md): A badge with no string portion.
- [NSMenuItemBadgeTypeUpdates](badgetype/updates.md): A badge representing the number of available updates.

## See Also

### Creating badges of a specific type

- [alertsWithCount:](alerts%28count_%29.md): Creates an alert-style badge with an integer count and a predefined label that represents the number of alerts.
- [newItemsWithCount:](newitems%28count_%29.md): Creates a new item-style badge with an integer count and a predefined label that represents the number of new items.
- [updatesWithCount:](updates%28count_%29.md): Creates an update-style badge with an integer count and a predefined label that represents the number of available updates.
