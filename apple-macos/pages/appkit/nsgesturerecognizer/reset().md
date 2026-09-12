> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/reset()](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/reset())

# reset() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden to reset the internal state of the gesture recognizer when an attempt completes.

## Declaration

```swift
func reset()
```

<a id="Discussion"></a>

## Discussion

AppKit calls this method after the gesture recognizer state has been set to any of the terminal states: [NSGestureRecognizer.State.ended](state-swift.enum/ended.md), [NSGestureRecognizer.State.cancelled](state-swift.enum/cancelled.md), [NSGestureRecognizer.State.failed](state-swift.enum/failed.md), or [recognized](state-swift.enum/recognized.md). Subclasses should override this method and use it to reset any internal state of the gesture recognizer in preparation for a new recognition attempt. After this method is called, the gesture recognizer receives no further updates for events that began but have not yet ended.

## See Also

### Overriding methods for subclasses

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
- [shouldRequireFailure(of:)](shouldrequirefailure%28of_%29.md): Overridden to indicate that the specified gesture recognizer must fail before the current object begins recognizing its gesture.

# reset (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden to reset the internal state of the gesture recognizer when an attempt completes.

## Declaration

```objectivec
- (void) reset;
```

<a id="Discussion"></a>

## Discussion

AppKit calls this method after the gesture recognizer state has been set to any of the terminal states: [NSGestureRecognizerStateEnded](state-swift.enum/ended.md), [NSGestureRecognizerStateCancelled](state-swift.enum/cancelled.md), [NSGestureRecognizerStateFailed](state-swift.enum/failed.md), or [NSGestureRecognizerStateRecognized](state-swift.enum/recognized.md). Subclasses should override this method and use it to reset any internal state of the gesture recognizer in preparation for a new recognition attempt. After this method is called, the gesture recognizer receives no further updates for events that began but have not yet ended.

## See Also

### Overriding methods for subclasses

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
- [shouldRequireFailureOfGestureRecognizer:](shouldrequirefailure%28of_%29.md): Overridden to indicate that the specified gesture recognizer must fail before the current object begins recognizing its gesture.
