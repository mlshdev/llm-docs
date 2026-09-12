> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/registerforremotenotifications()](https://developer.apple.com/documentation/watchkit/wkextension/registerforremotenotifications())

# registerForRemoteNotifications() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+ (deprecated in 9.2)

Register to receive remote notifications from the Apple Push Notification service (APNs).

## Declaration

```swift
func registerForRemoteNotifications()
```

<a id="Discussion"></a>

## Discussion

Before calling this method, you must enable your WatchKit extension’s Push Notification capability, as described in [Enable push notifications](https://help.apple.com/xcode/mac/current/#/devdfd3d04a1).

Call this method to register a device with APNs. If registration succeeds, the system calls your extension delegate’s [didRegisterForRemoteNotifications(withDeviceToken:)](../wkextensiondelegate/didregisterforremotenotifications%28withdevicetoken_%29.md) method and passes it a device token. Pass this token to the provider server you use to generate remote notifications for this device. If registration fails, the system calls your extension delegate’s [didFailToRegisterForRemoteNotificationsWithError(\_:)](../wkextensiondelegate/didfailtoregisterforremotenotificationswitherror%28__%29.md) method instead.

> **Important**

>  Device tokens may change, so don’t cache the device token on the device. Instead, register for remote notifications every time your app launches. If the device token hasn’t changed, registration happens quickly.

To display alerts, play sounds, or perform other user-facing actions, you must also request authorization using the [UNUserNotificationCenter](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter) class’s [requestAuthorization(options:completionHandler:)](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/requestauthorization%28options:completionhandler:%29) method. If you do not request and receive authorization for your app’s interactions, the system delivers all remote notifications to your app silently.

If your watchOS app has an iOS companion, always send notifications to both watchOS and the paired iOS device. As long as the payloads are identical, the system recognizes the duplicates, and only displays one notification to the user.

For more information on setting up remote notifications, see [Setting up a remote notification server](https://developer.apple.com/documentation/usernotifications/setting-up-a-remote-notification-server) and [Registering your app with APNs](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns).

## See Also

### Registering for remote notifications

- [unregisterForRemoteNotifications()](unregisterforremotenotifications%28%29.md): Deprecated. Unregister for all remote notifications received from Apple Push Notification service (APNs).
- [isRegisteredForRemoteNotifications](isregisteredforremotenotifications.md): Deprecated. A Boolean value that indicates if the app has successfully registered for remote notifications.

# registerForRemoteNotifications (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+ (deprecated in 9.2)

Register to receive remote notifications from the Apple Push Notification service (APNs).

## Declaration

```objectivec
- (void) registerForRemoteNotifications;
```

<a id="Discussion"></a>

## Discussion

Before calling this method, you must enable your WatchKit extension’s Push Notification capability, as described in [Enable push notifications](https://help.apple.com/xcode/mac/current/#/devdfd3d04a1).

Call this method to register a device with APNs. If registration succeeds, the system calls your extension delegate’s [didRegisterForRemoteNotificationsWithDeviceToken:](../wkextensiondelegate/didregisterforremotenotifications%28withdevicetoken_%29.md) method and passes it a device token. Pass this token to the provider server you use to generate remote notifications for this device. If registration fails, the system calls your extension delegate’s [didFailToRegisterForRemoteNotificationsWithError:](../wkextensiondelegate/didfailtoregisterforremotenotificationswitherror%28__%29.md) method instead.

> **Important**

>  Device tokens may change, so don’t cache the device token on the device. Instead, register for remote notifications every time your app launches. If the device token hasn’t changed, registration happens quickly.

To display alerts, play sounds, or perform other user-facing actions, you must also request authorization using the [UNUserNotificationCenter](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter) class’s [requestAuthorizationWithOptions:completionHandler:](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/requestauthorization%28options:completionhandler:%29) method. If you do not request and receive authorization for your app’s interactions, the system delivers all remote notifications to your app silently.

If your watchOS app has an iOS companion, always send notifications to both watchOS and the paired iOS device. As long as the payloads are identical, the system recognizes the duplicates, and only displays one notification to the user.

For more information on setting up remote notifications, see [Setting up a remote notification server](https://developer.apple.com/documentation/usernotifications/setting-up-a-remote-notification-server) and [Registering your app with APNs](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns).

## See Also

### Registering for remote notifications

- [unregisterForRemoteNotifications](unregisterforremotenotifications%28%29.md): Deprecated. Unregister for all remote notifications received from Apple Push Notification service (APNs).
- [registeredForRemoteNotifications](isregisteredforremotenotifications.md): Deprecated. A Boolean value that indicates if the app has successfully registered for remote notifications.
