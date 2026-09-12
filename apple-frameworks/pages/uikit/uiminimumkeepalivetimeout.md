> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiminimumkeepalivetimeout](https://developer.apple.com/documentation/uikit/uiminimumkeepalivetimeout)

# UIMinimumKeepAliveTimeout (Swift)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

The minimum amount of time (measured in seconds) an app may run a critical background task in the background.

> Use [PushKit](../pushkit.md) for VoIP apps instead.

## Declaration

```swift
let UIMinimumKeepAliveTimeout: TimeInterval
```

## See Also

### Deprecated methods

- [requestSceneSessionActivation(\_:userActivity:options:errorHandler:)](uiapplication/requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md): Deprecated. Asks the system to activate an existing scene, or create a new scene and associate it with your app.
- [beginIgnoringInteractionEvents()](uiapplication/beginignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to suspend the handling of touch-related events.
- [endIgnoringInteractionEvents()](uiapplication/endignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to resume the handling of touch-related events.
- [setMinimumBackgroundFetchInterval(\_:)](uiapplication/setminimumbackgroundfetchinterval%28__%29.md): Deprecated. Specifies the minimum amount of time that must elapse between background fetch operations.
- [scheduleLocalNotification(\_:)](uiapplication/schedulelocalnotification%28__%29.md): Deprecated. Schedules a local notification for delivery at its encapsulated date and time.
- [presentLocalNotificationNow(\_:)](uiapplication/presentlocalnotificationnow%28__%29.md): Deprecated. Presents a local notification immediately.
- [cancelLocalNotification(\_:)](uiapplication/cancellocalnotification%28__%29.md): Deprecated. Cancels the delivery of the specified scheduled local notification.
- [cancelAllLocalNotifications()](uiapplication/cancelalllocalnotifications%28%29.md): Deprecated. Cancels the delivery of all scheduled local notifications.
- [setKeepAliveTimeout(\_:handler:)](uiapplication/setkeepalivetimeout%28__handler_%29.md): Deprecated. Configures a periodic handler for VoIP apps in older versions of iOS.
- [clearKeepAliveTimeout()](uiapplication/clearkeepalivetimeout%28%29.md): Deprecated. Removes a previously installed periodic handler block.
- [setStatusBarHidden(\_:with:)](uiapplication/setstatusbarhidden%28__with_%29.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarStyle(\_:animated:)](uiapplication/setstatusbarstyle%28__animated_%29.md): Deprecated. Sets the style of the status bar, optionally animating the transition to the new style.
- [setStatusBarOrientation(\_:animated:)](uiapplication/setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
- [registerUserNotificationSettings(\_:)](uiapplication/registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.
- [registerForRemoteNotifications(matching:)](uiapplication/registerforremotenotifications%28matching_%29.md): Deprecated. Register to receive remote notifications of the specified types via Apple Push Notification service.

# UIMinimumKeepAliveTimeout (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

The minimum amount of time (measured in seconds) an app may run a critical background task in the background.

> Use [PushKit](../pushkit.md) for VoIP apps instead.

## Declaration

```objectivec
extern const NSTimeInterval UIMinimumKeepAliveTimeout;
```

## See Also

### Deprecated methods

- [requestSceneSessionActivation:userActivity:options:errorHandler:](uiapplication/requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md): Deprecated. Asks the system to activate an existing scene, or create a new scene and associate it with your app.
- [beginIgnoringInteractionEvents](uiapplication/beginignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to suspend the handling of touch-related events.
- [endIgnoringInteractionEvents](uiapplication/endignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to resume the handling of touch-related events.
- [setMinimumBackgroundFetchInterval:](uiapplication/setminimumbackgroundfetchinterval%28__%29.md): Deprecated. Specifies the minimum amount of time that must elapse between background fetch operations.
- [scheduleLocalNotification:](uiapplication/schedulelocalnotification%28__%29.md): Deprecated. Schedules a local notification for delivery at its encapsulated date and time.
- [presentLocalNotificationNow:](uiapplication/presentlocalnotificationnow%28__%29.md): Deprecated. Presents a local notification immediately.
- [cancelLocalNotification:](uiapplication/cancellocalnotification%28__%29.md): Deprecated. Cancels the delivery of the specified scheduled local notification.
- [cancelAllLocalNotifications](uiapplication/cancelalllocalnotifications%28%29.md): Deprecated. Cancels the delivery of all scheduled local notifications.
- [setKeepAliveTimeout:handler:](uiapplication/setkeepalivetimeout%28__handler_%29.md): Deprecated. Configures a periodic handler for VoIP apps in older versions of iOS.
- [clearKeepAliveTimeout](uiapplication/clearkeepalivetimeout%28%29.md): Deprecated. Removes a previously installed periodic handler block.
- [setStatusBarHidden:animated:](uiapplication/setstatusbarhidden_animated_.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarHidden:withAnimation:](uiapplication/setstatusbarhidden%28__with_%29.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarStyle:animated:](uiapplication/setstatusbarstyle%28__animated_%29.md): Deprecated. Sets the style of the status bar, optionally animating the transition to the new style.
- [setStatusBarOrientation:animated:](uiapplication/setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
- [registerUserNotificationSettings:](uiapplication/registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.
