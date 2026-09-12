> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewpropertyanimator/ismanualhittestingenabled](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator/ismanualhittestingenabled)

# isManualHitTestingEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether your app manages hit-testing while animations are in progress.

## Declaration

```swift
var isManualHitTestingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing the animation parameters

- [duration](duration.md): The total duration (in seconds) of the main animations.
- [delay](delay.md): The delay (in seconds) after which the animations begin.
- [timingParameters](timingparameters.md): The information used to determine the timing curve for the animation.
- [isInterruptible](isinterruptible.md): A Boolean value indicating whether the animator is interruptible and can be paused or stopped.
- [isUserInteractionEnabled](isuserinteractionenabled.md): A Boolean value indicating whether views receive touch events while animations are running.
- [scrubsLinearly](scrubslinearly.md): A Boolean value indicating whether a paused animation scrubs linearly or uses its specified timing information.
- [pausesOnCompletion](pausesoncompletion.md): A Boolean value that indicates whether a completed animation remains in the active state.

# manualHitTestingEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether your app manages hit-testing while animations are in progress.

## Declaration

```objectivec
@property (nonatomic, getter=isManualHitTestingEnabled) BOOL manualHitTestingEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing the animation parameters

- [duration](duration.md): The total duration (in seconds) of the main animations.
- [delay](delay.md): The delay (in seconds) after which the animations begin.
- [timingParameters](timingparameters.md): The information used to determine the timing curve for the animation.
- [interruptible](isinterruptible.md): A Boolean value indicating whether the animator is interruptible and can be paused or stopped.
- [userInteractionEnabled](isuserinteractionenabled.md): A Boolean value indicating whether views receive touch events while animations are running.
- [scrubsLinearly](scrubslinearly.md): A Boolean value indicating whether a paused animation scrubs linearly or uses its specified timing information.
- [pausesOnCompletion](pausesoncompletion.md): A Boolean value that indicates whether a completed animation remains in the active state.
