> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:shouldsaveapplicationstate:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:shouldsaveapplicationstate:))

# application(\_:shouldSaveApplicationState:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.2) · iPadOS 6.0+ (deprecated in 13.2) · Mac Catalyst 13.1+ (deprecated in 13.2) · tvOS  (deprecated in 13.2)

Asks the delegate whether to preserve the app’s state.

> Use [application(\_:shouldSaveSecureApplicationState:)](application%28__shouldsavesecureapplicationstate_%29.md) instead.

## Declaration

```swift
optional func application(_ application: UIApplication, shouldSaveApplicationState coder: NSCoder) -> Bool
```

## Parameters

- `application`: Your singleton app object.
- `coder`: The keyed archiver into which you can put high-level state information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the app’s state should be preserved; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Apps must implement this method and the [application(\_:shouldRestoreApplicationState:)](application%28__shouldrestoreapplicationstate_%29.md) method for state preservation to occur. In addition, your implementation of this method must return [true](https://developer.apple.com/documentation/swift/true) each time UIKit tries to preserve the state of your app. You can return [false](https://developer.apple.com/documentation/swift/false) to disable state preservation temporarily. For example, during testing, you could disable state preservation to test specific code paths.

You can add version information or any other contextual data to the provided coder object as needed. During restoration, you can use that information to help decide whether or not to proceed with restoring your app to its previous state.

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
- [application(\_:performFetchWithCompletionHandler:)](application%28__performfetchwithcompletionhandler_%29.md): Deprecated. Tells the app that it can begin a fetch operation if it has data to download.

# application:shouldSaveApplicationState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.2) · iPadOS 6.0+ (deprecated in 13.2) · Mac Catalyst 13.1+ (deprecated in 13.2) · tvOS  (deprecated in 13.2)

Asks the delegate whether to preserve the app’s state.

> Use [application:shouldSaveSecureApplicationState:](application%28__shouldsavesecureapplicationstate_%29.md) instead.

## Declaration

```objectivec
- (BOOL) application:(UIApplication *) application shouldSaveApplicationState:(NSCoder *) coder;
```

## Parameters

- `application`: Your singleton app object.
- `coder`: The keyed archiver into which you can put high-level state information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the app’s state should be preserved; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Apps must implement this method and the [application:shouldRestoreApplicationState:](application%28__shouldrestoreapplicationstate_%29.md) method for state preservation to occur. In addition, your implementation of this method must return [true](https://developer.apple.com/documentation/swift/true) each time UIKit tries to preserve the state of your app. You can return [false](https://developer.apple.com/documentation/swift/false) to disable state preservation temporarily. For example, during testing, you could disable state preservation to test specific code paths.

You can add version information or any other contextual data to the provided coder object as needed. During restoration, you can use that information to help decide whether or not to proceed with restoring your app to its previous state.

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
- [application:performFetchWithCompletionHandler:](application%28__performfetchwithcompletionhandler_%29.md): Deprecated. Tells the app that it can begin a fetch operation if it has data to download.
