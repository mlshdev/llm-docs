> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizerdelegate/gesturerecognizer(_:shouldreceive:)-evxd](https://developer.apple.com/documentation/uikit/uigesturerecognizerdelegate/gesturerecognizer(_:shouldreceive:)-evxd)

# gestureRecognizer(\_:shouldReceive:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 13.4+ · visionOS 1.0+

Asks the delegate if a gesture recognizer should receive an object representing a touch or press event.

## Declaration

```swift
optional func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldReceive event: UIEvent) -> Bool
```

## Parameters

- `gestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md).
- `event`: A [UIEvent](../uievent.md) object from the current press or touch sequence.

<a id="return-value"></a>

## Return Value

Return [false](https://developer.apple.com/documentation/swift/false) to prevent the gesture recognizer from seeing this event.

<a id="Discussion"></a>

## Discussion

UIKit calls this method once before either the [gestureRecognizer(\_:shouldReceive:)](gesturerecognizer%28__shouldreceive_%29-73vzu.md) method or the [gestureRecognizer(\_:shouldReceive:)](gesturerecognizer%28__shouldreceive_%29-16fuh.md) method of the gesture recognizer.

## See Also

### Regulating gesture recognition

- [gestureRecognizerShouldBegin(\_:)](gesturerecognizershouldbegin%28__%29.md): Asks the delegate if a gesture recognizer should begin interpreting touches.
- [gestureRecognizer(\_:shouldReceive:)](gesturerecognizer%28__shouldreceive_%29-16fuh.md): Asks the delegate if a gesture recognizer should receive an object representing a touch.
- [gestureRecognizer(\_:shouldReceive:)](gesturerecognizer%28__shouldreceive_%29-73vzu.md): Asks the delegate if a gesture recognizer should receive an object representing a press.

# gestureRecognizer:shouldReceiveEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 13.4+ · visionOS 1.0+

Asks the delegate if a gesture recognizer should receive an object representing a touch or press event.

## Declaration

```objectivec
- (BOOL) gestureRecognizer:(UIGestureRecognizer *) gestureRecognizer shouldReceiveEvent:(UIEvent *) event;
```

## Parameters

- `gestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md).
- `event`: A [UIEvent](../uievent.md) object from the current press or touch sequence.

<a id="return-value"></a>

## Return Value

Return [false](https://developer.apple.com/documentation/swift/false) to prevent the gesture recognizer from seeing this event.

<a id="Discussion"></a>

## Discussion

UIKit calls this method once before either the [gestureRecognizer:shouldReceivePress:](gesturerecognizer%28__shouldreceive_%29-73vzu.md) method or the [gestureRecognizer:shouldReceiveTouch:](gesturerecognizer%28__shouldreceive_%29-16fuh.md) method of the gesture recognizer.

## See Also

### Regulating gesture recognition

- [gestureRecognizerShouldBegin:](gesturerecognizershouldbegin%28__%29.md): Asks the delegate if a gesture recognizer should begin interpreting touches.
- [gestureRecognizer:shouldReceiveTouch:](gesturerecognizer%28__shouldreceive_%29-16fuh.md): Asks the delegate if a gesture recognizer should receive an object representing a touch.
- [gestureRecognizer:shouldReceivePress:](gesturerecognizer%28__shouldreceive_%29-73vzu.md): Asks the delegate if a gesture recognizer should receive an object representing a press.
