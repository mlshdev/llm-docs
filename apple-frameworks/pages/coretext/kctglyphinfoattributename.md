> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctglyphinfoattributename](https://developer.apple.com/documentation/coretext/kctglyphinfoattributename)

# kCTGlyphInfoAttributeName (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The glyph info object to apply to the text associated with this attribute.

## Declaration

```swift
let kCTGlyphInfoAttributeName: CFString
```

<a id="Discussion"></a>

## Discussion

Value must be a [CTGlyphInfo](ctglyphinfo.md) object. The glyph specified by this [CTGlyphInfo](ctglyphinfo.md) object is assigned to the entire attribute range, provided that its contents match the specified base string and that the specified glyph is available in the font specified by [kCTFontAttributeName](kctfontattributename.md).

## See Also

### Related Documentation

- [CTGlyphInfo](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.

### Constants

- [kCTCharacterShapeAttributeName](kctcharactershapeattributename.md): Deprecated. Controls glyph selection.
- [kCTFontAttributeName](kctfontattributename.md): The font of the text to which this attribute applies.
- [kCTKernAttributeName](kctkernattributename.md): The amount to kern the next character.
- [kCTLigatureAttributeName](kctligatureattributename.md): The type of ligatures to use.
- [kCTForegroundColorAttributeName](kctforegroundcolorattributename.md): The foreground color of the text to which this attribute applies.
- [kCTForegroundColorFromContextAttributeName](kctforegroundcolorfromcontextattributename.md): Sets a foreground color using the context’s fill color.
- [kCTParagraphStyleAttributeName](kctparagraphstyleattributename.md): The paragraph style of the text to which this attribute applies.
- [kCTStrokeWidthAttributeName](kctstrokewidthattributename.md): The stroke width.
- [kCTStrokeColorAttributeName](kctstrokecolorattributename.md): The stroke color.
- [kCTSuperscriptAttributeName](kctsuperscriptattributename.md): Controls vertical text positioning.
- [kCTUnderlineColorAttributeName](kctunderlinecolorattributename.md): The underline color.
- [kCTUnderlineStyleAttributeName](kctunderlinestyleattributename.md): The style of underlining, to be applied at render time, for the text to which this attribute applies.
- [kCTVerticalFormsAttributeName](kctverticalformsattributename.md): The orientation of the glyphs in the text to which this attribute applies.
- [kCTRunDelegateAttributeName](kctrundelegateattributename.md): The run-delegate object to apply to an attribute range of the string.
- [kCTBaselineOffsetAttributeName](kctbaselineoffsetattributename.md): Vertical offset for text position.

# kCTGlyphInfoAttributeName (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The glyph info object to apply to the text associated with this attribute.

## Declaration

```objectivec
extern CFStringRef const kCTGlyphInfoAttributeName;
```

<a id="Discussion"></a>

## Discussion

Value must be a [CTGlyphInfoRef](ctglyphinfo.md) object. The glyph specified by this [CTGlyphInfoRef](ctglyphinfo.md) object is assigned to the entire attribute range, provided that its contents match the specified base string and that the specified glyph is available in the font specified by [kCTFontAttributeName](kctfontattributename.md).

## See Also

### Related Documentation

- [CTGlyphInfoRef](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.

### Constants

- [kCTCharacterShapeAttributeName](kctcharactershapeattributename.md): Deprecated. Controls glyph selection.
- [kCTFontAttributeName](kctfontattributename.md): The font of the text to which this attribute applies.
- [kCTKernAttributeName](kctkernattributename.md): The amount to kern the next character.
- [kCTLigatureAttributeName](kctligatureattributename.md): The type of ligatures to use.
- [kCTForegroundColorAttributeName](kctforegroundcolorattributename.md): The foreground color of the text to which this attribute applies.
- [kCTForegroundColorFromContextAttributeName](kctforegroundcolorfromcontextattributename.md): Sets a foreground color using the context’s fill color.
- [kCTParagraphStyleAttributeName](kctparagraphstyleattributename.md): The paragraph style of the text to which this attribute applies.
- [kCTStrokeWidthAttributeName](kctstrokewidthattributename.md): The stroke width.
- [kCTStrokeColorAttributeName](kctstrokecolorattributename.md): The stroke color.
- [kCTSuperscriptAttributeName](kctsuperscriptattributename.md): Controls vertical text positioning.
- [kCTUnderlineColorAttributeName](kctunderlinecolorattributename.md): The underline color.
- [kCTUnderlineStyleAttributeName](kctunderlinestyleattributename.md): The style of underlining, to be applied at render time, for the text to which this attribute applies.
- [kCTVerticalFormsAttributeName](kctverticalformsattributename.md): The orientation of the glyphs in the text to which this attribute applies.
- [kCTRunDelegateAttributeName](kctrundelegateattributename.md): The run-delegate object to apply to an attribute range of the string.
- [kCTBaselineOffsetAttributeName](kctbaselineoffsetattributename.md): Vertical offset for text position.
