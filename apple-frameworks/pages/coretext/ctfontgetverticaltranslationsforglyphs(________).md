> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontgetverticaltranslationsforglyphs(_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontgetverticaltranslationsforglyphs(_:_:_:_:))

# CTFontGetVerticalTranslationsForGlyphs(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the offset from the default (horizontal) origin to the vertical origin for an array of glyphs.

## Declaration

```swift
func CTFontGetVerticalTranslationsForGlyphs(_ font: CTFont, _ glyphs: UnsafePointer<CGGlyph>, _ translations: UnsafeMutablePointer<CGSize>, _ count: CFIndex)
```

## Parameters

- `font`: The font reference.
- `glyphs`: An array of `count` number of glyphs.
- `translations`: On output, the computed origin offsets in an array of `count` number of [CGSize](../corefoundation/cgsize.md) objects.
- `count`: The capacity of the `glyphs` and `translations` buffers.

## See Also

### Getting Glyph Data

- [CTFontCreatePathForGlyph(\_:\_:\_:)](ctfontcreatepathforglyph%28______%29.md): Creates a path for the specified glyph.
- [CTFontGetGlyphWithName(\_:\_:)](ctfontgetglyphwithname%28____%29.md): Returns the glyph for the specified name.
- [CTFontGetBoundingRectsForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetboundingrectsforglyphs%28__________%29.md): Calculates the bounding rects for an array of glyphs and returns the overall bounding rectangle for the glyph run.
- [CTFontGetAdvancesForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetadvancesforglyphs%28__________%29.md): Calculates the advances for an array of glyphs and returns the summed advance.
- [CTFontGetOpticalBoundsForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetopticalboundsforglyphs%28__________%29.md): Calculates the optical bounds for an array of glyphs and returns the overall optical bounds for the run.

# CTFontGetVerticalTranslationsForGlyphs (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the offset from the default (horizontal) origin to the vertical origin for an array of glyphs.

## Declaration

```objectivec
extern void CTFontGetVerticalTranslationsForGlyphs(CTFontRef font, const CGGlyph glyphs[], CGSize translations[], CFIndex count);
```

## Parameters

- `font`: The font reference.
- `glyphs`: An array of `count` number of glyphs.
- `translations`: On output, the computed origin offsets in an array of `count` number of [CGSize](../corefoundation/cgsize.md) objects.
- `count`: The capacity of the `glyphs` and `translations` buffers.

## See Also

### Getting Glyph Data

- [CTFontCreatePathForGlyph](ctfontcreatepathforglyph%28______%29.md): Creates a path for the specified glyph.
- [CTFontGetGlyphWithName](ctfontgetglyphwithname%28____%29.md): Returns the glyph for the specified name.
- [CTFontGetBoundingRectsForGlyphs](ctfontgetboundingrectsforglyphs%28__________%29.md): Calculates the bounding rects for an array of glyphs and returns the overall bounding rectangle for the glyph run.
- [CTFontGetAdvancesForGlyphs](ctfontgetadvancesforglyphs%28__________%29.md): Calculates the advances for an array of glyphs and returns the summed advance.
- [CTFontGetOpticalBoundsForGlyphs](ctfontgetopticalboundsforglyphs%28__________%29.md): Calculates the optical bounds for an array of glyphs and returns the overall optical bounds for the run.
