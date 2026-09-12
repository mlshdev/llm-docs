> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/setstatusbarstyle(_:animated:)](https://developer.apple.com/documentation/uikit/uiapplication/setstatusbarstyle(_:animated:))

# setStatusBarStyle(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sets the style of the status bar, optionally animating the transition to the new style.

> Use [preferredStatusBarStyle](../uiviewcontroller/preferredstatusbarstyle.md) instead.

## Declaration

```swift
func setStatusBarStyle(_ statusBarStyle: UIStatusBarStyle, animated: Bool)
```

## Parameters

- `statusBarStyle`: A constant that specifies a style for the status bar. See the descriptions of the constants in [UIStatusBarStyle](../uistatusbarstyle.md) for details.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the transition to the new style should be animated; otherwise [false](https://developer.apple.com/documentation/swift/false) .

<a id="Discussion"></a>

## Discussion

The animation slides the status bar out toward the top of the interface.

In iOS 7 and later, status bar behavior is determined by view controllers, and so calling this method has no effect by default. When view controller-based status bar appearance is disabled, this method behaves normally. To opt out of the view controller-based status bar appearance behavior, you must add the `UIViewControllerBasedStatusBarAppearance` key with a value of [false](https://developer.apple.com/documentation/swift/false) to your app’s `Info.plist` file, but doing so is not recommended.

## See Also

### Related Documentation

- [statusBarStyle](statusbarstyle.md): Deprecated. The current style of the status bar.

### Deprecated methods

- [requestSceneSessionActivation(\_:userActivity:options:errorHandler:)](requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md): Deprecated. Asks the system to activate an existing scene, or create a new scene and associate it with your app.
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
- [setStatusBarOrientation(\_:animated:)](setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
- [registerUserNotificationSettings(\_:)](registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.
- [registerForRemoteNotifications(matching:)](registerforremotenotifications%28matching_%29.md): Deprecated. Register to receive remote notifications of the specified types via Apple Push Notification service.

# setStatusBarStyle:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sets the style of the status bar, optionally animating the transition to the new style.

> Use [preferredStatusBarStyle](../uiviewcontroller/preferredstatusbarstyle.md) instead.

## Declaration

```objectivec
- (void) setStatusBarStyle:(UIStatusBarStyle) statusBarStyle animated:(BOOL) animated;
```

## Parameters

- `statusBarStyle`: A constant that specifies a style for the status bar. See the descriptions of the constants in [UIStatusBarStyle](../uistatusbarstyle.md) for details.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the transition to the new style should be animated; otherwise [false](https://developer.apple.com/documentation/swift/false) .

<a id="Discussion"></a>

## Discussion

The animation slides the status bar out toward the top of the interface.

In iOS 7 and later, status bar behavior is determined by view controllers, and so calling this method has no effect by default. When view controller-based status bar appearance is disabled, this method behaves normally. To opt out of the view controller-based status bar appearance behavior, you must add the `UIViewControllerBasedStatusBarAppearance` key with a value of [false](https://developer.apple.com/documentation/swift/false) to your app’s `Info.plist` file, but doing so is not recommended.

## See Also

### Related Documentation

- [statusBarStyle](statusbarstyle.md): Deprecated. The current style of the status bar.

### Deprecated methods

- [requestSceneSessionActivation:userActivity:options:errorHandler:](requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md): Deprecated. Asks the system to activate an existing scene, or create a new scene and associate it with your app.
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
- [setStatusBarOrientation:animated:](setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
- [registerUserNotificationSettings:](registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.
