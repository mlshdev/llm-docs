> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/printingadjustment(in:fornominallyspacedglyphrange:packedglyphs:count:)](https://developer.apple.com/documentation/appkit/nstypesetter/printingadjustment(in:fornominallyspacedglyphrange:packedglyphs:count:))

# printingAdjustment(in:forNominallySpacedGlyphRange:packedGlyphs:count:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the interglyph spacing in the specified range when sent to a printer.

## Declaration

```swift
class func printingAdjustment(in layoutMgr: NSLayoutManager, forNominallySpacedGlyphRange nominallySpacedGlyphsRange: NSRange, packedGlyphs: UnsafePointer<UInt8>, count packedGlyphsCount: Int) -> NSSize
```

## Parameters

- `layoutMgr`: The layout manager that will do the drawing.
- `nominallySpacedGlyphsRange`: The range of the glyphs whose spacing is desired.
- `packedGlyphs`: The glyphs as they are packed for sending to be drawn in `layoutMgr`.
- `packedGlyphsCount`: The number of glyphs in `packedGlyphs`.

<a id="return-value"></a>

## Return Value

The interglyph spacing in the specified range when sent to a printer. If the font metrics of the font used for displaying text on the screen is different from the font metrics of the font used in printing, then this interglyph spacing may need to be adjusted slightly to match that used on the screen.

## See Also

### Getting information about glyphs

- [baselineOffset(in:glyphIndex:)](baselineoffset%28in_glyphindex_%29.md): Returns the distance from the bottom of the line fragment rectangle in which the glyph resides to the glyph baseline.

# printingAdjustmentInLayoutManager:forNominallySpacedGlyphRange:packedGlyphs:count: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the interglyph spacing in the specified range when sent to a printer.

## Declaration

```objectivec
+ (NSSize) printingAdjustmentInLayoutManager:(NSLayoutManager *) layoutMgr forNominallySpacedGlyphRange:(NSRange) nominallySpacedGlyphsRange packedGlyphs:(const unsigned char *) packedGlyphs count:(NSUInteger) packedGlyphsCount;
```

## Parameters

- `layoutMgr`: The layout manager that will do the drawing.
- `nominallySpacedGlyphsRange`: The range of the glyphs whose spacing is desired.
- `packedGlyphs`: The glyphs as they are packed for sending to be drawn in `layoutMgr`.
- `packedGlyphsCount`: The number of glyphs in `packedGlyphs`.

<a id="return-value"></a>

## Return Value

The interglyph spacing in the specified range when sent to a printer. If the font metrics of the font used for displaying text on the screen is different from the font metrics of the font used in printing, then this interglyph spacing may need to be adjusted slightly to match that used on the screen.

## See Also

### Getting information about glyphs

- [baselineOffsetInLayoutManager:glyphIndex:](baselineoffset%28in_glyphindex_%29.md): Returns the distance from the bottom of the line fragment rectangle in which the glyph resides to the glyph baseline.
