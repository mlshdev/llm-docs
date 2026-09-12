> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/numberofglyphs](https://developer.apple.com/documentation/coregraphics/cgfont/numberofglyphs)

# numberOfGlyphs (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the number of glyphs in a font.

## Declaration

```swift
var numberOfGlyphs: Int { get }
```

## See Also

### Working with Glyphs

- [name(for:)](name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [getGlyphWithGlyphName(name:)](getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [getGlyphBBoxes(glyphs:count:bboxes:)](getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [getGlyphAdvances(glyphs:count:advances:)](getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [CGGlyph](../cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](../kcgglyphmax.md): The maximum allowed value of a [CGGlyph](../cgglyph.md).
- [CGFontIndex](../cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](../kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](../cgfontindex.md).
- [kCGFontIndexInvalid](../kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).

# CGFontGetNumberOfGlyphs (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the number of glyphs in a font.

## Declaration

```objectivec
extern size_t CGFontGetNumberOfGlyphs(CGFontRef font);
```

## Parameters

- `font`: A font object.

<a id="return-value"></a>

## Return Value

The number of glyphs in the provided font.

## See Also

### Working with Glyphs

- [CGFontCopyGlyphNameForGlyph](name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [CGFontGetGlyphWithGlyphName](getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [CGFontGetGlyphBBoxes](getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [CGFontGetGlyphAdvances](getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [CGGlyph](../cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](../kcgglyphmax.md): The maximum allowed value of a [CGGlyph](../cgglyph.md).
- [CGFontIndex](../cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](../kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](../cgfontindex.md).
- [kCGFontIndexInvalid](../kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).
