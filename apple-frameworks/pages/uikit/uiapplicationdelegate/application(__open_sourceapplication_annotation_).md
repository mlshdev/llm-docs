> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:open:sourceapplication:annotation:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:open:sourceapplication:annotation:))

# application(\_:open:sourceApplication:annotation:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ (deprecated in 9.0) · iPadOS 4.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate to open a resource identified by a URL.

> Use [application(\_:open:options:)](application%28__open_options_%29.md) instead.

## Declaration

```swift
optional func application(_ application: UIApplication, open url: URL, sourceApplication: String?, annotation: Any) -> Bool
```

## Parameters

- `application`: Your singleton app object.
- `url`: The URL resource to open. This resource can be a network resource or a file. For information about the Apple-registered URL schemes, see [Apple URL Scheme Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007899).
- `sourceApplication`: The bundle ID of the app that is requesting your app to open the URL (`url`).
- `annotation`: A [Property list](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/PropertyList.html#//apple_ref/doc/uid/TP40008195-CH44) supplied by the source app to communicate information to the receiving app.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate successfully handled the request or [false](https://developer.apple.com/documentation/swift/false) if the attempt to open the URL resource failed.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should open the specified URL and update its user interface accordingly. If your app had to be launched to open the URL, the app calls the [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) and [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) methods first, followed by this method. The return values of those methods can be used to prevent this method from being called. (If the app is already running, only this method is called.)

If the URL refers to a file that was opened through a document interaction controller, the `annotation` parameter may contain additional data that the source app wanted to send along with the URL. The format of this data is defined by the app that sent it but the data must consist of objects that can be put into a property list.

Files sent to your app through AirDrop or a document interaction controller are placed in the `Documents/Inbox` directory of your app’s home directory. Your app has permission to read and delete files in this directory but does not have permission to write to them. If you want to modify a file, you must move it to a different directory first. In addition, files in that directory are usually encrypted using data protection. If the file is protected and the user locks the device before this method is called, you will be unable to read the file’s contents immediately. In that case, you should save the URL and try to open the file later rather than return [false](https://developer.apple.com/documentation/swift/false) from this method. Use the [isProtectedDataAvailable](../uiapplication/isprotecteddataavailable.md) property of the app object to determine if data protection is currently enabled.

There is no matching notification for this method.

## See Also

### Related Documentation

- [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [openURL(\_:)](../uiapplication/openurl%28__%29.md): Deprecated. Attempts to open the resource at the specified URL.

### Deprecated

- [application(\_:didRegister:)](application%28__didregister_%29.md): Deprecated. Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.
- [application(\_:didReceive:)](application%28__didreceive_%29.md): Deprecated. Sent to the delegate when a running app receives a local notification.
- [application(\_:didReceiveRemoteNotification:)](application%28__didreceiveremotenotification_%29.md): Deprecated. Called when your app has received a remote notification.
- [application(\_:handleActionWithIdentifier:for:completionHandler:)](application%28__handleactionwithidentifier_for_completionhandler_%29.md): Deprecated. Called when your app has been activated because user selected a custom action from the alert panel of a local notification.
- [application(\_:handleActionWithIdentifier:for:withResponseInfo:completionHandler:)](application%28__handleactionwithidentifier_for_withresponseinfo_completionhandler_%29.md): Deprecated. Called when your app has been activated by the user selecting an action from a local notification.
- [application(\_:handleActionWithIdentifier:forRemoteNotification:completionHandler:)](application%28__handleactionwithidentifier_forremotenotification_completionhandler_%29.md): Deprecated. Tells the app delegate to perform the custom action specified by a remote notification.
- [application(\_:handleActionWithIdentifier:forRemoteNotification:withResponseInfo:completionHandler:)](application%28__handleactionwithidentifier_forremotenotification_withresponseinfo_completionhandler_%29.md): Deprecated. Called when your app has been activated by the user selecting an action from a remote notification.
- [application(\_:handleOpen:)](application%28__handleopen_%29.md): Deprecated. Asks the delegate to open a resource identified by URL.
- [application(\_:willChangeStatusBarOrientation:duration:)](application%28__willchangestatusbarorientation_duration_%29.md): Deprecated. Tells the delegate when the interface orientation of the status bar is about to change.
- [application(\_:didChangeStatusBarOrientation:)](application%28__didchangestatusbarorientation_%29.md): Deprecated. Tells the delegate when the interface orientation of the status bar has changed.
- [application(\_:willChangeStatusBarFrame:)](application%28__willchangestatusbarframe_%29.md): Deprecated. Tells the delegate when the frame of the status bar is about to change.
- [application(\_:didChangeStatusBarFrame:)](application%28__didchangestatusbarframe_%29.md): Deprecated. Tells the delegate when the frame of the status bar has changed.
- [application(\_:handle:completionHandler:)](application%28__handle_completionhandler_%29.md): Deprecated. Asks the delegate to handle the specified SiriKit intent directly.
- [application(\_:performFetchWithCompletionHandler:)](application%28__performfetchwithcompletionhandler_%29.md): Deprecated. Tells the app that it can begin a fetch operation if it has data to download.
- [application(\_:shouldSaveApplicationState:)](application%28__shouldsaveapplicationstate_%29.md): Deprecated. Asks the delegate whether to preserve the app’s state.

# application:openURL:sourceApplication:annotation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ (deprecated in 9.0) · iPadOS 4.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate to open a resource identified by a URL.

> Use [application:openURL:options:](application%28__open_options_%29.md) instead.

## Declaration

```objectivec
- (BOOL) application:(UIApplication *) application openURL:(NSURL *) url sourceApplication:(NSString *) sourceApplication annotation:(id) annotation;
```

## Parameters

- `application`: Your singleton app object.
- `url`: The URL resource to open. This resource can be a network resource or a file. For information about the Apple-registered URL schemes, see [Apple URL Scheme Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007899).
- `sourceApplication`: The bundle ID of the app that is requesting your app to open the URL (`url`).
- `annotation`: A [Property list](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/PropertyList.html#//apple_ref/doc/uid/TP40008195-CH44) supplied by the source app to communicate information to the receiving app.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate successfully handled the request or [false](https://developer.apple.com/documentation/swift/false) if the attempt to open the URL resource failed.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should open the specified URL and update its user interface accordingly. If your app had to be launched to open the URL, the app calls the [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) and [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) methods first, followed by this method. The return values of those methods can be used to prevent this method from being called. (If the app is already running, only this method is called.)

If the URL refers to a file that was opened through a document interaction controller, the `annotation` parameter may contain additional data that the source app wanted to send along with the URL. The format of this data is defined by the app that sent it but the data must consist of objects that can be put into a property list.

Files sent to your app through AirDrop or a document interaction controller are placed in the `Documents/Inbox` directory of your app’s home directory. Your app has permission to read and delete files in this directory but does not have permission to write to them. If you want to modify a file, you must move it to a different directory first. In addition, files in that directory are usually encrypted using data protection. If the file is protected and the user locks the device before this method is called, you will be unable to read the file’s contents immediately. In that case, you should save the URL and try to open the file later rather than return [false](https://developer.apple.com/documentation/swift/false) from this method. Use the [protectedDataAvailable](../uiapplication/isprotecteddataavailable.md) property of the app object to determine if data protection is currently enabled.

There is no matching notification for this method.

## See Also

### Related Documentation

- [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [openURL:](../uiapplication/openurl%28__%29.md): Deprecated. Attempts to open the resource at the specified URL.

### Deprecated

- [application:didRegisterUserNotificationSettings:](application%28__didregister_%29.md): Deprecated. Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.
- [application:didReceiveLocalNotification:](application%28__didreceive_%29.md): Deprecated. Sent to the delegate when a running app receives a local notification.
- [application:didReceiveRemoteNotification:](application%28__didreceiveremotenotification_%29.md): Deprecated. Called when your app has received a remote notification.
- [application:handleActionWithIdentifier:forLocalNotification:completionHandler:](application%28__handleactionwithidentifier_for_completionhandler_%29.md): Deprecated. Called when your app has been activated because user selected a custom action from the alert panel of a local notification.
- [application:handleActionWithIdentifier:forLocalNotification:withResponseInfo:completionHandler:](application%28__handleactionwithidentifier_for_withresponseinfo_completionhandler_%29.md): Deprecated. Called when your app has been activated by the user selecting an action from a local notification.
- [application:handleActionWithIdentifier:forRemoteNotification:completionHandler:](application%28__handleactionwithidentifier_forremotenotification_completionhandler_%29.md): Deprecated. Tells the app delegate to perform the custom action specified by a remote notification.
- [application:handleActionWithIdentifier:forRemoteNotification:withResponseInfo:completionHandler:](application%28__handleactionwithidentifier_forremotenotification_withresponseinfo_completionhandler_%29.md): Deprecated. Called when your app has been activated by the user selecting an action from a remote notification.
- [application:handleOpenURL:](application%28__handleopen_%29.md): Deprecated. Asks the delegate to open a resource identified by URL.
- [application:willChangeStatusBarOrientation:duration:](application%28__willchangestatusbarorientation_duration_%29.md): Deprecated. Tells the delegate when the interface orientation of the status bar is about to change.
- [application:didChangeStatusBarOrientation:](application%28__didchangestatusbarorientation_%29.md): Deprecated. Tells the delegate when the interface orientation of the status bar has changed.
- [application:willChangeStatusBarFrame:](application%28__willchangestatusbarframe_%29.md): Deprecated. Tells the delegate when the frame of the status bar is about to change.
- [application:didChangeStatusBarFrame:](application%28__didchangestatusbarframe_%29.md): Deprecated. Tells the delegate when the frame of the status bar has changed.
- [application:handleIntent:completionHandler:](application%28__handle_completionhandler_%29.md): Deprecated. Asks the delegate to handle the specified SiriKit intent directly.
- [application:performFetchWithCompletionHandler:](application%28__performfetchwithcompletionhandler_%29.md): Deprecated. Tells the app that it can begin a fetch operation if it has data to download.
- [application:shouldSaveApplicationState:](application%28__shouldsaveapplicationstate_%29.md): Deprecated. Asks the delegate whether to preserve the app’s state.
