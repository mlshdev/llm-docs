> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wklongpressgesturerecognizer/allowablemovement](https://developer.apple.com/documentation/watchkit/wklongpressgesturerecognizer/allowablemovement)

# allowableMovement (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The maximum movement of the finger on the interface object that allows the gesture to be recognized.

## Declaration

```swift
var allowableMovement: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The allowable movement is measured in points. The default value of this property is `10`, but you can change this value when configuring the gesture recognizer in Interface Builder.

## See Also

### Configuring the Gesture Recognizer

- [minimumPressDuration](minimumpressduration.md): The minimum amount of time (in seconds) that the user’s fingers must be touching the interface object.
- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps on the interface object that are required for the gesture to be recognized.

# allowableMovement (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The maximum movement of the finger on the interface object that allows the gesture to be recognized.

## Declaration

```objectivec
@property (nonatomic) CGFloat allowableMovement;
```

<a id="Discussion"></a>

## Discussion

The allowable movement is measured in points. The default value of this property is `10`, but you can change this value when configuring the gesture recognizer in Interface Builder.

## See Also

### Configuring the Gesture Recognizer

- [minimumPressDuration](minimumpressduration.md): The minimum amount of time (in seconds) that the user’s fingers must be touching the interface object.
- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps on the interface object that are required for the gesture to be recognized.
