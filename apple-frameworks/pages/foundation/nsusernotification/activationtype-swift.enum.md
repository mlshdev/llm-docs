> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/activationtype-swift.enum](https://developer.apple.com/documentation/foundation/nsusernotification/activationtype-swift.enum)

# NSUserNotification.ActivationType (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** macOS 10.8+ (deprecated in 11.0)

These constants describe how the user notification was activated.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
enum ActivationType
```

## Topics

### Constants

- [NSUserNotification.ActivationType.none](activationtype-swift.enum/none.md): Deprecated. The user did not interact with the notification alert.
- [NSUserNotification.ActivationType.contentsClicked](activationtype-swift.enum/contentsclicked.md): Deprecated. The user clicked on the contents of the notification alert.
- [NSUserNotification.ActivationType.actionButtonClicked](activationtype-swift.enum/actionbuttonclicked.md): Deprecated. The user clicked on the action button of the notification alert.
- [NSUserNotification.ActivationType.replied](activationtype-swift.enum/replied.md): Deprecated. The user replied to the notification.
- [NSUserNotification.ActivationType.additionalActionClicked](activationtype-swift.enum/additionalactionclicked.md): Deprecated. The user clicked on the additional action button of the notification alert.

### Initializers

- [init(rawValue:)](activationtype-swift.enum/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSUserNotificationDefaultSoundName](../nsusernotificationdefaultsoundname.md): Deprecated. The default notification sound.

# NSUserNotificationActivationType (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** macOS 10.8+ (deprecated in 11.0)

These constants describe how the user notification was activated.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
enum NSUserNotificationActivationType : NSInteger;
```

## Topics

### Constants

- [NSUserNotificationActivationTypeNone](activationtype-swift.enum/none.md): Deprecated. The user did not interact with the notification alert.
- [NSUserNotificationActivationTypeContentsClicked](activationtype-swift.enum/contentsclicked.md): Deprecated. The user clicked on the contents of the notification alert.
- [NSUserNotificationActivationTypeActionButtonClicked](activationtype-swift.enum/actionbuttonclicked.md): Deprecated. The user clicked on the action button of the notification alert.
- [NSUserNotificationActivationTypeReplied](activationtype-swift.enum/replied.md): Deprecated. The user replied to the notification.
- [NSUserNotificationActivationTypeAdditionalActionClicked](activationtype-swift.enum/additionalactionclicked.md): Deprecated. The user clicked on the additional action button of the notification alert.

## See Also

### Constants

- [NSUserNotificationDefaultSoundName](../nsusernotificationdefaultsoundname.md): Deprecated. The default notification sound.
