> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/othermousedragged(with:)](https://developer.apple.com/documentation/realitykit/arview/othermousedragged(with:))

# otherMouseDragged(with:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the view that the user has moved the mouse with a button other than the left or right button pressed.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func otherMouseDragged(with event: NSEvent)
```

## Parameters

- `event`: An object encapsulating information about the mouse event.

<a id="discussion"></a>

## Discussion

The view handles the event instead of passing it to the next responder. See [NSResponder](https://developer.apple.com/documentation/appkit/nsresponder) for more information about the responder chain.

## See Also

### Handling mouse input

- [mouseDown(with:)](mousedown%28with_%29.md): Informs the view that the user has pressed the left mouse button.
- [mouseDragged(with:)](mousedragged%28with_%29.md): Informs the view that the user has moved the mouse with the left button pressed.
- [mouseUp(with:)](mouseup%28with_%29.md): Informs the view that the user has released the left mouse button.
- [mouseMoved(with:)](mousemoved%28with_%29.md): Informs the view that the mouse has moved.
- [rightMouseDown(with:)](rightmousedown%28with_%29.md): Informs the view that the user has pressed the right mouse button.
- [rightMouseDragged(with:)](rightmousedragged%28with_%29.md): Informs the view that the user has moved the mouse with the right button pressed.
- [rightMouseUp(with:)](rightmouseup%28with_%29.md): Informs the view that the user has released the right mouse button.
- [otherMouseDown(with:)](othermousedown%28with_%29.md): Informs the view that the user has pressed a mouse button other than the left or right one.
- [otherMouseUp(with:)](othermouseup%28with_%29.md): Informs the view that the user has released a mouse button other than the left or right button.
- [scrollWheel(with:)](scrollwheel%28with_%29.md): Informs the view that the mouse’s scroll wheel has moved.
