> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/additionalactions](https://developer.apple.com/documentation/foundation/nsusernotification/additionalactions)

# additionalActions (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

The actions that can be taken on a notification in addition to the default action.

## Declaration

```swift
var additionalActions: [NSUserNotificationAction]? { get set }
```

<a id="Discussion"></a>

## Discussion

This array contains `NSUserNotificationAction` objects that describe the different actions for a notification in addition to the default action described by [actionButtonTitle](actionbuttontitle.md).

## See Also

### Related Documentation

- [otherButtonTitle](otherbuttontitle.md): Deprecated. Specifies a custom title for the close button in an alert-style notification.
- [actionButtonTitle](actionbuttontitle.md): Deprecated. Specifies the title of the action button displayed in the notification.

### User Notification Activation Method

- [activationType](activationtype-swift.property.md): Deprecated. Specifies what caused a user notification to occur.
- [additionalActivationAction](additionalactivationaction.md): Deprecated. An additional action selected by the user.

# additionalActions (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

The actions that can be taken on a notification in addition to the default action.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSUserNotificationAction *> * additionalActions;
```

<a id="Discussion"></a>

## Discussion

This array contains `NSUserNotificationAction` objects that describe the different actions for a notification in addition to the default action described by [actionButtonTitle](actionbuttontitle.md).

## See Also

### Related Documentation

- [otherButtonTitle](otherbuttontitle.md): Deprecated. Specifies a custom title for the close button in an alert-style notification.
- [actionButtonTitle](actionbuttontitle.md): Deprecated. Specifies the title of the action button displayed in the notification.

### User Notification Activation Method

- [activationType](activationtype-swift.property.md): Deprecated. Specifies what caused a user notification to occur.
- [additionalActivationAction](additionalactivationaction.md): Deprecated. An additional action selected by the user.
