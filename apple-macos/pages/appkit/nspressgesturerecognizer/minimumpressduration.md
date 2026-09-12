> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspressgesturerecognizer/minimumpressduration](https://developer.apple.com/documentation/appkit/nspressgesturerecognizer/minimumpressduration)

# minimumPressDuration (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The minimum time (in seconds) that the user must hold the mouse button in the view for a valid gesture.

## Declaration

```swift
var minimumPressDuration: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is the same as the current double-click interval.

## See Also

### Configuring the gesture recognizer

- [allowableMovement](allowablemovement.md): The maximum movement of the mouse in the view before the gesture fails.
- [buttonMask](buttonmask.md): A bit mask of the buttons required to recognize this press.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of necessary touches on a Touch Bar for the gesture recognizer to match.

# minimumPressDuration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The minimum time (in seconds) that the user must hold the mouse button in the view for a valid gesture.

## Declaration

```objectivec
@property NSTimeInterval minimumPressDuration;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is the same as the current double-click interval.

## See Also

### Configuring the gesture recognizer

- [allowableMovement](allowablemovement.md): The maximum movement of the mouse in the view before the gesture fails.
- [buttonMask](buttonmask.md): A bit mask of the buttons required to recognize this press.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of necessary touches on a Touch Bar for the gesture recognizer to match.
