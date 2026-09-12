> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/unregisterforremotenotifications()](https://developer.apple.com/documentation/uikit/uiapplication/unregisterforremotenotifications())

# unregisterForRemoteNotifications() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Unregisters for all remote notifications received through Apple Push Notification service.

## Declaration

```swift
func unregisterForRemoteNotifications()
```

<a id="Discussion"></a>

## Discussion

Call this method when your app no longer needs to receive push notifications, such as when:

- Someone logs out of an account associated with push notifications
- Someone explicitly requests to stop receiving notifications through your app interface
- Your app removes support for all types of remote notifications

The Settings app also provides controls to prevent apps from receiving remote notifications. Apps unregistered through this method can always re-register by calling [registerForRemoteNotifications()](registerforremotenotifications%28%29.md).

## See Also

### Registering for remote notifications

- [registerForRemoteNotifications()](registerforremotenotifications%28%29.md): Registers to receive remote notifications through Apple Push Notification service.
- [isRegisteredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value that indicates whether the app is currently registered for remote notifications.

# unregisterForRemoteNotifications (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Unregisters for all remote notifications received through Apple Push Notification service.

## Declaration

```objectivec
- (void) unregisterForRemoteNotifications;
```

<a id="Discussion"></a>

## Discussion

Call this method when your app no longer needs to receive push notifications, such as when:

- Someone logs out of an account associated with push notifications
- Someone explicitly requests to stop receiving notifications through your app interface
- Your app removes support for all types of remote notifications

The Settings app also provides controls to prevent apps from receiving remote notifications. Apps unregistered through this method can always re-register by calling [registerForRemoteNotifications](registerforremotenotifications%28%29.md).

## See Also

### Registering for remote notifications

- [registerForRemoteNotifications](registerforremotenotifications%28%29.md): Registers to receive remote notifications through Apple Push Notification service.
- [registeredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value that indicates whether the app is currently registered for remote notifications.
