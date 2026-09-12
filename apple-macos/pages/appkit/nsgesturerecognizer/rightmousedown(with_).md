> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/rightmousedown(with:)](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/rightmousedown(with:))

# rightMouseDown(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the gesture recognizer that the user pressed the right mouse button.

## Declaration

```swift
func rightMouseDown(with event: NSEvent)
```

## Parameters

- `event`: An object encapsulating information about the mouse-down event.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Use this method to start tracking the gesture in whatever way is appropriate.

A gesture recognizer monitors events that occur in its view (and any subviews) but does not take part in the responder chain itself. The gesture recognizer receives events before any views do. Use the [delaysSecondaryMouseButtonEvents](delayssecondarymousebuttonevents.md) property to control whether `event` is propagated to the view.

## See Also

### Overriding methods for subclasses

- [reset()](reset%28%29.md): Overridden to reset the internal state of the gesture recognizer when an attempt completes.
- [mouseDown(with:)](mousedown%28with_%29.md): Informs the gesture recognizer that the user pressed the left mouse button.
- [mouseDragged(with:)](mousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with the left button pressed.
- [mouseUp(with:)](mouseup%28with_%29.md): Informs the gesture recognizer that the user released the left mouse button.
- [otherMouseDown(with:)](othermousedown%28with_%29.md): Informs the gesture recognizer that the user pressed a mouse button other than the left or right one.
- [otherMouseDragged(with:)](othermousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with a button other than the left or right one pressed.
- [otherMouseUp(with:)](othermouseup%28with_%29.md): Informs the gesture recognizer that the user released a mouse button other than the left or right one.
- [rightMouseDragged(with:)](rightmousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with the right button pressed.
- [rightMouseUp(with:)](rightmouseup%28with_%29.md): Informs the gesture recognizer that the user released the right mouse button.
- [magnify(with:)](magnify%28with_%29.md): Informs the gesture recognizer that the user is performing a pinch gesture.
- [rotate(with:)](rotate%28with_%29.md): Informs the gesture recognizer that the user is performing a rotation gesture.
- [canBePrevented(by:)](canbeprevented%28by_%29.md): Overridden to indicate that the specified gesture recognizer can prevent the current object from recognizing a gesture.
- [canPrevent(\_:)](canprevent%28__%29.md): Overridden to indicate that the current object can prevent the specified gesture recognizer from recognizing its gesture.
- [shouldBeRequiredToFail(by:)](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the current object must fail before the specified gesture recognizer begins recognizing its gesture.
- [shouldRequireFailure(of:)](shouldrequirefailure%28of_%29.md): Overridden to indicate that the specified gesture recognizer must fail before the current object begins recognizing its gesture.

# rightMouseDown: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the gesture recognizer that the user pressed the right mouse button.

## Declaration

```objectivec
- (void) rightMouseDown:(NSEvent *) event;
```

## Parameters

- `event`: An object encapsulating information about the mouse-down event.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Use this method to start tracking the gesture in whatever way is appropriate.

A gesture recognizer monitors events that occur in its view (and any subviews) but does not take part in the responder chain itself. The gesture recognizer receives events before any views do. Use the [delaysSecondaryMouseButtonEvents](delayssecondarymousebuttonevents.md) property to control whether `event` is propagated to the view.

## See Also

### Overriding methods for subclasses

- [reset](reset%28%29.md): Overridden to reset the internal state of the gesture recognizer when an attempt completes.
- [mouseDown:](mousedown%28with_%29.md): Informs the gesture recognizer that the user pressed the left mouse button.
- [mouseDragged:](mousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with the left button pressed.
- [mouseUp:](mouseup%28with_%29.md): Informs the gesture recognizer that the user released the left mouse button.
- [otherMouseDown:](othermousedown%28with_%29.md): Informs the gesture recognizer that the user pressed a mouse button other than the left or right one.
- [otherMouseDragged:](othermousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with a button other than the left or right one pressed.
- [otherMouseUp:](othermouseup%28with_%29.md): Informs the gesture recognizer that the user released a mouse button other than the left or right one.
- [rightMouseDragged:](rightmousedragged%28with_%29.md): Informs the gesture recognizer that the user moved the mouse with the right button pressed.
- [rightMouseUp:](rightmouseup%28with_%29.md): Informs the gesture recognizer that the user released the right mouse button.
- [magnifyWithEvent:](magnify%28with_%29.md): Informs the gesture recognizer that the user is performing a pinch gesture.
- [rotateWithEvent:](rotate%28with_%29.md): Informs the gesture recognizer that the user is performing a rotation gesture.
- [canBePreventedByGestureRecognizer:](canbeprevented%28by_%29.md): Overridden to indicate that the specified gesture recognizer can prevent the current object from recognizing a gesture.
- [canPreventGestureRecognizer:](canprevent%28__%29.md): Overridden to indicate that the current object can prevent the specified gesture recognizer from recognizing its gesture.
- [shouldBeRequiredToFailByGestureRecognizer:](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the current object must fail before the specified gesture recognizer begins recognizing its gesture.
- [shouldRequireFailureOfGestureRecognizer:](shouldrequirefailure%28of_%29.md): Overridden to indicate that the specified gesture recognizer must fail before the current object begins recognizing its gesture.
