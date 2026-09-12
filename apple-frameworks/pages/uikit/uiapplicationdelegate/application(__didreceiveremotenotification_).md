> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:didreceiveremotenotification:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:didreceiveremotenotification:))

# application(\_:didReceiveRemoteNotification:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 10.0) · iPadOS 3.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 10.0)

Called when your app has received a remote notification.

> Use [application(\_:didReceiveRemoteNotification:fetchCompletionHandler:)](application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) instead.

## Declaration

```swift
optional func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any])
```

## Parameters

- `application`: The app object that received the remote notification.
- `userInfo`: A dictionary that contains information related to the remote notification, potentially including a badge number for the app icon, an alert sound, an alert message to display to the user, a notification identifier, and custom data. The provider originates it as a JSON-defined dictionary that iOS converts to an [NSDictionary](../../foundation/nsdictionary.md) object; the dictionary might contain only property-list objects plus [NSNull](../../foundation/nsnull.md).

<a id="Discussion"></a>

## Discussion

Implement the [application(\_:didReceiveRemoteNotification:fetchCompletionHandler:)](application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) method instead of this one whenever possible. If your delegate implements both methods, the app object calls the [application(\_:didReceiveRemoteNotification:fetchCompletionHandler:)](application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) method.

If the app is running, the app calls this method to process incoming remote notifications. The `userInfo` dictionary contains the `aps` key whose value is another dictionary with the remaining notification data. Although you should not need the information in the `aps` dictionary, you can retrieve its contents using the following keys:

- `alert`—The value is either a string for the alert message or a dictionary with two keys: `body` and `show-view`. The value of the `body` key is a string containing the alert message and the value of the `show-view` key is a Boolean. If the value of the `show-view` key is `false`, the alert’s View button is not shown. The default is to show the View button which, if the user taps it, launches the app.
- `badge`—A number indicating the quantity of data items to download from the provider. This number is to be displayed on the app icon. The absence of a `badge` property indicates that any number currently badging the icon should be removed.
- `sound`—The name of a sound file in the app bundle to play as an alert sound. If “default” is specified, the default sound should be played.

The `userInfo` dictionary may also have custom data defined by the provider according to the JSON schema. The properties for custom data should be specified at the same level as the `aps` dictionary. However, custom-defined properties should not be used for mass data transport because there is a strict size limit per notification (256 bytes) and delivery is not guaranteed.

If the app is not running when a remote notification arrives, the method launches the app and provides the appropriate information in the launch options dictionary. The app does not call this method to handle that remote notification. Instead, your implementation of the [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) or [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) method needs to get the remote notification payload data and respond appropriately.

For more information about how to implement remote notifications in your app, see [Local and Remote Notification Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194).

## See Also

### Related Documentation

- [application(\_:didRegisterForRemoteNotificationsWithDeviceToken:)](application%28__didregisterforremotenotificationswithdevicetoken_%29.md): Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [application(\_:didFailToRegisterForRemoteNotificationsWithError:)](application%28__didfailtoregisterforremotenotificationswitherror_%29.md): Tells the delegate when Apple Push Notification service cannot successfully complete the registration process.

### Deprecated

- [application(\_:didRegister:)](application%28__didregister_%29.md): Deprecated. Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.
- [application(\_:didReceive:)](application%28__didreceive_%29.md): Deprecated. Sent to the delegate when a running app receives a local notification.
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

# application:didReceiveRemoteNotification: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 10.0) · iPadOS 3.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 10.0)

Called when your app has received a remote notification.

> Use [application:didReceiveRemoteNotification:fetchCompletionHandler:](application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didReceiveRemoteNotification:(NSDictionary *) userInfo;
```

## Parameters

- `application`: The app object that received the remote notification.
- `userInfo`: A dictionary that contains information related to the remote notification, potentially including a badge number for the app icon, an alert sound, an alert message to display to the user, a notification identifier, and custom data. The provider originates it as a JSON-defined dictionary that iOS converts to an [NSDictionary](../../foundation/nsdictionary.md) object; the dictionary might contain only property-list objects plus [NSNull](../../foundation/nsnull.md).

<a id="Discussion"></a>

## Discussion

Implement the [application:didReceiveRemoteNotification:fetchCompletionHandler:](application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) method instead of this one whenever possible. If your delegate implements both methods, the app object calls the [application:didReceiveRemoteNotification:fetchCompletionHandler:](application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) method.

If the app is running, the app calls this method to process incoming remote notifications. The `userInfo` dictionary contains the `aps` key whose value is another dictionary with the remaining notification data. Although you should not need the information in the `aps` dictionary, you can retrieve its contents using the following keys:

- `alert`—The value is either a string for the alert message or a dictionary with two keys: `body` and `show-view`. The value of the `body` key is a string containing the alert message and the value of the `show-view` key is a Boolean. If the value of the `show-view` key is `false`, the alert’s View button is not shown. The default is to show the View button which, if the user taps it, launches the app.
- `badge`—A number indicating the quantity of data items to download from the provider. This number is to be displayed on the app icon. The absence of a `badge` property indicates that any number currently badging the icon should be removed.
- `sound`—The name of a sound file in the app bundle to play as an alert sound. If “default” is specified, the default sound should be played.

The `userInfo` dictionary may also have custom data defined by the provider according to the JSON schema. The properties for custom data should be specified at the same level as the `aps` dictionary. However, custom-defined properties should not be used for mass data transport because there is a strict size limit per notification (256 bytes) and delivery is not guaranteed.

If the app is not running when a remote notification arrives, the method launches the app and provides the appropriate information in the launch options dictionary. The app does not call this method to handle that remote notification. Instead, your implementation of the [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) or [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) method needs to get the remote notification payload data and respond appropriately.

For more information about how to implement remote notifications in your app, see [Local and Remote Notification Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194).

## See Also

### Related Documentation

- [application:didRegisterForRemoteNotificationsWithDeviceToken:](application%28__didregisterforremotenotificationswithdevicetoken_%29.md): Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [application:didFailToRegisterForRemoteNotificationsWithError:](application%28__didfailtoregisterforremotenotificationswitherror_%29.md): Tells the delegate when Apple Push Notification service cannot successfully complete the registration process.

### Deprecated

- [application:didRegisterUserNotificationSettings:](application%28__didregister_%29.md): Deprecated. Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.
- [application:didReceiveLocalNotification:](application%28__didreceive_%29.md): Deprecated. Sent to the delegate when a running app receives a local notification.
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
