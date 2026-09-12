> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:didreceive:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:didreceive:))

# application(\_:didReceive:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate when a running app receives a local notification.

> Use [userNotificationCenter(\_:willPresent:withCompletionHandler:)](../../usernotifications/unusernotificationcenterdelegate/usernotificationcenter%28__willpresent_withcompletionhandler_%29.md) instead.

## Declaration

```swift
optional func application(_ application: UIApplication, didReceive notification: UILocalNotification)
```

## Parameters

- `application`: The app object that received the local notification.
- `notification`: A local notification that encapsulates details about the notification, potentially including custom data.

<a id="Discussion"></a>

## Discussion

Local notifications are similar to remote notifications, but differ in that they are scheduled, displayed, and received entirely on the same device. An app can create and schedule a local notification, and the operating system then delivers it at the scheduled date and time. If the app is not active in the foreground when the notification fires, the system uses the information in the [UILocalNotification](../uilocalnotification.md) object to determine whether it should display an alert, badge the app icon, or play a sound. If the app is running in the foreground, the system calls this method directly without alerting the user in any way.

You might implement this method in your delegate if you want to be notified that a local notification occurred. For example, a calendar app might use local notifications to alert the user to upcoming events.

If the user chooses to open the app when a local notification occurs, the launch options dictionary passed to the [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) and [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) methods contains the [localNotification](../uiapplication/launchoptionskey/localnotification.md) key. This method is called at some point after your delegate’s [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) method.

## See Also

### Deprecated

- [application(\_:didRegister:)](application%28__didregister_%29.md): Deprecated. Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.
- [application(\_:didReceiveRemoteNotification:)](application%28__didreceiveremotenotification_%29.md): Deprecated. Called when your app has received a remote notification.
- [application(\_:handleActionWithIdentifier:for:completionHandler:)](application%28__handleactionwithidentifier_for_completionhandler_%29.md): Deprecated. Called when your app has been activated because user selected a custom action from the alert panel of a local notification.
- [application(\_:handleActionWithIdentifier:for:withResponseInfo:completionHandler:)](application%28__handleactionwithidentifier_for_withresponseinfo_completionhandler_%29.md): Deprecated. Called when your app has been activated by the user selecting an action from a local notification.
- [application(\_:handleActionWithIdentifier:forRemoteNotification:completionHandler:)](application%28__handleactionwithidentifier_forremotenotification_completionhandler_%29.md): Deprecated. Tells the app delegate to perform the custom action specified by a remote notification.
- [application(\_:handleActionWithIdentifier:forRemoteNotification:withResponseInfo:completionHandler:)](application%28__handleactionwithidentifier_forremotenotification_withresponseinfo_completionhandler_%29.md): Deprecated. Called when your app has been activated by the user selecting an action from a remote notification.
- [application(\_:handleOpen:)](application%28__handleopen_%29.md): Deprecated. Asks the delegate to open a resource identified by URL.
- [application(\_:open:sourceApplication:annotation:)](application%28__open_sourceapplication_annotation_%29.md): Deprecated. Asks the delegate to open a resource identified by a URL.
- [application(\_:willChangeStatusBarOrientation:duration:)](application%28__willchangestatusbarorientation_duration_%29.md): Deprecated. Tells the delegate when the interface orientation of the status bar is about to change.
- [application(\_:didChangeStatusBarOrientation:)](application%28__didchangestatusbarorientation_%29.md): Deprecated. Tells the delegate when the interface orientation of the status bar has changed.
- [application(\_:willChangeStatusBarFrame:)](application%28__willchangestatusbarframe_%29.md): Deprecated. Tells the delegate when the frame of the status bar is about to change.
- [application(\_:didChangeStatusBarFrame:)](application%28__didchangestatusbarframe_%29.md): Deprecated. Tells the delegate when the frame of the status bar has changed.
- [application(\_:handle:completionHandler:)](application%28__handle_completionhandler_%29.md): Deprecated. Asks the delegate to handle the specified SiriKit intent directly.
- [application(\_:performFetchWithCompletionHandler:)](application%28__performfetchwithcompletionhandler_%29.md): Deprecated. Tells the app that it can begin a fetch operation if it has data to download.
- [application(\_:shouldSaveApplicationState:)](application%28__shouldsaveapplicationstate_%29.md): Deprecated. Asks the delegate whether to preserve the app’s state.

