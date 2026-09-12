> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationdelegate/didregisterforremotenotifications(withdevicetoken:)](https://developer.apple.com/documentation/watchkit/wkapplicationdelegate/didregisterforremotenotifications(withdevicetoken:))

# didRegisterForRemoteNotifications(withDeviceToken:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).

## Declaration

```swift
optional func didRegisterForRemoteNotifications(withDeviceToken deviceToken: Data)
```

## Parameters

- `deviceToken`: A globally unique token that identifies this device to APNs. Send this token to the server that you use to generate remote notifications. Your server must pass this token unmodified back to APNs when sending notifications to this device.

  The length of APNs device tokens can vary. Do not hardcode the token’s size in your app.

<a id="Discussion"></a>

## Discussion

WatchKit calls this method after it successfully registers your app with APNs. In your implementation, send the contents of the `deviceToken` parameter to the server you use to generate remote notifications. Never cache the device token locally on the user’s device. Device tokens can change periodically, so caching the value risks sending an invalid token to your server.

Typically, the system calls this method only after you call your [WKApplication](../wkapplication.md) object’s [registerForRemoteNotifications()](../wkapplication/registerforremotenotifications%28%29.md) method, but WatchKit may call it under other rare circumstances. For example, WatchKit calls the method when the user launches an app after setting up the watch using a different device’s backup. In this case, the app doesn’t know the new device’s token until the user launches it.

## See Also

### Related Documentation

- [application(\_:didFailToRegisterForRemoteNotificationsWithError:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application%28_:didfailtoregisterforremotenotificationswitherror:%29): Tells the delegate when Apple Push Notification service cannot successfully complete the registration process.
- [application(\_:didReceiveRemoteNotification:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application%28_:didreceiveremotenotification:%29): Deprecated. Called when your app has received a remote notification.
- [registerForRemoteNotifications()](https://developer.apple.com/documentation/uikit/uiapplication/registerforremotenotifications%28%29): Registers to receive remote notifications through Apple Push Notification service.

### Managing remote notifications

- [didFailToRegisterForRemoteNotificationsWithError(\_:)](didfailtoregisterforremotenotificationswitherror%28__%29.md): Tells the delegate that Apple Push Notification service (APNs) can’t successfully complete the registration process.
- [didReceiveRemoteNotification(\_:fetchCompletionHandler:)](didreceiveremotenotification%28__fetchcompletionhandler_%29.md): Tells the delegate that a background notification has arrived.
- [WKBackgroundFetchResult](../wkbackgroundfetchresult.md): The result of an attempt to download the content associated with a remote notification.

# didRegisterForRemoteNotificationsWithDeviceToken: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).

## Declaration

```objectivec
- (void) didRegisterForRemoteNotificationsWithDeviceToken:(NSData *) deviceToken;
```

## Parameters

- `deviceToken`: A globally unique token that identifies this device to APNs. Send this token to the server that you use to generate remote notifications. Your server must pass this token unmodified back to APNs when sending notifications to this device.

  The length of APNs device tokens can vary. Do not hardcode the token’s size in your app.

<a id="Discussion"></a>

## Discussion

WatchKit calls this method after it successfully registers your app with APNs. In your implementation, send the contents of the `deviceToken` parameter to the server you use to generate remote notifications. Never cache the device token locally on the user’s device. Device tokens can change periodically, so caching the value risks sending an invalid token to your server.

Typically, the system calls this method only after you call your [WKApplication](../wkapplication.md) object’s [registerForRemoteNotifications](../wkapplication/registerforremotenotifications%28%29.md) method, but WatchKit may call it under other rare circumstances. For example, WatchKit calls the method when the user launches an app after setting up the watch using a different device’s backup. In this case, the app doesn’t know the new device’s token until the user launches it.

## See Also

### Related Documentation

- [application:didFailToRegisterForRemoteNotificationsWithError:](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application%28_:didfailtoregisterforremotenotificationswitherror:%29): Tells the delegate when Apple Push Notification service cannot successfully complete the registration process.
- [application:didReceiveRemoteNotification:](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application%28_:didreceiveremotenotification:%29): Deprecated. Called when your app has received a remote notification.
- [registerForRemoteNotifications](https://developer.apple.com/documentation/uikit/uiapplication/registerforremotenotifications%28%29): Registers to receive remote notifications through Apple Push Notification service.

### Managing remote notifications

- [didFailToRegisterForRemoteNotificationsWithError:](didfailtoregisterforremotenotificationswitherror%28__%29.md): Tells the delegate that Apple Push Notification service (APNs) can’t successfully complete the registration process.
- [didReceiveRemoteNotification:fetchCompletionHandler:](didreceiveremotenotification%28__fetchcompletionhandler_%29.md): Tells the delegate that a background notification has arrived.
- [WKBackgroundFetchResult](../wkbackgroundfetchresult.md): The result of an attempt to download the content associated with a remote notification.
