> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/name(for:)](https://developer.apple.com/documentation/coregraphics/cgfont/name(for:))

# name(for:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the glyph name of the specified glyph in the specified font.

## Declaration

```swift
func name(for glyph: CGGlyph) -> CFString?
```

## Parameters

- `glyph`: The glyph whose name is desired.

<a id="return-value"></a>

## Return Value

The name of the specified glyph, or `nil` if the glyph isn’t associated with the font object.

## See Also

### Working with Glyphs

- [numberOfGlyphs](numberofglyphs.md): Returns the number of glyphs in a font.
- [getGlyphWithGlyphName(name:)](getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [getGlyphBBoxes(glyphs:count:bboxes:)](getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [getGlyphAdvances(glyphs:count:advances:)](getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [CGGlyph](../cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](../kcgglyphmax.md): The maximum allowed value of a [CGGlyph](../cgglyph.md).
- [CGFontIndex](../cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](../kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](../cgfontindex.md).
- [kCGFontIndexInvalid](../kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).

# CGFontCopyGlyphNameForGlyph (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the glyph name of the specified glyph in the specified font.

## Declaration

```objectivec
extern CFStringRefCGFontCopyGlyphNameForGlyph(CGFontRef font, CGGlyph glyph);
```

## Parameters

- `font`: A font object.
- `glyph`: The glyph whose name is desired.

<a id="return-value"></a>

## Return Value

The name of the specified glyph, or `nil` if the glyph isn’t associated with the font object.

## See Also

### Working with Glyphs

- [CGFontGetNumberOfGlyphs](numberofglyphs.md): Returns the number of glyphs in a font.
- [CGFontGetGlyphWithGlyphName](getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [CGFontGetGlyphBBoxes](getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [CGFontGetGlyphAdvances](getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [CGGlyph](../cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](../kcgglyphmax.md): The maximum allowed value of a [CGGlyph](../cgglyph.md).
- [CGFontIndex](../cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](../kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](../cgfontindex.md).
- [kCGFontIndexInvalid](../kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).
