> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/willchangestatusbarorientationnotification](https://developer.apple.com/documentation/uikit/uiapplication/willchangestatusbarorientationnotification)

# willChangeStatusBarOrientationNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Posted when the app is about to change the orientation of its interface.

> Use [viewWillTransition(to:with:)](../uicontentcontainer/viewwilltransition%28to_with_%29.md) instead.

## Declaration

```swift
nonisolated class let willChangeStatusBarOrientationNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The userInfo dictionary contains an [NSNumber](../../foundation/nsnumber.md) that encapsulates a `UIInterfaceOrientation` value (see [UIInterfaceOrientation](../uiinterfaceorientation.md)). Use [statusBarOrientationUserInfoKey](statusbarorientationuserinfokey.md) to access this value.

## See Also

### Deprecated notifications

- [willChangeStatusBarFrameNotification](willchangestatusbarframenotification.md): Deprecated. Posted when the app is about to change the frame of the status bar.
- [didChangeStatusBarFrameNotification](didchangestatusbarframenotification.md): Deprecated. Posted when the frame of the status bar changes.
- [didChangeStatusBarOrientationNotification](didchangestatusbarorientationnotification.md): Deprecated. Posted when the orientation of the app’s user interface changes.

# UIApplicationWillChangeStatusBarOrientationNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Posted when the app is about to change the orientation of its interface.

> Use [viewWillTransitionToSize:withTransitionCoordinator:](../uicontentcontainer/viewwilltransition%28to_with_%29.md) instead.

## Declaration

```objectivec
extern NSNotificationName const UIApplicationWillChangeStatusBarOrientationNotification;
```

<a id="Discussion"></a>

## Discussion

The userInfo dictionary contains an [NSNumber](../../foundation/nsnumber.md) that encapsulates a `UIInterfaceOrientation` value (see [UIInterfaceOrientation](../uiinterfaceorientation.md)). Use [UIApplicationStatusBarOrientationUserInfoKey](statusbarorientationuserinfokey.md) to access this value.

## See Also

### Deprecated notifications

- [UIApplicationWillChangeStatusBarFrameNotification](willchangestatusbarframenotification.md): Deprecated. Posted when the app is about to change the frame of the status bar.
- [UIApplicationDidChangeStatusBarFrameNotification](didchangestatusbarframenotification.md): Deprecated. Posted when the frame of the status bar changes.
- [UIApplicationDidChangeStatusBarOrientationNotification](didchangestatusbarorientationnotification.md): Deprecated. Posted when the orientation of the app’s user interface changes.
