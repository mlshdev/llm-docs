> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication-deprecated-symbols](https://developer.apple.com/documentation/uikit/uiapplication-deprecated-symbols)

# Deprecated symbols (Swift)

**Framework:** UIKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

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
- [UIMinimumKeepAliveTimeout](uiminimumkeepalivetimeout.md): Deprecated. The minimum amount of time (measured in seconds) an app may run a critical background task in the background.
- [clearKeepAliveTimeout()](uiapplication/clearkeepalivetimeout%28%29.md): Deprecated. Removes a previously installed periodic handler block.
- [setStatusBarHidden(\_:with:)](uiapplication/setstatusbarhidden%28__with_%29.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarStyle(\_:animated:)](uiapplication/setstatusbarstyle%28__animated_%29.md): Deprecated. Sets the style of the status bar, optionally animating the transition to the new style.
- [setStatusBarOrientation(\_:animated:)](uiapplication/setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
- [registerUserNotificationSettings(\_:)](uiapplication/registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.
- [registerForRemoteNotifications(matching:)](uiapplication/registerforremotenotifications%28matching_%29.md): Deprecated. Register to receive remote notifications of the specified types via Apple Push Notification service.
- [enabledRemoteNotificationTypes()](uiapplication/enabledremotenotificationtypes%28%29.md): Deprecated. Returns the types of notifications the app accepts.
- [UIRemoteNotificationType](uiremotenotificationtype.md): Deprecated. Constants indicating the types of notifications the app may display to the user.
- [openURL(\_:)](uiapplication/openurl%28__%29.md): Deprecated. Attempts to open the resource at the specified URL.
- [setNewsstandIconImage(\_:)](uiapplication/setnewsstandiconimage%28__%29.md): Deprecated. Sets the icon of a Newsstand app to an image depicting the current issue of a publication.

### Deprecated notifications

- [willChangeStatusBarFrameNotification](uiapplication/willchangestatusbarframenotification.md): Deprecated. Posted when the app is about to change the frame of the status bar.
- [didChangeStatusBarFrameNotification](uiapplication/didchangestatusbarframenotification.md): Deprecated. Posted when the frame of the status bar changes.
- [willChangeStatusBarOrientationNotification](uiapplication/willchangestatusbarorientationnotification.md): Deprecated. Posted when the app is about to change the orientation of its interface.
- [didChangeStatusBarOrientationNotification](uiapplication/didchangestatusbarorientationnotification.md): Deprecated. Posted when the orientation of the app’s user interface changes.

### Deprecated properties

- [applicationIconBadgeNumber](uiapplication/applicationiconbadgenumber.md): Deprecated. The number currently set as the badge of the app icon on the Home screen.
- [statusBarFrameUserInfoKey](uiapplication/statusbarframeuserinfokey.md): Deprecated. A key whose value indicates the new status bar frame.
- [statusBarOrientationUserInfoKey](uiapplication/statusbarorientationuserinfokey.md): Deprecated. A key whose value indicates the current interface orientation.
- [currentUserNotificationSettings](uiapplication/currentusernotificationsettings.md): Deprecated. Returns the user notification settings for the app.
- [isIgnoringInteractionEvents](uiapplication/isignoringinteractionevents.md): Deprecated. A Boolean value that indicates whether the receiver is ignoring events initiated by touches on the screen.
- [isNetworkActivityIndicatorVisible](uiapplication/isnetworkactivityindicatorvisible.md): Deprecated. A Boolean value that turns an indicator of network activity on or off.
- [isStatusBarHidden](uiapplication/isstatusbarhidden.md): Deprecated. A Boolean value that determines whether the status bar is hidden.
- [keyWindow](uiapplication/keywindow.md): Deprecated. The app’s key window.
- [scheduledLocalNotifications](uiapplication/scheduledlocalnotifications.md): Deprecated. All currently scheduled local notifications.
- [statusBarFrame](uiapplication/statusbarframe.md): Deprecated. The frame rectangle defining the area of the status bar.
- [statusBarOrientation](uiapplication/statusbarorientation.md): Deprecated. The current orientation of the app’s status bar.
- [statusBarOrientationAnimationDuration](uiapplication/statusbarorientationanimationduration.md): Deprecated. The animation duration in seconds for the status bar during a 90 degree orientation change.
- [statusBarStyle](uiapplication/statusbarstyle.md): Deprecated. The current style of the status bar.
- [windows](uiapplication/windows.md): Deprecated. The app’s visible and hidden windows.

# Deprecated symbols (Objective-C)

**Framework:** UIKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

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
- [UIMinimumKeepAliveTimeout](uiminimumkeepalivetimeout.md): Deprecated. The minimum amount of time (measured in seconds) an app may run a critical background task in the background.
- [clearKeepAliveTimeout](uiapplication/clearkeepalivetimeout%28%29.md): Deprecated. Removes a previously installed periodic handler block.
- [setStatusBarHidden:animated:](uiapplication/setstatusbarhidden_animated_.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarHidden:withAnimation:](uiapplication/setstatusbarhidden%28__with_%29.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarStyle:animated:](uiapplication/setstatusbarstyle%28__animated_%29.md): Deprecated. Sets the style of the status bar, optionally animating the transition to the new style.
- [setStatusBarOrientation:animated:](uiapplication/setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
- [registerUserNotificationSettings:](uiapplication/registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.
- [registerForRemoteNotificationTypes:](uiapplication/registerforremotenotifications%28matching_%29.md): Deprecated. Register to receive remote notifications of the specified types via Apple Push Notification service.
- [enabledRemoteNotificationTypes](uiapplication/enabledremotenotificationtypes%28%29.md): Deprecated. Returns the types of notifications the app accepts.
- [UIRemoteNotificationType](uiremotenotificationtype.md): Deprecated. Constants indicating the types of notifications the app may display to the user.
- [openURL:](uiapplication/openurl%28__%29.md): Deprecated. Attempts to open the resource at the specified URL.
- [setNewsstandIconImage:](uiapplication/setnewsstandiconimage%28__%29.md): Deprecated. Sets the icon of a Newsstand app to an image depicting the current issue of a publication.

### Deprecated notifications

- [UIApplicationWillChangeStatusBarFrameNotification](uiapplication/willchangestatusbarframenotification.md): Deprecated. Posted when the app is about to change the frame of the status bar.
- [UIApplicationDidChangeStatusBarFrameNotification](uiapplication/didchangestatusbarframenotification.md): Deprecated. Posted when the frame of the status bar changes.
- [UIApplicationWillChangeStatusBarOrientationNotification](uiapplication/willchangestatusbarorientationnotification.md): Deprecated. Posted when the app is about to change the orientation of its interface.
- [UIApplicationDidChangeStatusBarOrientationNotification](uiapplication/didchangestatusbarorientationnotification.md): Deprecated. Posted when the orientation of the app’s user interface changes.

### Deprecated properties

- [applicationIconBadgeNumber](uiapplication/applicationiconbadgenumber.md): Deprecated. The number currently set as the badge of the app icon on the Home screen.
- [UIApplicationStatusBarFrameUserInfoKey](uiapplication/statusbarframeuserinfokey.md): Deprecated. A key whose value indicates the new status bar frame.
- [UIApplicationStatusBarOrientationUserInfoKey](uiapplication/statusbarorientationuserinfokey.md): Deprecated. A key whose value indicates the current interface orientation.
- [currentUserNotificationSettings](uiapplication/currentusernotificationsettings.md): Deprecated. Returns the user notification settings for the app.
- [ignoringInteractionEvents](uiapplication/isignoringinteractionevents.md): Deprecated. A Boolean value that indicates whether the receiver is ignoring events initiated by touches on the screen.
- [networkActivityIndicatorVisible](uiapplication/isnetworkactivityindicatorvisible.md): Deprecated. A Boolean value that turns an indicator of network activity on or off.
- [proximitySensingEnabled](uiapplication/proximitysensingenabled.md): Deprecated. A Boolean value that determines whether proximity sensing is enabled.
- [statusBarHidden](uiapplication/isstatusbarhidden.md): Deprecated. A Boolean value that determines whether the status bar is hidden.
- [keyWindow](uiapplication/keywindow.md): Deprecated. The app’s key window.
- [scheduledLocalNotifications](uiapplication/scheduledlocalnotifications.md): Deprecated. All currently scheduled local notifications.
- [statusBarFrame](uiapplication/statusbarframe.md): Deprecated. The frame rectangle defining the area of the status bar.
- [statusBarOrientation](uiapplication/statusbarorientation.md): Deprecated. The current orientation of the app’s status bar.
- [statusBarOrientationAnimationDuration](uiapplication/statusbarorientationanimationduration.md): Deprecated. The animation duration in seconds for the status bar during a 90 degree orientation change.
- [statusBarStyle](uiapplication/statusbarstyle.md): Deprecated. The current style of the status bar.
- [windows](uiapplication/windows.md): Deprecated. The app’s visible and hidden windows.
