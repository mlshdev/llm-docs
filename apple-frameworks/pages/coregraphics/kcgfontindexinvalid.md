> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/kcgfontindexinvalid](https://developer.apple.com/documentation/coregraphics/kcgfontindexinvalid)

# kCGFontIndexInvalid (Swift)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An invalid font index (a value which never represents a valid glyph).

## Declaration

```swift
var kCGFontIndexInvalid: CGFontIndex { get }
```

## See Also

### Working with Glyphs

- [numberOfGlyphs](cgfont/numberofglyphs.md): Returns the number of glyphs in a font.
- [name(for:)](cgfont/name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [getGlyphWithGlyphName(name:)](cgfont/getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [getGlyphBBoxes(glyphs:count:bboxes:)](cgfont/getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [getGlyphAdvances(glyphs:count:advances:)](cgfont/getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [CGGlyph](cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](kcgglyphmax.md): The maximum allowed value of a [CGGlyph](cgglyph.md).
- [CGFontIndex](cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](cgfontindex.md).

# kCGFontIndexInvalid (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An invalid font index (a value which never represents a valid glyph).

## Declaration

```objectivec
static const CGFontIndex kCGFontIndexInvalid;
```

## See Also

### Working with Glyphs

- [CGFontGetNumberOfGlyphs](cgfont/numberofglyphs.md): Returns the number of glyphs in a font.
- [CGFontCopyGlyphNameForGlyph](cgfont/name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [CGFontGetGlyphWithGlyphName](cgfont/getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [CGFontGetGlyphBBoxes](cgfont/getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [CGFontGetGlyphAdvances](cgfont/getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [CGGlyph](cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](kcgglyphmax.md): The maximum allowed value of a [CGGlyph](cgglyph.md).
- [CGFontIndex](cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](cgfontindex.md).
