> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/gesturerecognizers](https://developer.apple.com/documentation/uikit/uiview/gesturerecognizers)

# gestureRecognizers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The gesture-recognizer objects currently attached to the view.

## Declaration

```swift
var gestureRecognizers: [UIGestureRecognizer]? { get set }
```

<a id="Discussion"></a>

## Discussion

Each of these objects is an instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md). The default value of this property is `nil`. If you add a gesture recognizer and then remove it, the value of the property is an empty array.

## See Also

### Managing gesture recognizers

- [addGestureRecognizer(\_:)](addgesturerecognizer%28__%29.md): Attaches a gesture recognizer to the view.
- [removeGestureRecognizer(\_:)](removegesturerecognizer%28__%29.md): Detaches a gesture recognizer from the receiving view.
- [gestureRecognizerShouldBegin(\_:)](gesturerecognizershouldbegin%28__%29.md): Asks the view if the gesture recognizer should continue tracking touch events.

# gestureRecognizers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The gesture-recognizer objects currently attached to the view.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<__kindof UIGestureRecognizer *> * gestureRecognizers;
```

<a id="Discussion"></a>

## Discussion

Each of these objects is an instance of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md). The default value of this property is `nil`. If you add a gesture recognizer and then remove it, the value of the property is an empty array.

## See Also

### Managing gesture recognizers

- [addGestureRecognizer:](addgesturerecognizer%28__%29.md): Attaches a gesture recognizer to the view.
- [removeGestureRecognizer:](removegesturerecognizer%28__%29.md): Detaches a gesture recognizer from the receiving view.
- [gestureRecognizerShouldBegin:](gesturerecognizershouldbegin%28__%29.md): Asks the view if the gesture recognizer should continue tracking touch events.
