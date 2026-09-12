> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexttable/drawbackground(for:withframe:in:characterrange:layoutmanager:)](https://developer.apple.com/documentation/appkit/nstexttable/drawbackground(for:withframe:in:characterrange:layoutmanager:))

# drawBackground(for:withFrame:in:characterRange:layoutManager:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Draws any colors and other decorations for a text table block.

## Declaration

```swift
func drawBackground(for block: NSTextTableBlock, withFrame frameRect: NSRect, in controlView: NSView, characterRange charRange: NSRange, layoutManager: NSLayoutManager)
```

## Parameters

- `block`: The text table block that wants to draw its background.
- `frameRect`: The area in which drawing occurs.
- `controlView`: The view controlling the drawing.
- `charRange`: The range of the characters whose glyphs are to be drawn.
- `layoutManager`: The layout manager controlling the typesetting.

<a id="Discussion"></a>

## Discussion

This methods is called by the text table block `block` to draw any colors and other decorations before the text is drawn.

# drawBackgroundForBlock:withFrame:inView:characterRange:layoutManager: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Draws any colors and other decorations for a text table block.

## Declaration

```objectivec
- (void) drawBackgroundForBlock:(NSTextTableBlock *) block withFrame:(NSRect) frameRect inView:(NSView *) controlView characterRange:(NSRange) charRange layoutManager:(NSLayoutManager *) layoutManager;
```

## Parameters

- `block`: The text table block that wants to draw its background.
- `frameRect`: The area in which drawing occurs.
- `controlView`: The view controlling the drawing.
- `charRange`: The range of the characters whose glyphs are to be drawn.
- `layoutManager`: The layout manager controlling the typesetting.

<a id="Discussion"></a>

## Discussion

This methods is called by the text table block `block` to draw any colors and other decorations before the text is drawn.
