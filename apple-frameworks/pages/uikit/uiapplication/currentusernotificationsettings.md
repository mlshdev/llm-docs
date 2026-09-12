> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/currentusernotificationsettings](https://developer.apple.com/documentation/uikit/uiapplication/currentusernotificationsettings)

# currentUserNotificationSettings (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the user notification settings for the app.

> Use [UNUserNotificationCenter](../../usernotifications/unusernotificationcenter.md) instead.

## Declaration

```swift
var currentUserNotificationSettings: UIUserNotificationSettings? { get }
```

<a id="return-value"></a>

## Return Value

A user notification settings object indicating the types of notifications that your app may use.

<a id="Discussion"></a>

## Discussion

If you configure local or remote notifications with unavailable notification types, the system does not display the corresponding alerts to the user. The system does still deliver the local and remote notifications to your app.

## See Also

### Related Documentation

- [registerUserNotificationSettings(\_:)](registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.

### Deprecated properties

- [applicationIconBadgeNumber](applicationiconbadgenumber.md): Deprecated. The number currently set as the badge of the app icon on the Home screen.
- [statusBarFrameUserInfoKey](statusbarframeuserinfokey.md): Deprecated. A key whose value indicates the new status bar frame.
- [statusBarOrientationUserInfoKey](statusbarorientationuserinfokey.md): Deprecated. A key whose value indicates the current interface orientation.
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

# currentUserNotificationSettings (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the user notification settings for the app.

> Use [UNUserNotificationCenter](../../usernotifications/unusernotificationcenter.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIUserNotificationSettings * currentUserNotificationSettings;
```

<a id="return-value"></a>

## Return Value

A user notification settings object indicating the types of notifications that your app may use.

<a id="Discussion"></a>

## Discussion

If you configure local or remote notifications with unavailable notification types, the system does not display the corresponding alerts to the user. The system does still deliver the local and remote notifications to your app.

## See Also

### Related Documentation

- [registerUserNotificationSettings:](registerusernotificationsettings%28__%29.md): Deprecated. Registers your preferred options for notifying the user.

### Deprecated properties

- [applicationIconBadgeNumber](applicationiconbadgenumber.md): Deprecated. The number currently set as the badge of the app icon on the Home screen.
- [UIApplicationStatusBarFrameUserInfoKey](statusbarframeuserinfokey.md): Deprecated. A key whose value indicates the new status bar frame.
- [UIApplicationStatusBarOrientationUserInfoKey](statusbarorientationuserinfokey.md): Deprecated. A key whose value indicates the current interface orientation.
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
