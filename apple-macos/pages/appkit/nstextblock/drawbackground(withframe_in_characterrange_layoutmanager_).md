> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/drawbackground(withframe:in:characterrange:layoutmanager:)](https://developer.apple.com/documentation/appkit/nstextblock/drawbackground(withframe:in:characterrange:layoutmanager:))

# drawBackground(withFrame:in:characterRange:layoutManager:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Called by the layout manager to draw any colors and other decorations before the text is drawn.

## Declaration

```swift
func drawBackground(withFrame frameRect: NSRect, in controlView: NSView?, characterRange charRange: NSRange, layoutManager: NSLayoutManager)
```

## Parameters

- `frameRect`: The bounds rectangle in view coordinates.
- `controlView`: The view in which drawing occurs.
- `charRange`: The range of the characters in the [NSTextStorage](../nstextstorage.md) object whose glyphs are to be drawn.
- `layoutManager`: The layout manager controlling the typesetting.

# drawBackgroundWithFrame:inView:characterRange:layoutManager: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Called by the layout manager to draw any colors and other decorations before the text is drawn.

## Declaration

```objectivec
- (void) drawBackgroundWithFrame:(NSRect) frameRect inView:(NSView *) controlView characterRange:(NSRange) charRange layoutManager:(NSLayoutManager *) layoutManager;
```

## Parameters

- `frameRect`: The bounds rectangle in view coordinates.
- `controlView`: The view in which drawing occurs.
- `charRange`: The range of the characters in the [NSTextStorage](../nstextstorage.md) object whose glyphs are to be drawn.
- `layoutManager`: The layout manager controlling the typesetting.
