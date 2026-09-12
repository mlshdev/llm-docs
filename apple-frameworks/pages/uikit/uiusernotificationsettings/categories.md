> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiusernotificationsettings/categories](https://developer.apple.com/documentation/uikit/uiusernotificationsettings/categories)

# categories (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The app’s registered groups of actions.

> For more information, see [UIUserNotificationSettings](../uiusernotificationsettings.md).

## Declaration

```swift
var categories: Set<UIUserNotificationCategory>? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the [UIUserNotificationCategory](../uiusernotificationcategory.md) objects that you specified when creating the settings object. Each object corresponds to a group of actions that may be displayed in conjunction with a push notification. After registration, this property contains the set of actions you specified in your initial request.

## See Also

### Related Documentation

- [init(types:categories:)](init%28types_categories_%29.md): Deprecated. Creates and returns a settings object that you can use to register your requested notification and action types.

### Getting the configured settings

- [types](types.md): Deprecated. A bitmask of the notification types that your app is allowed to use.

# categories (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The app’s registered groups of actions.

> For more information, see [UIUserNotificationSettings](../uiusernotificationsettings.md).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSSet<UIUserNotificationCategory *> * categories;
```

<a id="Discussion"></a>

## Discussion

This property contains the [UIUserNotificationCategory](../uiusernotificationcategory.md) objects that you specified when creating the settings object. Each object corresponds to a group of actions that may be displayed in conjunction with a push notification. After registration, this property contains the set of actions you specified in your initial request.

## See Also

### Related Documentation

- [settingsForTypes:categories:](init%28types_categories_%29.md): Deprecated. Creates and returns a settings object that you can use to register your requested notification and action types.

### Getting the configured settings

- [types](types.md): Deprecated. A bitmask of the notification types that your app is allowed to use.
