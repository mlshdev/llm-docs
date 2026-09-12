> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/view](https://developer.apple.com/documentation/uikit/uigesturerecognizer/view)

# view (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view the gesture recognizer is attached to.

## Declaration

```swift
var view: UIView? { get }
```

<a id="Discussion"></a>

## Discussion

You attach (or add) a gesture recognizer to a `UIView` object using the [addGestureRecognizer(\_:)](../uiview/addgesturerecognizer%28__%29.md) method.

## See Also

### Getting the recognizer’s state and view

- [state](state-swift.property.md): The current state of the gesture recognizer.
- [UIGestureRecognizer.State](state-swift.enum.md): Constants that represent the current state a gesture recognizer is in.
- [isEnabled](isenabled.md): A Boolean property that indicates whether the gesture recognizer is enabled.
- [buttonMask](buttonmask.md): A bit mask of the buttons in the gesture represented by the gesture recognizer.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags in the gesture represented by the gesture recognizer.

# view (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view the gesture recognizer is attached to.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIView * view;
```

<a id="Discussion"></a>

## Discussion

You attach (or add) a gesture recognizer to a `UIView` object using the [addGestureRecognizer:](../uiview/addgesturerecognizer%28__%29.md) method.

## See Also

### Getting the recognizer’s state and view

- [state](state-swift.property.md): The current state of the gesture recognizer.
- [UIGestureRecognizerState](state-swift.enum.md): Constants that represent the current state a gesture recognizer is in.
- [enabled](isenabled.md): A Boolean property that indicates whether the gesture recognizer is enabled.
- [buttonMask](buttonmask.md): A bit mask of the buttons in the gesture represented by the gesture recognizer.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags in the gesture represented by the gesture recognizer.
