> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilongpressgesturerecognizer/numberoftapsrequired](https://developer.apple.com/documentation/uikit/uilongpressgesturerecognizer/numberoftapsrequired)

# numberOfTapsRequired (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The number of taps on the view necessary for gesture recognition.

## Declaration

```swift
var numberOfTapsRequired: Int { get set }
```

## Mentioned In

- [Handling long-press gestures](../handling-long-press-gestures.md)

<a id="Discussion"></a>

## Discussion

The default number of taps is `0`.

## See Also

### Configuring the gesture recognizer

- [minimumPressDuration](minimumpressduration.md): The minimum time that the user must press on the view for the gesture to be recognized.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of fingers that must touch the view for gesture recognition.
- [allowableMovement](allowablemovement.md): The maximum movement of the fingers on the view before the gesture fails.

# numberOfTapsRequired (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The number of taps on the view necessary for gesture recognition.

## Declaration

```objectivec
@property (nonatomic) NSUInteger numberOfTapsRequired;
```

## Mentioned In

- [Handling long-press gestures](../handling-long-press-gestures.md)

<a id="Discussion"></a>

## Discussion

The default number of taps is `0`.

## See Also

### Configuring the gesture recognizer

- [minimumPressDuration](minimumpressduration.md): The minimum time that the user must press on the view for the gesture to be recognized.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of fingers that must touch the view for gesture recognition.
- [allowableMovement](allowablemovement.md): The maximum movement of the fingers on the view before the gesture fails.
