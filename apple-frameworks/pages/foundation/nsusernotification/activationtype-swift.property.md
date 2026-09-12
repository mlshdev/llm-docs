> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/activationtype-swift.property](https://developer.apple.com/documentation/foundation/nsusernotification/activationtype-swift.property)

# activationType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies what caused a user notification to occur.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
var activationType: NSUserNotification.ActivationType { get }
```

<a id="Discussion"></a>

## Discussion

This property specifies why the user notification was sent to to the [NSUserNotificationCenterDelegate](../nsusernotificationcenterdelegate.md) method [userNotificationCenter(\_:didActivate:)](../nsusernotificationcenterdelegate/usernotificationcenter%28__didactivate_%29.md). The supported values are described in [NSUserNotification.ActivationType](activationtype-swift.enum.md).

## See Also

### User Notification Activation Method

- [additionalActivationAction](additionalactivationaction.md): Deprecated. An additional action selected by the user.
- [additionalActions](additionalactions.md): Deprecated. The actions that can be taken on a notification in addition to the default action.

# activationType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies what caused a user notification to occur.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
@property (readonly) NSUserNotificationActivationType activationType;
```

<a id="Discussion"></a>

## Discussion

This property specifies why the user notification was sent to to the [NSUserNotificationCenterDelegate](../nsusernotificationcenterdelegate.md) method [userNotificationCenter:didActivateNotification:](../nsusernotificationcenterdelegate/usernotificationcenter%28__didactivate_%29.md). The supported values are described in [NSUserNotificationActivationType](activationtype-swift.enum.md).

## See Also

### User Notification Activation Method

- [additionalActivationAction](additionalactivationaction.md): Deprecated. An additional action selected by the user.
- [additionalActions](additionalactions.md): Deprecated. The actions that can be taken on a notification in addition to the default action.
