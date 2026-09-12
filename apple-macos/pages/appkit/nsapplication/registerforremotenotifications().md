> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/registerforremotenotifications()](https://developer.apple.com/documentation/appkit/nsapplication/registerforremotenotifications())

# registerForRemoteNotifications() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Register for notifications sent by Apple Push Notification service (APNs).

## Declaration

```swift
func registerForRemoteNotifications()
```

<a id="Discussion"></a>

## Discussion

Call this method to register your app with APNs. When a valid connection is established, APNs sends a device token to your app delegate. Forward that token to your company’s provider server.

For more information about how to register with APNs, see [Registering your app with APNs](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns).

## See Also

### Managing remote notifications

- [unregisterForRemoteNotifications()](unregisterforremotenotifications%28%29.md): Unregister for notifications received from Apple Push Notification service.
- [enabledRemoteNotificationTypes](enabledremotenotificationtypes.md): The types of push notifications that the app accepts.
- [registerForRemoteNotifications(matching:)](registerforremotenotifications%28matching_%29.md): Register to receive notifications of the specified types from a provider through the Apple Push Notification service.
- [isRegisteredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).
- [NSApplication.RemoteNotificationType](remotenotificationtype.md): These constants determine whether apps launched by remote notifications display a badge.

# registerForRemoteNotifications (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Register for notifications sent by Apple Push Notification service (APNs).

## Declaration

```objectivec
- (void) registerForRemoteNotifications;
```

<a id="Discussion"></a>

## Discussion

Call this method to register your app with APNs. When a valid connection is established, APNs sends a device token to your app delegate. Forward that token to your company’s provider server.

For more information about how to register with APNs, see [Registering your app with APNs](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns).

## See Also

### Managing remote notifications

- [unregisterForRemoteNotifications](unregisterforremotenotifications%28%29.md): Unregister for notifications received from Apple Push Notification service.
- [enabledRemoteNotificationTypes](enabledremotenotificationtypes.md): The types of push notifications that the app accepts.
- [registerForRemoteNotificationTypes:](registerforremotenotifications%28matching_%29.md): Register to receive notifications of the specified types from a provider through the Apple Push Notification service.
- [registeredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).
- [NSRemoteNotificationType](remotenotificationtype.md): These constants determine whether apps launched by remote notifications display a badge.
