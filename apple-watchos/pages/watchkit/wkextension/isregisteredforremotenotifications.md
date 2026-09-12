> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/isregisteredforremotenotifications](https://developer.apple.com/documentation/watchkit/wkextension/isregisteredforremotenotifications)

# isRegisteredForRemoteNotifications (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+ (deprecated in 9.2)

A Boolean value that indicates if the app has successfully registered for remote notifications.

## Declaration

```swift
var isRegisteredForRemoteNotifications: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This method indicates whether your app successfully registered for remote notifications using the [registerForRemoteNotifications()](registerforremotenotifications%28%29.md) method. It also takes into account the notification permissions set by the user. It does not give any indication about whether remote notifications are available.

## See Also

### Registering for remote notifications

- [registerForRemoteNotifications()](registerforremotenotifications%28%29.md): Deprecated. Register to receive remote notifications from the Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications()](unregisterforremotenotifications%28%29.md): Deprecated. Unregister for all remote notifications received from Apple Push Notification service (APNs).

# registeredForRemoteNotifications (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+ (deprecated in 9.2)

A Boolean value that indicates if the app has successfully registered for remote notifications.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRegisteredForRemoteNotifications) BOOL registeredForRemoteNotifications;
```

<a id="Discussion"></a>

## Discussion

This method indicates whether your app successfully registered for remote notifications using the [registerForRemoteNotifications](registerforremotenotifications%28%29.md) method. It also takes into account the notification permissions set by the user. It does not give any indication about whether remote notifications are available.

## See Also

### Registering for remote notifications

- [registerForRemoteNotifications](registerforremotenotifications%28%29.md): Deprecated. Register to receive remote notifications from the Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications](unregisterforremotenotifications%28%29.md): Deprecated. Unregister for all remote notifications received from Apple Push Notification service (APNs).
