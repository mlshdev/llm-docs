> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/mousemoved(with:)](https://developer.apple.com/documentation/appkit/nsresponder/mousemoved(with:))

# mouseMoved(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that the mouse has moved.

## Declaration

```swift
func mouseMoved(with event: NSEvent)
```

## Parameters

- `event`: An object encapsulating information about the mouse-moved event.

<a id="Discussion"></a>

## Discussion

The default implementation simply passes this message to the next responder.

## See Also

### Related Documentation

- [acceptsMouseMovedEvents](../nswindow/acceptsmousemovedevents.md): A Boolean value that indicates whether the window accepts mouse-moved events.

### Responding to Mouse Events

- [mouseDown(with:)](mousedown%28with_%29.md): Informs the receiver that the user has pressed the left mouse button.
- [mouseDragged(with:)](mousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with the left button pressed.
- [mouseUp(with:)](mouseup%28with_%29.md): Informs the receiver that the user has released the left mouse button.
- [mouseEntered(with:)](mouseentered%28with_%29.md): Informs the receiver that the cursor has entered a tracking rectangle.
- [mouseExited(with:)](mouseexited%28with_%29.md): Informs the receiver that the cursor has exited a tracking rectangle.
- [rightMouseDown(with:)](rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [rightMouseDragged(with:)](rightmousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with the right button pressed.
- [rightMouseUp(with:)](rightmouseup%28with_%29.md): Informs the receiver that the user has released the right mouse button.
- [otherMouseDown(with:)](othermousedown%28with_%29.md): Informs the receiver that the user has pressed a mouse button other than the left or right one.
- [otherMouseDragged(with:)](othermousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with a button other than the left or right button pressed.
- [otherMouseUp(with:)](othermouseup%28with_%29.md): Informs the receiver that the user has released a mouse button other than the left or right button.

# mouseMoved: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that the mouse has moved.

## Declaration

```objectivec
- (void) mouseMoved:(NSEvent *) event;
```

## Parameters

- `event`: An object encapsulating information about the mouse-moved event.

<a id="Discussion"></a>

## Discussion

The default implementation simply passes this message to the next responder.

## See Also

### Related Documentation

- [acceptsMouseMovedEvents](../nswindow/acceptsmousemovedevents.md): A Boolean value that indicates whether the window accepts mouse-moved events.

### Responding to Mouse Events

- [mouseDown:](mousedown%28with_%29.md): Informs the receiver that the user has pressed the left mouse button.
- [mouseDragged:](mousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with the left button pressed.
- [mouseUp:](mouseup%28with_%29.md): Informs the receiver that the user has released the left mouse button.
- [mouseEntered:](mouseentered%28with_%29.md): Informs the receiver that the cursor has entered a tracking rectangle.
- [mouseExited:](mouseexited%28with_%29.md): Informs the receiver that the cursor has exited a tracking rectangle.
- [rightMouseDown:](rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [rightMouseDragged:](rightmousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with the right button pressed.
- [rightMouseUp:](rightmouseup%28with_%29.md): Informs the receiver that the user has released the right mouse button.
- [otherMouseDown:](othermousedown%28with_%29.md): Informs the receiver that the user has pressed a mouse button other than the left or right one.
- [otherMouseDragged:](othermousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with a button other than the left or right button pressed.
- [otherMouseUp:](othermouseup%28with_%29.md): Informs the receiver that the user has released a mouse button other than the left or right button.
