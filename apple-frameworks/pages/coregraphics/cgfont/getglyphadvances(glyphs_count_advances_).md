> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/getglyphadvances(glyphs:count:advances:)](https://developer.apple.com/documentation/coregraphics/cgfont/getglyphadvances(glyphs:count:advances:))

# getGlyphAdvances(glyphs:count:advances:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Gets the advance width of each glyph in the provided array.

## Declaration

```swift
func getGlyphAdvances(glyphs: UnsafePointer<CGGlyph>, count: Int, advances: UnsafeMutablePointer<Int32>) -> Bool
```

## Parameters

- `glyphs`: An array of glyphs.
- `count`: The number of glyphs in the array.
- `advances`: On output, an array of advance widths for the provided glyphs.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) unless the advance widths can’t be provided for some reason.

## See Also

### Working with Glyphs

- [numberOfGlyphs](numberofglyphs.md): Returns the number of glyphs in a font.
- [name(for:)](name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [getGlyphWithGlyphName(name:)](getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [getGlyphBBoxes(glyphs:count:bboxes:)](getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [CGGlyph](../cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](../kcgglyphmax.md): The maximum allowed value of a [CGGlyph](../cgglyph.md).
- [CGFontIndex](../cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](../kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](../cgfontindex.md).
- [kCGFontIndexInvalid](../kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).

# CGFontGetGlyphAdvances (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Gets the advance width of each glyph in the provided array.

## Declaration

```objectivec
extern bool CGFontGetGlyphAdvances(CGFontRef font, const CGGlyph *glyphs, size_t count, int *advances);
```

## Parameters

- `font`: The font object associated with the provided glyphs.
- `glyphs`: An array of glyphs.
- `count`: The number of glyphs in the array.
- `advances`: On output, an array of advance widths for the provided glyphs.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) unless the advance widths can’t be provided for some reason.

## See Also

### Working with Glyphs

- [CGFontGetNumberOfGlyphs](numberofglyphs.md): Returns the number of glyphs in a font.
- [CGFontCopyGlyphNameForGlyph](name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [CGFontGetGlyphWithGlyphName](getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [CGFontGetGlyphBBoxes](getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [CGGlyph](../cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](../kcgglyphmax.md): The maximum allowed value of a [CGGlyph](../cgglyph.md).
- [CGFontIndex](../cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](../kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](../cgfontindex.md).
- [kCGFontIndexInvalid](../kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).
