> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/requestscenesessionactivation(_:useractivity:options:errorhandler:)](https://developer.apple.com/documentation/uikit/uiapplication/requestscenesessionactivation(_:useractivity:options:errorhandler:))

# requestSceneSessionActivation(\_:userActivity:options:errorHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Asks the system to activate an existing scene, or create a new scene and associate it with your app.

> Use [activateSceneSession(for:errorHandler:)](activatescenesession%28for_errorhandler_%29.md) (Swift) or [activateSceneSessionForRequest:errorHandler:](activatescenesessionforrequest_errorhandler_.md) (Objective-C) instead.

## Declaration

```swift
func requestSceneSessionActivation(_ sceneSession: UISceneSession?, userActivity: NSUserActivity?, options: UIScene.ActivationRequestOptions?, errorHandler: ((any Error) -> Void)? = nil)
```

## Parameters

- `sceneSession`: The session whose scene you want to activate. Specify `nil` when you want the system to create a new scene for your app.
- `userActivity`: A user activity object to dispatch to the session’s scene. Use this object to communicate details about a task you want the scene to perform.
- `options`: Information for the system to use when creating or activating the scene. For information about how to create this object, see [UIScene.ActivationRequestOptions](../uiscene/activationrequestoptions.md).
- `errorHandler`: An error handler block to execute if a problem occurs. The method doesn’t execute this block when it successfully activates the scene. This block has no return value and has the following parameter:

  - **error**: The [NSError](../../foundation/nserror.md) object describing the problem that occurred.

<a id="Discussion"></a>

## Discussion

Call this method when you want the system to display one of your app’s scenes. For example, you might call this method to dispatch work to the scene in the form of an [NSUserActivity](../../foundation/nsuseractivity.md) object. When activating an existing session whose scene is no longer in memory, the system creates a new scene and connects it to your app. Similarly, specifying `nil` for the `sceneSession` parameter causes the system to create a new scene and corresponding session.

## See Also

### Deprecated methods

- [beginIgnoringInteractionEvents()](beginignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to suspend the handling of touch-related events.
- [endIgnoringInteractionEvents()](endignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to resume the handling of touch-related events.
- [setMinimumBackgroundFetchInterval(\_:)](setminimumbackgroundfetchinterval%28__%29.md): Deprecated. Specifies the minimum amount of time that must elapse between background fetch operations.
- [scheduleLocalNotification(\_:)](schedulelocalnotification%28__%29.md): Deprecated. Schedules a local notification for delivery at its encapsulated date and time.
- [presentLocalNotificationNow(\_:)](presentlocalnotificationnow%28__%29.md): Deprecated. Presents a local notification immediately.
- [cancelLocalNotification(\_:)](cancellocalnotification%28__%29.md): Deprecated. Cancels the delivery of the specified scheduled local notification.
- [cancelAllLocalNotifications()](cancelalllocalnotifications%28%29.md): Deprecated. Cancels the delivery of all scheduled local notifications.
- [setKeepAliveTimeout(\_:handler:)](setkeepalivetimeout%28__handler_%29.md): Deprecated. Configures a periodic handler for VoIP apps in older versions of iOS.
- [UIMinimumKeepAliveTimeout](../uiminimumkeepalivetimeout.md): Deprecated. The minimum amount of time (measured in seconds) an app may run a critical background task in the background.
- [clearKeepAliveTimeout()](clearkeepalivetimeout%28%29.md): Deprecated. Removes a previously installed periodic handler block.
- [setStatusBarHidden(\_:with:)](setstatusbarhidden%28__with_%29.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarStyle(\_:animated:)](setstatusbarstyle%28__animated_%29.md): Deprecated. Sets the style of the status bar, optionally animating the transition to the new style.
- [setStatusBarOrientation(\_:animated:)](setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
- [registerUserNotificationSettings(\_:)](registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.
- [registerForRemoteNotifications(matching:)](registerforremotenotifications%28matching_%29.md): Deprecated. Register to receive remote notifications of the specified types via Apple Push Notification service.

# requestSceneSessionActivation:userActivity:options:errorHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Asks the system to activate an existing scene, or create a new scene and associate it with your app.

> Use [activateSceneSession(for:errorHandler:)](activatescenesession%28for_errorhandler_%29.md) (Swift) or [activateSceneSessionForRequest:errorHandler:](activatescenesessionforrequest_errorhandler_.md) (Objective-C) instead.

## Declaration

```objectivec
- (void) requestSceneSessionActivation:(UISceneSession *) sceneSession userActivity:(NSUserActivity *) userActivity options:(UISceneActivationRequestOptions *) options errorHandler:(void (^)(NSError *error)) errorHandler;
```

## Parameters

- `sceneSession`: The session whose scene you want to activate. Specify `nil` when you want the system to create a new scene for your app.
- `userActivity`: A user activity object to dispatch to the session’s scene. Use this object to communicate details about a task you want the scene to perform.
- `options`: Information for the system to use when creating or activating the scene. For information about how to create this object, see [UISceneActivationRequestOptions](../uiscene/activationrequestoptions.md).
- `errorHandler`: An error handler block to execute if a problem occurs. The method doesn’t execute this block when it successfully activates the scene. This block has no return value and has the following parameter:

  - **error**: The [NSError](../../foundation/nserror.md) object describing the problem that occurred.

<a id="Discussion"></a>

## Discussion

Call this method when you want the system to display one of your app’s scenes. For example, you might call this method to dispatch work to the scene in the form of an [NSUserActivity](../../foundation/nsuseractivity.md) object. When activating an existing session whose scene is no longer in memory, the system creates a new scene and connects it to your app. Similarly, specifying `nil` for the `sceneSession` parameter causes the system to create a new scene and corresponding session.

## See Also

### Deprecated methods

- [beginIgnoringInteractionEvents](beginignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to suspend the handling of touch-related events.
- [endIgnoringInteractionEvents](endignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to resume the handling of touch-related events.
- [setMinimumBackgroundFetchInterval:](setminimumbackgroundfetchinterval%28__%29.md): Deprecated. Specifies the minimum amount of time that must elapse between background fetch operations.
- [scheduleLocalNotification:](schedulelocalnotification%28__%29.md): Deprecated. Schedules a local notification for delivery at its encapsulated date and time.
- [presentLocalNotificationNow:](presentlocalnotificationnow%28__%29.md): Deprecated. Presents a local notification immediately.
- [cancelLocalNotification:](cancellocalnotification%28__%29.md): Deprecated. Cancels the delivery of the specified scheduled local notification.
- [cancelAllLocalNotifications](cancelalllocalnotifications%28%29.md): Deprecated. Cancels the delivery of all scheduled local notifications.
- [setKeepAliveTimeout:handler:](setkeepalivetimeout%28__handler_%29.md): Deprecated. Configures a periodic handler for VoIP apps in older versions of iOS.
- [UIMinimumKeepAliveTimeout](../uiminimumkeepalivetimeout.md): Deprecated. The minimum amount of time (measured in seconds) an app may run a critical background task in the background.
- [clearKeepAliveTimeout](clearkeepalivetimeout%28%29.md): Deprecated. Removes a previously installed periodic handler block.
- [setStatusBarHidden:animated:](setstatusbarhidden_animated_.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarHidden:withAnimation:](setstatusbarhidden%28__with_%29.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarStyle:animated:](setstatusbarstyle%28__animated_%29.md): Deprecated. Sets the style of the status bar, optionally animating the transition to the new style.
- [setStatusBarOrientation:animated:](setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
- [registerUserNotificationSettings:](registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.
