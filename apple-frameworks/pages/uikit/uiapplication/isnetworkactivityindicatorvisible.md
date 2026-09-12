> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/isnetworkactivityindicatorvisible](https://developer.apple.com/documentation/uikit/uiapplication/isnetworkactivityindicatorvisible)

# isNetworkActivityIndicatorVisible (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that turns an indicator of network activity on or off.

> Use [UIRefreshControl](../uirefreshcontrol.md) instead.

## Declaration

```swift
var isNetworkActivityIndicatorVisible: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Specify [true](https://developer.apple.com/documentation/swift/true) if the app should show network activity and [false](https://developer.apple.com/documentation/swift/false) if it should not. The default value is [false](https://developer.apple.com/documentation/swift/false). A spinning indicator in the status bar shows network activity. The app may explicitly hide or show this indicator.

## See Also

### Deprecated properties

- [applicationIconBadgeNumber](applicationiconbadgenumber.md): Deprecated. The number currently set as the badge of the app icon on the Home screen.
- [statusBarFrameUserInfoKey](statusbarframeuserinfokey.md): Deprecated. A key whose value indicates the new status bar frame.
- [statusBarOrientationUserInfoKey](statusbarorientationuserinfokey.md): Deprecated. A key whose value indicates the current interface orientation.
- [currentUserNotificationSettings](currentusernotificationsettings.md): Deprecated. Returns the user notification settings for the app.
- [isIgnoringInteractionEvents](isignoringinteractionevents.md): Deprecated. A Boolean value that indicates whether the receiver is ignoring events initiated by touches on the screen.
- [isStatusBarHidden](isstatusbarhidden.md): Deprecated. A Boolean value that determines whether the status bar is hidden.
- [keyWindow](keywindow.md): Deprecated. The app’s key window.
- [scheduledLocalNotifications](scheduledlocalnotifications.md): Deprecated. All currently scheduled local notifications.
- [statusBarFrame](statusbarframe.md): Deprecated. The frame rectangle defining the area of the status bar.
- [statusBarOrientation](statusbarorientation.md): Deprecated. The current orientation of the app’s status bar.
- [statusBarOrientationAnimationDuration](statusbarorientationanimationduration.md): Deprecated. The animation duration in seconds for the status bar during a 90 degree orientation change.
- [statusBarStyle](statusbarstyle.md): Deprecated. The current style of the status bar.
- [windows](windows.md): Deprecated. The app’s visible and hidden windows.

# networkActivityIndicatorVisible (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that turns an indicator of network activity on or off.

> Use [UIRefreshControl](../uirefreshcontrol.md) instead.

## Declaration

```objectivec
@property (nonatomic, getter=isNetworkActivityIndicatorVisible) BOOL networkActivityIndicatorVisible;
```

<a id="Discussion"></a>

## Discussion

Specify [true](https://developer.apple.com/documentation/swift/true) if the app should show network activity and [false](https://developer.apple.com/documentation/swift/false) if it should not. The default value is [false](https://developer.apple.com/documentation/swift/false). A spinning indicator in the status bar shows network activity. The app may explicitly hide or show this indicator.

## See Also

### Deprecated properties

- [applicationIconBadgeNumber](applicationiconbadgenumber.md): Deprecated. The number currently set as the badge of the app icon on the Home screen.
- [UIApplicationStatusBarFrameUserInfoKey](statusbarframeuserinfokey.md): Deprecated. A key whose value indicates the new status bar frame.
- [UIApplicationStatusBarOrientationUserInfoKey](statusbarorientationuserinfokey.md): Deprecated. A key whose value indicates the current interface orientation.
- [currentUserNotificationSettings](currentusernotificationsettings.md): Deprecated. Returns the user notification settings for the app.
- [ignoringInteractionEvents](isignoringinteractionevents.md): Deprecated. A Boolean value that indicates whether the receiver is ignoring events initiated by touches on the screen.
- [proximitySensingEnabled](proximitysensingenabled.md): Deprecated. A Boolean value that determines whether proximity sensing is enabled.
- [statusBarHidden](isstatusbarhidden.md): Deprecated. A Boolean value that determines whether the status bar is hidden.
- [keyWindow](keywindow.md): Deprecated. The app’s key window.
- [scheduledLocalNotifications](scheduledlocalnotifications.md): Deprecated. All currently scheduled local notifications.
- [statusBarFrame](statusbarframe.md): Deprecated. The frame rectangle defining the area of the status bar.
- [statusBarOrientation](statusbarorientation.md): Deprecated. The current orientation of the app’s status bar.
- [statusBarOrientationAnimationDuration](statusbarorientationanimationduration.md): Deprecated. The animation duration in seconds for the status bar during a 90 degree orientation change.
- [statusBarStyle](statusbarstyle.md): Deprecated. The current style of the status bar.
- [windows](windows.md): Deprecated. The app’s visible and hidden windows.
