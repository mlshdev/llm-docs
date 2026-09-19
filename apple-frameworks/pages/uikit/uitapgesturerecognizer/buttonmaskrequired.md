> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitapgesturerecognizer/buttonmaskrequired

# buttonMaskRequired (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

The bit mask of the buttons the user must press for gesture recognition.

## Declaration

```swift
var buttonMaskRequired: UIEvent.ButtonMask { get set }
```

## See Also

### Configuring the gesture

- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps necessary for gesture recognition.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of fingers that the user must tap for gesture recognition.

# buttonMaskRequired (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

The bit mask of the buttons the user must press for gesture recognition.

## Declaration

```objectivec
@property (nonatomic) UIEventButtonMask buttonMaskRequired;
```

## See Also

### Configuring the gesture

- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps necessary for gesture recognition.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of fingers that the user must tap for gesture recognition.
