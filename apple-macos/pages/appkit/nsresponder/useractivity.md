> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/useractivity](https://developer.apple.com/documentation/appkit/nsresponder/useractivity)

# userActivity (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An object encapsulating a user activity supported by this responder.

## Declaration

```swift
var userActivity: NSUserActivity? { get set }
```

<a id="Discussion"></a>

## Discussion

By setting the [userActivity](useractivity.md) property on a responder, the [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) object becomes managed by AppKit. You should override [updateUserActivityState(\_:)](updateuseractivitystate%28__%29.md) to write lazily any state data representing the user’s activity to the `userInfo` dictionary. AppKit automatically saves user activities it manages at appropriate times. Multiple responders can share a single [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) instance, in which case they all get a callback, such as [updateUserActivityState(\_:)](updateuseractivitystate%28__%29.md), when the system updates the user activity object.

> **Note**

>  Before the update callbacks are sent, the activity object’s `userInfo` dictionary is cleared.

In macOS, [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) objects managed by [NSResponder](../nsresponder.md) automatically [becomeCurrent()](https://developer.apple.com/documentation/foundation/nsuseractivity/becomecurrent%28%29) based on the main window and the responder chain.

A responder object can set its [userActivity](useractivity.md) property to `nil` if it no longer wants to participate. Any [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) objects that AppKit manages but have no associated responders (or documents) are automatically invalidated.

You can use this property from any thread, and it’s key-value observable (KVO).

## See Also

### Supporting User Activities

- [updateUserActivityState(\_:)](updateuseractivitystate%28__%29.md): Updates the state of the given user activity.

# userActivity (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An object encapsulating a user activity supported by this responder.

## Declaration

```objectivec
@property (strong, nullable) NSUserActivity * userActivity;
```

<a id="Discussion"></a>

## Discussion

By setting the [userActivity](useractivity.md) property on a responder, the [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) object becomes managed by AppKit. You should override [updateUserActivityState:](updateuseractivitystate%28__%29.md) to write lazily any state data representing the user’s activity to the `userInfo` dictionary. AppKit automatically saves user activities it manages at appropriate times. Multiple responders can share a single [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) instance, in which case they all get a callback, such as [updateUserActivityState:](updateuseractivitystate%28__%29.md), when the system updates the user activity object.

> **Note**

>  Before the update callbacks are sent, the activity object’s `userInfo` dictionary is cleared.

In macOS, [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) objects managed by [NSResponder](../nsresponder.md) automatically [becomeCurrent](https://developer.apple.com/documentation/foundation/nsuseractivity/becomecurrent%28%29) based on the main window and the responder chain.

A responder object can set its [userActivity](useractivity.md) property to `nil` if it no longer wants to participate. Any [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) objects that AppKit manages but have no associated responders (or documents) are automatically invalidated.

You can use this property from any thread, and it’s key-value observable (KVO).

## See Also

### Supporting User Activities

- [updateUserActivityState:](updateuseractivitystate%28__%29.md): Updates the state of the given user activity.
