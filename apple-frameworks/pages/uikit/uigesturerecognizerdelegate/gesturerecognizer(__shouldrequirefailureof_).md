> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizerdelegate/gesturerecognizer(_:shouldrequirefailureof:)](https://developer.apple.com/documentation/uikit/uigesturerecognizerdelegate/gesturerecognizer(_:shouldrequirefailureof:))

# gestureRecognizer(\_:shouldRequireFailureOf:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate if a gesture recognizer should require another gesture recognizer to fail.

## Declaration

```swift
optional func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldRequireFailureOf otherGestureRecognizer: UIGestureRecognizer) -> Bool
```

## Parameters

- `gestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md). This is the object sending the message to the delegate.
- `otherGestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to set up a dynamic failure requirement between `gestureRecognizer` and `otherGestureRecognizer`. The default implementation returns [false](https://developer.apple.com/documentation/swift/false)—`gestureRecognizer` doesn’t require `otherGestureRecognizer` to fail.

## Mentioned In

- [Preferring one gesture over another](../preferring-one-gesture-over-another.md)

<a id="Discussion"></a>

## Discussion

This method is called once per attempt to recognize, so failure requirements can be determined lazily and may be set up between recognizers across view hierarchies. Note that returning [true](https://developer.apple.com/documentation/swift/true) is guaranteed to set up the failure requirement; returning [false](https://developer.apple.com/documentation/swift/false), on the other hand, isn’t guaranteed to prevent or remove a failure requirement because `otherGestureRecognizer` might make itself a failure requirement by using its own subclass or delegate methods.

## See Also

### Setting up failure requirements

- [gestureRecognizer(\_:shouldBeRequiredToFailBy:)](gesturerecognizer%28__shouldberequiredtofailby_%29.md): Asks the delegate if a gesture recognizer should be required to fail by another gesture recognizer.

# gestureRecognizer:shouldRequireFailureOfGestureRecognizer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate if a gesture recognizer should require another gesture recognizer to fail.

## Declaration

```objectivec
- (BOOL) gestureRecognizer:(UIGestureRecognizer *) gestureRecognizer shouldRequireFailureOfGestureRecognizer:(UIGestureRecognizer *) otherGestureRecognizer;
```

## Parameters

- `gestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md). This is the object sending the message to the delegate.
- `otherGestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to set up a dynamic failure requirement between `gestureRecognizer` and `otherGestureRecognizer`. The default implementation returns [false](https://developer.apple.com/documentation/swift/false)—`gestureRecognizer` doesn’t require `otherGestureRecognizer` to fail.

## Mentioned In

- [Preferring one gesture over another](../preferring-one-gesture-over-another.md)

<a id="Discussion"></a>

## Discussion

This method is called once per attempt to recognize, so failure requirements can be determined lazily and may be set up between recognizers across view hierarchies. Note that returning [true](https://developer.apple.com/documentation/swift/true) is guaranteed to set up the failure requirement; returning [false](https://developer.apple.com/documentation/swift/false), on the other hand, isn’t guaranteed to prevent or remove a failure requirement because `otherGestureRecognizer` might make itself a failure requirement by using its own subclass or delegate methods.

## See Also

### Setting up failure requirements

- [gestureRecognizer:shouldBeRequiredToFailByGestureRecognizer:](gesturerecognizer%28__shouldberequiredtofailby_%29.md): Asks the delegate if a gesture recognizer should be required to fail by another gesture recognizer.
