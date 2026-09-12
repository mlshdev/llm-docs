> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/unitsperem](https://developer.apple.com/documentation/coregraphics/cgfont/unitsperem)

# unitsPerEm (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the number of glyph space units per em for the provided font.

## Declaration

```swift
var unitsPerEm: Int32 { get }
```

## See Also

### Examining Font Metrics

- [ascent](ascent.md): Returns the ascent of a font.
- [capHeight](capheight.md): Returns the cap height of a font.
- [descent](descent.md): Returns the descent of a font.
- [fontBBox](fontbbox.md): Returns the bounding box of a font.
- [italicAngle](italicangle.md): Returns the italic angle of a font.
- [leading](leading.md): Returns the leading of a font.
- [stemV](stemv.md): Returns the thickness of the dominant vertical stems of glyphs in a font.
- [xHeight](xheight.md): Returns the x-height of a font.

# CGFontGetUnitsPerEm (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the number of glyph space units per em for the provided font.

## Declaration

```objectivec
extern int CGFontGetUnitsPerEm(CGFontRef font);
```

## Parameters

- `font`: A font object.

<a id="return-value"></a>

## Return Value

The number of glyph space units per em for the provided font.

## See Also

### Examining Font Metrics

- [CGFontGetAscent](ascent.md): Returns the ascent of a font.
- [CGFontGetCapHeight](capheight.md): Returns the cap height of a font.
- [CGFontGetDescent](descent.md): Returns the descent of a font.
- [CGFontGetFontBBox](fontbbox.md): Returns the bounding box of a font.
- [CGFontGetItalicAngle](italicangle.md): Returns the italic angle of a font.
- [CGFontGetLeading](leading.md): Returns the leading of a font.
- [CGFontGetStemV](stemv.md): Returns the thickness of the dominant vertical stems of glyphs in a font.
- [CGFontGetXHeight](xheight.md): Returns the x-height of a font.
