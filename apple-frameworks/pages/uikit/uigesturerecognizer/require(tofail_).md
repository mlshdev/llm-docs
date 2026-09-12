> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/require(tofail:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/require(tofail:))

# require(toFail:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a dependency relationship between the gesture recognizer and another gesture recognizer when the objects are created.

## Declaration

```swift
func require(toFail otherGestureRecognizer: UIGestureRecognizer)
```

## Parameters

- `otherGestureRecognizer`: Another gesture-recognizer object (an instance of a subclass of [UIGestureRecognizer](../uigesturerecognizer.md)).

<a id="Discussion"></a>

## Discussion

This method works fine when gesture recognizers aren’t created elsewhere in the app — or in a framework — and the set of gesture recognizers remains the same. If you need to set up failure requirements lazily or in different view hierarchies, use [gestureRecognizer(\_:shouldRequireFailureOf:)](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldrequirefailureof_%29.md) and [gestureRecognizer(\_:shouldBeRequiredToFailBy:)](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldberequiredtofailby_%29.md) instead. (Note that the [shouldRequireFailure(of:)](shouldrequirefailure%28of_%29.md) and [shouldBeRequiredToFail(by:)](shouldberequiredtofail%28by_%29.md) methods let subclasses define class-wide failure requirements.)

This method creates a relationship with another gesture recognizer that delays the current gesture recognizer’s transition out of [UIGestureRecognizer.State.possible](state-swift.enum/possible.md). The state that the current gesture recognizer transitions to depends on what happens with `otherGestureRecognizer`:

- If `otherGestureRecognizer` transitions to [UIGestureRecognizer.State.failed](state-swift.enum/failed.md), the current gesture recognizer transitions to its normal next state.
- If `otherGestureRecognizer` transitions to [recognized](state-swift.enum/recognized.md) or [UIGestureRecognizer.State.began](state-swift.enum/began.md), the current gesture recognizer transitions to [UIGestureRecognizer.State.failed](state-swift.enum/failed.md).

An example where this method might be called is when you want a single-tap gesture require that a double-tap gesture fail.

## See Also

### Related Documentation

- [shouldBeRequiredToFail(by:)](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the receiver should be required to fail by the specified gesture recognizer.
- [shouldRequireFailure(of:)](shouldrequirefailure%28of_%29.md): Overridden to indicate that the receiver requires the specified gesture recognizer to fail.

# requireGestureRecognizerToFail: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a dependency relationship between the gesture recognizer and another gesture recognizer when the objects are created.

## Declaration

```objectivec
- (void) requireGestureRecognizerToFail:(UIGestureRecognizer *) otherGestureRecognizer;
```

## Parameters

- `otherGestureRecognizer`: Another gesture-recognizer object (an instance of a subclass of [UIGestureRecognizer](../uigesturerecognizer.md)).

<a id="Discussion"></a>

## Discussion

This method works fine when gesture recognizers aren’t created elsewhere in the app — or in a framework — and the set of gesture recognizers remains the same. If you need to set up failure requirements lazily or in different view hierarchies, use [gestureRecognizer:shouldRequireFailureOfGestureRecognizer:](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldrequirefailureof_%29.md) and [gestureRecognizer:shouldBeRequiredToFailByGestureRecognizer:](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldberequiredtofailby_%29.md) instead. (Note that the [shouldRequireFailureOfGestureRecognizer:](shouldrequirefailure%28of_%29.md) and [shouldBeRequiredToFailByGestureRecognizer:](shouldberequiredtofail%28by_%29.md) methods let subclasses define class-wide failure requirements.)

This method creates a relationship with another gesture recognizer that delays the current gesture recognizer’s transition out of [UIGestureRecognizerStatePossible](state-swift.enum/possible.md). The state that the current gesture recognizer transitions to depends on what happens with `otherGestureRecognizer`:

- If `otherGestureRecognizer` transitions to [UIGestureRecognizerStateFailed](state-swift.enum/failed.md), the current gesture recognizer transitions to its normal next state.
- If `otherGestureRecognizer` transitions to [UIGestureRecognizerStateRecognized](state-swift.enum/recognized.md) or [UIGestureRecognizerStateBegan](state-swift.enum/began.md), the current gesture recognizer transitions to [UIGestureRecognizerStateFailed](state-swift.enum/failed.md).

An example where this method might be called is when you want a single-tap gesture require that a double-tap gesture fail.

## See Also

### Related Documentation

- [shouldBeRequiredToFailByGestureRecognizer:](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the receiver should be required to fail by the specified gesture recognizer.
- [shouldRequireFailureOfGestureRecognizer:](shouldrequirefailure%28of_%29.md): Overridden to indicate that the receiver requires the specified gesture recognizer to fail.
