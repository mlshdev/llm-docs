> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizerdelegate/gesturerecognizershouldbegin(_:)](https://developer.apple.com/documentation/uikit/uigesturerecognizerdelegate/gesturerecognizershouldbegin(_:))

# gestureRecognizerShouldBegin(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate if a gesture recognizer should begin interpreting touches.

## Declaration

```swift
optional func gestureRecognizerShouldBegin(_ gestureRecognizer: UIGestureRecognizer) -> Bool
```

## Parameters

- `gestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md). This gesture-recognizer object is about to begin processing touches to determine if its gesture is occurring.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) (the default) to tell the gesture recognizer to proceed with interpreting touches, [false](https://developer.apple.com/documentation/swift/false) to prevent it from attempting to recognize its gesture.

<a id="Discussion"></a>

## Discussion

This method is called when a gesture recognizer attempts to transition out of the [UIGestureRecognizer.State.possible](../uigesturerecognizer/state-swift.enum/possible.md) state. Returning [false](https://developer.apple.com/documentation/swift/false) causes the gesture recognizer to transition to the [UIGestureRecognizer.State.failed](../uigesturerecognizer/state-swift.enum/failed.md) state.

## See Also

### Regulating gesture recognition

- [gestureRecognizer(\_:shouldReceive:)](gesturerecognizer%28__shouldreceive_%29-16fuh.md): Asks the delegate if a gesture recognizer should receive an object representing a touch.
- [gestureRecognizer(\_:shouldReceive:)](gesturerecognizer%28__shouldreceive_%29-73vzu.md): Asks the delegate if a gesture recognizer should receive an object representing a press.
- [gestureRecognizer(\_:shouldReceive:)](gesturerecognizer%28__shouldreceive_%29-evxd.md): Asks the delegate if a gesture recognizer should receive an object representing a touch or press event.

# gestureRecognizerShouldBegin: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate if a gesture recognizer should begin interpreting touches.

## Declaration

```objectivec
- (BOOL) gestureRecognizerShouldBegin:(UIGestureRecognizer *) gestureRecognizer;
```

## Parameters

- `gestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md). This gesture-recognizer object is about to begin processing touches to determine if its gesture is occurring.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) (the default) to tell the gesture recognizer to proceed with interpreting touches, [false](https://developer.apple.com/documentation/swift/false) to prevent it from attempting to recognize its gesture.

<a id="Discussion"></a>

## Discussion

This method is called when a gesture recognizer attempts to transition out of the [UIGestureRecognizerStatePossible](../uigesturerecognizer/state-swift.enum/possible.md) state. Returning [false](https://developer.apple.com/documentation/swift/false) causes the gesture recognizer to transition to the [UIGestureRecognizerStateFailed](../uigesturerecognizer/state-swift.enum/failed.md) state.

## See Also

### Regulating gesture recognition

- [gestureRecognizer:shouldReceiveTouch:](gesturerecognizer%28__shouldreceive_%29-16fuh.md): Asks the delegate if a gesture recognizer should receive an object representing a touch.
- [gestureRecognizer:shouldReceivePress:](gesturerecognizer%28__shouldreceive_%29-73vzu.md): Asks the delegate if a gesture recognizer should receive an object representing a press.
- [gestureRecognizer:shouldReceiveEvent:](gesturerecognizer%28__shouldreceive_%29-evxd.md): Asks the delegate if a gesture recognizer should receive an object representing a touch or press event.
