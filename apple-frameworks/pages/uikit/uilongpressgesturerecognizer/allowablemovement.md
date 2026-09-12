> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilongpressgesturerecognizer/allowablemovement](https://developer.apple.com/documentation/uikit/uilongpressgesturerecognizer/allowablemovement)

# allowableMovement (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The maximum movement of the fingers on the view before the gesture fails.

## Declaration

```swift
var allowableMovement: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The allowable distance, measured in points. The default distance is `10` points.

## See Also

### Configuring the gesture recognizer

- [minimumPressDuration](minimumpressduration.md): The minimum time that the user must press on the view for the gesture to be recognized.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of fingers that must touch the view for gesture recognition.
- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps on the view necessary for gesture recognition.

# allowableMovement (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The maximum movement of the fingers on the view before the gesture fails.

## Declaration

```objectivec
@property (nonatomic) CGFloat allowableMovement;
```

<a id="Discussion"></a>

## Discussion

The allowable distance, measured in points. The default distance is `10` points.

## See Also

### Configuring the gesture recognizer

- [minimumPressDuration](minimumpressduration.md): The minimum time that the user must press on the view for the gesture to be recognized.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of fingers that must touch the view for gesture recognition.
- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps on the view necessary for gesture recognition.
