> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiusernotificationcategory/actions(for:)](https://developer.apple.com/documentation/uikit/uiusernotificationcategory/actions(for:))

# actions(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the actions to be displayed for the given notification context.

> For more information, see [UIUserNotificationCategory](../uiusernotificationcategory.md).

## Declaration

```swift
func actions(for context: UIUserNotificationActionContext) -> [UIUserNotificationAction]?
```

## Parameters

- `context`: The context in which the notification is displayed. Notifications can have a default context or a minimal context depending on whether the notification was just delivered or the user is looking at it in more detail.

<a id="return-value"></a>

## Return Value

An array of [UIUserNotificationAction](../uiusernotificationaction.md) objects to be displayed in the specified context. The order of the objects in the array represents the order that they are displayed in the resulting notification.

<a id="Discussion"></a>

## Discussion

This method returns the actions associated with the specified display context. To set the actions for a given context, you must create a [UIMutableUserNotificationCategory](../uimutableusernotificationcategory.md) object and use its setActions:forContext: method to specify your actions.

## See Also

### Getting the group configuration

- [identifier](identifier.md): Deprecated. The name of the action group.

# actionsForContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the actions to be displayed for the given notification context.

> For more information, see [UIUserNotificationCategory](../uiusernotificationcategory.md).

## Declaration

```objectivec
- (NSArray<UIUserNotificationAction *> *) actionsForContext:(UIUserNotificationActionContext) context;
```

## Parameters

- `context`: The context in which the notification is displayed. Notifications can have a default context or a minimal context depending on whether the notification was just delivered or the user is looking at it in more detail.

<a id="return-value"></a>

## Return Value

An array of [UIUserNotificationAction](../uiusernotificationaction.md) objects to be displayed in the specified context. The order of the objects in the array represents the order that they are displayed in the resulting notification.

<a id="Discussion"></a>

## Discussion

This method returns the actions associated with the specified display context. To set the actions for a given context, you must create a [UIMutableUserNotificationCategory](../uimutableusernotificationcategory.md) object and use its setActions:forContext: method to specify your actions.

## See Also

### Getting the group configuration

- [identifier](identifier.md): Deprecated. The name of the action group.
