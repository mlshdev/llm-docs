> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiremotenotificationtype](https://developer.apple.com/documentation/uikit/uiremotenotificationtype)

# UIRemoteNotificationType (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Constants indicating the types of notifications the app may display to the user.

> Use [UNAuthorizationOptions](../usernotifications/unauthorizationoptions.md) for user notifications and [registerForRemoteNotifications()](uiapplication/registerforremotenotifications%28%29.md) for receiving remote notifications instead.

## Declaration

```swift
struct UIRemoteNotificationType
```

<a id="overview"></a>

## Overview

One or more of the values in the `UIRemoteNotificationType` bit mask are passed to iOS as the argument of the [registerForRemoteNotifications(matching:)](uiapplication/registerforremotenotifications%28matching_%29.md) method. Thereafter, iOS filters notifications for the app based on these values. You can always get the current notification types by calling the [enabledRemoteNotificationTypes()](uiapplication/enabledremotenotificationtypes%28%29.md) method.

## Topics

### Constants

- [badge](uiremotenotificationtype/badge.md): Deprecated. The app accepts notifications that badge the app icon.
- [sound](uiremotenotificationtype/sound.md): Deprecated. The app accepts alert sounds as notifications.
- [alert](uiremotenotificationtype/alert.md): Deprecated. The app accepts alert messages as notifications.
- [newsstandContentAvailability](uiremotenotificationtype/newsstandcontentavailability.md): Deprecated. The app accepts notifications that start the downloading of issue assets for Newsstand apps.

### Initializers

- [init(rawValue:)](uiremotenotificationtype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

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
- [UIMinimumKeepAliveTimeout](uiminimumkeepalivetimeout.md): Deprecated. The minimum amount of time (measured in seconds) an app may run a critical background task in the background.
- [clearKeepAliveTimeout()](uiapplication/clearkeepalivetimeout%28%29.md): Deprecated. Removes a previously installed periodic handler block.
- [setStatusBarHidden(\_:with:)](uiapplication/setstatusbarhidden%28__with_%29.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarStyle(\_:animated:)](uiapplication/setstatusbarstyle%28__animated_%29.md): Deprecated. Sets the style of the status bar, optionally animating the transition to the new style.
- [setStatusBarOrientation(\_:animated:)](uiapplication/setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
- [registerUserNotificationSettings(\_:)](uiapplication/registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.

# UIRemoteNotificationType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Constants indicating the types of notifications the app may display to the user.

> Use [UNAuthorizationOptions](../usernotifications/unauthorizationoptions.md) for user notifications and [registerForRemoteNotifications](uiapplication/registerforremotenotifications%28%29.md) for receiving remote notifications instead.

## Declaration

```objectivec
enum UIRemoteNotificationType : NSUInteger;
```

<a id="overview"></a>

## Overview

One or more of the values in the `UIRemoteNotificationType` bit mask are passed to iOS as the argument of the [registerForRemoteNotificationTypes:](uiapplication/registerforremotenotifications%28matching_%29.md) method. Thereafter, iOS filters notifications for the app based on these values. You can always get the current notification types by calling the [enabledRemoteNotificationTypes](uiapplication/enabledremotenotificationtypes%28%29.md) method.

## Topics

### Constants

- [UIRemoteNotificationTypeNone](uiremotenotificationtype/uiremotenotificationtypenone.md): Deprecated. The app accepts no notifications.
- [UIRemoteNotificationTypeBadge](uiremotenotificationtype/badge.md): Deprecated. The app accepts notifications that badge the app icon.
- [UIRemoteNotificationTypeSound](uiremotenotificationtype/sound.md): Deprecated. The app accepts alert sounds as notifications.
- [UIRemoteNotificationTypeAlert](uiremotenotificationtype/alert.md): Deprecated. The app accepts alert messages as notifications.
- [UIRemoteNotificationTypeNewsstandContentAvailability](uiremotenotificationtype/newsstandcontentavailability.md): Deprecated. The app accepts notifications that start the downloading of issue assets for Newsstand apps.

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
- [UIMinimumKeepAliveTimeout](uiminimumkeepalivetimeout.md): Deprecated. The minimum amount of time (measured in seconds) an app may run a critical background task in the background.
- [clearKeepAliveTimeout](uiapplication/clearkeepalivetimeout%28%29.md): Deprecated. Removes a previously installed periodic handler block.
- [setStatusBarHidden:animated:](uiapplication/setstatusbarhidden_animated_.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarHidden:withAnimation:](uiapplication/setstatusbarhidden%28__with_%29.md): Deprecated. Hides or shows the status bar, optionally animating the transition.
- [setStatusBarStyle:animated:](uiapplication/setstatusbarstyle%28__animated_%29.md): Deprecated. Sets the style of the status bar, optionally animating the transition to the new style.
- [setStatusBarOrientation:animated:](uiapplication/setstatusbarorientation%28__animated_%29.md): Deprecated. Sets the app’s status bar to the specified orientation, optionally animating the transition.
