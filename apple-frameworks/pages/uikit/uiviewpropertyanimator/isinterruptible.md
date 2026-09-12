> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewpropertyanimator/isinterruptible](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator/isinterruptible)

# isInterruptible (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the animator is interruptible and can be paused or stopped.

## Declaration

```swift
var isInterruptible: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), you can use the [pauseAnimation()](../uiviewanimating/pauseanimation%28%29.md) and [stopAnimation(\_:)](../uiviewanimating/stopanimation%28__%29.md) methods to interrupt the animations and make changes. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the animations run to completion (and without interruption) after you call the [startAnimation()](../uiviewanimating/startanimation%28%29.md) method. If you use a view property animator object to implement an interruptible view controller transition, this property must be [true](https://developer.apple.com/documentation/swift/true).

It is a programmer error to change this property if the animator’s [state](../uiviewanimating/state.md) property is not set to [UIViewAnimatingState.inactive](../uiviewanimatingstate/inactive.md).

## See Also

### Accessing the animation parameters

- [duration](duration.md): The total duration (in seconds) of the main animations.
- [delay](delay.md): The delay (in seconds) after which the animations begin.
- [timingParameters](timingparameters.md): The information used to determine the timing curve for the animation.
- [isUserInteractionEnabled](isuserinteractionenabled.md): A Boolean value indicating whether views receive touch events while animations are running.
- [isManualHitTestingEnabled](ismanualhittestingenabled.md): A Boolean value indicating whether your app manages hit-testing while animations are in progress.
- [scrubsLinearly](scrubslinearly.md): A Boolean value indicating whether a paused animation scrubs linearly or uses its specified timing information.
- [pausesOnCompletion](pausesoncompletion.md): A Boolean value that indicates whether a completed animation remains in the active state.

# interruptible (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the animator is interruptible and can be paused or stopped.

## Declaration

```objectivec
@property (nonatomic, getter=isInterruptible) BOOL interruptible;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), you can use the [pauseAnimation](../uiviewanimating/pauseanimation%28%29.md) and [stopAnimation:](../uiviewanimating/stopanimation%28__%29.md) methods to interrupt the animations and make changes. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the animations run to completion (and without interruption) after you call the [startAnimation](../uiviewanimating/startanimation%28%29.md) method. If you use a view property animator object to implement an interruptible view controller transition, this property must be [true](https://developer.apple.com/documentation/swift/true).

It is a programmer error to change this property if the animator’s [state](../uiviewanimating/state.md) property is not set to [UIViewAnimatingStateInactive](../uiviewanimatingstate/inactive.md).

## See Also

### Accessing the animation parameters

- [duration](duration.md): The total duration (in seconds) of the main animations.
- [delay](delay.md): The delay (in seconds) after which the animations begin.
- [timingParameters](timingparameters.md): The information used to determine the timing curve for the animation.
- [userInteractionEnabled](isuserinteractionenabled.md): A Boolean value indicating whether views receive touch events while animations are running.
- [manualHitTestingEnabled](ismanualhittestingenabled.md): A Boolean value indicating whether your app manages hit-testing while animations are in progress.
- [scrubsLinearly](scrubslinearly.md): A Boolean value indicating whether a paused animation scrubs linearly or uses its specified timing information.
- [pausesOnCompletion](pausesoncompletion.md): A Boolean value that indicates whether a completed animation remains in the active state.
