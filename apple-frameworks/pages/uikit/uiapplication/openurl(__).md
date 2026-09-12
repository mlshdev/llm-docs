> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/openurl(_:)](https://developer.apple.com/documentation/uikit/uiapplication/openurl(_:))

# openURL(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 10.0) · iPadOS 2.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 10.0)

Attempts to open the resource at the specified URL.

> Calling this method has no effect. Use the [open(\_:options:completionHandler:)](open%28__options_completionhandler_%29.md) method instead.

## Declaration

```swift
func openURL(_ url: URL) -> Bool
```

## Parameters

- `url`: A URL (Universal Resource Locator). UIKit supports many common schemes, including the `http`, `https`, `tel`, `facetime`, and `mailto` schemes. You can also employ custom URL schemes associated with apps installed on the device.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the resource located by the URL was successfully opened; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The URL you pass to this method can identify a resource in the app that calls the method, or a resource to be handled by another app. If the resource is to be handled another app, invoking this method might cause the calling app to quit so the other can launch.

To check if there is an installed app that can handle a scheme, call the [canOpenURL(\_:)](canopenurl%28__%29.md) method before calling this one. Be sure to read the description of that method for an important note about registering the schemes you want to employ.

## See Also

### Related Documentation

- [application(\_:handleOpen:)](../uiapplicationdelegate/application%28__handleopen_%29.md): Deprecated. Asks the delegate to open a resource identified by URL.
- [canOpenURL(\_:)](canopenurl%28__%29.md): Deprecated. Returns a Boolean value that indicates whether an app is available to handle a URL scheme.

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
- [setStatusBarStyle(\_:animated:)](setstatusbarstyle%28__animated_%29.md): Deprecated. Sets the style of the status bar, optionally animating the transition to the new style.
- [setStatusBarOrientation(\_:animated:)](setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
- [registerUserNotificationSettings(\_:)](registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.

# openURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 10.0) · iPadOS 2.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 10.0)

Attempts to open the resource at the specified URL.

> Calling this method has no effect. Use the [openURL:options:completionHandler:](open%28__options_completionhandler_%29.md) method instead.

## Declaration

```objectivec
- (BOOL) openURL:(NSURL *) url;
```

## Parameters

- `url`: A URL (Universal Resource Locator). UIKit supports many common schemes, including the `http`, `https`, `tel`, `facetime`, and `mailto` schemes. You can also employ custom URL schemes associated with apps installed on the device.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the resource located by the URL was successfully opened; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The URL you pass to this method can identify a resource in the app that calls the method, or a resource to be handled by another app. If the resource is to be handled another app, invoking this method might cause the calling app to quit so the other can launch.

To check if there is an installed app that can handle a scheme, call the [canOpenURL:](canopenurl%28__%29.md) method before calling this one. Be sure to read the description of that method for an important note about registering the schemes you want to employ.

## See Also

### Related Documentation

- [application:handleOpenURL:](../uiapplicationdelegate/application%28__handleopen_%29.md): Deprecated. Asks the delegate to open a resource identified by URL.
- [canOpenURL:](canopenurl%28__%29.md): Deprecated. Returns a Boolean value that indicates whether an app is available to handle a URL scheme.

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
- [setStatusBarStyle:animated:](setstatusbarstyle%28__animated_%29.md): Deprecated. Sets the style of the status bar, optionally animating the transition to the new style.
- [setStatusBarOrientation:animated:](setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
