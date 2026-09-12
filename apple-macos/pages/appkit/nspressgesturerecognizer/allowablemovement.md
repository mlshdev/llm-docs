> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspressgesturerecognizer/allowablemovement](https://developer.apple.com/documentation/appkit/nspressgesturerecognizer/allowablemovement)

# allowableMovement (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The maximum movement of the mouse in the view before the gesture fails.

## Declaration

```swift
var allowableMovement: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The mouse must move by the specified amount along either axis for the gesture to fail. The distance is measured in points. The default value of this property is the same as the double-click distance.

## See Also

### Configuring the gesture recognizer

- [buttonMask](buttonmask.md): A bit mask of the buttons required to recognize this press.
- [minimumPressDuration](minimumpressduration.md): The minimum time (in seconds) that the user must hold the mouse button in the view for a valid gesture.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of necessary touches on a Touch Bar for the gesture recognizer to match.

# allowableMovement (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The maximum movement of the mouse in the view before the gesture fails.

## Declaration

```objectivec
@property CGFloat allowableMovement;
```

<a id="Discussion"></a>

## Discussion

The mouse must move by the specified amount along either axis for the gesture to fail. The distance is measured in points. The default value of this property is the same as the double-click distance.

## See Also

### Configuring the gesture recognizer

- [buttonMask](buttonmask.md): A bit mask of the buttons required to recognize this press.
- [minimumPressDuration](minimumpressduration.md): The minimum time (in seconds) that the user must hold the mouse button in the view for a valid gesture.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of necessary touches on a Touch Bar for the gesture recognizer to match.
