> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontgetglyphwithname(_:_:)](https://developer.apple.com/documentation/coretext/ctfontgetglyphwithname(_:_:))

# CTFontGetGlyphWithName(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the glyph for the specified name.

## Declaration

```swift
func CTFontGetGlyphWithName(_ font: CTFont, _ glyphName: CFString) -> CGGlyph
```

## Parameters

- `font`: The font reference.
- `glyphName`: The glyph name as a `CFString` object.

<a id="return-value"></a>

## Return Value

The glyph value for the named glyph as a [CGGlyph](../coregraphics/cgglyph.md) object, or if the glyph name is not recognized, the `.notdef` glyph index value.

<a id="discussion"></a>

## Discussion

The returned `CGGlyph` object can be used with any of the subsequent glyph data accessors or directly with Core Graphics.

## See Also

### Getting Glyph Data

- [CTFontCreatePathForGlyph(\_:\_:\_:)](ctfontcreatepathforglyph%28______%29.md): Creates a path for the specified glyph.
- [CTFontGetBoundingRectsForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetboundingrectsforglyphs%28__________%29.md): Calculates the bounding rects for an array of glyphs and returns the overall bounding rectangle for the glyph run.
- [CTFontGetAdvancesForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetadvancesforglyphs%28__________%29.md): Calculates the advances for an array of glyphs and returns the summed advance.
- [CTFontGetOpticalBoundsForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetopticalboundsforglyphs%28__________%29.md): Calculates the optical bounds for an array of glyphs and returns the overall optical bounds for the run.
- [CTFontGetVerticalTranslationsForGlyphs(\_:\_:\_:\_:)](ctfontgetverticaltranslationsforglyphs%28________%29.md): Calculates the offset from the default (horizontal) origin to the vertical origin for an array of glyphs.

# CTFontGetGlyphWithName (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the glyph for the specified name.

## Declaration

```objectivec
extern CGGlyph CTFontGetGlyphWithName(CTFontRef font, CFStringRef glyphName);
```

## Parameters

- `font`: The font reference.
- `glyphName`: The glyph name as a `CFString` object.

<a id="return-value"></a>

## Return Value

The glyph value for the named glyph as a [CGGlyph](../coregraphics/cgglyph.md) object, or if the glyph name is not recognized, the `.notdef` glyph index value.

<a id="discussion"></a>

## Discussion

The returned `CGGlyph` object can be used with any of the subsequent glyph data accessors or directly with Core Graphics.

## See Also

### Getting Glyph Data

- [CTFontCreatePathForGlyph](ctfontcreatepathforglyph%28______%29.md): Creates a path for the specified glyph.
- [CTFontGetBoundingRectsForGlyphs](ctfontgetboundingrectsforglyphs%28__________%29.md): Calculates the bounding rects for an array of glyphs and returns the overall bounding rectangle for the glyph run.
- [CTFontGetAdvancesForGlyphs](ctfontgetadvancesforglyphs%28__________%29.md): Calculates the advances for an array of glyphs and returns the summed advance.
- [CTFontGetOpticalBoundsForGlyphs](ctfontgetopticalboundsforglyphs%28__________%29.md): Calculates the optical bounds for an array of glyphs and returns the overall optical bounds for the run.
- [CTFontGetVerticalTranslationsForGlyphs](ctfontgetverticaltranslationsforglyphs%28________%29.md): Calculates the offset from the default (horizontal) origin to the vertical origin for an array of glyphs.
