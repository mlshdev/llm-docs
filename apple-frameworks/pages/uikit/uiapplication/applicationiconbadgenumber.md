> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/applicationiconbadgenumber](https://developer.apple.com/documentation/uikit/uiapplication/applicationiconbadgenumber)

# applicationIconBadgeNumber (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 17.0) · iPadOS 2.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

The number currently set as the badge of the app icon on the Home screen.

> Use [setBadgeCount(\_:withCompletionHandler:)](../../usernotifications/unusernotificationcenter/setbadgecount%28__withcompletionhandler_%29.md) instead.

## Declaration

```swift
var applicationIconBadgeNumber: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Set to 0 (zero) to hide the badge number. The default value of this property is 0.

## See Also

### Deprecated properties

- [statusBarFrameUserInfoKey](statusbarframeuserinfokey.md): Deprecated. A key whose value indicates the new status bar frame.
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

# applicationIconBadgeNumber (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 17.0) · iPadOS 2.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

The number currently set as the badge of the app icon on the Home screen.

> Use [setBadgeCount:withCompletionHandler:](../../usernotifications/unusernotificationcenter/setbadgecount%28__withcompletionhandler_%29.md) instead.

## Declaration

```objectivec
@property (nonatomic) NSInteger applicationIconBadgeNumber;
```

<a id="Discussion"></a>

## Discussion

Set to 0 (zero) to hide the badge number. The default value of this property is 0.

## See Also

### Deprecated properties

- [UIApplicationStatusBarFrameUserInfoKey](statusbarframeuserinfokey.md): Deprecated. A key whose value indicates the new status bar frame.
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
