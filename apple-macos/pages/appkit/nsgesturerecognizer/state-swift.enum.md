> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/state-swift.enum](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/state-swift.enum)

# NSGestureRecognizer.State (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

The current state of the gesture recognizer.

## Declaration

```swift
enum State
```

## Topics

### Getting state values

- [NSGestureRecognizer.State.possible](state-swift.enum/possible.md): The gesture recognizer has not yet recognized its gesture but may be evaluating events. This is the default state.
- [NSGestureRecognizer.State.began](state-swift.enum/began.md): The gesture recognizer has recognized a sequence of events as a continuous gesture. It calls its action method at the next cycle of the run loop.
- [NSGestureRecognizer.State.changed](state-swift.enum/changed.md): The gesture recognizer has detected a change to a continuous gesture. It calls its action method at the next cycle of the run loop.
- [NSGestureRecognizer.State.ended](state-swift.enum/ended.md): The gesture recognizer has detected the end of a continuous gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizer.State.possible](state-swift.enum/possible.md).
- [NSGestureRecognizer.State.cancelled](state-swift.enum/cancelled.md): The gesture recognizer received events that resulted in the cancellation of a continuous gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizer.State.possible](state-swift.enum/possible.md).
- [NSGestureRecognizer.State.failed](state-swift.enum/failed.md): The gesture recognizer failed to recognize its gesture and will not call its action method. The gesture recognizer resets itself to the [NSGestureRecognizer.State.possible](state-swift.enum/possible.md) state.
- [recognized](state-swift.enum/recognized.md): The gesture recognizer successfully recognized its gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizer.State.possible](state-swift.enum/possible.md).

### Creating a state

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSGestureRecognizerState (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The current state of the gesture recognizer.

## Declaration

```objectivec
enum NSGestureRecognizerState : NSInteger;
```

## Topics

### Getting state values

- [NSGestureRecognizerStatePossible](state-swift.enum/possible.md): The gesture recognizer has not yet recognized its gesture but may be evaluating events. This is the default state.
- [NSGestureRecognizerStateBegan](state-swift.enum/began.md): The gesture recognizer has recognized a sequence of events as a continuous gesture. It calls its action method at the next cycle of the run loop.
- [NSGestureRecognizerStateChanged](state-swift.enum/changed.md): The gesture recognizer has detected a change to a continuous gesture. It calls its action method at the next cycle of the run loop.
- [NSGestureRecognizerStateEnded](state-swift.enum/ended.md): The gesture recognizer has detected the end of a continuous gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizerStatePossible](state-swift.enum/possible.md).
- [NSGestureRecognizerStateCancelled](state-swift.enum/cancelled.md): The gesture recognizer received events that resulted in the cancellation of a continuous gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizerStatePossible](state-swift.enum/possible.md).
- [NSGestureRecognizerStateFailed](state-swift.enum/failed.md): The gesture recognizer failed to recognize its gesture and will not call its action method. The gesture recognizer resets itself to the [NSGestureRecognizerStatePossible](state-swift.enum/possible.md) state.
- [NSGestureRecognizerStateRecognized](state-swift.enum/recognized.md): The gesture recognizer successfully recognized its gesture. It calls its action method at the next cycle of the run loop and resets its state to [NSGestureRecognizerStatePossible](state-swift.enum/possible.md).
