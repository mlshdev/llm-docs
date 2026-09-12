> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/setkeepalivetimeout(_:handler:)](https://developer.apple.com/documentation/uikit/uiapplication/setkeepalivetimeout(_:handler:))

# setKeepAliveTimeout(\_:handler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Configures a periodic handler for VoIP apps in older versions of iOS.

> This legacy VoIP API was deprecated in iOS 10.0. Use [PushKit](../../pushkit.md) to develop VoIP apps.

## Declaration

```swift
func setKeepAliveTimeout(_ timeout: TimeInterval, handler keepAliveHandler: (() -> Void)? = nil) -> Bool
```

## Parameters

- `timeout`: The maximum interval (measured in seconds) at which your app should be woken up to check its VoIP connection. The minimum acceptable timeout value is 600 seconds.
- `keepAliveHandler`: A block that performs the tasks needed to maintain your VoIP network connection. Setting this parameter to `nil` releases the current handler block and prevents UIKit from scheduling the next wake.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the handler was installed or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

In iOS 8 and later, voice-over-IP (VoIP) apps register for [registerForRemoteNotifications()](registerforremotenotifications%28%29.md) remote notifications instead of using this method. Using remote notifications eliminates the need for a timeout handler to check in with the VoIP service. Instead, when a calls arrives for the user, the VoIP service sends a VoIP remote notification to the user’s device. Upon receiving this notification, the device launches or wakes the app as needed so that it can handle the incoming call.

In iOS 7 and earlier, VoIP apps use this method to install a handler whose job is to maintain the app’s network connection with a VoIP server. This handler is guaranteed to be called before the specified timeout value but may be called at a slightly different time interval in order to better align execution of your handler with other system tasks, and thereby save power. Your handler has a maximum of 10 seconds to perform any needed tasks and exit. If it does not exit before time expires, the app is suspended.

Timeout values and handlers are not persisted between app launches. Therefore, if your app is terminated for any reason, you must reinstall the handler during the next launch cycle.

For calls to this method to succeed, the app must have the `voip` value in the array associated with the `UIBackgroundModes` key in its `Info.plist` file. Calling this method replaces the previously installed handler and timeout values, if any.

## See Also

### Deprecated methods

- [requestSceneSessionActivation(\_:userActivity:options:errorHandler:)](requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md): Deprecated. Asks the system to activate an existing scene, or create a new scene and associate it with your app.
- [beginIgnoringInteractionEvents()](beginignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to suspend the handling of touch-related events.
- [endIgnoringInteractionEvents()](endignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to resume the handling of touch-related events.
- [setMinimumBackgroundFetchInterval(\_:)](setminimumbackgroundfetchinterval%28__%29.md): Deprecated. Specifies the minimum amount of time that must elapse between background fetch operations.
- [scheduleLocalNotification(\_:)](schedulelocalnotification%28__%29.md): Deprecated. Schedules a local notification for delivery at its encapsulated date and time.
- [presentLocalNotificationNow(\_:)](presentlocalnotificationnow%28__%29.md): Deprecated. Presents a local notification immediately.
- [cancelLocalNotification(\_:)](cancellocalnotification%28__%29.md): Deprecated. Cancels the delivery of the specified scheduled local notification.
- [cancelAllLocalNotifications()](cancelalllocalnotifications%28%29.md): Deprecated. Cancels the delivery of all scheduled local notifications.
- [UIMinimumKeepAliveTimeout](../uiminimumkeepalivetimeout.md): Deprecated. The minimum amount of time (measured in seconds) an app may run a critical background task in the background.
- [clearKeepAliveTimeout()](clearkeepalivetimeout%28%29.md): Deprecated. Removes a previously installed periodic handler block.
- [setStatusBarHidden(\_:with:)](setstatusbarhidden%28__with_%29.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarStyle(\_:animated:)](setstatusbarstyle%28__animated_%29.md): Deprecated. Sets the style of the status bar, optionally animating the transition to the new style.
- [setStatusBarOrientation(\_:animated:)](setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
- [registerUserNotificationSettings(\_:)](registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.
- [registerForRemoteNotifications(matching:)](registerforremotenotifications%28matching_%29.md): Deprecated. Register to receive remote notifications of the specified types via Apple Push Notification service.

# setKeepAliveTimeout:handler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Configures a periodic handler for VoIP apps in older versions of iOS.

> This legacy VoIP API was deprecated in iOS 10.0. Use [PushKit](../../pushkit.md) to develop VoIP apps.

## Declaration

```objectivec
- (BOOL) setKeepAliveTimeout:(NSTimeInterval) timeout handler:(void (^)()) keepAliveHandler;
```

## Parameters

- `timeout`: The maximum interval (measured in seconds) at which your app should be woken up to check its VoIP connection. The minimum acceptable timeout value is 600 seconds.
- `keepAliveHandler`: A block that performs the tasks needed to maintain your VoIP network connection. Setting this parameter to `nil` releases the current handler block and prevents UIKit from scheduling the next wake.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the handler was installed or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

In iOS 8 and later, voice-over-IP (VoIP) apps register for [registerForRemoteNotifications](registerforremotenotifications%28%29.md) remote notifications instead of using this method. Using remote notifications eliminates the need for a timeout handler to check in with the VoIP service. Instead, when a calls arrives for the user, the VoIP service sends a VoIP remote notification to the user’s device. Upon receiving this notification, the device launches or wakes the app as needed so that it can handle the incoming call.

In iOS 7 and earlier, VoIP apps use this method to install a handler whose job is to maintain the app’s network connection with a VoIP server. This handler is guaranteed to be called before the specified timeout value but may be called at a slightly different time interval in order to better align execution of your handler with other system tasks, and thereby save power. Your handler has a maximum of 10 seconds to perform any needed tasks and exit. If it does not exit before time expires, the app is suspended.

Timeout values and handlers are not persisted between app launches. Therefore, if your app is terminated for any reason, you must reinstall the handler during the next launch cycle.

For calls to this method to succeed, the app must have the `voip` value in the array associated with the `UIBackgroundModes` key in its `Info.plist` file. Calling this method replaces the previously installed handler and timeout values, if any.

## See Also

### Deprecated methods

- [requestSceneSessionActivation:userActivity:options:errorHandler:](requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md): Deprecated. Asks the system to activate an existing scene, or create a new scene and associate it with your app.
- [beginIgnoringInteractionEvents](beginignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to suspend the handling of touch-related events.
- [endIgnoringInteractionEvents](endignoringinteractionevents%28%29.md): Deprecated. Tells the receiver to resume the handling of touch-related events.
- [setMinimumBackgroundFetchInterval:](setminimumbackgroundfetchinterval%28__%29.md): Deprecated. Specifies the minimum amount of time that must elapse between background fetch operations.
- [scheduleLocalNotification:](schedulelocalnotification%28__%29.md): Deprecated. Schedules a local notification for delivery at its encapsulated date and time.
- [presentLocalNotificationNow:](presentlocalnotificationnow%28__%29.md): Deprecated. Presents a local notification immediately.
- [cancelLocalNotification:](cancellocalnotification%28__%29.md): Deprecated. Cancels the delivery of the specified scheduled local notification.
- [cancelAllLocalNotifications](cancelalllocalnotifications%28%29.md): Deprecated. Cancels the delivery of all scheduled local notifications.
- [UIMinimumKeepAliveTimeout](../uiminimumkeepalivetimeout.md): Deprecated. The minimum amount of time (measured in seconds) an app may run a critical background task in the background.
- [clearKeepAliveTimeout](clearkeepalivetimeout%28%29.md): Deprecated. Removes a previously installed periodic handler block.
- [setStatusBarHidden:animated:](setstatusbarhidden_animated_.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarHidden:withAnimation:](setstatusbarhidden%28__with_%29.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarStyle:animated:](setstatusbarstyle%28__animated_%29.md): Deprecated. Sets the style of the status bar, optionally animating the transition to the new style.
- [setStatusBarOrientation:animated:](setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
- [registerUserNotificationSettings:](registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.
