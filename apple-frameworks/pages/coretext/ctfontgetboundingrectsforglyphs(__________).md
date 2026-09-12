> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontgetboundingrectsforglyphs(_:_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontgetboundingrectsforglyphs(_:_:_:_:_:))

# CTFontGetBoundingRectsForGlyphs(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the bounding rects for an array of glyphs and returns the overall bounding rectangle for the glyph run.

## Declaration

```swift
func CTFontGetBoundingRectsForGlyphs(_ font: CTFont, _ orientation: CTFontOrientation, _ glyphs: UnsafePointer<CGGlyph>, _ boundingRects: UnsafeMutablePointer<CGRect>?, _ count: CFIndex) -> CGRect
```

## Parameters

- `font`: The font reference.
- `orientation`: The intended drawing orientation of the glyphs. Used to determined which glyph metrics to return.
- `glyphs`: An array of `count` number of glyphs.
- `boundingRects`: On output, the computed glyph rectangles in an array of `count` number of [CGRect](../corefoundation/cgrect.md) objects. If `NULL`, only the overall bounding rectangle is calculated.
- `count`: The capacity of the `glyphs` and `boundingRects` buffers.

<a id="return-value"></a>

## Return Value

The overall bounding rectangle for an array or run of glyphs. Returns [CGRectNull](../coregraphics/cgrectnull.md) on error.

<a id="Discussion"></a>

## Discussion

The bounding rectangles of the individual glyphs are returned through the `boundingRects` parameter. These are the design metrics from the font transformed in font space.

## See Also

### Getting Glyph Data

- [CTFontCreatePathForGlyph(\_:\_:\_:)](ctfontcreatepathforglyph%28______%29.md): Creates a path for the specified glyph.
- [CTFontGetGlyphWithName(\_:\_:)](ctfontgetglyphwithname%28____%29.md): Returns the glyph for the specified name.
- [CTFontGetAdvancesForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetadvancesforglyphs%28__________%29.md): Calculates the advances for an array of glyphs and returns the summed advance.
- [CTFontGetOpticalBoundsForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetopticalboundsforglyphs%28__________%29.md): Calculates the optical bounds for an array of glyphs and returns the overall optical bounds for the run.
- [CTFontGetVerticalTranslationsForGlyphs(\_:\_:\_:\_:)](ctfontgetverticaltranslationsforglyphs%28________%29.md): Calculates the offset from the default (horizontal) origin to the vertical origin for an array of glyphs.

# CTFontGetBoundingRectsForGlyphs (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the bounding rects for an array of glyphs and returns the overall bounding rectangle for the glyph run.

## Declaration

```objectivec
extern CGRect CTFontGetBoundingRectsForGlyphs(CTFontRef font, CTFontOrientation orientation, const CGGlyph glyphs[], CGRect boundingRects[], CFIndex count);
```

## Parameters

- `font`: The font reference.
- `orientation`: The intended drawing orientation of the glyphs. Used to determined which glyph metrics to return.
- `glyphs`: An array of `count` number of glyphs.
- `boundingRects`: On output, the computed glyph rectangles in an array of `count` number of [CGRect](../corefoundation/cgrect.md) objects. If `NULL`, only the overall bounding rectangle is calculated.
- `count`: The capacity of the `glyphs` and `boundingRects` buffers.

<a id="return-value"></a>

## Return Value

The overall bounding rectangle for an array or run of glyphs. Returns [CGRectNull](../coregraphics/cgrectnull.md) on error.

<a id="Discussion"></a>

## Discussion

The bounding rectangles of the individual glyphs are returned through the `boundingRects` parameter. These are the design metrics from the font transformed in font space.

## See Also

### Getting Glyph Data

- [CTFontCreatePathForGlyph](ctfontcreatepathforglyph%28______%29.md): Creates a path for the specified glyph.
- [CTFontGetGlyphWithName](ctfontgetglyphwithname%28____%29.md): Returns the glyph for the specified name.
- [CTFontGetAdvancesForGlyphs](ctfontgetadvancesforglyphs%28__________%29.md): Calculates the advances for an array of glyphs and returns the summed advance.
- [CTFontGetOpticalBoundsForGlyphs](ctfontgetopticalboundsforglyphs%28__________%29.md): Calculates the optical bounds for an array of glyphs and returns the overall optical bounds for the run.
- [CTFontGetVerticalTranslationsForGlyphs](ctfontgetverticaltranslationsforglyphs%28________%29.md): Calculates the offset from the default (horizontal) origin to the vertical origin for an array of glyphs.
