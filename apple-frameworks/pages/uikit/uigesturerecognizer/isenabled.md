> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/isenabled](https://developer.apple.com/documentation/uikit/uigesturerecognizer/isenabled)

# isEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean property that indicates whether the gesture recognizer is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Disables a gesture recognizers so it does not receive touches. The default value is [true](https://developer.apple.com/documentation/swift/true). If you change this property to [false](https://developer.apple.com/documentation/swift/false) while a gesture recognizer is currently recognizing a gesture, the gesture recognizer transitions to a cancelled state.

## See Also

### Getting the recognizer’s state and view

- [state](state-swift.property.md): The current state of the gesture recognizer.
- [UIGestureRecognizer.State](state-swift.enum.md): Constants that represent the current state a gesture recognizer is in.
- [view](view.md): The view the gesture recognizer is attached to.
- [buttonMask](buttonmask.md): A bit mask of the buttons in the gesture represented by the gesture recognizer.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags in the gesture represented by the gesture recognizer.

# enabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean property that indicates whether the gesture recognizer is enabled.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

Disables a gesture recognizers so it does not receive touches. The default value is [true](https://developer.apple.com/documentation/swift/true). If you change this property to [false](https://developer.apple.com/documentation/swift/false) while a gesture recognizer is currently recognizing a gesture, the gesture recognizer transitions to a cancelled state.

## See Also

### Getting the recognizer’s state and view

- [state](state-swift.property.md): The current state of the gesture recognizer.
- [UIGestureRecognizerState](state-swift.enum.md): Constants that represent the current state a gesture recognizer is in.
- [view](view.md): The view the gesture recognizer is attached to.
- [buttonMask](buttonmask.md): A bit mask of the buttons in the gesture represented by the gesture recognizer.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags in the gesture represented by the gesture recognizer.
