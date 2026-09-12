> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/statusbarorientationuserinfokey](https://developer.apple.com/documentation/uikit/uiapplication/statusbarorientationuserinfokey)

# statusBarOrientationUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A key whose value indicates the current interface orientation.

> Use [viewWillTransition(to:with:)](../uicontentcontainer/viewwilltransition%28to_with_%29.md) instead.

## Declaration

```swift
nonisolated class let statusBarOrientationUserInfoKey: String
```

<a id="Discussion"></a>

## Discussion

The key’s value is an [NSNumber](../../foundation/nsnumber.md) object that encapsulates a [UIInterfaceOrientation](../uiinterfaceorientation.md) value indicating the current orientation.  This key is used with [didChangeStatusBarOrientationNotification](didchangestatusbarorientationnotification.md) and [willChangeStatusBarOrientationNotification](willchangestatusbarorientationnotification.md) notifications.

## See Also

### Deprecated properties

- [applicationIconBadgeNumber](applicationiconbadgenumber.md): Deprecated. The number currently set as the badge of the app icon on the Home screen.
- [statusBarFrameUserInfoKey](statusbarframeuserinfokey.md): Deprecated. A key whose value indicates the new status bar frame.
- [currentUserNotificationSettings](currentusernotificationsettings.md): Deprecated. Returns the user notification settings for the app.
- [isIgnoringInteractionEvents](isignoringinteractionevents.md): Deprecated. A Boolean value that indicates whether the receiver is ignoring events initiated by touches on the screen.
- [isNetworkActivityIndicatorVisible](isnetworkactivityindicatorvisible.md): Deprecated. A Boolean value that turns an indicator of network activity on or off.
- [isStatusBarHidden](isstatusbarhidden.md): Deprecated. A Boolean value that determines whether the status bar is hidden.
- [keyWindow](keywindow.md): Deprecated. The app’s key window.
- [scheduledLocalNotifications](scheduledlocalnotifications.md): Deprecated. All currently scheduled local notifications.
- [statusBarFrame](statusbarframe.md): Deprecated. The frame rectangle defining the area of the status bar.
- [statusBarOrientation](statusbarorientation.md): Deprecated. The current orientation of the app’s status bar.
- [statusBarOrientationAnimationDuration](statusbarorientationanimationduration.md): Deprecated. The animation duration in seconds for the status bar during a 90 degree orientation change.
- [statusBarStyle](statusbarstyle.md): Deprecated. The current style of the status bar.
- [windows](windows.md): Deprecated. The app’s visible and hidden windows.

# UIApplicationStatusBarOrientationUserInfoKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A key whose value indicates the current interface orientation.

> Use [viewWillTransitionToSize:withTransitionCoordinator:](../uicontentcontainer/viewwilltransition%28to_with_%29.md) instead.

## Declaration

```objectivec
extern NSString * const UIApplicationStatusBarOrientationUserInfoKey;
```

<a id="Discussion"></a>

## Discussion

The key’s value is an [NSNumber](../../foundation/nsnumber.md) object that encapsulates a [UIInterfaceOrientation](../uiinterfaceorientation.md) value indicating the current orientation.  This key is used with [UIApplicationDidChangeStatusBarOrientationNotification](didchangestatusbarorientationnotification.md) and [UIApplicationWillChangeStatusBarOrientationNotification](willchangestatusbarorientationnotification.md) notifications.

## See Also

### Deprecated properties

- [applicationIconBadgeNumber](applicationiconbadgenumber.md): Deprecated. The number currently set as the badge of the app icon on the Home screen.
- [UIApplicationStatusBarFrameUserInfoKey](statusbarframeuserinfokey.md): Deprecated. A key whose value indicates the new status bar frame.
- [currentUserNotificationSettings](currentusernotificationsettings.md): Deprecated. Returns the user notification settings for the app.
- [ignoringInteractionEvents](isignoringinteractionevents.md): Deprecated. A Boolean value that indicates whether the receiver is ignoring events initiated by touches on the screen.
- [networkActivityIndicatorVisible](isnetworkactivityindicatorvisible.md): Deprecated. A Boolean value that turns an indicator of network activity on or off.
- [proximitySensingEnabled](proximitysensingenabled.md): Deprecated. A Boolean value that determines whether proximity sensing is enabled.
- [statusBarHidden](isstatusbarhidden.md): Deprecated. A Boolean value that determines whether the status bar is hidden.
- [keyWindow](keywindow.md): Deprecated. The app’s key window.
- [scheduledLocalNotifications](scheduledlocalnotifications.md): Deprecated. All currently scheduled local notifications.
- [statusBarFrame](statusbarframe.md): Deprecated. The frame rectangle defining the area of the status bar.
- [statusBarOrientation](statusbarorientation.md): Deprecated. The current orientation of the app’s status bar.
- [statusBarOrientationAnimationDuration](statusbarorientationanimationduration.md): Deprecated. The animation duration in seconds for the status bar during a 90 degree orientation change.
- [statusBarStyle](statusbarstyle.md): Deprecated. The current style of the status bar.
- [windows](windows.md): Deprecated. The app’s visible and hidden windows.
