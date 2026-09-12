> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/layoutrect(for:at:effectiverange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/layoutrect(for:at:effectiverange:))

# layoutRect(for:at:effectiveRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the rectangle for the layout of the specified text block and glyph.

## Declaration

```swift
func layoutRect(for block: NSTextBlock, at glyphIndex: Int, effectiveRange effectiveGlyphRange: NSRangePointer?) -> NSRect
```

## Parameters

- `block`: The text block whose layout rectangle is returned.
- `glyphIndex`: Index of the glyph.
- `effectiveGlyphRange`: If not `NULL`, on output, the range for all glyphs in the text block.

<a id="return-value"></a>

## Return Value

The layout rectangle of the text block, or `NSZeroRect` if no rectangle has been set for the specified block since the last invalidation.

<a id="Discussion"></a>

## Discussion

This method causes glyph generation but not layout. Block layout rectangles and bounds rectangles are always in container coordinates.

## See Also

### Handling layout for text blocks

- [setLayoutRect(\_:for:glyphRange:)](setlayoutrect%28__for_glyphrange_%29.md): Sets the layout rectangle that encloses the specified text block and glyph range.
- [layoutRect(for:glyphRange:)](layoutrect%28for_glyphrange_%29.md): Returns the rectangle for the layout of the specified text block and glyph range.
- [setBoundsRect(\_:for:glyphRange:)](setboundsrect%28__for_glyphrange_%29.md): Sets the bounding rectangle that encloses the specified text block and glyph range.
- [boundsRect(for:glyphRange:)](boundsrect%28for_glyphrange_%29.md): Returns the bounding rectangle that encloses the specified text block and glyph range.
- [boundsRect(for:at:effectiveRange:)](boundsrect%28for_at_effectiverange_%29.md): Returns the bounding rectangle for the specified text block and glyph.

# layoutRectForTextBlock:atIndex:effectiveRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the rectangle for the layout of the specified text block and glyph.

## Declaration

```objectivec
- (NSRect) layoutRectForTextBlock:(NSTextBlock *) block atIndex:(NSUInteger) glyphIndex effectiveRange:(NSRangePointer) effectiveGlyphRange;
```

## Parameters

- `block`: The text block whose layout rectangle is returned.
- `glyphIndex`: Index of the glyph.
- `effectiveGlyphRange`: If not `NULL`, on output, the range for all glyphs in the text block.

<a id="return-value"></a>

## Return Value

The layout rectangle of the text block, or `NSZeroRect` if no rectangle has been set for the specified block since the last invalidation.

<a id="Discussion"></a>

## Discussion

This method causes glyph generation but not layout. Block layout rectangles and bounds rectangles are always in container coordinates.

## See Also

### Handling layout for text blocks

- [setLayoutRect:forTextBlock:glyphRange:](setlayoutrect%28__for_glyphrange_%29.md): Sets the layout rectangle that encloses the specified text block and glyph range.
- [layoutRectForTextBlock:glyphRange:](layoutrect%28for_glyphrange_%29.md): Returns the rectangle for the layout of the specified text block and glyph range.
- [setBoundsRect:forTextBlock:glyphRange:](setboundsrect%28__for_glyphrange_%29.md): Sets the bounding rectangle that encloses the specified text block and glyph range.
- [boundsRectForTextBlock:glyphRange:](boundsrect%28for_glyphrange_%29.md): Returns the bounding rectangle that encloses the specified text block and glyph range.
- [boundsRectForTextBlock:atIndex:effectiveRange:](boundsrect%28for_at_effectiverange_%29.md): Returns the bounding rectangle for the specified text block and glyph.
