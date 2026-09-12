> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/unregisterforremotenotifications()](https://developer.apple.com/documentation/watchkit/wkextension/unregisterforremotenotifications())

# unregisterForRemoteNotifications() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+ (deprecated in 9.2)

Unregister for all remote notifications received from Apple Push Notification service (APNs).

## Declaration

```swift
func unregisterForRemoteNotifications()
```

<a id="Discussion"></a>

## Discussion

Use this method to unregister from all remote notifications; for example, unregister to stop receiving notifications when the user logs out of their account.

## See Also

### Related Documentation

- [registerForRemoteNotifications()](https://developer.apple.com/documentation/uikit/uiapplication/registerforremotenotifications%28%29): Registers to receive remote notifications through Apple Push Notification service.

### Registering for remote notifications

- [registerForRemoteNotifications()](registerforremotenotifications%28%29.md): Deprecated. Register to receive remote notifications from the Apple Push Notification service (APNs).
- [isRegisteredForRemoteNotifications](isregisteredforremotenotifications.md): Deprecated. A Boolean value that indicates if the app has successfully registered for remote notifications.

# unregisterForRemoteNotifications (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+ (deprecated in 9.2)

Unregister for all remote notifications received from Apple Push Notification service (APNs).

## Declaration

```objectivec
- (void) unregisterForRemoteNotifications;
```

<a id="Discussion"></a>

## Discussion

Use this method to unregister from all remote notifications; for example, unregister to stop receiving notifications when the user logs out of their account.

## See Also

### Related Documentation

- [registerForRemoteNotifications](https://developer.apple.com/documentation/uikit/uiapplication/registerforremotenotifications%28%29): Registers to receive remote notifications through Apple Push Notification service.

### Registering for remote notifications

- [registerForRemoteNotifications](registerforremotenotifications%28%29.md): Deprecated. Register to receive remote notifications from the Apple Push Notification service (APNs).
- [registeredForRemoteNotifications](isregisteredforremotenotifications.md): Deprecated. A Boolean value that indicates if the app has successfully registered for remote notifications.
