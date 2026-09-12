> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/buttonmask](https://developer.apple.com/documentation/uikit/uigesturerecognizer/buttonmask)

# buttonMask (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A bit mask of the buttons in the gesture represented by the gesture recognizer.

## Declaration

```swift
var buttonMask: UIEvent.ButtonMask { get }
```

## See Also

### Getting the recognizer’s state and view

- [state](state-swift.property.md): The current state of the gesture recognizer.
- [UIGestureRecognizer.State](state-swift.enum.md): Constants that represent the current state a gesture recognizer is in.
- [view](view.md): The view the gesture recognizer is attached to.
- [isEnabled](isenabled.md): A Boolean property that indicates whether the gesture recognizer is enabled.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags in the gesture represented by the gesture recognizer.

# buttonMask (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A bit mask of the buttons in the gesture represented by the gesture recognizer.

## Declaration

```objectivec
@property (nonatomic, readonly) UIEventButtonMask buttonMask;
```

## See Also

### Getting the recognizer’s state and view

- [state](state-swift.property.md): The current state of the gesture recognizer.
- [UIGestureRecognizerState](state-swift.enum.md): Constants that represent the current state a gesture recognizer is in.
- [view](view.md): The view the gesture recognizer is attached to.
- [enabled](isenabled.md): A Boolean property that indicates whether the gesture recognizer is enabled.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags in the gesture represented by the gesture recognizer.
