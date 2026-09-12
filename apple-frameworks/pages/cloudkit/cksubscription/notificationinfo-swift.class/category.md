> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/notificationinfo-swift.class/category](https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.class/category)

# category (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The name of the action group that corresponds to this notification.

## Declaration

```swift
var category: String? { get set }
```

<a id="discussion"></a>

## Discussion

Categories allow you to present custom actions to the user on your push notifications. For more information, see [UIMutableUserNotificationCategory](../../../uikit/uimutableusernotificationcategory.md).

## See Also

### Grouping Notifications

- [collapseIDKey](collapseidkey.md): A value that the system uses to coalesce unseen push notifications.

# category (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The name of the action group that corresponds to this notification.

## Declaration

```objectivec
@property (copy, nullable) NSString * category;
```

<a id="discussion"></a>

## Discussion

Categories allow you to present custom actions to the user on your push notifications. For more information, see [UIMutableUserNotificationCategory](../../../uikit/uimutableusernotificationcategory.md).

## See Also

### Grouping Notifications

- [collapseIDKey](collapseidkey.md): A value that the system uses to coalesce unseen push notifications.
