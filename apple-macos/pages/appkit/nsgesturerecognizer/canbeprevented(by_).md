> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/canbeprevented(by:)](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/canbeprevented(by:))

# canBePrevented(by:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden to indicate that the specified gesture recognizer can prevent the current object from recognizing a gesture.

## Declaration

```swift
func canBePrevented(by preventingGestureRecognizer: NSGestureRecognizer) -> Bool
```

## Parameters

- `preventingGestureRecognizer`: The gesture recognizer that can prevent the current object from recognizing its gesture.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to indicate that `preventingGestureRecognizer` can block the current gesture recognizer from recognizing its gesture, or [false](https://developer.apple.com/documentation/swift/false) if both gesture recognizers can operate simultaneously.

<a id="Discussion"></a>

## Discussion

This method enables similar behavior as the [gestureRecognizerShouldBegin(\_:)](../nsgesturerecognizerdelegate/gesturerecognizershouldbegin%28__%29.md) and [gestureRecognizer(\_:shouldRequireFailureOf:)](../nsgesturerecognizerdelegate/gesturerecognizer%28__shouldrequirefailureof_%29.md) methods of the gesture recognizer’s delegate. Using this method lets you define rules that apply to all instances of your custom gesture recognizer class. For example, a gesture recognizer of a given class might want to prevent instances of the same class from recognizing at the same time.

## See Also

### Overriding methods for subclasses

- [reset()](reset%28%29.md): Overridden to reset the internal state of the gesture recognizer when an attempt completes.
- [mouseDown(with:)](mousedown%28with_%29.md): Informs the gesture recognizer that the user pressed the left mouse button.
- [mouseDragged(with:)](mousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with the left button pressed.
- [mouseUp(with:)](mouseup%28with_%29.md): Informs the gesture recognizer that the user released the left mouse button.
- [otherMouseDown(with:)](othermousedown%28with_%29.md): Informs the gesture recognizer that the user pressed a mouse button other than the left or right one.
- [otherMouseDragged(with:)](othermousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with a button other than the left or right one pressed.
- [otherMouseUp(with:)](othermouseup%28with_%29.md): Informs the gesture recognizer that the user released a mouse button other than the left or right one.
- [rightMouseDown(with:)](rightmousedown%28with_%29.md): Informs the gesture recognizer that the user pressed the right mouse button.
- [rightMouseDragged(with:)](rightmousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with the right button pressed.
- [rightMouseUp(with:)](rightmouseup%28with_%29.md): Informs the gesture recognizer that the user released the right mouse button.
- [magnify(with:)](magnify%28with_%29.md): Informs the gesture recognizer that the user is performing a pinch gesture.
- [rotate(with:)](rotate%28with_%29.md): Informs the gesture recognizer that the user is performing a rotation gesture.
- [canPrevent(\_:)](canprevent%28__%29.md): Overridden to indicate that the current object can prevent the specified gesture recognizer from recognizing its gesture.
- [shouldBeRequiredToFail(by:)](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the current object must fail before the specified gesture recognizer begins recognizing its gesture.
- [shouldRequireFailure(of:)](shouldrequirefailure%28of_%29.md): Overridden to indicate that the specified gesture recognizer must fail before the current object begins recognizing its gesture.

# canBePreventedByGestureRecognizer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden to indicate that the specified gesture recognizer can prevent the current object from recognizing a gesture.

## Declaration

```objectivec
- (BOOL) canBePreventedByGestureRecognizer:(NSGestureRecognizer *) preventingGestureRecognizer;
```

## Parameters

- `preventingGestureRecognizer`: The gesture recognizer that can prevent the current object from recognizing its gesture.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to indicate that `preventingGestureRecognizer` can block the current gesture recognizer from recognizing its gesture, or [false](https://developer.apple.com/documentation/swift/false) if both gesture recognizers can operate simultaneously.

<a id="Discussion"></a>

## Discussion

This method enables similar behavior as the [gestureRecognizerShouldBegin:](../nsgesturerecognizerdelegate/gesturerecognizershouldbegin%28__%29.md) and [gestureRecognizer:shouldRequireFailureOfGestureRecognizer:](../nsgesturerecognizerdelegate/gesturerecognizer%28__shouldrequirefailureof_%29.md) methods of the gesture recognizer’s delegate. Using this method lets you define rules that apply to all instances of your custom gesture recognizer class. For example, a gesture recognizer of a given class might want to prevent instances of the same class from recognizing at the same time.

## See Also

### Overriding methods for subclasses

- [reset](reset%28%29.md): Overridden to reset the internal state of the gesture recognizer when an attempt completes.
- [mouseDown:](mousedown%28with_%29.md): Informs the gesture recognizer that the user pressed the left mouse button.
- [mouseDragged:](mousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with the left button pressed.
- [mouseUp:](mouseup%28with_%29.md): Informs the gesture recognizer that the user released the left mouse button.
- [otherMouseDown:](othermousedown%28with_%29.md): Informs the gesture recognizer that the user pressed a mouse button other than the left or right one.
- [otherMouseDragged:](othermousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with a button other than the left or right one pressed.
- [otherMouseUp:](othermouseup%28with_%29.md): Informs the gesture recognizer that the user released a mouse button other than the left or right one.
- [rightMouseDown:](rightmousedown%28with_%29.md): Informs the gesture recognizer that the user pressed the right mouse button.
- [rightMouseDragged:](rightmousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with the right button pressed.
- [rightMouseUp:](rightmouseup%28with_%29.md): Informs the gesture recognizer that the user released the right mouse button.
- [magnifyWithEvent:](magnify%28with_%29.md): Informs the gesture recognizer that the user is performing a pinch gesture.
- [rotateWithEvent:](rotate%28with_%29.md): Informs the gesture recognizer that the user is performing a rotation gesture.
- [canPreventGestureRecognizer:](canprevent%28__%29.md): Overridden to indicate that the current object can prevent the specified gesture recognizer from recognizing its gesture.
- [shouldBeRequiredToFailByGestureRecognizer:](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the current object must fail before the specified gesture recognizer begins recognizing its gesture.
- [shouldRequireFailureOfGestureRecognizer:](shouldrequirefailure%28of_%29.md): Overridden to indicate that the specified gesture recognizer must fail before the current object begins recognizing its gesture.
