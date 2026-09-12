> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/removegesturerecognizer(_:)](https://developer.apple.com/documentation/uikit/uiview/removegesturerecognizer(_:))

# removeGestureRecognizer(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Detaches a gesture recognizer from the receiving view.

## Declaration

```swift
func removeGestureRecognizer(_ gestureRecognizer: UIGestureRecognizer)
```

## Parameters

- `gestureRecognizer`: An object whose class descends from the [UIGestureRecognizer](../uigesturerecognizer.md) class.

<a id="Discussion"></a>

## Discussion

This method releases `gestureRecognizer` in addition to detaching it from the view.

## See Also

### Managing gesture recognizers

- [addGestureRecognizer(\_:)](addgesturerecognizer%28__%29.md): Attaches a gesture recognizer to the view.
- [gestureRecognizers](gesturerecognizers.md): The gesture-recognizer objects currently attached to the view.
- [gestureRecognizerShouldBegin(\_:)](gesturerecognizershouldbegin%28__%29.md): Asks the view if the gesture recognizer should continue tracking touch events.

# removeGestureRecognizer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Detaches a gesture recognizer from the receiving view.

## Declaration

```objectivec
- (void) removeGestureRecognizer:(UIGestureRecognizer *) gestureRecognizer;
```

## Parameters

- `gestureRecognizer`: An object whose class descends from the [UIGestureRecognizer](../uigesturerecognizer.md) class.

<a id="Discussion"></a>

## Discussion

This method releases `gestureRecognizer` in addition to detaching it from the view.

## See Also

### Managing gesture recognizers

- [addGestureRecognizer:](addgesturerecognizer%28__%29.md): Attaches a gesture recognizer to the view.
- [gestureRecognizers](gesturerecognizers.md): The gesture-recognizer objects currently attached to the view.
- [gestureRecognizerShouldBegin:](gesturerecognizershouldbegin%28__%29.md): Asks the view if the gesture recognizer should continue tracking touch events.
