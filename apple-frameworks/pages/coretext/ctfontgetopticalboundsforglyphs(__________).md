> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontgetopticalboundsforglyphs(_:_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontgetopticalboundsforglyphs(_:_:_:_:_:))

# CTFontGetOpticalBoundsForGlyphs(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the optical bounds for an array of glyphs and returns the overall optical bounds for the run.

## Declaration

```swift
func CTFontGetOpticalBoundsForGlyphs(_ font: CTFont, _ glyphs: UnsafePointer<CGGlyph>, _ boundingRects: UnsafeMutablePointer<CGRect>?, _ count: CFIndex, _ options: CFOptionFlags) -> CGRect
```

## Parameters

- `font`: The font reference.
- `glyphs`: An array of glyphs.
- `boundingRects`: An array of [CGRect](../corefoundation/cgrect.md)s to receive the computed glyph bounds. This parameter can be `NULL`, in which case the function only calculates the overall bounding rectangle.
- `count`: The capacity of the `glyphs` and `boundingRects` buffers.
- `options`: Reserved, set to zero.

<a id="return-value"></a>

## Return Value

This function returns the overall bounding rectangle for an array of glyphs. The `boundingRects` parameter returns the bounding rectangles of the individual glyphs. These rectangles are the design metrics from the font transformed in font space.

<a id="Discussion"></a>

## Discussion

Fonts may specify the optical edges of glyphs that can be used to make the edges of lines of text line up in a more visually pleasing way. This function returns bounding rectangles that correspond to these specifications if the font provides them; otherwise, it returns typographic bounding rectangles, composed of the font’s ascender and descender and a glyph’s advance width.

## See Also

### Getting Glyph Data

- [CTFontCreatePathForGlyph(\_:\_:\_:)](ctfontcreatepathforglyph%28______%29.md): Creates a path for the specified glyph.
- [CTFontGetGlyphWithName(\_:\_:)](ctfontgetglyphwithname%28____%29.md): Returns the glyph for the specified name.
- [CTFontGetBoundingRectsForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetboundingrectsforglyphs%28__________%29.md): Calculates the bounding rects for an array of glyphs and returns the overall bounding rectangle for the glyph run.
- [CTFontGetAdvancesForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetadvancesforglyphs%28__________%29.md): Calculates the advances for an array of glyphs and returns the summed advance.
- [CTFontGetVerticalTranslationsForGlyphs(\_:\_:\_:\_:)](ctfontgetverticaltranslationsforglyphs%28________%29.md): Calculates the offset from the default (horizontal) origin to the vertical origin for an array of glyphs.

# CTFontGetOpticalBoundsForGlyphs (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the optical bounds for an array of glyphs and returns the overall optical bounds for the run.

## Declaration

```objectivec
extern CGRect CTFontGetOpticalBoundsForGlyphs(CTFontRef font, const CGGlyph glyphs[], CGRect boundingRects[], CFIndex count, CFOptionFlags options);
```

## Parameters

- `font`: The font reference.
- `glyphs`: An array of glyphs.
- `boundingRects`: An array of [CGRect](../corefoundation/cgrect.md)s to receive the computed glyph bounds. This parameter can be `NULL`, in which case the function only calculates the overall bounding rectangle.
- `count`: The capacity of the `glyphs` and `boundingRects` buffers.
- `options`: Reserved, set to zero.

<a id="return-value"></a>

## Return Value

This function returns the overall bounding rectangle for an array of glyphs. The `boundingRects` parameter returns the bounding rectangles of the individual glyphs. These rectangles are the design metrics from the font transformed in font space.

<a id="Discussion"></a>

## Discussion

Fonts may specify the optical edges of glyphs that can be used to make the edges of lines of text line up in a more visually pleasing way. This function returns bounding rectangles that correspond to these specifications if the font provides them; otherwise, it returns typographic bounding rectangles, composed of the font’s ascender and descender and a glyph’s advance width.

## See Also

### Getting Glyph Data

- [CTFontCreatePathForGlyph](ctfontcreatepathforglyph%28______%29.md): Creates a path for the specified glyph.
- [CTFontGetGlyphWithName](ctfontgetglyphwithname%28____%29.md): Returns the glyph for the specified name.
- [CTFontGetBoundingRectsForGlyphs](ctfontgetboundingrectsforglyphs%28__________%29.md): Calculates the bounding rects for an array of glyphs and returns the overall bounding rectangle for the glyph run.
- [CTFontGetAdvancesForGlyphs](ctfontgetadvancesforglyphs%28__________%29.md): Calculates the advances for an array of glyphs and returns the summed advance.
- [CTFontGetVerticalTranslationsForGlyphs](ctfontgetverticaltranslationsforglyphs%28________%29.md): Calculates the offset from the default (horizontal) origin to the vertical origin for an array of glyphs.
