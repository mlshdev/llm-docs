> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizerdelegate/gesturerecognizer(_:shouldreceive:)-73vzu](https://developer.apple.com/documentation/uikit/uigesturerecognizerdelegate/gesturerecognizer(_:shouldreceive:)-73vzu)

# gestureRecognizer(\_:shouldReceive:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate if a gesture recognizer should receive an object representing a press.

## Declaration

```swift
optional func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldReceive press: UIPress) -> Bool
```

## Parameters

- `gestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md).
- `press`: A [UIPress](../uipress.md) object from the current press sequence.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) (the default) to allow the gesture recognizer to examine the press object, or [false](https://developer.apple.com/documentation/swift/false) to prevent the gesture recognizer from seeing this press object.

<a id="Discussion"></a>

## Discussion

UIKit calls this method before the [pressesBegan(\_:with:)](../uigesturerecognizer/pressesbegan%28__with_%29.md) method of the gesture recognizer.

## See Also

### Regulating gesture recognition

- [gestureRecognizerShouldBegin(\_:)](gesturerecognizershouldbegin%28__%29.md): Asks the delegate if a gesture recognizer should begin interpreting touches.
- [gestureRecognizer(\_:shouldReceive:)](gesturerecognizer%28__shouldreceive_%29-16fuh.md): Asks the delegate if a gesture recognizer should receive an object representing a touch.
- [gestureRecognizer(\_:shouldReceive:)](gesturerecognizer%28__shouldreceive_%29-evxd.md): Asks the delegate if a gesture recognizer should receive an object representing a touch or press event.

# gestureRecognizer:shouldReceivePress: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate if a gesture recognizer should receive an object representing a press.

## Declaration

```objectivec
- (BOOL) gestureRecognizer:(UIGestureRecognizer *) gestureRecognizer shouldReceivePress:(UIPress *) press;
```

## Parameters

- `gestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md).
- `press`: A [UIPress](../uipress.md) object from the current press sequence.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) (the default) to allow the gesture recognizer to examine the press object, or [false](https://developer.apple.com/documentation/swift/false) to prevent the gesture recognizer from seeing this press object.

<a id="Discussion"></a>

## Discussion

UIKit calls this method before the [pressesBegan:withEvent:](../uigesturerecognizer/pressesbegan%28__with_%29.md) method of the gesture recognizer.

## See Also

### Regulating gesture recognition

- [gestureRecognizerShouldBegin:](gesturerecognizershouldbegin%28__%29.md): Asks the delegate if a gesture recognizer should begin interpreting touches.
- [gestureRecognizer:shouldReceiveTouch:](gesturerecognizer%28__shouldreceive_%29-16fuh.md): Asks the delegate if a gesture recognizer should receive an object representing a touch.
- [gestureRecognizer:shouldReceiveEvent:](gesturerecognizer%28__shouldreceive_%29-evxd.md): Asks the delegate if a gesture recognizer should receive an object representing a touch or press event.
