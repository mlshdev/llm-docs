> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/statusbarframeuserinfokey](https://developer.apple.com/documentation/uikit/uiapplication/statusbarframeuserinfokey)

# statusBarFrameUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A key whose value indicates the new status bar frame.

> Use [viewWillTransition(to:with:)](../uicontentcontainer/viewwilltransition%28to_with_%29.md) instead.

## Declaration

```swift
nonisolated class let statusBarFrameUserInfoKey: String
```

<a id="Discussion"></a>

## Discussion

The key’s value is an [NSValue](../../foundation/nsvalue.md) object that encapsulates a [CGRect](../../corefoundation/cgrect.md) structure expressing the location and size of the new status bar frame. This key is used with [didChangeStatusBarFrameNotification](didchangestatusbarframenotification.md) and [willChangeStatusBarFrameNotification](willchangestatusbarframenotification.md) notifications.

## See Also

### Deprecated properties

- [applicationIconBadgeNumber](applicationiconbadgenumber.md): Deprecated. The number currently set as the badge of the app icon on the Home screen.
- [statusBarOrientationUserInfoKey](statusbarorientationuserinfokey.md): Deprecated. A key whose value indicates the current interface orientation.
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

# UIApplicationStatusBarFrameUserInfoKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A key whose value indicates the new status bar frame.

> Use [viewWillTransitionToSize:withTransitionCoordinator:](../uicontentcontainer/viewwilltransition%28to_with_%29.md) instead.

## Declaration

```objectivec
extern NSString * const UIApplicationStatusBarFrameUserInfoKey;
```

<a id="Discussion"></a>

## Discussion

The key’s value is an [NSValue](../../foundation/nsvalue.md) object that encapsulates a [CGRect](../../corefoundation/cgrect.md) structure expressing the location and size of the new status bar frame. This key is used with [UIApplicationDidChangeStatusBarFrameNotification](didchangestatusbarframenotification.md) and [UIApplicationWillChangeStatusBarFrameNotification](willchangestatusbarframenotification.md) notifications.

## See Also

### Deprecated properties

- [applicationIconBadgeNumber](applicationiconbadgenumber.md): Deprecated. The number currently set as the badge of the app icon on the Home screen.
- [UIApplicationStatusBarOrientationUserInfoKey](statusbarorientationuserinfokey.md): Deprecated. A key whose value indicates the current interface orientation.
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
