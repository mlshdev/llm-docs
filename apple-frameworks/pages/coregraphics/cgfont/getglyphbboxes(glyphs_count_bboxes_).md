> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/getglyphbboxes(glyphs:count:bboxes:)](https://developer.apple.com/documentation/coregraphics/cgfont/getglyphbboxes(glyphs:count:bboxes:))

# getGlyphBBoxes(glyphs:count:bboxes:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Get the bounding box of each glyph in an array.

## Declaration

```swift
func getGlyphBBoxes(glyphs: UnsafePointer<CGGlyph>, count: Int, bboxes: UnsafeMutablePointer<CGRect>) -> Bool
```

## Parameters

- `glyphs`: A array of glyphs.
- `count`: The number of items in the `glyphs` array.
- `bboxes`: On return, the bounding boxes for each glyph.

<a id="return-value"></a>

## Return Value

`false` if bounding boxes can’t be retrieved for any reason; `true`  otherwise.

## See Also

### Working with Glyphs

- [numberOfGlyphs](numberofglyphs.md): Returns the number of glyphs in a font.
- [name(for:)](name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [getGlyphWithGlyphName(name:)](getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [getGlyphAdvances(glyphs:count:advances:)](getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [CGGlyph](../cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](../kcgglyphmax.md): The maximum allowed value of a [CGGlyph](../cgglyph.md).
- [CGFontIndex](../cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](../kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](../cgfontindex.md).
- [kCGFontIndexInvalid](../kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).

# CGFontGetGlyphBBoxes (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Get the bounding box of each glyph in an array.

## Declaration

```objectivec
extern bool CGFontGetGlyphBBoxes(CGFontRef font, const CGGlyph *glyphs, size_t count, CGRect *bboxes);
```

## Parameters

- `font`: A font object.
- `glyphs`: A array of glyphs.
- `count`: The number of items in the `glyphs` array.
- `bboxes`: On return, the bounding boxes for each glyph.

<a id="return-value"></a>

## Return Value

`false` if bounding boxes can’t be retrieved for any reason; `true`  otherwise.

## See Also

### Working with Glyphs

- [CGFontGetNumberOfGlyphs](numberofglyphs.md): Returns the number of glyphs in a font.
- [CGFontCopyGlyphNameForGlyph](name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [CGFontGetGlyphWithGlyphName](getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [CGFontGetGlyphAdvances](getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [CGGlyph](../cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](../kcgglyphmax.md): The maximum allowed value of a [CGGlyph](../cgglyph.md).
- [CGFontIndex](../cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](../kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](../cgfontindex.md).
- [kCGFontIndexInvalid](../kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).
