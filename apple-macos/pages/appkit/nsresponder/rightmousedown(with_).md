> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/rightmousedown(with:)](https://developer.apple.com/documentation/appkit/nsresponder/rightmousedown(with:))

# rightMouseDown(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that the user has pressed the right mouse button.

## Declaration

```swift
func rightMouseDown(with event: NSEvent)
```

## Parameters

- `event`: An object encapsulating information about the mouse-down event.

<a id="Discussion"></a>

## Discussion

The default implementation simply passes this message to the next responder.

> **Note**

>  Prior to OS X v10.7, [NSView](../nsview.md) did not pass unhandled [rightMouseDown(with:)](rightmousedown%28with_%29.md) events up the responder chain. In macOS 10.7 and later, [NSView](../nsview.md) passes [rightMouseDown(with:)](rightmousedown%28with_%29.md) events up the responder chain if AppKit doesn’t find an associated context menu to display for the view. To avoid binary compatibility issues, this new behavior is enabled only for applications linked on macOS 10.7 or later.

## See Also

### Responding to Mouse Events

- [mouseDown(with:)](mousedown%28with_%29.md): Informs the receiver that the user has pressed the left mouse button.
- [mouseDragged(with:)](mousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with the left button pressed.
- [mouseUp(with:)](mouseup%28with_%29.md): Informs the receiver that the user has released the left mouse button.
- [mouseMoved(with:)](mousemoved%28with_%29.md): Informs the receiver that the mouse has moved.
- [mouseEntered(with:)](mouseentered%28with_%29.md): Informs the receiver that the cursor has entered a tracking rectangle.
- [mouseExited(with:)](mouseexited%28with_%29.md): Informs the receiver that the cursor has exited a tracking rectangle.
- [rightMouseDragged(with:)](rightmousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with the right button pressed.
- [rightMouseUp(with:)](rightmouseup%28with_%29.md): Informs the receiver that the user has released the right mouse button.
- [otherMouseDown(with:)](othermousedown%28with_%29.md): Informs the receiver that the user has pressed a mouse button other than the left or right one.
- [otherMouseDragged(with:)](othermousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with a button other than the left or right button pressed.
- [otherMouseUp(with:)](othermouseup%28with_%29.md): Informs the receiver that the user has released a mouse button other than the left or right button.

# rightMouseDown: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that the user has pressed the right mouse button.

## Declaration

```objectivec
- (void) rightMouseDown:(NSEvent *) event;
```

## Parameters

- `event`: An object encapsulating information about the mouse-down event.

<a id="Discussion"></a>

## Discussion

The default implementation simply passes this message to the next responder.

> **Note**

>  Prior to OS X v10.7, [NSView](../nsview.md) did not pass unhandled [rightMouseDown:](rightmousedown%28with_%29.md) events up the responder chain. In macOS 10.7 and later, [NSView](../nsview.md) passes [rightMouseDown:](rightmousedown%28with_%29.md) events up the responder chain if AppKit doesn’t find an associated context menu to display for the view. To avoid binary compatibility issues, this new behavior is enabled only for applications linked on macOS 10.7 or later.

## See Also

### Responding to Mouse Events

- [mouseDown:](mousedown%28with_%29.md): Informs the receiver that the user has pressed the left mouse button.
- [mouseDragged:](mousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with the left button pressed.
- [mouseUp:](mouseup%28with_%29.md): Informs the receiver that the user has released the left mouse button.
- [mouseMoved:](mousemoved%28with_%29.md): Informs the receiver that the mouse has moved.
- [mouseEntered:](mouseentered%28with_%29.md): Informs the receiver that the cursor has entered a tracking rectangle.
- [mouseExited:](mouseexited%28with_%29.md): Informs the receiver that the cursor has exited a tracking rectangle.
- [rightMouseDragged:](rightmousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with the right button pressed.
- [rightMouseUp:](rightmouseup%28with_%29.md): Informs the receiver that the user has released the right mouse button.
- [otherMouseDown:](othermousedown%28with_%29.md): Informs the receiver that the user has pressed a mouse button other than the left or right one.
- [otherMouseDragged:](othermousedragged%28with_%29.md): Informs the receiver that the user has moved the mouse with a button other than the left or right button pressed.
- [otherMouseUp:](othermouseup%28with_%29.md): Informs the receiver that the user has released a mouse button other than the left or right button.
