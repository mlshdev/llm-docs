> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/state-swift.enum/changed](https://developer.apple.com/documentation/uikit/uigesturerecognizer/state-swift.enum/changed)

# UIGestureRecognizer.State.changed (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The gesture recognizer has received touches recognized as a change to a continuous gesture.

## Declaration

```swift
case changed
```

## Mentioned In

- [About the Gesture Recognizer State Machine](../../about-the-gesture-recognizer-state-machine.md)
- [Handling long-press gestures](../../handling-long-press-gestures.md)
- [Handling pan gestures](../../handling-pan-gestures.md)
- [Handling pinch gestures](../../handling-pinch-gestures.md)
- [Handling rotation gestures](../../handling-rotation-gestures.md)

<a id="Discussion"></a>

## Discussion

It sends its action message (or messages) at the next cycle of the run loop.

## See Also

### Constants

- [UIGestureRecognizer.State.possible](possible.md): The gesture recognizer hasn’t yet recognized its gesture, but may be evaluating touch events.
- [UIGestureRecognizer.State.began](began.md): The gesture recognizer has received touch objects recognized as a continuous gesture.
- [UIGestureRecognizer.State.ended](ended.md): The gesture recognizer has received touches recognized as the end of a continuous gesture.
- [UIGestureRecognizer.State.cancelled](cancelled.md): The gesture recognizer has received touches resulting in the cancellation of a continuous gesture.
- [UIGestureRecognizer.State.failed](failed.md): The gesture recognizer has received a multi-touch sequence that it can’t recognize as its gesture.
- [recognized](recognized.md): The gesture recognizer has received a multitouch sequence that it recognizes as its gesture.

# UIGestureRecognizerStateChanged (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The gesture recognizer has received touches recognized as a change to a continuous gesture.

## Declaration

```objectivec
UIGestureRecognizerStateChanged
```

## Mentioned In

- [About the Gesture Recognizer State Machine](../../about-the-gesture-recognizer-state-machine.md)
- [Handling long-press gestures](../../handling-long-press-gestures.md)
- [Handling pan gestures](../../handling-pan-gestures.md)
- [Handling pinch gestures](../../handling-pinch-gestures.md)
- [Handling rotation gestures](../../handling-rotation-gestures.md)

<a id="Discussion"></a>

## Discussion

It sends its action message (or messages) at the next cycle of the run loop.

## See Also

### Constants

- [UIGestureRecognizerStatePossible](possible.md): The gesture recognizer hasn’t yet recognized its gesture, but may be evaluating touch events.
- [UIGestureRecognizerStateBegan](began.md): The gesture recognizer has received touch objects recognized as a continuous gesture.
- [UIGestureRecognizerStateEnded](ended.md): The gesture recognizer has received touches recognized as the end of a continuous gesture.
- [UIGestureRecognizerStateCancelled](cancelled.md): The gesture recognizer has received touches resulting in the cancellation of a continuous gesture.
- [UIGestureRecognizerStateFailed](failed.md): The gesture recognizer has received a multi-touch sequence that it can’t recognize as its gesture.
- [UIGestureRecognizerStateRecognized](recognized.md): The gesture recognizer has received a multitouch sequence that it recognizes as its gesture.
