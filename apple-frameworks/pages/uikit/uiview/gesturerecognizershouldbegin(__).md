> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/gesturerecognizershouldbegin(_:)](https://developer.apple.com/documentation/uikit/uiview/gesturerecognizershouldbegin(_:))

# gestureRecognizerShouldBegin(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the view if the gesture recognizer should continue tracking touch events.

## Declaration

```swift
func gestureRecognizerShouldBegin(_ gestureRecognizer: UIGestureRecognizer) -> Bool
```

## Parameters

- `gestureRecognizer`: The gesture recognizer that’s attempting to transition out of the [UIGestureRecognizer.State.possible](../uigesturerecognizer/state-swift.enum/possible.md) state.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the gesture recognizer should continue tracking touch events and use them to trigger a gesture or [false](https://developer.apple.com/documentation/swift/false) if it should transition to the [UIGestureRecognizer.State.failed](../uigesturerecognizer/state-swift.enum/failed.md) state.

<a id="Discussion"></a>

## Discussion

Subclasses may override this method and use it to prevent the recognition of particular gestures. For example, the [UISlider](../uislider.md) class uses this method to prevent swipes parallel to the slider’s travel direction and that start in the thumb.

At the time this method is called, the gesture recognizer is in the [UIGestureRecognizer.State.possible](../uigesturerecognizer/state-swift.enum/possible.md) state and thinks it has the events needed to move to the [UIGestureRecognizer.State.began](../uigesturerecognizer/state-swift.enum/began.md) state.

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  In iOS 17, Messages allows you to interactively resize iMessage apps with a vertical pan gesture. Messages handles any conflicts between resize gestures and your custom gestures. If your app uses manual touch handling, override those methods in your app’s [UIView](../uiview.md). You can either change your manual touch handling code to use a gesture recognizer instead, or your [UIView](../uiview.md) can override [gestureRecognizerShouldBegin(\_:)](../uigesturerecognizerdelegate/gesturerecognizershouldbegin%28__%29.md) and return NO when your iMessage app doesn’t own the gesture.

## See Also

### Managing gesture recognizers

- [addGestureRecognizer(\_:)](addgesturerecognizer%28__%29.md): Attaches a gesture recognizer to the view.
- [removeGestureRecognizer(\_:)](removegesturerecognizer%28__%29.md): Detaches a gesture recognizer from the receiving view.
- [gestureRecognizers](gesturerecognizers.md): The gesture-recognizer objects currently attached to the view.

# gestureRecognizerShouldBegin: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Asks the view if the gesture recognizer should continue tracking touch events.

## Declaration

```objectivec
- (BOOL) gestureRecognizerShouldBegin:(UIGestureRecognizer *) gestureRecognizer;
```

## Parameters

- `gestureRecognizer`: The gesture recognizer that’s attempting to transition out of the [UIGestureRecognizerStatePossible](../uigesturerecognizer/state-swift.enum/possible.md) state.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the gesture recognizer should continue tracking touch events and use them to trigger a gesture or [false](https://developer.apple.com/documentation/swift/false) if it should transition to the [UIGestureRecognizerStateFailed](../uigesturerecognizer/state-swift.enum/failed.md) state.

<a id="Discussion"></a>

## Discussion

Subclasses may override this method and use it to prevent the recognition of particular gestures. For example, the [UISlider](../uislider.md) class uses this method to prevent swipes parallel to the slider’s travel direction and that start in the thumb.

At the time this method is called, the gesture recognizer is in the [UIGestureRecognizerStatePossible](../uigesturerecognizer/state-swift.enum/possible.md) state and thinks it has the events needed to move to the [UIGestureRecognizerStateBegan](../uigesturerecognizer/state-swift.enum/began.md) state.

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  In iOS 17, Messages allows you to interactively resize iMessage apps with a vertical pan gesture. Messages handles any conflicts between resize gestures and your custom gestures. If your app uses manual touch handling, override those methods in your app’s [UIView](../uiview.md). You can either change your manual touch handling code to use a gesture recognizer instead, or your [UIView](../uiview.md) can override [gestureRecognizerShouldBegin:](../uigesturerecognizerdelegate/gesturerecognizershouldbegin%28__%29.md) and return NO when your iMessage app doesn’t own the gesture.

## See Also

### Managing gesture recognizers

- [addGestureRecognizer:](addgesturerecognizer%28__%29.md): Attaches a gesture recognizer to the view.
- [removeGestureRecognizer:](removegesturerecognizer%28__%29.md): Detaches a gesture recognizer from the receiving view.
- [gestureRecognizers](gesturerecognizers.md): The gesture-recognizer objects currently attached to the view.
