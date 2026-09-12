> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutableusernotificationcategory/identifier](https://developer.apple.com/documentation/uikit/uimutableusernotificationcategory/identifier)

# identifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The name of the action group.

> For more information, see [UIMutableUserNotificationCategory](../uimutableusernotificationcategory.md).

## Declaration

```swift
var identifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is a writable version of the one declared by the parent class.

When generating a notification that includes these custom actions, you must use this string to initialize the notification. For local notifications, assign the string to the [category](../uilocalnotification/category.md) property of the [UILocalNotification](../uilocalnotification.md) object. For push notifications, use the string as the value of the `category` key in the push notification’s payload.

## See Also

### Modifying the action settings

- [setActions(\_:for:)](setactions%28__for_%29.md): Deprecated. Sets the actions to display for different alert styles.

# identifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The name of the action group.

> For more information, see [UIMutableUserNotificationCategory](../uimutableusernotificationcategory.md).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

This property is a writable version of the one declared by the parent class.

When generating a notification that includes these custom actions, you must use this string to initialize the notification. For local notifications, assign the string to the [category](../uilocalnotification/category.md) property of the [UILocalNotification](../uilocalnotification.md) object. For push notifications, use the string as the value of the `category` key in the push notification’s payload.

## See Also

### Modifying the action settings

- [setActions:forContext:](setactions%28__for_%29.md): Deprecated. Sets the actions to display for different alert styles.
