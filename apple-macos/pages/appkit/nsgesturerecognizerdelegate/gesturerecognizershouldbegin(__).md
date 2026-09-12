> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizerdelegate/gesturerecognizershouldbegin(_:)](https://developer.apple.com/documentation/appkit/nsgesturerecognizerdelegate/gesturerecognizershouldbegin(_:))

# gestureRecognizerShouldBegin(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Asks the delegate if a gesture recognizer should transition out of the Possible (`NSGestureRecognizerStatePossible`) state.

## Declaration

```swift
@MainActor optional func gestureRecognizerShouldBegin(_ gestureRecognizer: NSGestureRecognizer) -> Bool
```

## Parameters

- `gestureRecognizer`: The gesture recognizer object that is interpreting events. This is the object with which the delegate is associated.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to let the gesture recognizer transition out of the Possible ([NSGestureRecognizer.State.possible](../nsgesturerecognizer/state-swift.enum/possible.md)) and continue trying to recognize the gesture or [false](https://developer.apple.com/documentation/swift/false) to prevent it from trying to recognize its gesture. If you do not implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

When a gesture recognizer attempts to transition from the Possible ([NSGestureRecognizer.State.possible](../nsgesturerecognizer/state-swift.enum/possible.md)) state to a different state, such as [NSGestureRecognizer.State.began](../nsgesturerecognizer/state-swift.enum/began.md), the gesture recognizer calls this method to see if the transition should occur. Returning [false](https://developer.apple.com/documentation/swift/false) from this delegate method causes the gesture recognizer to transition to the [NSGestureRecognizer.State.failed](../nsgesturerecognizer/state-swift.enum/failed.md) state.

For information about gesture states and transitions, see [State Transitions](../nsgesturerecognizer.md#State-Transitions) in [NSGestureRecognizer](../nsgesturerecognizer.md).

## See Also

### Regulating Gesture Recognition

- [gestureRecognizer(\_:shouldAttemptToRecognizeWith:)](gesturerecognizer%28__shouldattempttorecognizewith_%29.md): Asks the delegate if a gesture recognizer should attempt to recognize gestures for a particular event.

# gestureRecognizerShouldBegin: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate if a gesture recognizer should transition out of the Possible (`NSGestureRecognizerStatePossible`) state.

## Declaration

```objectivec
- (BOOL) gestureRecognizerShouldBegin:(NSGestureRecognizer *) gestureRecognizer;
```

## Parameters

- `gestureRecognizer`: The gesture recognizer object that is interpreting events. This is the object with which the delegate is associated.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to let the gesture recognizer transition out of the Possible ([NSGestureRecognizerStatePossible](../nsgesturerecognizer/state-swift.enum/possible.md)) and continue trying to recognize the gesture or [false](https://developer.apple.com/documentation/swift/false) to prevent it from trying to recognize its gesture. If you do not implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

When a gesture recognizer attempts to transition from the Possible ([NSGestureRecognizerStatePossible](../nsgesturerecognizer/state-swift.enum/possible.md)) state to a different state, such as [NSGestureRecognizerStateBegan](../nsgesturerecognizer/state-swift.enum/began.md), the gesture recognizer calls this method to see if the transition should occur. Returning [false](https://developer.apple.com/documentation/swift/false) from this delegate method causes the gesture recognizer to transition to the [NSGestureRecognizerStateFailed](../nsgesturerecognizer/state-swift.enum/failed.md) state.

For information about gesture states and transitions, see [State Transitions](../nsgesturerecognizer.md#State-Transitions) in [NSGestureRecognizer](../nsgesturerecognizer.md).

## See Also

### Regulating Gesture Recognition

- [gestureRecognizer:shouldAttemptToRecognizeWithEvent:](gesturerecognizer%28__shouldattempttorecognizewith_%29.md): Asks the delegate if a gesture recognizer should attempt to recognize gestures for a particular event.
