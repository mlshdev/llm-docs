> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:didfailtoregisterforremotenotificationswitherror:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:didfailtoregisterforremotenotificationswitherror:))

# application(\_:didFailToRegisterForRemoteNotificationsWithError:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that the app was unable to register for Apple Push Services.

## Declaration

```swift
@MainActor optional func application(_ application: NSApplication, didFailToRegisterForRemoteNotificationsWithError error: any Error)
```

## Parameters

- `application`: The application that initiated the remote-notification registration process.
- `error`: An NSError object that encapsulates information why registration did not succeed. The application can display this information to the user.

<a id="Discussion"></a>

## Discussion

The delegate receives this message after the [registerForRemoteNotifications(matching:)](../nsapplication/registerforremotenotifications%28matching_%29.md) method of [NSApplication](../nsapplication.md) is invoked and there is an error in the registration process.

For more information about how to register with APNs, see [Registering your app with APNs](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns).

## See Also

### Handling Push Notifications

- [application(\_:didRegisterForRemoteNotificationsWithDeviceToken:)](application%28__didregisterforremotenotificationswithdevicetoken_%29.md): Tells the delegate that the app registered for Apple Push Services.
- [application(\_:didReceiveRemoteNotification:)](application%28__didreceiveremotenotification_%29.md): Tells the delegate when the app receives a remote notification.

# application:didFailToRegisterForRemoteNotificationsWithError: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that the app was unable to register for Apple Push Services.

## Declaration

```objectivec
- (void) application:(NSApplication *) application didFailToRegisterForRemoteNotificationsWithError:(NSError *) error;
```

## Parameters

- `application`: The application that initiated the remote-notification registration process.
- `error`: An NSError object that encapsulates information why registration did not succeed. The application can display this information to the user.

<a id="Discussion"></a>

## Discussion

The delegate receives this message after the [registerForRemoteNotificationTypes:](../nsapplication/registerforremotenotifications%28matching_%29.md) method of [NSApplication](../nsapplication.md) is invoked and there is an error in the registration process.

For more information about how to register with APNs, see [Registering your app with APNs](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns).

## See Also

### Handling Push Notifications

- [application:didRegisterForRemoteNotificationsWithDeviceToken:](application%28__didregisterforremotenotificationswithdevicetoken_%29.md): Tells the delegate that the app registered for Apple Push Services.
- [application:didReceiveRemoteNotification:](application%28__didreceiveremotenotification_%29.md): Tells the delegate when the app receives a remote notification.
