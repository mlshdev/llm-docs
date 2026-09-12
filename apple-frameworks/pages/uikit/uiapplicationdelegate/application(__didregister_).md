> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:didregister:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:didregister:))

# application(\_:didRegister:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.

> Use [requestAuthorization(options:completionHandler:)](../../usernotifications/unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md) instead.

## Declaration

```swift
optional func application(_ application: UIApplication, didRegister notificationSettings: UIUserNotificationSettings)
```

## Parameters

- `application`: The app object that registered the user notification settings.
- `notificationSettings`: The user’s specified notification settings for your app. The settings in this object may be different than the ones you originally requested.

<a id="Discussion"></a>

## Discussion

Apps that use local or remote notifications to alert the user to new information must register the types of notifications they want to use by calling the [registerUserNotificationSettings(\_:)](../uiapplication/registerusernotificationsettings%28__%29.md) method of the app object. The system compares your app’s request with the user’s preferences to determine the types of local and remote notifications allowed, and returns the results to your app by calling this method. Check the contents of the `notificationSettings` parameter whenever this method is called.

Because the user can change notification settings in the Settings app at any time, call the [currentUserNotificationSettings](../uiapplication/currentusernotificationsettings.md) method before your app performs work to prepare a notification for presentation.

The first time you register your app’s preferred notification types, the system asks the user whether your app should be allowed to deliver notifications and stores the user’s response. The system does not prompt the user on subsequent calls to the [registerUserNotificationSettings(\_:)](../uiapplication/registerusernotificationsettings%28__%29.md) method, but the user can always change notification preferences using Settings.

A user’s notification settings control only whether the system *displays* local or remote notifications onscreen. Regardless of the notification settings, local and remote notifications are delivered to your app at the appropriate times.

## See Also

### Deprecated

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
- [application(\_:shouldSaveApplicationState:)](application%28__shouldsaveapplicationstate_%29.md): Deprecated. Asks the delegate whether to preserve the app’s state.

# application:didRegisterUserNotificationSettings: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Called to tell the delegate the types of local and remote notifications that can be used to get the user’s attention.

> Use [requestAuthorizationWithOptions:completionHandler:](../../usernotifications/unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didRegisterUserNotificationSettings:(UIUserNotificationSettings *) notificationSettings;
```

## Parameters

- `application`: The app object that registered the user notification settings.
- `notificationSettings`: The user’s specified notification settings for your app. The settings in this object may be different than the ones you originally requested.

<a id="Discussion"></a>

## Discussion

Apps that use local or remote notifications to alert the user to new information must register the types of notifications they want to use by calling the [registerUserNotificationSettings:](../uiapplication/registerusernotificationsettings%28__%29.md) method of the app object. The system compares your app’s request with the user’s preferences to determine the types of local and remote notifications allowed, and returns the results to your app by calling this method. Check the contents of the `notificationSettings` parameter whenever this method is called.

Because the user can change notification settings in the Settings app at any time, call the [currentUserNotificationSettings](../uiapplication/currentusernotificationsettings.md) method before your app performs work to prepare a notification for presentation.

The first time you register your app’s preferred notification types, the system asks the user whether your app should be allowed to deliver notifications and stores the user’s response. The system does not prompt the user on subsequent calls to the [registerUserNotificationSettings:](../uiapplication/registerusernotificationsettings%28__%29.md) method, but the user can always change notification preferences using Settings.

A user’s notification settings control only whether the system *displays* local or remote notifications onscreen. Regardless of the notification settings, local and remote notifications are delivered to your app at the appropriate times.

## See Also

### Deprecated

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
- [application:shouldSaveApplicationState:](application%28__shouldsaveapplicationstate_%29.md): Deprecated. Asks the delegate whether to preserve the app’s state.
