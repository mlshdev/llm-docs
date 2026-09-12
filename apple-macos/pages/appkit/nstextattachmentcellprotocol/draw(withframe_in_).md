> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcellprotocol/draw(withframe:in:)](https://developer.apple.com/documentation/appkit/nstextattachmentcellprotocol/draw(withframe:in:))

# draw(withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the cell’s image in the specified rectangle of the currently focused view.

## Declaration

```swift
@MainActor func draw(withFrame cellFrame: NSRect, in controlView: NSView?)
```

## Parameters

- `cellFrame`: The frame rectangle in which to draw.
- `controlView`: The view in which to draw.

## See Also

### Related Documentation

- [draw(withFrame:in:)](../nscell/draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [Text Attachment Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextAttachments/TextAttachments.html#//apple_ref/doc/uid/10000094i)
- [lockFocus()](../nsview/lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.

### Drawing the cell contents

- [draw(withFrame:in:characterIndex:)](draw%28withframe_in_characterindex_%29.md): Draws the cell’s image at the specified index point in the view.
- [draw(withFrame:in:characterIndex:layoutManager:)](draw%28withframe_in_characterindex_layoutmanager_%29.md): Draws the cell’s image using the specified layout manager.
- [highlight(\_:withFrame:in:)](highlight%28__withframe_in_%29.md): Draws the receiver’s image with optional highlighting.

# drawWithFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the cell’s image in the specified rectangle of the currently focused view.

## Declaration

```objectivec
- (void) drawWithFrame:(NSRect) cellFrame inView:(NSView *) controlView;
```

## Parameters

- `cellFrame`: The frame rectangle in which to draw.
- `controlView`: The view in which to draw.

## See Also

### Related Documentation

- [drawWithFrame:inView:](../nscell/draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [Text Attachment Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextAttachments/TextAttachments.html#//apple_ref/doc/uid/10000094i)
- [lockFocus](../nsview/lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.

### Drawing the cell contents

- [drawWithFrame:inView:characterIndex:](draw%28withframe_in_characterindex_%29.md): Draws the cell’s image at the specified index point in the view.
- [drawWithFrame:inView:characterIndex:layoutManager:](draw%28withframe_in_characterindex_layoutmanager_%29.md): Draws the cell’s image using the specified layout manager.
- [highlight:withFrame:inView:](highlight%28__withframe_in_%29.md): Draws the receiver’s image with optional highlighting.
