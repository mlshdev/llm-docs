> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:didregisterforremotenotificationswithdevicetoken:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:didregisterforremotenotificationswithdevicetoken:))

# application(\_:didRegisterForRemoteNotificationsWithDeviceToken:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that the app registered for Apple Push Services.

## Declaration

```swift
@MainActor optional func application(_ application: NSApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data)
```

## Parameters

- `application`: The application that initiated the remote-notification registration process.
- `deviceToken`: A token that identifies the device to Apple Push Notification Service (APNS). The token is an opaque data type because that is the form that the provider needs to submit to the APNS servers when it sends a notification to a device. The APNS servers require a binary format for performance reasons.

  The size of a device token is 32 bytes.

<a id="Discussion"></a>

## Discussion

The delegate receives this message after the [registerForRemoteNotifications(matching:)](../nsapplication/registerforremotenotifications%28matching_%29.md)method of [NSApplication](../nsapplication.md) is invoked and there is no error in the registration process. After receiving the device token, the application should connect with its provider and give the token to it. APNS only pushes notifications to the application’s computer that are accompanied with this token.

For more information about how to register with APNs, see [Registering your app with APNs](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns).

## See Also

### Handling Push Notifications

- [application(\_:didFailToRegisterForRemoteNotificationsWithError:)](application%28__didfailtoregisterforremotenotificationswitherror_%29.md): Tells the delegate that the app was unable to register for Apple Push Services.
- [application(\_:didReceiveRemoteNotification:)](application%28__didreceiveremotenotification_%29.md): Tells the delegate when the app receives a remote notification.

# application:didRegisterForRemoteNotificationsWithDeviceToken: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that the app registered for Apple Push Services.

## Declaration

```objectivec
- (void) application:(NSApplication *) application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *) deviceToken;
```

## Parameters

- `application`: The application that initiated the remote-notification registration process.
- `deviceToken`: A token that identifies the device to Apple Push Notification Service (APNS). The token is an opaque data type because that is the form that the provider needs to submit to the APNS servers when it sends a notification to a device. The APNS servers require a binary format for performance reasons.

  The size of a device token is 32 bytes.

<a id="Discussion"></a>

## Discussion

The delegate receives this message after the [registerForRemoteNotificationTypes:](../nsapplication/registerforremotenotifications%28matching_%29.md)method of [NSApplication](../nsapplication.md) is invoked and there is no error in the registration process. After receiving the device token, the application should connect with its provider and give the token to it. APNS only pushes notifications to the application’s computer that are accompanied with this token.

For more information about how to register with APNs, see [Registering your app with APNs](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns).

## See Also

### Handling Push Notifications

- [application:didFailToRegisterForRemoteNotificationsWithError:](application%28__didfailtoregisterforremotenotificationswitherror_%29.md): Tells the delegate that the app was unable to register for Apple Push Services.
- [application:didReceiveRemoteNotification:](application%28__didreceiveremotenotification_%29.md): Tells the delegate when the app receives a remote notification.
