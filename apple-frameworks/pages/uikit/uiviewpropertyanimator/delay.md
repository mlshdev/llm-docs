> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewpropertyanimator/delay](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator/delay)

# delay (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The delay (in seconds) after which the animations begin.

## Declaration

```swift
var delay: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `0`. When the value is greater than 0, the start of any animations is delayed by the specified amount of time.

To set a value for this property, use the [startAnimation(afterDelay:)](../uiviewanimating/startanimation%28afterdelay_%29.md) method when starting your animations.

## See Also

### Accessing the animation parameters

- [duration](duration.md): The total duration (in seconds) of the main animations.
- [timingParameters](timingparameters.md): The information used to determine the timing curve for the animation.
- [isInterruptible](isinterruptible.md): A Boolean value indicating whether the animator is interruptible and can be paused or stopped.
- [isUserInteractionEnabled](isuserinteractionenabled.md): A Boolean value indicating whether views receive touch events while animations are running.
- [isManualHitTestingEnabled](ismanualhittestingenabled.md): A Boolean value indicating whether your app manages hit-testing while animations are in progress.
- [scrubsLinearly](scrubslinearly.md): A Boolean value indicating whether a paused animation scrubs linearly or uses its specified timing information.
- [pausesOnCompletion](pausesoncompletion.md): A Boolean value that indicates whether a completed animation remains in the active state.

# delay (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The delay (in seconds) after which the animations begin.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval delay;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `0`. When the value is greater than 0, the start of any animations is delayed by the specified amount of time.

To set a value for this property, use the [startAnimationAfterDelay:](../uiviewanimating/startanimation%28afterdelay_%29.md) method when starting your animations.

## See Also

### Accessing the animation parameters

- [duration](duration.md): The total duration (in seconds) of the main animations.
- [timingParameters](timingparameters.md): The information used to determine the timing curve for the animation.
- [interruptible](isinterruptible.md): A Boolean value indicating whether the animator is interruptible and can be paused or stopped.
- [userInteractionEnabled](isuserinteractionenabled.md): A Boolean value indicating whether views receive touch events while animations are running.
- [manualHitTestingEnabled](ismanualhittestingenabled.md): A Boolean value indicating whether your app manages hit-testing while animations are in progress.
- [scrubsLinearly](scrubslinearly.md): A Boolean value indicating whether a paused animation scrubs linearly or uses its specified timing information.
- [pausesOnCompletion](pausesoncompletion.md): A Boolean value that indicates whether a completed animation remains in the active state.
