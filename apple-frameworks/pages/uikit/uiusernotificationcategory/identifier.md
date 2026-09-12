> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiusernotificationcategory/identifier](https://developer.apple.com/documentation/uikit/uiusernotificationcategory/identifier)

# identifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The name of the action group.

> For more information, see [UIUserNotificationCategory](../uiusernotificationcategory.md).

## Declaration

```swift
var identifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

When generating a notification that includes these custom actions, you must use this string to initialize the notification. For local notifications, assign the string to the [category](../uilocalnotification/category.md) property of the [UILocalNotification](../uilocalnotification.md) object. For push notifications, use the string as the value of the `category` key in the push notification’s payload.

## See Also

### Getting the group configuration

- [actions(for:)](actions%28for_%29.md): Deprecated. Returns the actions to be displayed for the given notification context.

# identifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The name of the action group.

> For more information, see [UIUserNotificationCategory](../uiusernotificationcategory.md).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

When generating a notification that includes these custom actions, you must use this string to initialize the notification. For local notifications, assign the string to the [category](../uilocalnotification/category.md) property of the [UILocalNotification](../uilocalnotification.md) object. For push notifications, use the string as the value of the `category` key in the push notification’s payload.

## See Also

### Getting the group configuration

- [actionsForContext:](actions%28for_%29.md): Deprecated. Returns the actions to be displayed for the given notification context.
