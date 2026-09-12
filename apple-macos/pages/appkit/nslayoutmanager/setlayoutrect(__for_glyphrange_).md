> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/setlayoutrect(_:for:glyphrange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/setlayoutrect(_:for:glyphrange:))

# setLayoutRect(\_:for:glyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the layout rectangle that encloses the specified text block and glyph range.

## Declaration

```swift
func setLayoutRect(_ rect: NSRect, for block: NSTextBlock, glyphRange: NSRange)
```

## Parameters

- `rect`: The layout rectangle to set.
- `block`: The text block whose layout rectangle is set.
- `glyphRange`: The range of glyphs in the text block.

<a id="Discussion"></a>

## Discussion

This method causes glyph generation but not layout. Block layout rectangles and bounds rectangles are always in container coordinates.

## See Also

### Handling layout for text blocks

- [layoutRect(for:glyphRange:)](layoutrect%28for_glyphrange_%29.md): Returns the rectangle for the layout of the specified text block and glyph range.
- [setBoundsRect(\_:for:glyphRange:)](setboundsrect%28__for_glyphrange_%29.md): Sets the bounding rectangle that encloses the specified text block and glyph range.
- [boundsRect(for:glyphRange:)](boundsrect%28for_glyphrange_%29.md): Returns the bounding rectangle that encloses the specified text block and glyph range.
- [layoutRect(for:at:effectiveRange:)](layoutrect%28for_at_effectiverange_%29.md): Returns the rectangle for the layout of the specified text block and glyph.
- [boundsRect(for:at:effectiveRange:)](boundsrect%28for_at_effectiverange_%29.md): Returns the bounding rectangle for the specified text block and glyph.

# setLayoutRect:forTextBlock:glyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the layout rectangle that encloses the specified text block and glyph range.

## Declaration

```objectivec
- (void) setLayoutRect:(NSRect) rect forTextBlock:(NSTextBlock *) block glyphRange:(NSRange) glyphRange;
```

## Parameters

- `rect`: The layout rectangle to set.
- `block`: The text block whose layout rectangle is set.
- `glyphRange`: The range of glyphs in the text block.

<a id="Discussion"></a>

## Discussion

This method causes glyph generation but not layout. Block layout rectangles and bounds rectangles are always in container coordinates.

## See Also

### Handling layout for text blocks

- [layoutRectForTextBlock:glyphRange:](layoutrect%28for_glyphrange_%29.md): Returns the rectangle for the layout of the specified text block and glyph range.
- [setBoundsRect:forTextBlock:glyphRange:](setboundsrect%28__for_glyphrange_%29.md): Sets the bounding rectangle that encloses the specified text block and glyph range.
- [boundsRectForTextBlock:glyphRange:](boundsrect%28for_glyphrange_%29.md): Returns the bounding rectangle that encloses the specified text block and glyph range.
- [layoutRectForTextBlock:atIndex:effectiveRange:](layoutrect%28for_at_effectiverange_%29.md): Returns the rectangle for the layout of the specified text block and glyph.
- [boundsRectForTextBlock:atIndex:effectiveRange:](boundsrect%28for_at_effectiverange_%29.md): Returns the bounding rectangle for the specified text block and glyph.
