> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiusernotificationsettings/init(types:categories:)](https://developer.apple.com/documentation/uikit/uiusernotificationsettings/init(types:categories:))

# init(types:categories:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates and returns a settings object that you can use to register your requested notification and action types.

> For more information, see [UIUserNotificationSettings](../uiusernotificationsettings.md).

## Declaration

```swift
convenience init(types: UIUserNotificationType, categories: Set<UIUserNotificationCategory>?)
```

## Parameters

- `types`: The notification types that your app supports. For a list of possible values, see the constants for the [UIUserNotificationType](../uiusernotificationtype.md) type.
- `categories`: A set of [UIUserNotificationCategory](../uiusernotificationcategory.md) objects that define the groups of actions a notification may include.

<a id="return-value"></a>

## Return Value

A new user notification settings object that you can register with the [UIApplication](../uiapplication.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a new settings object that you intend to register with the app. When calling this method, specify the types of notifications you intend to deliver to the user such as alerts or sounds. If you intend to display custom actions in your notifications, use this method to register those actions as well.

After creating a new settings object, register that object by calling the [registerUserNotificationSettings(\_:)](../uiapplication/registerusernotificationsettings%28__%29.md) method of the shared [UIApplication](../uiapplication.md) object.

# settingsForTypes:categories: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates and returns a settings object that you can use to register your requested notification and action types.

> For more information, see [UIUserNotificationSettings](../uiusernotificationsettings.md).

## Declaration

```objectivec
+ (instancetype) settingsForTypes:(UIUserNotificationType) types categories:(NSSet<UIUserNotificationCategory *> *) categories;
```

## Parameters

- `types`: The notification types that your app supports. For a list of possible values, see the constants for the [UIUserNotificationType](../uiusernotificationtype.md) type.
- `categories`: A set of [UIUserNotificationCategory](../uiusernotificationcategory.md) objects that define the groups of actions a notification may include.

<a id="return-value"></a>

## Return Value

A new user notification settings object that you can register with the [UIApplication](../uiapplication.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a new settings object that you intend to register with the app. When calling this method, specify the types of notifications you intend to deliver to the user such as alerts or sounds. If you intend to display custom actions in your notifications, use this method to register those actions as well.

After creating a new settings object, register that object by calling the [registerUserNotificationSettings:](../uiapplication/registerusernotificationsettings%28__%29.md) method of the shared [UIApplication](../uiapplication.md) object.
