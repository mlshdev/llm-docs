> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizerdelegate/gesturerecognizer(_:shouldrecognizesimultaneouslywith:)](https://developer.apple.com/documentation/uikit/uigesturerecognizerdelegate/gesturerecognizer(_:shouldrecognizesimultaneouslywith:))

# gestureRecognizer(\_:shouldRecognizeSimultaneouslyWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate if two gesture recognizers should be allowed to recognize gestures simultaneously.

## Declaration

```swift
optional func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldRecognizeSimultaneouslyWith otherGestureRecognizer: UIGestureRecognizer) -> Bool
```

## Parameters

- `gestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md). This is the object sending the message to the delegate.
- `otherGestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow both `gestureRecognizer` and `otherGestureRecognizer` to recognize their gestures simultaneously. The default implementation returns [false](https://developer.apple.com/documentation/swift/false)—no two gestures can be recognized simultaneously.

## Mentioned In

- [Allowing the simultaneous recognition of multiple gestures](../allowing-the-simultaneous-recognition-of-multiple-gestures.md)

<a id="Discussion"></a>

## Discussion

This method is called when recognition of a gesture by either `gestureRecognizer` or `otherGestureRecognizer` would block the other gesture recognizer from recognizing its gesture. Note that returning [true](https://developer.apple.com/documentation/swift/true) is guaranteed to allow simultaneous recognition; returning [false](https://developer.apple.com/documentation/swift/false), on the other hand, is not guaranteed to prevent simultaneous recognition because the other gesture recognizer’s delegate may return [true](https://developer.apple.com/documentation/swift/true).

# gestureRecognizer:shouldRecognizeSimultaneouslyWithGestureRecognizer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate if two gesture recognizers should be allowed to recognize gestures simultaneously.

## Declaration

```objectivec
- (BOOL) gestureRecognizer:(UIGestureRecognizer *) gestureRecognizer shouldRecognizeSimultaneouslyWithGestureRecognizer:(UIGestureRecognizer *) otherGestureRecognizer;
```

## Parameters

- `gestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md). This is the object sending the message to the delegate.
- `otherGestureRecognizer`: An instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow both `gestureRecognizer` and `otherGestureRecognizer` to recognize their gestures simultaneously. The default implementation returns [false](https://developer.apple.com/documentation/swift/false)—no two gestures can be recognized simultaneously.

## Mentioned In

- [Allowing the simultaneous recognition of multiple gestures](../allowing-the-simultaneous-recognition-of-multiple-gestures.md)

<a id="Discussion"></a>

## Discussion

This method is called when recognition of a gesture by either `gestureRecognizer` or `otherGestureRecognizer` would block the other gesture recognizer from recognizing its gesture. Note that returning [true](https://developer.apple.com/documentation/swift/true) is guaranteed to allow simultaneous recognition; returning [false](https://developer.apple.com/documentation/swift/false), on the other hand, is not guaranteed to prevent simultaneous recognition because the other gesture recognizer’s delegate may return [true](https://developer.apple.com/documentation/swift/true).
