> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/state-swift.enum/possible](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/state-swift.enum/possible)

# NSGestureRecognizer.State.possible (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.10+

The gesture recognizer has not yet recognized its gesture but may be evaluating events. This is the default state.

## Declaration

```swift
case possible
```

## See Also

### Getting state values

- [NSGestureRecognizer.State.began](began.md): The gesture recognizer has recognized a sequence of events as a continuous gesture. It calls its action method at the next cycle of the run loop.
- [NSGestureRecognizer.State.changed](changed.md): The gesture recognizer has detected a change to a continuous gesture. It calls its action method at the next cycle of the run loop.
- [NSGestureRecognizer.State.ended](ended.md): The gesture recognizer has detected the end of a continuous gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizer.State.possible](possible.md).
- [NSGestureRecognizer.State.cancelled](cancelled.md): The gesture recognizer received events that resulted in the cancellation of a continuous gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizer.State.possible](possible.md).
- [NSGestureRecognizer.State.failed](failed.md): The gesture recognizer failed to recognize its gesture and will not call its action method. The gesture recognizer resets itself to the [NSGestureRecognizer.State.possible](possible.md) state.
- [recognized](recognized.md): The gesture recognizer successfully recognized its gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizer.State.possible](possible.md).

# NSGestureRecognizerStatePossible (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The gesture recognizer has not yet recognized its gesture but may be evaluating events. This is the default state.

## Declaration

```objectivec
NSGestureRecognizerStatePossible
```

## See Also

### Getting state values

- [NSGestureRecognizerStateBegan](began.md): The gesture recognizer has recognized a sequence of events as a continuous gesture. It calls its action method at the next cycle of the run loop.
- [NSGestureRecognizerStateChanged](changed.md): The gesture recognizer has detected a change to a continuous gesture. It calls its action method at the next cycle of the run loop.
- [NSGestureRecognizerStateEnded](ended.md): The gesture recognizer has detected the end of a continuous gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizerStatePossible](possible.md).
- [NSGestureRecognizerStateCancelled](cancelled.md): The gesture recognizer received events that resulted in the cancellation of a continuous gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizerStatePossible](possible.md).
- [NSGestureRecognizerStateFailed](failed.md): The gesture recognizer failed to recognize its gesture and will not call its action method. The gesture recognizer resets itself to the [NSGestureRecognizerStatePossible](possible.md) state.
- [NSGestureRecognizerStateRecognized](recognized.md): The gesture recognizer successfully recognized its gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizerStatePossible](possible.md).
