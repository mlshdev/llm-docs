> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/unregisterforremotenotifications()](https://developer.apple.com/documentation/appkit/nsapplication/unregisterforremotenotifications())

# unregisterForRemoteNotifications() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Unregister for notifications received from Apple Push Notification service.

## Declaration

```swift
func unregisterForRemoteNotifications()
```

<a id="Discussion"></a>

## Discussion

You should only call this method in rare circumstances, such as when a new version of the app drops support for remote notifications. Apps unregistered through this method can always reregister.

## See Also

### Managing remote notifications

- [registerForRemoteNotifications()](registerforremotenotifications%28%29.md): Register for notifications sent by Apple Push Notification service (APNs).
- [enabledRemoteNotificationTypes](enabledremotenotificationtypes.md): The types of push notifications that the app accepts.
- [registerForRemoteNotifications(matching:)](registerforremotenotifications%28matching_%29.md): Register to receive notifications of the specified types from a provider through the Apple Push Notification service.
- [isRegisteredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).
- [NSApplication.RemoteNotificationType](remotenotificationtype.md): These constants determine whether apps launched by remote notifications display a badge.

# unregisterForRemoteNotifications (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Unregister for notifications received from Apple Push Notification service.

## Declaration

```objectivec
- (void) unregisterForRemoteNotifications;
```

<a id="Discussion"></a>

## Discussion

You should only call this method in rare circumstances, such as when a new version of the app drops support for remote notifications. Apps unregistered through this method can always reregister.

## See Also

### Managing remote notifications

- [registerForRemoteNotifications](registerforremotenotifications%28%29.md): Register for notifications sent by Apple Push Notification service (APNs).
- [enabledRemoteNotificationTypes](enabledremotenotificationtypes.md): The types of push notifications that the app accepts.
- [registerForRemoteNotificationTypes:](registerforremotenotifications%28matching_%29.md): Register to receive notifications of the specified types from a provider through the Apple Push Notification service.
- [registeredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).
- [NSRemoteNotificationType](remotenotificationtype.md): These constants determine whether apps launched by remote notifications display a badge.
