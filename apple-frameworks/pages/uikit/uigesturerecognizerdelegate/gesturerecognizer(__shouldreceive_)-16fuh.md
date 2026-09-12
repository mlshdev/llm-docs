> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizerdelegate/gesturerecognizer(_:shouldreceive:)-16fuh](https://developer.apple.com/documentation/uikit/uigesturerecognizerdelegate/gesturerecognizer(_:shouldreceive:)-16fuh)

# gestureRecognizer(\_:shouldReceive:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate if a gesture recognizer should receive an object representing a touch.

## Declaration

```swift
optional func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldReceive touch: UITouch) -> Bool
```

## Parameters

- `gestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md).
- `touch`: A [UITouch](../uitouch.md) object from the current multi-touch sequence.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) (the default) to allow the gesture recognizer to examine the touch object, [false](https://developer.apple.com/documentation/swift/false) to prevent the gesture recognizer from seeing this touch object.

<a id="Discussion"></a>

## Discussion

UIKit calls this method before calling the [touchesBegan(\_:with:)](../uigesturerecognizer/touchesbegan%28__with_%29.md) method of the gesture recognizer.

## See Also

### Regulating gesture recognition

- [gestureRecognizerShouldBegin(\_:)](gesturerecognizershouldbegin%28__%29.md): Asks the delegate if a gesture recognizer should begin interpreting touches.
- [gestureRecognizer(\_:shouldReceive:)](gesturerecognizer%28__shouldreceive_%29-73vzu.md): Asks the delegate if a gesture recognizer should receive an object representing a press.
- [gestureRecognizer(\_:shouldReceive:)](gesturerecognizer%28__shouldreceive_%29-evxd.md): Asks the delegate if a gesture recognizer should receive an object representing a touch or press event.

# gestureRecognizer:shouldReceiveTouch: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate if a gesture recognizer should receive an object representing a touch.

## Declaration

```objectivec
- (BOOL) gestureRecognizer:(UIGestureRecognizer *) gestureRecognizer shouldReceiveTouch:(UITouch *) touch;
```

## Parameters

- `gestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md).
- `touch`: A [UITouch](../uitouch.md) object from the current multi-touch sequence.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) (the default) to allow the gesture recognizer to examine the touch object, [false](https://developer.apple.com/documentation/swift/false) to prevent the gesture recognizer from seeing this touch object.

<a id="Discussion"></a>

## Discussion

UIKit calls this method before calling the [touchesBegan:withEvent:](../uigesturerecognizer/touchesbegan%28__with_%29.md) method of the gesture recognizer.

## See Also

### Regulating gesture recognition

- [gestureRecognizerShouldBegin:](gesturerecognizershouldbegin%28__%29.md): Asks the delegate if a gesture recognizer should begin interpreting touches.
- [gestureRecognizer:shouldReceivePress:](gesturerecognizer%28__shouldreceive_%29-73vzu.md): Asks the delegate if a gesture recognizer should receive an object representing a press.
- [gestureRecognizer:shouldReceiveEvent:](gesturerecognizer%28__shouldreceive_%29-evxd.md): Asks the delegate if a gesture recognizer should receive an object representing a touch or press event.
