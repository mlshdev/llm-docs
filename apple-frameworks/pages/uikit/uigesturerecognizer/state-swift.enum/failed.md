> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/state-swift.enum/failed](https://developer.apple.com/documentation/uikit/uigesturerecognizer/state-swift.enum/failed)

# UIGestureRecognizer.State.failed (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The gesture recognizer has received a multi-touch sequence that it can’t recognize as its gesture.

## Declaration

```swift
case failed
```

## Mentioned In

- [About the Gesture Recognizer State Machine](../../about-the-gesture-recognizer-state-machine.md)

<a id="Discussion"></a>

## Discussion

No action message is sent and the gesture recognizer is reset to [UIGestureRecognizer.State.possible](possible.md).

## See Also

### Constants

- [UIGestureRecognizer.State.possible](possible.md): The gesture recognizer hasn’t yet recognized its gesture, but may be evaluating touch events.
- [UIGestureRecognizer.State.began](began.md): The gesture recognizer has received touch objects recognized as a continuous gesture.
- [UIGestureRecognizer.State.changed](changed.md): The gesture recognizer has received touches recognized as a change to a continuous gesture.
- [UIGestureRecognizer.State.ended](ended.md): The gesture recognizer has received touches recognized as the end of a continuous gesture.
- [UIGestureRecognizer.State.cancelled](cancelled.md): The gesture recognizer has received touches resulting in the cancellation of a continuous gesture.
- [recognized](recognized.md): The gesture recognizer has received a multitouch sequence that it recognizes as its gesture.

# UIGestureRecognizerStateFailed (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The gesture recognizer has received a multi-touch sequence that it can’t recognize as its gesture.

## Declaration

```objectivec
UIGestureRecognizerStateFailed
```

## Mentioned In

- [About the Gesture Recognizer State Machine](../../about-the-gesture-recognizer-state-machine.md)

<a id="Discussion"></a>

## Discussion

No action message is sent and the gesture recognizer is reset to [UIGestureRecognizerStatePossible](possible.md).

## See Also

### Constants

- [UIGestureRecognizerStatePossible](possible.md): The gesture recognizer hasn’t yet recognized its gesture, but may be evaluating touch events.
- [UIGestureRecognizerStateBegan](began.md): The gesture recognizer has received touch objects recognized as a continuous gesture.
- [UIGestureRecognizerStateChanged](changed.md): The gesture recognizer has received touches recognized as a change to a continuous gesture.
- [UIGestureRecognizerStateEnded](ended.md): The gesture recognizer has received touches recognized as the end of a continuous gesture.
- [UIGestureRecognizerStateCancelled](cancelled.md): The gesture recognizer has received touches resulting in the cancellation of a continuous gesture.
- [UIGestureRecognizerStateRecognized](recognized.md): The gesture recognizer has received a multitouch sequence that it recognizes as its gesture.
