> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/remotenotificationtype](https://developer.apple.com/documentation/appkit/nsapplication/remotenotificationtype)

# NSApplication.RemoteNotificationType (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

These constants determine whether apps launched by remote notifications display a badge.

## Declaration

```swift
struct RemoteNotificationType
```

## Topics

### Interaction Types

- [badge](remotenotificationtype/badge.md): The app should display a badge.
- [sound](remotenotificationtype/sound.md): The app should play a sound.
- [alert](remotenotificationtype/alert.md): The app should display an alert.

### Initializers

- [init(rawValue:)](remotenotificationtype/init%28rawvalue_%29.md): Initializes a new remote notifications options structure.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing remote notifications

- [registerForRemoteNotifications()](registerforremotenotifications%28%29.md): Register for notifications sent by Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications()](unregisterforremotenotifications%28%29.md): Unregister for notifications received from Apple Push Notification service.
- [enabledRemoteNotificationTypes](enabledremotenotificationtypes.md): The types of push notifications that the app accepts.
- [registerForRemoteNotifications(matching:)](registerforremotenotifications%28matching_%29.md): Register to receive notifications of the specified types from a provider through the Apple Push Notification service.
- [isRegisteredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).

# NSRemoteNotificationType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants determine whether apps launched by remote notifications display a badge.

## Declaration

```objectivec
enum NSRemoteNotificationType : NSUInteger;
```

## Topics

### Interaction Types

- [NSRemoteNotificationTypeBadge](remotenotificationtype/badge.md): The app should display a badge.
- [NSRemoteNotificationTypeSound](remotenotificationtype/sound.md): The app should play a sound.
- [NSRemoteNotificationTypeAlert](remotenotificationtype/alert.md): The app should display an alert.

### Initializers

- [NSRemoteNotificationTypeNone](../nsremotenotificationtype/nsremotenotificationtypenone.md): The app shouldn’t display a badge.

## See Also

### Managing remote notifications

- [registerForRemoteNotifications](registerforremotenotifications%28%29.md): Register for notifications sent by Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications](unregisterforremotenotifications%28%29.md): Unregister for notifications received from Apple Push Notification service.
- [enabledRemoteNotificationTypes](enabledremotenotificationtypes.md): The types of push notifications that the app accepts.
- [registerForRemoteNotificationTypes:](registerforremotenotifications%28matching_%29.md): Register to receive notifications of the specified types from a provider through the Apple Push Notification service.
- [registeredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).