# application:didReceiveLocalNotification: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate when a running app receives a local notification.

> Use [userNotificationCenter:willPresentNotification:withCompletionHandler:](../../usernotifications/unusernotificationcenterdelegate/usernotificationcenter%28__willpresent_withcompletionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didReceiveLocalNotification:(UILocalNotification *) notification;
```

## Parameters

- `application`: The app object that received the local notification.
- `notification`: A local notification that encapsulates details about the notification, potentially including custom data.

<a id="Discussion"></a>

## Discussion

Local notifications are similar to remote notifications, but differ in that they are scheduled, displayed, and received entirely on the same device. An app can create and schedule a local notification, and the operating system then delivers it at the scheduled date and time. If the app is not active in the foreground when the notification fires, the system uses the information in the [UILocalNotification](../uilocalnotification.md) object to determine whether it should display an alert, badge the app icon, or play a sound. If the app is running in the foreground, the system calls this method directly without alerting the user in any way.

You might implement this method in your delegate if you want to be notified that a local notification occurred. For example, a calendar app might use local notifications to alert the user to upcoming events.

If the user chooses to open the app when a local notification occurs, the launch options dictionary passed to the [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) and [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) methods contains the [UIApplicationLaunchOptionsLocalNotificationKey](../uiapplication/launchoptionskey/localnotification.md) key. This method is called at some point after your delegate’s [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) method.

## See Also

### Deprecated

- [application:didRegisterUserNotificationSettings:](application%28__didregister_%29.md): Deprecated. Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.
- [application:didReceiveRemoteNotification:](application%28__didreceiveremotenotification_%29.md): Deprecated. Called when your app has received a remote notification.
- [application:handleActionWithIdentifier:forLocalNotification:completionHandler:](application%28__handleactionwithidentifier_for_completionhandler_%29.md): Deprecated. Called when your app has been activated because user selected a custom action from the alert panel of a local notification.
- [application:handleActionWithIdentifier:forLocalNotification:withResponseInfo:completionHandler:](application%28__handleactionwithidentifier_for_withresponseinfo_completionhandler_%29.md): Deprecated. Called when your app has been activated by the user selecting an action from a local notification.
- [application:handleActionWithIdentifier:forRemoteNotification:completionHandler:](application%28__handleactionwithidentifier_forremotenotification_completionhandler_%29.md): Deprecated. Tells the app delegate to perform the custom action specified by a remote notification.
- [application:handleActionWithIdentifier:forRemoteNotification:withResponseInfo:completionHandler:](application%28__handleactionwithidentifier_forremotenotification_withresponseinfo_completionhandler_%29.md): Deprecated. Called when your app has been activated by the user selecting an action from a remote notification.
- [application:handleOpenURL:](application%28__handleopen_%29.md): Deprecated. Asks the delegate to open a resource identified by URL.
- [application:openURL:sourceApplication:annotation:](application%28__open_sourceapplication_annotation_%29.md): Deprecated. Asks the delegate to open a resource identified by a URL.
- [application:willChangeStatusBarOrientation:duration:](application%28__willchangestatusbarorientation_duration_%29.md): Deprecated. Tells the delegate when the interface orientation of the status bar is about to change.
- [application:didChangeStatusBarOrientation:](application%28__didchangestatusbarorientation_%29.md): Deprecated. Tells the delegate when the interface orientation of the status bar has changed.
- [application:willChangeStatusBarFrame:](application%28__willchangestatusbarframe_%29.md): Deprecated. Tells the delegate when the frame of the status bar is about to change.
- [application:didChangeStatusBarFrame:](application%28__didchangestatusbarframe_%29.md): Deprecated. Tells the delegate when the frame of the status bar has changed.
- [application:handleIntent:completionHandler:](application%28__handle_completionhandler_%29.md): Deprecated. Asks the delegate to handle the specified SiriKit intent directly.
- [application:performFetchWithCompletionHandler:](application%28__performfetchwithcompletionhandler_%29.md): Deprecated. Tells the app that it can begin a fetch operation if it has data to download.
- [application:shouldSaveApplicationState:](application%28__shouldsaveapplicationstate_%29.md): Deprecated. Asks the delegate whether to preserve the app’s state.
