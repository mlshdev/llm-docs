> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/state-swift.enum/possible](https://developer.apple.com/documentation/uikit/uigesturerecognizer/state-swift.enum/possible)

# UIGestureRecognizer.State.possible (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The gesture recognizer hasn’t yet recognized its gesture, but may be evaluating touch events.

## Declaration

```swift
case possible
```

## Mentioned In

- [About the Gesture Recognizer State Machine](../../about-the-gesture-recognizer-state-machine.md)
- [Implementing a discrete gesture recognizer](../../implementing-a-discrete-gesture-recognizer.md)

<a id="Discussion"></a>

## Discussion

This is the default state.

## See Also

### Constants

- [UIGestureRecognizer.State.began](began.md): The gesture recognizer has received touch objects recognized as a continuous gesture.
- [UIGestureRecognizer.State.changed](changed.md): The gesture recognizer has received touches recognized as a change to a continuous gesture.
- [UIGestureRecognizer.State.ended](ended.md): The gesture recognizer has received touches recognized as the end of a continuous gesture.
- [UIGestureRecognizer.State.cancelled](cancelled.md): The gesture recognizer has received touches resulting in the cancellation of a continuous gesture.
- [UIGestureRecognizer.State.failed](failed.md): The gesture recognizer has received a multi-touch sequence that it can’t recognize as its gesture.
- [recognized](recognized.md): The gesture recognizer has received a multitouch sequence that it recognizes as its gesture.

# UIGestureRecognizerStatePossible (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The gesture recognizer hasn’t yet recognized its gesture, but may be evaluating touch events.

## Declaration

```objectivec
UIGestureRecognizerStatePossible
```

## Mentioned In

- [About the Gesture Recognizer State Machine](../../about-the-gesture-recognizer-state-machine.md)
- [Implementing a discrete gesture recognizer](../../implementing-a-discrete-gesture-recognizer.md)

<a id="Discussion"></a>

## Discussion

This is the default state.

## See Also

### Constants

- [UIGestureRecognizerStateBegan](began.md): The gesture recognizer has received touch objects recognized as a continuous gesture.
- [UIGestureRecognizerStateChanged](changed.md): The gesture recognizer has received touches recognized as a change to a continuous gesture.
- [UIGestureRecognizerStateEnded](ended.md): The gesture recognizer has received touches recognized as the end of a continuous gesture.
- [UIGestureRecognizerStateCancelled](cancelled.md): The gesture recognizer has received touches resulting in the cancellation of a continuous gesture.
- [UIGestureRecognizerStateFailed](failed.md): The gesture recognizer has received a multi-touch sequence that it can’t recognize as its gesture.
- [UIGestureRecognizerStateRecognized](recognized.md): The gesture recognizer has received a multitouch sequence that it recognizes as its gesture.
