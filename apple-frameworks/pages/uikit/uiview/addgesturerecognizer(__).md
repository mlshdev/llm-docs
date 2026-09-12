> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/addgesturerecognizer(_:)](https://developer.apple.com/documentation/uikit/uiview/addgesturerecognizer(_:))

# addGestureRecognizer(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Attaches a gesture recognizer to the view.

## Declaration

```swift
func addGestureRecognizer(_ gestureRecognizer: UIGestureRecognizer)
```

## Parameters

- `gestureRecognizer`: An object whose class descends from the [UIGestureRecognizer](../uigesturerecognizer.md) class. This parameter must not be `nil`.

## Mentioned In

- [Handling long-press gestures](../handling-long-press-gestures.md)
- [Handling pan gestures](../handling-pan-gestures.md)
- [Handling pinch gestures](../handling-pinch-gestures.md)
- [Handling rotation gestures](../handling-rotation-gestures.md)
- [Handling swipe gestures](../handling-swipe-gestures.md)
- [Handling tap gestures](../handling-tap-gestures.md)

<a id="Discussion"></a>

## Discussion

Attaching a gesture recognizer to a view defines the scope of the represented gesture, causing it to receive touches hit-tested to that view and all of its subviews. The view establishes a strong reference to the gesture recognizer.

## See Also

### Managing gesture recognizers

- [removeGestureRecognizer(\_:)](removegesturerecognizer%28__%29.md): Detaches a gesture recognizer from the receiving view.
- [gestureRecognizers](gesturerecognizers.md): The gesture-recognizer objects currently attached to the view.
- [gestureRecognizerShouldBegin(\_:)](gesturerecognizershouldbegin%28__%29.md): Asks the view if the gesture recognizer should continue tracking touch events.

# addGestureRecognizer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Attaches a gesture recognizer to the view.

## Declaration

```objectivec
- (void) addGestureRecognizer:(UIGestureRecognizer *) gestureRecognizer;
```

## Parameters

- `gestureRecognizer`: An object whose class descends from the [UIGestureRecognizer](../uigesturerecognizer.md) class. This parameter must not be `nil`.

## Mentioned In

- [Handling long-press gestures](../handling-long-press-gestures.md)
- [Handling pan gestures](../handling-pan-gestures.md)
- [Handling pinch gestures](../handling-pinch-gestures.md)
- [Handling rotation gestures](../handling-rotation-gestures.md)
- [Handling swipe gestures](../handling-swipe-gestures.md)
- [Handling tap gestures](../handling-tap-gestures.md)

<a id="Discussion"></a>

## Discussion

Attaching a gesture recognizer to a view defines the scope of the represented gesture, causing it to receive touches hit-tested to that view and all of its subviews. The view establishes a strong reference to the gesture recognizer.

## See Also

### Managing gesture recognizers

- [removeGestureRecognizer:](removegesturerecognizer%28__%29.md): Detaches a gesture recognizer from the receiving view.
- [gestureRecognizers](gesturerecognizers.md): The gesture-recognizer objects currently attached to the view.
- [gestureRecognizerShouldBegin:](gesturerecognizershouldbegin%28__%29.md): Asks the view if the gesture recognizer should continue tracking touch events.
