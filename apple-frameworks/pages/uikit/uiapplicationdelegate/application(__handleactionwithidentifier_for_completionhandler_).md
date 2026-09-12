> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:handleactionwithidentifier:for:completionhandler:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:handleactionwithidentifier:for:completionhandler:))

# application(\_:handleActionWithIdentifier:for:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Called when your app has been activated because user selected a custom action from the alert panel of a local notification.

> Use [userNotificationCenter(\_:didReceive:withCompletionHandler:)](../../usernotifications/unusernotificationcenterdelegate/usernotificationcenter%28__didreceive_withcompletionhandler_%29.md) instead.

## Declaration

```swift
optional func application(_ application: UIApplication, handleActionWithIdentifier identifier: String?, for notification: UILocalNotification, completionHandler: @escaping () -> Void)
```

```swift
optional func application(_ application: UIApplication, handleActionWithIdentifier identifier: String?, for notification: UILocalNotification) async
```

## Parameters

- `application`: The app object that received the local notification.
- `identifier`: The identifier associated with the custom action. This string corresponds to the identifier from the UILocalNotificationAction object that was used to configure the action in the local notification.
- `notification`: The local notification object that was triggered.
- `completionHandler`: A block to call when you are finished performing the action.

<a id="Discussion"></a>

## Discussion

The app calls this method when the user taps an action button in an alert displayed in response to a local notification. Local notifications that include a registered category name in their [category](../uilocalnotification/category.md) property display buttons for the actions in that category. If the user taps one of those buttons, the system wakes up the app (launching it if needed) and calls this method in the background. Your implementation of this method should perform the action associated with the specified `identifier` and execute the block in the `completionHandler` parameter as soon as you are done. Failure to execute the completion handler block at the end of your implementation will cause your app to be terminated.

To configure the actions for a given category, create a UIUserNotificationActionSettings object and register it with the app when you call the [registerUserNotificationSettings(\_:)](../uiapplication/registerusernotificationsettings%28__%29.md) method.

## See Also

### Deprecated

- [application(\_:didRegister:)](application%28__didregister_%29.md): Deprecated. Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.
- [application(\_:didReceive:)](application%28__didreceive_%29.md): Deprecated. Sent to the delegate when a running app receives a local notification.
- [application(\_:didReceiveRemoteNotification:)](application%28__didreceiveremotenotification_%29.md): Deprecated. Called when your app has received a remote notification.
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

# application:handleActionWithIdentifier:forLocalNotification:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Called when your app has been activated because user selected a custom action from the alert panel of a local notification.

> Use [userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:](../../usernotifications/unusernotificationcenterdelegate/usernotificationcenter%28__didreceive_withcompletionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) application:(UIApplication *) application handleActionWithIdentifier:(NSString *) identifier forLocalNotification:(UILocalNotification *) notification completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `application`: The app object that received the local notification.
- `identifier`: The identifier associated with the custom action. This string corresponds to the identifier from the UILocalNotificationAction object that was used to configure the action in the local notification.
- `notification`: The local notification object that was triggered.
- `completionHandler`: A block to call when you are finished performing the action.

<a id="Discussion"></a>

## Discussion

The app calls this method when the user taps an action button in an alert displayed in response to a local notification. Local notifications that include a registered category name in their [category](../uilocalnotification/category.md) property display buttons for the actions in that category. If the user taps one of those buttons, the system wakes up the app (launching it if needed) and calls this method in the background. Your implementation of this method should perform the action associated with the specified `identifier` and execute the block in the `completionHandler` parameter as soon as you are done. Failure to execute the completion handler block at the end of your implementation will cause your app to be terminated.

To configure the actions for a given category, create a UIUserNotificationActionSettings object and register it with the app when you call the [registerUserNotificationSettings:](../uiapplication/registerusernotificationsettings%28__%29.md) method.

## See Also

### Deprecated

- [application:didRegisterUserNotificationSettings:](application%28__didregister_%29.md): Deprecated. Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.
- [application:didReceiveLocalNotification:](application%28__didreceive_%29.md): Deprecated. Sent to the delegate when a running app receives a local notification.
- [application:didReceiveRemoteNotification:](application%28__didreceiveremotenotification_%29.md): Deprecated. Called when your app has received a remote notification.
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
