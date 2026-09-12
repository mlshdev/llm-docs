> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/ascent](https://developer.apple.com/documentation/coregraphics/cgfont/ascent)

# ascent (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the ascent of a font.

## Declaration

```swift
var ascent: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

The ascent is the maximum distance above the baseline of glyphs in a font. The value is specified in glyph space  units.

## See Also

### Examining Font Metrics

- [capHeight](capheight.md): Returns the cap height of a font.
- [descent](descent.md): Returns the descent of a font.
- [fontBBox](fontbbox.md): Returns the bounding box of a font.
- [italicAngle](italicangle.md): Returns the italic angle of a font.
- [leading](leading.md): Returns the leading of a font.
- [stemV](stemv.md): Returns the thickness of the dominant vertical stems of glyphs in a font.
- [unitsPerEm](unitsperem.md): Returns the number of glyph space units per em for the provided font.
- [xHeight](xheight.md): Returns the x-height of a font.

# CGFontGetAscent (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the ascent of a font.

## Declaration

```objectivec
extern int CGFontGetAscent(CGFontRef font);
```

## Parameters

- `font`: A font object.

<a id="return-value"></a>

## Return Value

The ascent of the font.

<a id="Discussion"></a>

## Discussion

The ascent is the maximum distance above the baseline of glyphs in a font. The value is specified in glyph space  units.

## See Also

### Examining Font Metrics

- [CGFontGetCapHeight](capheight.md): Returns the cap height of a font.
- [CGFontGetDescent](descent.md): Returns the descent of a font.
- [CGFontGetFontBBox](fontbbox.md): Returns the bounding box of a font.
- [CGFontGetItalicAngle](italicangle.md): Returns the italic angle of a font.
- [CGFontGetLeading](leading.md): Returns the leading of a font.
- [CGFontGetStemV](stemv.md): Returns the thickness of the dominant vertical stems of glyphs in a font.
- [CGFontGetUnitsPerEm](unitsperem.md): Returns the number of glyph space units per em for the provided font.
- [CGFontGetXHeight](xheight.md): Returns the x-height of a font.
