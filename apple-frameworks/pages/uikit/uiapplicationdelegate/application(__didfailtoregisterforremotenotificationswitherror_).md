> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:didfailtoregisterforremotenotificationswitherror:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:didfailtoregisterforremotenotificationswitherror:))

# application(\_:didFailToRegisterForRemoteNotificationsWithError:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when Apple Push Notification service cannot successfully complete the registration process.

## Declaration

```swift
optional func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: any Error)
```

## Parameters

- `application`: The app object that initiated the remote-notification registration process.
- `error`: An [NSError](../../foundation/nserror.md) object that encapsulates information why registration did not succeed. The app can choose to display this information to the user.

<a id="Discussion"></a>

## Discussion

UIKit calls this method if it was unable to register your app with APNs or if your app is not properly configured for remote notifications. During development, make sure your app has the proper entitlements and that its App ID is configured to support push notifications. You might use your implementation of this method to make a note of the failed registration so that you can try again later.

For more information about how to set up and send remote notifications in your app, see [Setting up a remote notification server](../../usernotifications/setting-up-a-remote-notification-server.md).

## See Also

### Handling remote notification registration

- [application(\_:didRegisterForRemoteNotificationsWithDeviceToken:)](application%28__didregisterforremotenotificationswithdevicetoken_%29.md): Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [application(\_:didReceiveRemoteNotification:fetchCompletionHandler:)](application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md): Tells the app that a remote notification arrived that indicates there is data to be fetched.

# application:didFailToRegisterForRemoteNotificationsWithError: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when Apple Push Notification service cannot successfully complete the registration process.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didFailToRegisterForRemoteNotificationsWithError:(NSError *) error;
```

## Parameters

- `application`: The app object that initiated the remote-notification registration process.
- `error`: An [NSError](../../foundation/nserror.md) object that encapsulates information why registration did not succeed. The app can choose to display this information to the user.

<a id="Discussion"></a>

## Discussion

UIKit calls this method if it was unable to register your app with APNs or if your app is not properly configured for remote notifications. During development, make sure your app has the proper entitlements and that its App ID is configured to support push notifications. You might use your implementation of this method to make a note of the failed registration so that you can try again later.

For more information about how to set up and send remote notifications in your app, see [Setting up a remote notification server](../../usernotifications/setting-up-a-remote-notification-server.md).

## See Also

### Handling remote notification registration

- [application:didRegisterForRemoteNotificationsWithDeviceToken:](application%28__didregisterforremotenotificationswithdevicetoken_%29.md): Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [application:didReceiveRemoteNotification:fetchCompletionHandler:](application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md): Tells the app that a remote notification arrived that indicates there is data to be fetched.
