> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/getglyphwithglyphname(name:)](https://developer.apple.com/documentation/coregraphics/cgfont/getglyphwithglyphname(name:))

# getGlyphWithGlyphName(name:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the glyph for the glyph name associated with the specified font object.

## Declaration

```swift
func getGlyphWithGlyphName(name: CFString) -> CGGlyph
```

## Parameters

- `name`: The name of the desired glyph.

<a id="return-value"></a>

## Return Value

The named glyph, or `0` if the named glyph isn’t associated with the font.

## See Also

### Working with Glyphs

- [numberOfGlyphs](numberofglyphs.md): Returns the number of glyphs in a font.
- [name(for:)](name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [getGlyphBBoxes(glyphs:count:bboxes:)](getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [getGlyphAdvances(glyphs:count:advances:)](getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [CGGlyph](../cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](../kcgglyphmax.md): The maximum allowed value of a [CGGlyph](../cgglyph.md).
- [CGFontIndex](../cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](../kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](../cgfontindex.md).
- [kCGFontIndexInvalid](../kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).

# CGFontGetGlyphWithGlyphName (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the glyph for the glyph name associated with the specified font object.

## Declaration

```objectivec
extern CGGlyph CGFontGetGlyphWithGlyphName(CGFontRef font, CFStringRef name);
```

## Parameters

- `font`: A font object.
- `name`: The name of the desired glyph.

<a id="return-value"></a>

## Return Value

The named glyph, or `0` if the named glyph isn’t associated with the font.

## See Also

### Working with Glyphs

- [CGFontGetNumberOfGlyphs](numberofglyphs.md): Returns the number of glyphs in a font.
- [CGFontCopyGlyphNameForGlyph](name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [CGFontGetGlyphBBoxes](getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [CGFontGetGlyphAdvances](getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [CGGlyph](../cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](../kcgglyphmax.md): The maximum allowed value of a [CGGlyph](../cgglyph.md).
- [CGFontIndex](../cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](../kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](../cgfontindex.md).
- [kCGFontIndexInvalid](../kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).
