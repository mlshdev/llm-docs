> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/setboundsrect(_:for:glyphrange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/setboundsrect(_:for:glyphrange:))

# setBoundsRect(\_:for:glyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the bounding rectangle that encloses the specified text block and glyph range.

## Declaration

```swift
func setBoundsRect(_ rect: NSRect, for block: NSTextBlock, glyphRange: NSRange)
```

## Parameters

- `rect`: The bounding rectangle to set.
- `block`: The text block whose bounding rectangle is set.
- `glyphRange`: The range of glyphs in the text block.

<a id="Discussion"></a>

## Discussion

This method causes glyph generation but not layout. Block layout rectangles and bounds rectangles are always in container coordinates.

## See Also

### Handling layout for text blocks

- [setLayoutRect(\_:for:glyphRange:)](setlayoutrect%28__for_glyphrange_%29.md): Sets the layout rectangle that encloses the specified text block and glyph range.
- [layoutRect(for:glyphRange:)](layoutrect%28for_glyphrange_%29.md): Returns the rectangle for the layout of the specified text block and glyph range.
- [boundsRect(for:glyphRange:)](boundsrect%28for_glyphrange_%29.md): Returns the bounding rectangle that encloses the specified text block and glyph range.
- [layoutRect(for:at:effectiveRange:)](layoutrect%28for_at_effectiverange_%29.md): Returns the rectangle for the layout of the specified text block and glyph.
- [boundsRect(for:at:effectiveRange:)](boundsrect%28for_at_effectiverange_%29.md): Returns the bounding rectangle for the specified text block and glyph.

# setBoundsRect:forTextBlock:glyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the bounding rectangle that encloses the specified text block and glyph range.

## Declaration

```objectivec
- (void) setBoundsRect:(NSRect) rect forTextBlock:(NSTextBlock *) block glyphRange:(NSRange) glyphRange;
```

## Parameters

- `rect`: The bounding rectangle to set.
- `block`: The text block whose bounding rectangle is set.
- `glyphRange`: The range of glyphs in the text block.

<a id="Discussion"></a>

## Discussion

This method causes glyph generation but not layout. Block layout rectangles and bounds rectangles are always in container coordinates.

## See Also

### Handling layout for text blocks

- [setLayoutRect:forTextBlock:glyphRange:](setlayoutrect%28__for_glyphrange_%29.md): Sets the layout rectangle that encloses the specified text block and glyph range.
- [layoutRectForTextBlock:glyphRange:](layoutrect%28for_glyphrange_%29.md): Returns the rectangle for the layout of the specified text block and glyph range.
- [boundsRectForTextBlock:glyphRange:](boundsrect%28for_glyphrange_%29.md): Returns the bounding rectangle that encloses the specified text block and glyph range.
- [layoutRectForTextBlock:atIndex:effectiveRange:](layoutrect%28for_at_effectiverange_%29.md): Returns the rectangle for the layout of the specified text block and glyph.
- [boundsRectForTextBlock:atIndex:effectiveRange:](boundsrect%28for_at_effectiverange_%29.md): Returns the bounding rectangle for the specified text block and glyph.
