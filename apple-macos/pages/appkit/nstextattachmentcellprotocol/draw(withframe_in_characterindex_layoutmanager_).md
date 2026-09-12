> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcellprotocol/draw(withframe:in:characterindex:layoutmanager:)](https://developer.apple.com/documentation/appkit/nstextattachmentcellprotocol/draw(withframe:in:characterindex:layoutmanager:))

# draw(withFrame:in:characterIndex:layoutManager:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the cell’s image using the specified layout manager.

## Declaration

```swift
@MainActor func draw(withFrame cellFrame: NSRect, in controlView: NSView?, characterIndex charIndex: Int, layoutManager: NSLayoutManager)
```

## Parameters

- `cellFrame`: The frame rectangle in which to draw.
- `controlView`: The view in which to draw.
- `charIndex`: The index of the attachment character within the text.
- `layoutManager`: The layout manager for the text.

## See Also

### Drawing the cell contents

- [draw(withFrame:in:)](draw%28withframe_in_%29.md): Draws the cell’s image in the specified rectangle of the currently focused view.
- [draw(withFrame:in:characterIndex:)](draw%28withframe_in_characterindex_%29.md): Draws the cell’s image at the specified index point in the view.
- [highlight(\_:withFrame:in:)](highlight%28__withframe_in_%29.md): Draws the receiver’s image with optional highlighting.

# drawWithFrame:inView:characterIndex:layoutManager: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the cell’s image using the specified layout manager.

## Declaration

```objectivec
- (void) drawWithFrame:(NSRect) cellFrame inView:(NSView *) controlView characterIndex:(NSUInteger) charIndex layoutManager:(NSLayoutManager *) layoutManager;
```

## Parameters

- `cellFrame`: The frame rectangle in which to draw.
- `controlView`: The view in which to draw.
- `charIndex`: The index of the attachment character within the text.
- `layoutManager`: The layout manager for the text.

## See Also

### Drawing the cell contents

- [drawWithFrame:inView:](draw%28withframe_in_%29.md): Draws the cell’s image in the specified rectangle of the currently focused view.
- [drawWithFrame:inView:characterIndex:](draw%28withframe_in_characterindex_%29.md): Draws the cell’s image at the specified index point in the view.
- [highlight:withFrame:inView:](highlight%28__withframe_in_%29.md): Draws the receiver’s image with optional highlighting.
