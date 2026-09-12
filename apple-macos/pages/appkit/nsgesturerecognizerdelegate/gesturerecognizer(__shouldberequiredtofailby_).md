> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizerdelegate/gesturerecognizer(_:shouldberequiredtofailby:)](https://developer.apple.com/documentation/appkit/nsgesturerecognizerdelegate/gesturerecognizer(_:shouldberequiredtofailby:))

# gestureRecognizer(\_:shouldBeRequiredToFailBy:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Asks the delegate if the current gesture recognizer must fail before another gesture recognizer is allowed to recognize its gesture.

## Declaration

```swift
@MainActor optional func gestureRecognizer(_ gestureRecognizer: NSGestureRecognizer, shouldBeRequiredToFailBy otherGestureRecognizer: NSGestureRecognizer) -> Bool
```

## Parameters

- `gestureRecognizer`: The gesture recognizer that must fail before `otherGestureRecognizer` can recognize its gesture. This is the object with which the delegate is associated.
- `otherGestureRecognizer`: The gesture recognizer that might need to wait to recognize its gesture.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `gestureRecognizer` must fail before `otherGestureRecognizer` is allowed to recognize its gesture. If you do not implement this method, the default return value is [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is called once per attempt to recognize, so you can change the failure requirements dynamically. The two gesture recognizers do not have to belong to the same view hierarchy.

Returning [true](https://developer.apple.com/documentation/swift/true) is guaranteed to set up the failure requirement; returning [false](https://developer.apple.com/documentation/swift/false) does not prevent the failure requirement from being set up by the other gesture recognizer.

## See Also

### Setting Up Failure Requirements

- [gestureRecognizer(\_:shouldRequireFailureOf:)](gesturerecognizer%28__shouldrequirefailureof_%29.md): Asks the delegate if the current gesture recognizer must wait to recognize its gesture until the specified gesture recognizer fails.

# gestureRecognizer:shouldBeRequiredToFailByGestureRecognizer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate if the current gesture recognizer must fail before another gesture recognizer is allowed to recognize its gesture.

## Declaration

```objectivec
- (BOOL) gestureRecognizer:(NSGestureRecognizer *) gestureRecognizer shouldBeRequiredToFailByGestureRecognizer:(NSGestureRecognizer *) otherGestureRecognizer;
```

## Parameters

- `gestureRecognizer`: The gesture recognizer that must fail before `otherGestureRecognizer` can recognize its gesture. This is the object with which the delegate is associated.
- `otherGestureRecognizer`: The gesture recognizer that might need to wait to recognize its gesture.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `gestureRecognizer` must fail before `otherGestureRecognizer` is allowed to recognize its gesture. If you do not implement this method, the default return value is [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is called once per attempt to recognize, so you can change the failure requirements dynamically. The two gesture recognizers do not have to belong to the same view hierarchy.

Returning [true](https://developer.apple.com/documentation/swift/true) is guaranteed to set up the failure requirement; returning [false](https://developer.apple.com/documentation/swift/false) does not prevent the failure requirement from being set up by the other gesture recognizer.

## See Also

### Setting Up Failure Requirements

- [gestureRecognizer:shouldRequireFailureOfGestureRecognizer:](gesturerecognizer%28__shouldrequirefailureof_%29.md): Asks the delegate if the current gesture recognizer must wait to recognize its gesture until the specified gesture recognizer fails.
