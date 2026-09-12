> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizerdelegate/gesturerecognizer(_:shouldattempttorecognizewith:)](https://developer.apple.com/documentation/appkit/nsgesturerecognizerdelegate/gesturerecognizer(_:shouldattempttorecognizewith:))

# gestureRecognizer(\_:shouldAttemptToRecognizeWith:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate if a gesture recognizer should attempt to recognize gestures for a particular event.

## Declaration

```swift
@MainActor optional func gestureRecognizer(_ gestureRecognizer: NSGestureRecognizer, shouldAttemptToRecognizeWith event: NSEvent) -> Bool
```

## Parameters

- `gestureRecognizer`: The gesture recognizer object that is interpreting events. This is the object with which the delegate is associated.
- `event`: An event object associated with the request.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the gesture recognizer to begin recognizing gestures for the specified event, or [false](https://developer.apple.com/documentation/swift/false) to prevent it from recognizing gestures for the specified event. If you do not implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method is called when a target view recognizes a new gesture event stream. The target view calls this method to determine whether the gesture recognizer should process events for the stream, or opt out of them. Returning [false](https://developer.apple.com/documentation/swift/false) from this method causes the gesture recognizer to opt out, and prevents the other delegate methods from being called for the event stream.

## See Also

### Regulating Gesture Recognition

- [gestureRecognizerShouldBegin(\_:)](gesturerecognizershouldbegin%28__%29.md): Asks the delegate if a gesture recognizer should transition out of the Possible (`NSGestureRecognizerStatePossible`) state.

# gestureRecognizer:shouldAttemptToRecognizeWithEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate if a gesture recognizer should attempt to recognize gestures for a particular event.

## Declaration

```objectivec
- (BOOL) gestureRecognizer:(NSGestureRecognizer *) gestureRecognizer shouldAttemptToRecognizeWithEvent:(NSEvent *) event;
```

## Parameters

- `gestureRecognizer`: The gesture recognizer object that is interpreting events. This is the object with which the delegate is associated.
- `event`: An event object associated with the request.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the gesture recognizer to begin recognizing gestures for the specified event, or [false](https://developer.apple.com/documentation/swift/false) to prevent it from recognizing gestures for the specified event. If you do not implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method is called when a target view recognizes a new gesture event stream. The target view calls this method to determine whether the gesture recognizer should process events for the stream, or opt out of them. Returning [false](https://developer.apple.com/documentation/swift/false) from this method causes the gesture recognizer to opt out, and prevents the other delegate methods from being called for the event stream.

## See Also

### Regulating Gesture Recognition

- [gestureRecognizerShouldBegin:](gesturerecognizershouldbegin%28__%29.md): Asks the delegate if a gesture recognizer should transition out of the Possible (`NSGestureRecognizerStatePossible`) state.
