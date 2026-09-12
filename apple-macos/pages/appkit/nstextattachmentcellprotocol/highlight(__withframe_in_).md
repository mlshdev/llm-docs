> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcellprotocol/highlight(_:withframe:in:)](https://developer.apple.com/documentation/appkit/nstextattachmentcellprotocol/highlight(_:withframe:in:))

# highlight(\_:withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the receiver’s image with optional highlighting.

## Declaration

```swift
@MainActor func highlight(_ flag: Bool, withFrame cellFrame: NSRect, in controlView: NSView?)
```

## Parameters

- `flag`: A Boolean value that indicates whether to highlight the image. Add a highlight if the value is [true](https://developer.apple.com/documentation/swift/true).
- `cellFrame`: The frame rectangle in which to draw.
- `controlView`: The view in which to draw.

## See Also

### Related Documentation

- [highlight(\_:withFrame:in:)](../nscell/highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
- [lockFocus()](../nsview/lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.

### Drawing the cell contents

- [draw(withFrame:in:)](draw%28withframe_in_%29.md): Draws the cell’s image in the specified rectangle of the currently focused view.
- [draw(withFrame:in:characterIndex:)](draw%28withframe_in_characterindex_%29.md): Draws the cell’s image at the specified index point in the view.
- [draw(withFrame:in:characterIndex:layoutManager:)](draw%28withframe_in_characterindex_layoutmanager_%29.md): Draws the cell’s image using the specified layout manager.

# highlight:withFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the receiver’s image with optional highlighting.

## Declaration

```objectivec
- (void) highlight:(BOOL) flag withFrame:(NSRect) cellFrame inView:(NSView *) controlView;
```

## Parameters

- `flag`: A Boolean value that indicates whether to highlight the image. Add a highlight if the value is [true](https://developer.apple.com/documentation/swift/true).
- `cellFrame`: The frame rectangle in which to draw.
- `controlView`: The view in which to draw.

## See Also

### Related Documentation

- [highlight:withFrame:inView:](../nscell/highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
- [lockFocus](../nsview/lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.

### Drawing the cell contents

- [drawWithFrame:inView:](draw%28withframe_in_%29.md): Draws the cell’s image in the specified rectangle of the currently focused view.
- [drawWithFrame:inView:characterIndex:](draw%28withframe_in_characterindex_%29.md): Draws the cell’s image at the specified index point in the view.
- [drawWithFrame:inView:characterIndex:layoutManager:](draw%28withframe_in_characterindex_layoutmanager_%29.md): Draws the cell’s image using the specified layout manager.
