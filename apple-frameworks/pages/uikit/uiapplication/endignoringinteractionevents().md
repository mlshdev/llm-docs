> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/endignoringinteractionevents()](https://developer.apple.com/documentation/uikit/uiapplication/endignoringinteractionevents())

# endIgnoringInteractionEvents() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the receiver to resume the handling of touch-related events.

> Use [isUserInteractionEnabled](../uiview/isuserinteractionenabled.md) instead.

## Declaration

```swift
func endIgnoringInteractionEvents()
```

<a id="Discussion"></a>

## Discussion

You typically call this method when, after calling the [beginIgnoringInteractionEvents()](beginignoringinteractionevents%28%29.md) method, the animation or transition concludes. Nested calls of this method should match nested calls of the [beginIgnoringInteractionEvents()](beginignoringinteractionevents%28%29.md) method.

## See Also

### Deprecated methods

- [requestSceneSessionActivation(\_:userActivity:options:errorHandler:)](requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md): Deprecated. Asks the system to activate an existing scene, or create a new scene and associate it with your app.
- [beginIgnoringInteractionEvents()](beginignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to suspend the handling of touch-related events.
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

# endIgnoringInteractionEvents (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Tells the receiver to resume the handling of touch-related events.

> Use [userInteractionEnabled](../uiview/isuserinteractionenabled.md) instead.

## Declaration

```objectivec
- (void) endIgnoringInteractionEvents;
```

<a id="Discussion"></a>

## Discussion

You typically call this method when, after calling the [beginIgnoringInteractionEvents](beginignoringinteractionevents%28%29.md) method, the animation or transition concludes. Nested calls of this method should match nested calls of the [beginIgnoringInteractionEvents](beginignoringinteractionevents%28%29.md) method.

## See Also

### Deprecated methods

- [requestSceneSessionActivation:userActivity:options:errorHandler:](requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md): Deprecated. Asks the system to activate an existing scene, or create a new scene and associate it with your app.
- [beginIgnoringInteractionEvents](beginignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to suspend the handling of touch-related events.
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
