> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiuseractivityrestoring/restoreuseractivitystate(_:)](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring/restoreuseractivitystate(_:))

# restoreUserActivityState(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Restores the state necessary to continue the specified user activity.

## Declaration

```swift
func restoreUserActivityState(_ userActivity: NSUserActivity)
```

## Parameters

- `userActivity`: The user activity to continue.

<a id="Discussion"></a>

## Discussion

Implement this method to restore an object’s state using the specified user activity. The system calls this method on any objects passed to the restoration handler in [application(\_:continue:restorationHandler:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application%28_:continue:restorationhandler:%29). Your implementation should use the state data contained in the specified user activity’s [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary to restore the object.

# restoreUserActivityState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Restores the state necessary to continue the specified user activity.

## Declaration

```objectivec
- (void) restoreUserActivityState:(NSUserActivity *) userActivity;
```

## Parameters

- `userActivity`: The user activity to continue.

<a id="Discussion"></a>

## Discussion

Implement this method to restore an object’s state using the specified user activity. The system calls this method on any objects passed to the restoration handler in [application:continueUserActivity:restorationHandler:](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application%28_:continue:restorationhandler:%29). Your implementation should use the state data contained in the specified user activity’s [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary to restore the object.
