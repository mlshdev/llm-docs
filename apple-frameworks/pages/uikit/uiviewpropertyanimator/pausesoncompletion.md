> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewpropertyanimator/pausesoncompletion](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator/pausesoncompletion)

# pausesOnCompletion (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether a completed animation remains in the active state.

## Declaration

```swift
var pausesOnCompletion: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the animator remains in the [UIViewAnimatingState.active](../uiviewanimatingstate/active.md) state when the animation finishes, and it does not execute its completion handler. Keeping the animator in the [UIViewAnimatingState.active](../uiviewanimatingstate/active.md) state allows you to reverse the animation even after it has finished. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the animator automatically transitions to the [UIViewAnimatingState.inactive](../uiviewanimatingstate/inactive.md) state when the animation finishes, thereby concluding the animation. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

Because the completion handler is not called when this property is [true](https://developer.apple.com/documentation/swift/true), you cannot use the animator’s completion handler to determine when the animations have finished running. Instead, you determine when the animation has ended by observing the [isRunning](../uiviewanimating/isrunning.md) property.

## See Also

### Accessing the animation parameters

- [duration](duration.md): The total duration (in seconds) of the main animations.
- [delay](delay.md): The delay (in seconds) after which the animations begin.
- [timingParameters](timingparameters.md): The information used to determine the timing curve for the animation.
- [isInterruptible](isinterruptible.md): A Boolean value indicating whether the animator is interruptible and can be paused or stopped.
- [isUserInteractionEnabled](isuserinteractionenabled.md): A Boolean value indicating whether views receive touch events while animations are running.
- [isManualHitTestingEnabled](ismanualhittestingenabled.md): A Boolean value indicating whether your app manages hit-testing while animations are in progress.
- [scrubsLinearly](scrubslinearly.md): A Boolean value indicating whether a paused animation scrubs linearly or uses its specified timing information.

# pausesOnCompletion (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether a completed animation remains in the active state.

## Declaration

```objectivec
@property (nonatomic) BOOL pausesOnCompletion;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the animator remains in the [UIViewAnimatingStateActive](../uiviewanimatingstate/active.md) state when the animation finishes, and it does not execute its completion handler. Keeping the animator in the [UIViewAnimatingStateActive](../uiviewanimatingstate/active.md) state allows you to reverse the animation even after it has finished. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the animator automatically transitions to the [UIViewAnimatingStateInactive](../uiviewanimatingstate/inactive.md) state when the animation finishes, thereby concluding the animation. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

Because the completion handler is not called when this property is [true](https://developer.apple.com/documentation/swift/true), you cannot use the animator’s completion handler to determine when the animations have finished running. Instead, you determine when the animation has ended by observing the [running](../uiviewanimating/isrunning.md) property.

## See Also

### Accessing the animation parameters

- [duration](duration.md): The total duration (in seconds) of the main animations.
- [delay](delay.md): The delay (in seconds) after which the animations begin.
- [timingParameters](timingparameters.md): The information used to determine the timing curve for the animation.
- [interruptible](isinterruptible.md): A Boolean value indicating whether the animator is interruptible and can be paused or stopped.
- [userInteractionEnabled](isuserinteractionenabled.md): A Boolean value indicating whether views receive touch events while animations are running.
- [manualHitTestingEnabled](ismanualhittestingenabled.md): A Boolean value indicating whether your app manages hit-testing while animations are in progress.
- [scrubsLinearly](scrubslinearly.md): A Boolean value indicating whether a paused animation scrubs linearly or uses its specified timing information.
