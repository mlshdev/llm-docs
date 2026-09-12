> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wklongpressgesturerecognizer/numberoftapsrequired](https://developer.apple.com/documentation/watchkit/wklongpressgesturerecognizer/numberoftapsrequired)

# numberOfTapsRequired (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The number of taps on the interface object that are required for the gesture to be recognized.

## Declaration

```swift
var numberOfTapsRequired: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `1`, but you can change this value when configuring the gesture recognizer in Interface Builder.

## See Also

### Configuring the Gesture Recognizer

- [minimumPressDuration](minimumpressduration.md): The minimum amount of time (in seconds) that the user’s fingers must be touching the interface object.
- [allowableMovement](allowablemovement.md): The maximum movement of the finger on the interface object that allows the gesture to be recognized.

# numberOfTapsRequired (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The number of taps on the interface object that are required for the gesture to be recognized.

## Declaration

```objectivec
@property (nonatomic) NSUInteger numberOfTapsRequired;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `1`, but you can change this value when configuring the gesture recognizer in Interface Builder.

## See Also

### Configuring the Gesture Recognizer

- [minimumPressDuration](minimumpressduration.md): The minimum amount of time (in seconds) that the user’s fingers must be touching the interface object.
- [allowableMovement](allowablemovement.md): The maximum movement of the finger on the interface object that allows the gesture to be recognized.
