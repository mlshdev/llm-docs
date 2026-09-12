> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate/didfailtoregisterforremotenotificationswitherror(_:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/didfailtoregisterforremotenotificationswitherror(_:))

# didFailToRegisterForRemoteNotificationsWithError(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+ (deprecated in 9.2)

Tells the delegate that Apple Push Notification service (APNs) cannot successfully complete the registration process.

## Declaration

```swift
optional func didFailToRegisterForRemoteNotificationsWithError(_ error: any Error)
```

## Parameters

- `error`: An error object that contains information about why the registration failed. The app can choose to display this information to the user.

<a id="Discussion"></a>

## Discussion

WatchKit calls this method if it was unable to register your app with APNs or if your app is not properly configured for remote notifications. For example, WatchKit might call this method if you didn’t enable your WatchKit extension’s Push Notification capability.\*\* \*\*For more information about how to set up and send remote notifications in your app, see [Setting up a remote notification server](https://developer.apple.com/documentation/usernotifications/setting-up-a-remote-notification-server) and [Registering your app with APNs](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns).

In your implementation, you can check the error type, and try to register again later.

## See Also

### Managing remote notifications

- [didRegisterForRemoteNotifications(withDeviceToken:)](didregisterforremotenotifications%28withdevicetoken_%29.md): Deprecated. Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [didReceiveRemoteNotification(\_:fetchCompletionHandler:)](didreceiveremotenotification%28__fetchcompletionhandler_%29.md): Deprecated. Tells the delegate that a background notification has arrived.
- [WKBackgroundFetchResult](../wkbackgroundfetchresult.md): The result of an attempt to download the content associated with a remote notification.

# didFailToRegisterForRemoteNotificationsWithError: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+ (deprecated in 9.2)

Tells the delegate that Apple Push Notification service (APNs) cannot successfully complete the registration process.

## Declaration

```objectivec
- (void) didFailToRegisterForRemoteNotificationsWithError:(NSError *) error;
```

## Parameters

- `error`: An error object that contains information about why the registration failed. The app can choose to display this information to the user.

<a id="Discussion"></a>

## Discussion

WatchKit calls this method if it was unable to register your app with APNs or if your app is not properly configured for remote notifications. For example, WatchKit might call this method if you didn’t enable your WatchKit extension’s Push Notification capability.\*\* \*\*For more information about how to set up and send remote notifications in your app, see [Setting up a remote notification server](https://developer.apple.com/documentation/usernotifications/setting-up-a-remote-notification-server) and [Registering your app with APNs](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns).

In your implementation, you can check the error type, and try to register again later.

## See Also

### Managing remote notifications

- [didRegisterForRemoteNotificationsWithDeviceToken:](didregisterforremotenotifications%28withdevicetoken_%29.md): Deprecated. Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [didReceiveRemoteNotification:fetchCompletionHandler:](didreceiveremotenotification%28__fetchcompletionhandler_%29.md): Deprecated. Tells the delegate that a background notification has arrived.
- [WKBackgroundFetchResult](../wkbackgroundfetchresult.md): The result of an attempt to download the content associated with a remote notification.
