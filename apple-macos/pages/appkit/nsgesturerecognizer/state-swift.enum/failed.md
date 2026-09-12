> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/state-swift.enum/failed](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/state-swift.enum/failed)

# NSGestureRecognizer.State.failed (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.10+

The gesture recognizer failed to recognize its gesture and will not call its action method. The gesture recognizer resets itself to the [NSGestureRecognizer.State.possible](possible.md) state.

## Declaration

```swift
case failed
```

## See Also

### Getting state values

- [NSGestureRecognizer.State.possible](possible.md): The gesture recognizer has not yet recognized its gesture but may be evaluating events. This is the default state.
- [NSGestureRecognizer.State.began](began.md): The gesture recognizer has recognized a sequence of events as a continuous gesture. It calls its action method at the next cycle of the run loop.
- [NSGestureRecognizer.State.changed](changed.md): The gesture recognizer has detected a change to a continuous gesture. It calls its action method at the next cycle of the run loop.
- [NSGestureRecognizer.State.ended](ended.md): The gesture recognizer has detected the end of a continuous gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizer.State.possible](possible.md).
- [NSGestureRecognizer.State.cancelled](cancelled.md): The gesture recognizer received events that resulted in the cancellation of a continuous gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizer.State.possible](possible.md).
- [recognized](recognized.md): The gesture recognizer successfully recognized its gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizer.State.possible](possible.md).

# NSGestureRecognizerStateFailed (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The gesture recognizer failed to recognize its gesture and will not call its action method. The gesture recognizer resets itself to the [NSGestureRecognizerStatePossible](possible.md) state.

## Declaration

```objectivec
NSGestureRecognizerStateFailed
```

## See Also

### Getting state values

- [NSGestureRecognizerStatePossible](possible.md): The gesture recognizer has not yet recognized its gesture but may be evaluating events. This is the default state.
- [NSGestureRecognizerStateBegan](began.md): The gesture recognizer has recognized a sequence of events as a continuous gesture. It calls its action method at the next cycle of the run loop.
- [NSGestureRecognizerStateChanged](changed.md): The gesture recognizer has detected a change to a continuous gesture. It calls its action method at the next cycle of the run loop.
- [NSGestureRecognizerStateEnded](ended.md): The gesture recognizer has detected the end of a continuous gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizerStatePossible](possible.md).
- [NSGestureRecognizerStateCancelled](cancelled.md): The gesture recognizer received events that resulted in the cancellation of a continuous gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizerStatePossible](possible.md).
- [NSGestureRecognizerStateRecognized](recognized.md): The gesture recognizer successfully recognized its gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizerStatePossible](possible.md).
