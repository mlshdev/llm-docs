> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilongpressgesturerecognizer/numberoftouchesrequired](https://developer.apple.com/documentation/uikit/uilongpressgesturerecognizer/numberoftouchesrequired)

# numberOfTouchesRequired (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of fingers that must touch the view for gesture recognition.

## Declaration

```swift
var numberOfTouchesRequired: Int { get set }
```

## Mentioned In

- [Handling long-press gestures](../handling-long-press-gestures.md)

<a id="Discussion"></a>

## Discussion

The default number of fingers is `1`.

## See Also

### Configuring the gesture recognizer

- [minimumPressDuration](minimumpressduration.md): The minimum time that the user must press on the view for the gesture to be recognized.
- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps on the view necessary for gesture recognition.
- [allowableMovement](allowablemovement.md): The maximum movement of the fingers on the view before the gesture fails.

# numberOfTouchesRequired (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of fingers that must touch the view for gesture recognition.

## Declaration

```objectivec
@property (nonatomic) NSUInteger numberOfTouchesRequired;
```

## Mentioned In

- [Handling long-press gestures](../handling-long-press-gestures.md)

<a id="Discussion"></a>

## Discussion

The default number of fingers is `1`.

## See Also

### Configuring the gesture recognizer

- [minimumPressDuration](minimumpressduration.md): The minimum time that the user must press on the view for the gesture to be recognized.
- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps on the view necessary for gesture recognition.
- [allowableMovement](allowablemovement.md): The maximum movement of the fingers on the view before the gesture fails.
