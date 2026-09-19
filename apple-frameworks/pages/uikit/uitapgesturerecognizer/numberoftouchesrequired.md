> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitapgesturerecognizer/numberoftouchesrequired

# numberOfTouchesRequired (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of fingers that the user must tap for gesture recognition.

## Declaration

```swift
var numberOfTouchesRequired: Int { get set }
```

## Mentioned In

- [Handling tap gestures](../handling-tap-gestures.md)

<a id="Discussion"></a>

## Discussion

The default value is 1.

## See Also

### Configuring the gesture

- [buttonMaskRequired](buttonmaskrequired.md): The bit mask of the buttons the user must press for gesture recognition.
- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps necessary for gesture recognition.

# numberOfTouchesRequired (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of fingers that the user must tap for gesture recognition.

## Declaration

```objectivec
@property (nonatomic) NSUInteger numberOfTouchesRequired;
```

## Mentioned In

- [Handling tap gestures](../handling-tap-gestures.md)

<a id="Discussion"></a>

## Discussion

The default value is 1.

## See Also

### Configuring the gesture

- [buttonMaskRequired](buttonmaskrequired.md): The bit mask of the buttons the user must press for gesture recognition.
- [numberOfTapsRequired](numberoftapsrequired.md): The number of taps necessary for gesture recognition.
