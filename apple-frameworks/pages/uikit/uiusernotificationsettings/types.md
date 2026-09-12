> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiusernotificationsettings/types](https://developer.apple.com/documentation/uikit/uiusernotificationsettings/types)

# types (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A bitmask of the notification types that your app is allowed to use.

> For more information, see [UIUserNotificationSettings](../uiusernotificationsettings.md).

## Declaration

```swift
var types: UIUserNotificationType { get }
```

<a id="Discussion"></a>

## Discussion

When you create a new settings object, this property contains all of the types you specified. After you register your request with the app, the app provides you with a new settings object that contains only the types that your app is allowed to use.

## See Also

### Related Documentation

- [UIUserNotificationSettings](../uiusernotificationsettings.md): Deprecated. The types of notifications that can be displayed to the user by your app.

### Getting the configured settings

- [categories](categories.md): Deprecated. The app’s registered groups of actions.

# types (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A bitmask of the notification types that your app is allowed to use.

> For more information, see [UIUserNotificationSettings](../uiusernotificationsettings.md).

## Declaration

```objectivec
@property (nonatomic, readonly) UIUserNotificationType types;
```

<a id="Discussion"></a>

## Discussion

When you create a new settings object, this property contains all of the types you specified. After you register your request with the app, the app provides you with a new settings object that contains only the types that your app is allowed to use.

## See Also

### Related Documentation

- [UIUserNotificationSettings](../uiusernotificationsettings.md): Deprecated. The types of notifications that can be displayed to the user by your app.

### Getting the configured settings

- [categories](categories.md): Deprecated. The app’s registered groups of actions.
