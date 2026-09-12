> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/baselineoffset(in:glyphindex:)](https://developer.apple.com/documentation/appkit/nstypesetter/baselineoffset(in:glyphindex:))

# baselineOffset(in:glyphIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the distance from the bottom of the line fragment rectangle in which the glyph resides to the glyph baseline.

## Declaration

```swift
func baselineOffset(in layoutMgr: NSLayoutManager, glyphIndex: Int) -> CGFloat
```

## Parameters

- `layoutMgr`: The layout manager used for the drawing.
- `glyphIndex`: The index of the glyph in question.

<a id="return-value"></a>

## Return Value

The distance from the bottom of the line fragment rectangle in which the glyph resides to the glyph baseline.

<a id="Discussion"></a>

## Discussion

The text system uses this value to calculate the vertical position of underlines.

## See Also

### Getting information about glyphs

- [printingAdjustment(in:forNominallySpacedGlyphRange:packedGlyphs:count:)](printingadjustment%28in_fornominallyspacedglyphrange_packedglyphs_count_%29.md): Returns the interglyph spacing in the specified range when sent to a printer.

# baselineOffsetInLayoutManager:glyphIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the distance from the bottom of the line fragment rectangle in which the glyph resides to the glyph baseline.

## Declaration

```objectivec
- (CGFloat) baselineOffsetInLayoutManager:(NSLayoutManager *) layoutMgr glyphIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `layoutMgr`: The layout manager used for the drawing.
- `glyphIndex`: The index of the glyph in question.

<a id="return-value"></a>

## Return Value

The distance from the bottom of the line fragment rectangle in which the glyph resides to the glyph baseline.

<a id="Discussion"></a>

## Discussion

The text system uses this value to calculate the vertical position of underlines.

## See Also

### Getting information about glyphs

- [printingAdjustmentInLayoutManager:forNominallySpacedGlyphRange:packedGlyphs:count:](printingadjustment%28in_fornominallyspacedglyphrange_packedglyphs_count_%29.md): Returns the interglyph spacing in the specified range when sent to a printer.
