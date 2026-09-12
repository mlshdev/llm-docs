> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilongpressgesturerecognizer/minimumpressduration](https://developer.apple.com/documentation/uikit/uilongpressgesturerecognizer/minimumpressduration)

# minimumPressDuration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The minimum time that the user must press on the view for the gesture to be recognized.

## Declaration

```swift
var minimumPressDuration: TimeInterval { get set }
```

## Mentioned In

- [Handling long-press gestures](../handling-long-press-gestures.md)

<a id="Discussion"></a>

## Discussion

The time interval is in seconds. The default duration is `0.5` seconds.

## See Also

### Configuring the gesture recognizer

- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of fingers that must touch the view for gesture recognition.
- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps on the view necessary for gesture recognition.
- [allowableMovement](allowablemovement.md): The maximum movement of the fingers on the view before the gesture fails.

# minimumPressDuration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The minimum time that the user must press on the view for the gesture to be recognized.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval minimumPressDuration;
```

## Mentioned In

- [Handling long-press gestures](../handling-long-press-gestures.md)

<a id="Discussion"></a>

## Discussion

The time interval is in seconds. The default duration is `0.5` seconds.

## See Also

### Configuring the gesture recognizer

- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of fingers that must touch the view for gesture recognition.
- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps on the view necessary for gesture recognition.
- [allowableMovement](allowablemovement.md): The maximum movement of the fingers on the view before the gesture fails.
