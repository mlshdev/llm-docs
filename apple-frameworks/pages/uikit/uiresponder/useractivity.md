> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/useractivity](https://developer.apple.com/documentation/uikit/uiresponder/useractivity)

# userActivity (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object encapsulating a user activity supported by this responder.

## Declaration

```swift
var userActivity: NSUserActivity? { get set }
```

<a id="Discussion"></a>

## Discussion

By setting the [userActivity](useractivity.md) property on a responder, the [NSUserActivity](../../foundation/nsuseractivity.md) object becomes managed by UIKit. User activities managed by UIKit are saved automatically at appropriate times. You can lazily add state data representing the user’s activity using the [updateUserActivityState(\_:)](updateuseractivitystate%28__%29.md) override. Multiple responders can share a single [NSUserActivity](../../foundation/nsuseractivity.md) instance, in which case they all get an [updateUserActivityState(\_:)](updateuseractivitystate%28__%29.md) callback.

> **Note**

>  Prior to invoking [updateUserActivityState(\_:)](updateuseractivitystate%28__%29.md) on all of the associated objects, the `userInfo` dictionary for the [NSUserActivity](../../foundation/nsuseractivity.md) object is cleared.

A responder object can set its [userActivity](useractivity.md) property to `nil` if it no longer wants to participate. Any [NSUserActivity](../../foundation/nsuseractivity.md) objects that are managed by UIKit but which have no associated responders (or documents) are automatically invalidated.

## See Also

### Supporting user activities

- [restoreUserActivityState(\_:)](restoreuseractivitystate%28__%29.md): Restores the state needed to continue the given user activity.
- [updateUserActivityState(\_:)](updateuseractivitystate%28__%29.md): Updates the state of the given user activity.

# userActivity (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object encapsulating a user activity supported by this responder.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSUserActivity * userActivity;
```

<a id="Discussion"></a>

## Discussion

By setting the [userActivity](useractivity.md) property on a responder, the [NSUserActivity](../../foundation/nsuseractivity.md) object becomes managed by UIKit. User activities managed by UIKit are saved automatically at appropriate times. You can lazily add state data representing the user’s activity using the [updateUserActivityState:](updateuseractivitystate%28__%29.md) override. Multiple responders can share a single [NSUserActivity](../../foundation/nsuseractivity.md) instance, in which case they all get an [updateUserActivityState:](updateuseractivitystate%28__%29.md) callback.

> **Note**

>  Prior to invoking [updateUserActivityState:](updateuseractivitystate%28__%29.md) on all of the associated objects, the `userInfo` dictionary for the [NSUserActivity](../../foundation/nsuseractivity.md) object is cleared.

A responder object can set its [userActivity](useractivity.md) property to `nil` if it no longer wants to participate. Any [NSUserActivity](../../foundation/nsuseractivity.md) objects that are managed by UIKit but which have no associated responders (or documents) are automatically invalidated.

## See Also

### Supporting user activities

- [restoreUserActivityState:](restoreuseractivitystate%28__%29.md): Restores the state needed to continue the given user activity.
- [updateUserActivityState:](updateuseractivitystate%28__%29.md): Updates the state of the given user activity.
