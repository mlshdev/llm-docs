> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/isregisteredforremotenotifications](https://developer.apple.com/documentation/appkit/nsapplication/isregisteredforremotenotifications)

# isRegisteredForRemoteNotifications (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).

## Declaration

```swift
var isRegisteredForRemoteNotifications: Bool { get }
```

## See Also

### Managing remote notifications

- [registerForRemoteNotifications()](registerforremotenotifications%28%29.md): Register for notifications sent by Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications()](unregisterforremotenotifications%28%29.md): Unregister for notifications received from Apple Push Notification service.
- [enabledRemoteNotificationTypes](enabledremotenotificationtypes.md): The types of push notifications that the app accepts.
- [registerForRemoteNotifications(matching:)](registerforremotenotifications%28matching_%29.md): Register to receive notifications of the specified types from a provider through the Apple Push Notification service.
- [NSApplication.RemoteNotificationType](remotenotificationtype.md): These constants determine whether apps launched by remote notifications display a badge.

# registeredForRemoteNotifications (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).

## Declaration

```objectivec
@property (readonly, getter=isRegisteredForRemoteNotifications) BOOL registeredForRemoteNotifications;
```

## See Also

### Managing remote notifications

- [registerForRemoteNotifications](registerforremotenotifications%28%29.md): Register for notifications sent by Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications](unregisterforremotenotifications%28%29.md): Unregister for notifications received from Apple Push Notification service.
- [enabledRemoteNotificationTypes](enabledremotenotificationtypes.md): The types of push notifications that the app accepts.
- [registerForRemoteNotificationTypes:](registerforremotenotifications%28matching_%29.md): Register to receive notifications of the specified types from a provider through the Apple Push Notification service.
- [NSRemoteNotificationType](remotenotificationtype.md): These constants determine whether apps launched by remote notifications display a badge.
