> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:didreceiveremotenotification:fetchcompletionhandler:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:didreceiveremotenotification:fetchcompletionhandler:))

# application(\_:didReceiveRemoteNotification:fetchCompletionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the app that a remote notification arrived that indicates there is data to be fetched.

## Declaration

```swift
optional func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void)
```

```swift
optional func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any]) async -> UIBackgroundFetchResult
```

## Parameters

- `application`: Your singleton app object.
- `userInfo`: A dictionary that contains information related to the remote notification, potentially including a badge number for the app icon, an alert sound, an alert message to display to the user, a notification identifier, and custom data. The provider originates it as a JSON-defined dictionary that iOS converts to an [NSDictionary](../../foundation/nsdictionary.md) object; the dictionary may contain only property-list objects plus [NSNull](../../foundation/nsnull.md). For more information about the contents of the remote notification dictionary, see [Generating a remote notification](../../usernotifications/generating-a-remote-notification.md).
- `completionHandler`: The block to execute when the download operation is complete. When calling this block, pass in the fetch result value that best describes the results of your download operation. You must call this handler and should do so as soon as possible. For a list of possible values, see the [UIBackgroundFetchResult](../uibackgroundfetchresult.md) type.

<a id="Discussion"></a>

## Discussion

Use this method to process incoming remote notifications for your app. Unlike the [application(\_:didReceiveRemoteNotification:)](application%28__didreceiveremotenotification_%29.md) method, which is called only when your app is running in the foreground, the system calls this method when your app is running in the foreground or background. In addition, if you enabled the remote notifications background mode, the system launches your app (or wakes it from the suspended state) and puts it in the background state when a remote notification arrives. However, the system does not automatically launch your app if the user has force-quit it. In that situation, the user must relaunch your app or restart the device before the system attempts to launch your app automatically again.

> **Note**

>  If the user opens your app from the system-displayed alert, the system may call this method again when your app is about to enter the foreground so that you can update your user interface and display information pertaining to the notification.

When a remote notification arrives, the system displays the notification to the user and launches the app in the background (if needed) so that it can call this method. Launching your app in the background gives you time to process the notification and download any data associated with it, minimizing the amount of time that elapses between the arrival of the notification and displaying that data to the user.

As soon as you finish processing the notification, you *must* call the block in the `handler` parameter or your app will be terminated. Your app has up to 30 seconds of wall-clock time to process the notification and call the specified completion handler block. In practice, you should call the handler block as soon as you are done processing the notification. The system tracks the elapsed time, power usage, and data costs for your app’s background downloads. Apps that use significant amounts of power when processing remote notifications may not always be woken up early to process future notifications.

## See Also

### Handling remote notification registration

- [application(\_:didRegisterForRemoteNotificationsWithDeviceToken:)](application%28__didregisterforremotenotificationswithdevicetoken_%29.md): Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [application(\_:didFailToRegisterForRemoteNotificationsWithError:)](application%28__didfailtoregisterforremotenotificationswitherror_%29.md): Tells the delegate when Apple Push Notification service cannot successfully complete the registration process.

# application:didReceiveRemoteNotification:fetchCompletionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the app that a remote notification arrived that indicates there is data to be fetched.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didReceiveRemoteNotification:(NSDictionary *) userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult result)) completionHandler;
```

## Parameters

- `application`: Your singleton app object.
- `userInfo`: A dictionary that contains information related to the remote notification, potentially including a badge number for the app icon, an alert sound, an alert message to display to the user, a notification identifier, and custom data. The provider originates it as a JSON-defined dictionary that iOS converts to an [NSDictionary](../../foundation/nsdictionary.md) object; the dictionary may contain only property-list objects plus [NSNull](../../foundation/nsnull.md). For more information about the contents of the remote notification dictionary, see [Generating a remote notification](../../usernotifications/generating-a-remote-notification.md).
- `completionHandler`: The block to execute when the download operation is complete. When calling this block, pass in the fetch result value that best describes the results of your download operation. You must call this handler and should do so as soon as possible. For a list of possible values, see the [UIBackgroundFetchResult](../uibackgroundfetchresult.md) type.

<a id="Discussion"></a>

## Discussion

Use this method to process incoming remote notifications for your app. Unlike the [application:didReceiveRemoteNotification:](application%28__didreceiveremotenotification_%29.md) method, which is called only when your app is running in the foreground, the system calls this method when your app is running in the foreground or background. In addition, if you enabled the remote notifications background mode, the system launches your app (or wakes it from the suspended state) and puts it in the background state when a remote notification arrives. However, the system does not automatically launch your app if the user has force-quit it. In that situation, the user must relaunch your app or restart the device before the system attempts to launch your app automatically again.

> **Note**

>  If the user opens your app from the system-displayed alert, the system may call this method again when your app is about to enter the foreground so that you can update your user interface and display information pertaining to the notification.

When a remote notification arrives, the system displays the notification to the user and launches the app in the background (if needed) so that it can call this method. Launching your app in the background gives you time to process the notification and download any data associated with it, minimizing the amount of time that elapses between the arrival of the notification and displaying that data to the user.

As soon as you finish processing the notification, you *must* call the block in the `handler` parameter or your app will be terminated. Your app has up to 30 seconds of wall-clock time to process the notification and call the specified completion handler block. In practice, you should call the handler block as soon as you are done processing the notification. The system tracks the elapsed time, power usage, and data costs for your app’s background downloads. Apps that use significant amounts of power when processing remote notifications may not always be woken up early to process future notifications.

## See Also

### Handling remote notification registration

- [application:didRegisterForRemoteNotificationsWithDeviceToken:](application%28__didregisterforremotenotificationswithdevicetoken_%29.md): Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [application:didFailToRegisterForRemoteNotificationsWithError:](application%28__didfailtoregisterforremotenotificationswitherror_%29.md): Tells the delegate when Apple Push Notification service cannot successfully complete the registration process.
