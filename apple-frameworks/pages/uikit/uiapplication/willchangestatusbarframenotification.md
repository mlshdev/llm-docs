> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/willchangestatusbarframenotification](https://developer.apple.com/documentation/uikit/uiapplication/willchangestatusbarframenotification)

# willChangeStatusBarFrameNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Posted when the app is about to change the frame of the status bar.

> Use [viewWillTransition(to:with:)](../uicontentcontainer/viewwilltransition%28to_with_%29.md) instead.

## Declaration

```swift
nonisolated class let willChangeStatusBarFrameNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The `userInfo` dictionary contains an [NSValue](../../foundation/nsvalue.md) object that encapsulates a [CGRect](../../corefoundation/cgrect.md) structure expressing the location and size of the new status bar frame. Use [statusBarFrameUserInfoKey](statusbarframeuserinfokey.md) to access this value.

## See Also

### Deprecated notifications

- [didChangeStatusBarFrameNotification](didchangestatusbarframenotification.md): Deprecated. Posted when the frame of the status bar changes.
- [willChangeStatusBarOrientationNotification](willchangestatusbarorientationnotification.md): Deprecated. Posted when the app is about to change the orientation of its interface.
- [didChangeStatusBarOrientationNotification](didchangestatusbarorientationnotification.md): Deprecated. Posted when the orientation of the app’s user interface changes.

# UIApplicationWillChangeStatusBarFrameNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Posted when the app is about to change the frame of the status bar.

> Use [viewWillTransitionToSize:withTransitionCoordinator:](../uicontentcontainer/viewwilltransition%28to_with_%29.md) instead.

## Declaration

```objectivec
extern NSNotificationName const UIApplicationWillChangeStatusBarFrameNotification;
```

<a id="Discussion"></a>

## Discussion

The `userInfo` dictionary contains an [NSValue](../../foundation/nsvalue.md) object that encapsulates a [CGRect](../../corefoundation/cgrect.md) structure expressing the location and size of the new status bar frame. Use [UIApplicationStatusBarFrameUserInfoKey](statusbarframeuserinfokey.md) to access this value.

## See Also

### Deprecated notifications

- [UIApplicationDidChangeStatusBarFrameNotification](didchangestatusbarframenotification.md): Deprecated. Posted when the frame of the status bar changes.
- [UIApplicationWillChangeStatusBarOrientationNotification](willchangestatusbarorientationnotification.md): Deprecated. Posted when the app is about to change the orientation of its interface.
- [UIApplicationDidChangeStatusBarOrientationNotification](didchangestatusbarorientationnotification.md): Deprecated. Posted when the orientation of the app’s user interface changes.
