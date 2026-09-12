> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:performfetchwithcompletionhandler:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:performfetchwithcompletionhandler:))

# application(\_:performFetchWithCompletionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 11.0+ (deprecated in 13.0)

Tells the app that it can begin a fetch operation if it has data to download.

> For apps supporting iOS 13 and higher use [BGAppRefreshTask](../../backgroundtasks/bgapprefreshtask.md).

## Declaration

```swift
optional func application(_ application: UIApplication, performFetchWithCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void)
```

## Parameters

- `application`: Your singleton app object.
- `completionHandler`: The block to execute when the download operation is complete. When calling this block, pass in the fetch result value that best describes the results of your download operation. You must call this handler and should do so as soon as possible. For a list of possible values, see the [UIBackgroundFetchResult](../uibackgroundfetchresult.md) type.

## Mentioned In

- [Using background tasks to update your app](../using-background-tasks-to-update-your-app.md)

<a id="Discussion"></a>

## Discussion

Implement this method if your app supports the `fetch` background mode. When an opportunity arises to download data, the system calls this method to give your app a chance to download any data it needs. Your implementation of this method should download the data, prepare that data for use, and call the block in the `completionHandler` parameter.

When this method is called, your app has up to 30 seconds of wall-clock time to perform the download operation and call the specified completion handler block. In practice, your app should call the completion handler block as soon as possible after downloading the needed data. If you do not call the completion handler in time, your app is terminated. More importantly, the system uses the elapsed time to calculate power usage and data costs for your app’s background downloads. If your app takes a long time to call the completion handler, it may be given fewer future opportunities to fetch data in the future. For more information about supporting background fetch operations, see [Background Execution](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BackgroundExecution/BackgroundExecution.html#//apple_ref/doc/uid/TP40007072-CH4) in [App Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007072).

## See Also

### Deprecated

- [application(\_:didRegister:)](application%28__didregister_%29.md): Deprecated. Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.
- [application(\_:didReceive:)](application%28__didreceive_%29.md): Deprecated. Sent to the delegate when a running app receives a local notification.
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
- [application(\_:shouldSaveApplicationState:)](application%28__shouldsaveapplicationstate_%29.md): Deprecated. Asks the delegate whether to preserve the app’s state.

# application:performFetchWithCompletionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 11.0+ (deprecated in 13.0)

Tells the app that it can begin a fetch operation if it has data to download.

> For apps supporting iOS 13 and higher use [BGAppRefreshTask](../../backgroundtasks/bgapprefreshtask.md).

## Declaration

```objectivec
- (void) application:(UIApplication *) application performFetchWithCompletionHandler:(void (^)(UIBackgroundFetchResult result)) completionHandler;
```

## Parameters

- `application`: Your singleton app object.
- `completionHandler`: The block to execute when the download operation is complete. When calling this block, pass in the fetch result value that best describes the results of your download operation. You must call this handler and should do so as soon as possible. For a list of possible values, see the [UIBackgroundFetchResult](../uibackgroundfetchresult.md) type.

## Mentioned In

- [Using background tasks to update your app](../using-background-tasks-to-update-your-app.md)

<a id="Discussion"></a>

## Discussion

Implement this method if your app supports the `fetch` background mode. When an opportunity arises to download data, the system calls this method to give your app a chance to download any data it needs. Your implementation of this method should download the data, prepare that data for use, and call the block in the `completionHandler` parameter.

When this method is called, your app has up to 30 seconds of wall-clock time to perform the download operation and call the specified completion handler block. In practice, your app should call the completion handler block as soon as possible after downloading the needed data. If you do not call the completion handler in time, your app is terminated. More importantly, the system uses the elapsed time to calculate power usage and data costs for your app’s background downloads. If your app takes a long time to call the completion handler, it may be given fewer future opportunities to fetch data in the future. For more information about supporting background fetch operations, see [Background Execution](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BackgroundExecution/BackgroundExecution.html#//apple_ref/doc/uid/TP40007072-CH4) in [App Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007072).

## See Also

### Deprecated

- [application:didRegisterUserNotificationSettings:](application%28__didregister_%29.md): Deprecated. Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.
- [application:didReceiveLocalNotification:](application%28__didreceive_%29.md): Deprecated. Sent to the delegate when a running app receives a local notification.
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
- [application:shouldSaveApplicationState:](application%28__shouldsaveapplicationstate_%29.md): Deprecated. Asks the delegate whether to preserve the app’s state.
