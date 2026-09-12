> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/additionalactivationaction](https://developer.apple.com/documentation/foundation/nsusernotification/additionalactivationaction)

# additionalActivationAction (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

An additional action selected by the user.

## Declaration

```swift
@NSCopying var additionalActivationAction: NSUserNotificationAction? { get }
```

<a id="Discussion"></a>

## Discussion

This property specifies an additional action selected by the user when the user notification is sent to to the [NSUserNotificationCenterDelegate](../nsusernotificationcenterdelegate.md) method [userNotificationCenter(\_:didActivate:)](../nsusernotificationcenterdelegate/usernotificationcenter%28__didactivate_%29.md). The supported values are described in [NSUserNotification.ActivationType](activationtype-swift.enum.md).

## See Also

### User Notification Activation Method

- [activationType](activationtype-swift.property.md): Deprecated. Specifies what caused a user notification to occur.
- [additionalActions](additionalactions.md): Deprecated. The actions that can be taken on a notification in addition to the default action.

# additionalActivationAction (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

An additional action selected by the user.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSUserNotificationAction * additionalActivationAction;
```

<a id="Discussion"></a>

## Discussion

This property specifies an additional action selected by the user when the user notification is sent to to the [NSUserNotificationCenterDelegate](../nsusernotificationcenterdelegate.md) method [userNotificationCenter:didActivateNotification:](../nsusernotificationcenterdelegate/usernotificationcenter%28__didactivate_%29.md). The supported values are described in [NSUserNotificationActivationType](activationtype-swift.enum.md).

## See Also

### User Notification Activation Method

- [activationType](activationtype-swift.property.md): Deprecated. Specifies what caused a user notification to occur.
- [additionalActions](additionalactions.md): Deprecated. The actions that can be taken on a notification in addition to the default action.
