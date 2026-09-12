> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:handleopen:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:handleopen:))

# application(\_:handleOpen:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate to open a resource identified by URL.

> Use the [application(\_:open:options:)](application%28__open_options_%29.md) method instead.

## Declaration

```swift
optional func application(_ application: UIApplication, handleOpen url: URL) -> Bool
```

## Parameters

- `application`: Your singleton app object.
- `url`: An object representing a URL (Universal Resource Locator). See the appendix of [App Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007072) for Apple-registered schemes for URLs.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate successfully handled the request; [false](https://developer.apple.com/documentation/swift/false) if the attempt to handle the URL failed.

<a id="Discussion"></a>

## Discussion

If the delegate also implements the [application(\_:open:sourceApplication:annotation:)](application%28__open_sourceapplication_annotation_%29.md) method, that method is called instead of this one.

This method is not called if the delegate returns [false](https://developer.apple.com/documentation/swift/false) from both the [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) and [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) methods. (If only one of the two methods is implemented, its return value determines whether this method is called.) If your app implements the [applicationDidFinishLaunching(\_:)](applicationdidfinishlaunching%28__%29.md) method instead of [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md), this method is called to open the specified URL after the app has been initialized.

If a URL arrives while your app is suspended or running in the background, the system moves your app to the foreground prior to calling this method.

There is no equivalent notification for this delegation method.

## See Also

### Related Documentation

- [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process has begun.
- [openURL(\_:)](../uiapplication/openurl%28__%29.md): Deprecated. Attempts to open the resource at the specified URL.

### Deprecated

- [application(\_:didRegister:)](application%28__didregister_%29.md): Deprecated. Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.
- [application(\_:didReceive:)](application%28__didreceive_%29.md): Deprecated. Sent to the delegate when a running app receives a local notification.
- [application(\_:didReceiveRemoteNotification:)](application%28__didreceiveremotenotification_%29.md): Deprecated. Called when your app has received a remote notification.
- [application(\_:handleActionWithIdentifier:for:completionHandler:)](application%28__handleactionwithidentifier_for_completionhandler_%29.md): Deprecated. Called when your app has been activated because user selected a custom action from the alert panel of a local notification.
- [application(\_:handleActionWithIdentifier:for:withResponseInfo:completionHandler:)](application%28__handleactionwithidentifier_for_withresponseinfo_completionhandler_%29.md): Deprecated. Called when your app has been activated by the user selecting an action from a local notification.
- [application(\_:handleActionWithIdentifier:forRemoteNotification:completionHandler:)](application%28__handleactionwithidentifier_forremotenotification_completionhandler_%29.md): Deprecated. Tells the app delegate to perform the custom action specified by a remote notification.
- [application(\_:handleActionWithIdentifier:forRemoteNotification:withResponseInfo:completionHandler:)](application%28__handleactionwithidentifier_forremotenotification_withresponseinfo_completionhandler_%29.md): Deprecated. Called when your app has been activated by the user selecting an action from a remote notification.
- [application(\_:open:sourceApplication:annotation:)](application%28__open_sourceapplication_annotation_%29.md): Deprecated. Asks the delegate to open a resource identified by a URL.
- [application(\_:willChangeStatusBarOrientation:duration:)](application%28__willchangestatusbarorientation_duration_%29.md): Deprecated. Tells the delegate when the interface orientation of the status bar is about to change.
- [application(\_:didChangeStatusBarOrientation:)](application%28__didchangestatusbarorientation_%29.md): Deprecated. Tells the delegate when the interface orientation of the status bar has changed.
- [application(\_:willChangeStatusBarFrame:)](application%28__willchangestatusbarframe_%29.md): Deprecated. Tells the delegate when the frame of the status bar is about to change.
- [application(\_:didChangeStatusBarFrame:)](application%28__didchangestatusbarframe_%29.md): Deprecated. Tells the delegate when the frame of the status bar has changed.
- [application(\_:handle:completionHandler:)](application%28__handle_completionhandler_%29.md): Deprecated. Asks the delegate to handle the specified SiriKit intent directly.
- [application(\_:performFetchWithCompletionHandler:)](application%28__performfetchwithcompletionhandler_%29.md): Deprecated. Tells the app that it can begin a fetch operation if it has data to download.
- [application(\_:shouldSaveApplicationState:)](application%28__shouldsaveapplicationstate_%29.md): Deprecated. Asks the delegate whether to preserve the app’s state.

# application:handleOpenURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate to open a resource identified by URL.

> Use the [application:openURL:options:](application%28__open_options_%29.md) method instead.

## Declaration

```objectivec
- (BOOL) application:(UIApplication *) application handleOpenURL:(NSURL *) url;
```

## Parameters

- `application`: Your singleton app object.
- `url`: An object representing a URL (Universal Resource Locator). See the appendix of [App Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007072) for Apple-registered schemes for URLs.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate successfully handled the request; [false](https://developer.apple.com/documentation/swift/false) if the attempt to handle the URL failed.

<a id="Discussion"></a>

## Discussion

If the delegate also implements the [application:openURL:sourceApplication:annotation:](application%28__open_sourceapplication_annotation_%29.md) method, that method is called instead of this one.

This method is not called if the delegate returns [false](https://developer.apple.com/documentation/swift/false) from both the [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) and [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) methods. (If only one of the two methods is implemented, its return value determines whether this method is called.) If your app implements the [applicationDidFinishLaunching:](applicationdidfinishlaunching%28__%29.md) method instead of [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md), this method is called to open the specified URL after the app has been initialized.

If a URL arrives while your app is suspended or running in the background, the system moves your app to the foreground prior to calling this method.

There is no equivalent notification for this delegation method.

## See Also

### Related Documentation

- [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process has begun.
- [openURL:](../uiapplication/openurl%28__%29.md): Deprecated. Attempts to open the resource at the specified URL.

### Deprecated

- [application:didRegisterUserNotificationSettings:](application%28__didregister_%29.md): Deprecated. Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.
- [application:didReceiveLocalNotification:](application%28__didreceive_%29.md): Deprecated. Sent to the delegate when a running app receives a local notification.
- [application:didReceiveRemoteNotification:](application%28__didreceiveremotenotification_%29.md): Deprecated. Called when your app has received a remote notification.
- [application:handleActionWithIdentifier:forLocalNotification:completionHandler:](application%28__handleactionwithidentifier_for_completionhandler_%29.md): Deprecated. Called when your app has been activated because user selected a custom action from the alert panel of a local notification.
- [application:handleActionWithIdentifier:forLocalNotification:withResponseInfo:completionHandler:](application%28__handleactionwithidentifier_for_withresponseinfo_completionhandler_%29.md): Deprecated. Called when your app has been activated by the user selecting an action from a local notification.
- [application:handleActionWithIdentifier:forRemoteNotification:completionHandler:](application%28__handleactionwithidentifier_forremotenotification_completionhandler_%29.md): Deprecated. Tells the app delegate to perform the custom action specified by a remote notification.
- [application:handleActionWithIdentifier:forRemoteNotification:withResponseInfo:completionHandler:](application%28__handleactionwithidentifier_forremotenotification_withresponseinfo_completionhandler_%29.md): Deprecated. Called when your app has been activated by the user selecting an action from a remote notification.
- [application:openURL:sourceApplication:annotation:](application%28__open_sourceapplication_annotation_%29.md): Deprecated. Asks the delegate to open a resource identified by a URL.
- [application:willChangeStatusBarOrientation:duration:](application%28__willchangestatusbarorientation_duration_%29.md): Deprecated. Tells the delegate when the interface orientation of the status bar is about to change.
- [application:didChangeStatusBarOrientation:](application%28__didchangestatusbarorientation_%29.md): Deprecated. Tells the delegate when the interface orientation of the status bar has changed.
- [application:willChangeStatusBarFrame:](application%28__willchangestatusbarframe_%29.md): Deprecated. Tells the delegate when the frame of the status bar is about to change.
- [application:didChangeStatusBarFrame:](application%28__didchangestatusbarframe_%29.md): Deprecated. Tells the delegate when the frame of the status bar has changed.
- [application:handleIntent:completionHandler:](application%28__handle_completionhandler_%29.md): Deprecated. Asks the delegate to handle the specified SiriKit intent directly.
- [application:performFetchWithCompletionHandler:](application%28__performfetchwithcompletionhandler_%29.md): Deprecated. Tells the app that it can begin a fetch operation if it has data to download.
- [application:shouldSaveApplicationState:](application%28__shouldsaveapplicationstate_%29.md): Deprecated. Asks the delegate whether to preserve the app’s state.
