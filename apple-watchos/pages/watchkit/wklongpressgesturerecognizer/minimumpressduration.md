> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wklongpressgesturerecognizer/minimumpressduration](https://developer.apple.com/documentation/watchkit/wklongpressgesturerecognizer/minimumpressduration)

# minimumPressDuration (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The minimum amount of time (in seconds) that the user’s fingers must be touching the interface object.

## Declaration

```swift
var minimumPressDuration: CFTimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `0.5` seconds, but you can change this value when configuring the gesture recognizer in Interface Builder.

## See Also

### Configuring the Gesture Recognizer

- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps on the interface object that are required for the gesture to be recognized.
- [allowableMovement](allowablemovement.md): The maximum movement of the finger on the interface object that allows the gesture to be recognized.

# minimumPressDuration (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The minimum amount of time (in seconds) that the user’s fingers must be touching the interface object.

## Declaration

```objectivec
@property (nonatomic) CFTimeInterval minimumPressDuration;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `0.5` seconds, but you can change this value when configuring the gesture recognizer in Interface Builder.

## See Also

### Configuring the Gesture Recognizer

- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps on the interface object that are required for the gesture to be recognized.
- [allowableMovement](allowablemovement.md): The maximum movement of the finger on the interface object that allows the gesture to be recognized.
