> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgglyph](https://developer.apple.com/documentation/coregraphics/cgglyph)

# CGGlyph (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An index into the internal glyph table of a font.

## Declaration

```swift
typealias CGGlyph = CGFontIndex
```

<a id="Discussion"></a>

## Discussion

When drawing text, you typically specify a sequence of characters. However, Core Graphics also allows you to use [CGGlyph](cgglyph.md) values to specify glyphs. In either case, Core Graphics renders the text using font data provided by the Apple Type Services (ATS) framework.

You provide [CGGlyph](cgglyph.md) values to the functions [showGlyphs(g:count:)](cgcontext/showglyphs%28g_count_%29.md) and [showGlyphsAtPoint(x:y:glyphs:count:)](cgcontext/showglyphsatpoint%28x_y_glyphs_count_%29.md). These functions display an array of glyphs at the current text position or at a position you specify, respectively.

## See Also

### Working with Glyphs

- [numberOfGlyphs](cgfont/numberofglyphs.md): Returns the number of glyphs in a font.
- [name(for:)](cgfont/name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [getGlyphWithGlyphName(name:)](cgfont/getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [getGlyphBBoxes(glyphs:count:bboxes:)](cgfont/getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [getGlyphAdvances(glyphs:count:advances:)](cgfont/getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [kCGGlyphMax](kcgglyphmax.md): The maximum allowed value of a [CGGlyph](cgglyph.md).
- [CGFontIndex](cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](cgfontindex.md).
- [kCGFontIndexInvalid](kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).

# CGGlyph (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An index into the internal glyph table of a font.

## Declaration

```objectivec
typedef CGFontIndex CGGlyph;
```

<a id="Discussion"></a>

## Discussion

When drawing text, you typically specify a sequence of characters. However, Core Graphics also allows you to use [CGGlyph](cgglyph.md) values to specify glyphs. In either case, Core Graphics renders the text using font data provided by the Apple Type Services (ATS) framework.

You provide [CGGlyph](cgglyph.md) values to the functions [CGContextShowGlyphs](cgcontext/showglyphs%28g_count_%29.md) and [CGContextShowGlyphsAtPoint](cgcontext/showglyphsatpoint%28x_y_glyphs_count_%29.md). These functions display an array of glyphs at the current text position or at a position you specify, respectively.

## See Also

### Working with Glyphs

- [CGFontGetNumberOfGlyphs](cgfont/numberofglyphs.md): Returns the number of glyphs in a font.
- [CGFontCopyGlyphNameForGlyph](cgfont/name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [CGFontGetGlyphWithGlyphName](cgfont/getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [CGFontGetGlyphBBoxes](cgfont/getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [CGFontGetGlyphAdvances](cgfont/getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [kCGGlyphMax](kcgglyphmax.md): The maximum allowed value of a [CGGlyph](cgglyph.md).
- [CGFontIndex](cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](cgfontindex.md).
- [kCGFontIndexInvalid](kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).
