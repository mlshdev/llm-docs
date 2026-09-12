> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizerdelegate/gesturerecognizer(_:shouldrecognizesimultaneouslywith:)](https://developer.apple.com/documentation/appkit/nsgesturerecognizerdelegate/gesturerecognizer(_:shouldrecognizesimultaneouslywith:))

# gestureRecognizer(\_:shouldRecognizeSimultaneouslyWith:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Asks the delegate if two gesture recognizers should be allowed to recognize their gestures simultaneously.

## Declaration

```swift
@MainActor optional func gestureRecognizer(_ gestureRecognizer: NSGestureRecognizer, shouldRecognizeSimultaneouslyWith otherGestureRecognizer: NSGestureRecognizer) -> Bool
```

## Parameters

- `gestureRecognizer`: The first gesture recognizer to be considered. This is the object with which the delegate is associated.
- `otherGestureRecognizer`: The second gesture recognizer to be considered.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow `gestureRecognizer` and `otherGestureRecognizer` to recognize their gestures simultaneously. If you do not implement this method, the default return value is [false](https://developer.apple.com/documentation/swift/false)—no two gestures can be recognized simultaneously.

<a id="Discussion"></a>

## Discussion

This method is called when recognition of a gesture by either `gestureRecognizer` and `otherGestureRecognizer` would block the other gesture recognizer from recognizing its gesture. Returning [true](https://developer.apple.com/documentation/swift/true) is guaranteed to allow simultaneous recognition; returning [false](https://developer.apple.com/documentation/swift/false) is not guaranteed to prevent simultaneous recognition because the other gesture recognizer’s delegate may return [true](https://developer.apple.com/documentation/swift/true).

# gestureRecognizer:shouldRecognizeSimultaneouslyWithGestureRecognizer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate if two gesture recognizers should be allowed to recognize their gestures simultaneously.

## Declaration

```objectivec
- (BOOL) gestureRecognizer:(NSGestureRecognizer *) gestureRecognizer shouldRecognizeSimultaneouslyWithGestureRecognizer:(NSGestureRecognizer *) otherGestureRecognizer;
```

## Parameters

- `gestureRecognizer`: The first gesture recognizer to be considered. This is the object with which the delegate is associated.
- `otherGestureRecognizer`: The second gesture recognizer to be considered.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow `gestureRecognizer` and `otherGestureRecognizer` to recognize their gestures simultaneously. If you do not implement this method, the default return value is [false](https://developer.apple.com/documentation/swift/false)—no two gestures can be recognized simultaneously.

<a id="Discussion"></a>

## Discussion

This method is called when recognition of a gesture by either `gestureRecognizer` and `otherGestureRecognizer` would block the other gesture recognizer from recognizing its gesture. Returning [true](https://developer.apple.com/documentation/swift/true) is guaranteed to allow simultaneous recognition; returning [false](https://developer.apple.com/documentation/swift/false) is not guaranteed to prevent simultaneous recognition because the other gesture recognizer’s delegate may return [true](https://developer.apple.com/documentation/swift/true).
