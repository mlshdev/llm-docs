> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/shouldrequirefailure(of:)](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/shouldrequirefailure(of:))

# shouldRequireFailure(of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden to indicate that the specified gesture recognizer must fail before the current object begins recognizing its gesture.

## Declaration

```swift
func shouldRequireFailure(of otherGestureRecognizer: NSGestureRecognizer) -> Bool
```

## Parameters

- `otherGestureRecognizer`: The gesture recognizer that must fail before the current object is allowed to recognize its gesture.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to cause the current object to wait to recognize its own gesture until the object in otherGestureRecognizer fails.

<a id="Discussion"></a>

## Discussion

Using this method lets you define rules that apply to all instances of your custom gesture recognizer class.

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
- [canBePrevented(by:)](canbeprevented%28by_%29.md): Overridden to indicate that the specified gesture recognizer can prevent the current object from recognizing a gesture.
- [canPrevent(\_:)](canprevent%28__%29.md): Overridden to indicate that the current object can prevent the specified gesture recognizer from recognizing its gesture.
- [shouldBeRequiredToFail(by:)](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the current object must fail before the specified gesture recognizer begins recognizing its gesture.

# shouldRequireFailureOfGestureRecognizer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden to indicate that the specified gesture recognizer must fail before the current object begins recognizing its gesture.

## Declaration

```objectivec
- (BOOL) shouldRequireFailureOfGestureRecognizer:(NSGestureRecognizer *) otherGestureRecognizer;
```

## Parameters

- `otherGestureRecognizer`: The gesture recognizer that must fail before the current object is allowed to recognize its gesture.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to cause the current object to wait to recognize its own gesture until the object in otherGestureRecognizer fails.

<a id="Discussion"></a>

## Discussion

Using this method lets you define rules that apply to all instances of your custom gesture recognizer class.

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
- [canBePreventedByGestureRecognizer:](canbeprevented%28by_%29.md): Overridden to indicate that the specified gesture recognizer can prevent the current object from recognizing a gesture.
- [canPreventGestureRecognizer:](canprevent%28__%29.md): Overridden to indicate that the current object can prevent the specified gesture recognizer from recognizing its gesture.
- [shouldBeRequiredToFailByGestureRecognizer:](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the current object must fail before the specified gesture recognizer begins recognizing its gesture.
