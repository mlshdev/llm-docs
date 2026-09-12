> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcreatepathforglyph(_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcreatepathforglyph(_:_:_:))

# CTFontCreatePathForGlyph(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a path for the specified glyph.

## Declaration

```swift
func CTFontCreatePathForGlyph(_ font: CTFont, _ glyph: CGGlyph, _ matrix: UnsafePointer<CGAffineTransform>?) -> CGPath?
```

## Parameters

- `font`: The font reference.
- `glyph`: The glyph.
- `matrix`: An affine transform applied to the path. Can be `NULL`. If `NULL`, [CGAffineTransformIdentity](../coregraphics/cgaffinetransformidentity.md) is used.

<a id="return-value"></a>

## Return Value

A CGPath object containing the glyph outlines, `NULL` on error. Must be released by caller.

<a id="Discussion"></a>

## Discussion

Creates a path from the outlines of the glyph for the specified font. The path reflects the font point size, matrix, and transform parameter, applied in that order. The transform parameter is most commonly be used to provide a translation to the desired glyph origin.

## See Also

### Getting Glyph Data

- [CTFontGetGlyphWithName(\_:\_:)](ctfontgetglyphwithname%28____%29.md): Returns the glyph for the specified name.
- [CTFontGetBoundingRectsForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetboundingrectsforglyphs%28__________%29.md): Calculates the bounding rects for an array of glyphs and returns the overall bounding rectangle for the glyph run.
- [CTFontGetAdvancesForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetadvancesforglyphs%28__________%29.md): Calculates the advances for an array of glyphs and returns the summed advance.
- [CTFontGetOpticalBoundsForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetopticalboundsforglyphs%28__________%29.md): Calculates the optical bounds for an array of glyphs and returns the overall optical bounds for the run.
- [CTFontGetVerticalTranslationsForGlyphs(\_:\_:\_:\_:)](ctfontgetverticaltranslationsforglyphs%28________%29.md): Calculates the offset from the default (horizontal) origin to the vertical origin for an array of glyphs.

# CTFontCreatePathForGlyph (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a path for the specified glyph.

## Declaration

```objectivec
extern CGPathRefCTFontCreatePathForGlyph(CTFontRef font, CGGlyph glyph, const CGAffineTransform *matrix);
```

## Parameters

- `font`: The font reference.
- `glyph`: The glyph.
- `matrix`: An affine transform applied to the path. Can be `NULL`. If `NULL`, [CGAffineTransformIdentity](../coregraphics/cgaffinetransformidentity.md) is used.

<a id="return-value"></a>

## Return Value

A CGPath object containing the glyph outlines, `NULL` on error. Must be released by caller.

<a id="Discussion"></a>

## Discussion

Creates a path from the outlines of the glyph for the specified font. The path reflects the font point size, matrix, and transform parameter, applied in that order. The transform parameter is most commonly be used to provide a translation to the desired glyph origin.

## See Also

### Getting Glyph Data

- [CTFontGetGlyphWithName](ctfontgetglyphwithname%28____%29.md): Returns the glyph for the specified name.
- [CTFontGetBoundingRectsForGlyphs](ctfontgetboundingrectsforglyphs%28__________%29.md): Calculates the bounding rects for an array of glyphs and returns the overall bounding rectangle for the glyph run.
- [CTFontGetAdvancesForGlyphs](ctfontgetadvancesforglyphs%28__________%29.md): Calculates the advances for an array of glyphs and returns the summed advance.
- [CTFontGetOpticalBoundsForGlyphs](ctfontgetopticalboundsforglyphs%28__________%29.md): Calculates the optical bounds for an array of glyphs and returns the overall optical bounds for the run.
- [CTFontGetVerticalTranslationsForGlyphs](ctfontgetverticaltranslationsforglyphs%28________%29.md): Calculates the offset from the default (horizontal) origin to the vertical origin for an array of glyphs.
