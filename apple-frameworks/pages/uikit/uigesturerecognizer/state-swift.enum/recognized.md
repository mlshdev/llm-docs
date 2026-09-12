> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/state-swift.enum/recognized](https://developer.apple.com/documentation/uikit/uigesturerecognizer/state-swift.enum/recognized)

# recognized (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The gesture recognizer has received a multitouch sequence that it recognizes as its gesture.

## Declaration

```swift
static var recognized: UIGestureRecognizer.State { get }
```

## Mentioned In

- [Implementing a Continuous Gesture Recognizer](../../implementing-a-continuous-gesture-recognizer.md)
- [Implementing a discrete gesture recognizer](../../implementing-a-discrete-gesture-recognizer.md)

<a id="Discussion"></a>

## Discussion

The gesture recognizer sends its action message (or messages) at the next cycle of the run loop and resets its state to [UIGestureRecognizer.State.possible](possible.md).

## See Also

### Constants

- [UIGestureRecognizer.State.possible](possible.md): The gesture recognizer hasn’t yet recognized its gesture, but may be evaluating touch events.
- [UIGestureRecognizer.State.began](began.md): The gesture recognizer has received touch objects recognized as a continuous gesture.
- [UIGestureRecognizer.State.changed](changed.md): The gesture recognizer has received touches recognized as a change to a continuous gesture.
- [UIGestureRecognizer.State.ended](ended.md): The gesture recognizer has received touches recognized as the end of a continuous gesture.
- [UIGestureRecognizer.State.cancelled](cancelled.md): The gesture recognizer has received touches resulting in the cancellation of a continuous gesture.
- [UIGestureRecognizer.State.failed](failed.md): The gesture recognizer has received a multi-touch sequence that it can’t recognize as its gesture.

# UIGestureRecognizerStateRecognized (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The gesture recognizer has received a multitouch sequence that it recognizes as its gesture.

## Declaration

```objectivec
UIGestureRecognizerStateRecognized
```

## Mentioned In

- [Implementing a Continuous Gesture Recognizer](../../implementing-a-continuous-gesture-recognizer.md)
- [Implementing a discrete gesture recognizer](../../implementing-a-discrete-gesture-recognizer.md)

<a id="Discussion"></a>

## Discussion

The gesture recognizer sends its action message (or messages) at the next cycle of the run loop and resets its state to [UIGestureRecognizerStatePossible](possible.md).

## See Also

### Constants

- [UIGestureRecognizerStatePossible](possible.md): The gesture recognizer hasn’t yet recognized its gesture, but may be evaluating touch events.
- [UIGestureRecognizerStateBegan](began.md): The gesture recognizer has received touch objects recognized as a continuous gesture.
- [UIGestureRecognizerStateChanged](changed.md): The gesture recognizer has received touches recognized as a change to a continuous gesture.
- [UIGestureRecognizerStateEnded](ended.md): The gesture recognizer has received touches recognized as the end of a continuous gesture.
- [UIGestureRecognizerStateCancelled](cancelled.md): The gesture recognizer has received touches resulting in the cancellation of a continuous gesture.
- [UIGestureRecognizerStateFailed](failed.md): The gesture recognizer has received a multi-touch sequence that it can’t recognize as its gesture.
