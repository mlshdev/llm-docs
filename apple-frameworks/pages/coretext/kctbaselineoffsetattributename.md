> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctbaselineoffsetattributename](https://developer.apple.com/documentation/coretext/kctbaselineoffsetattributename)

# kCTBaselineOffsetAttributeName (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Vertical offset for text position.

## Declaration

```swift
let kCTBaselineOffsetAttributeName: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this attribute must be a [CFNumber](../corefoundation/cfnumber.md) float. The default is standard positioning, following the baselines of the fonts used.

The baseline offset attribute indicates how many points the characters should be shifted perpendicular to their baseline. For horizontal text, a positive baseline value indicates a shift above the text baseline, and a negative baseline value indicates a shift below the text baseline. For vertical text, a positive baseline value indicates a shift to the right of the text baseline, and a negative baseline value indicates a shift to the left of the text baseline. If this value is set to `0.0`, no baseline shift will be performed.

> **Important**

> This attribute is different from [baselineOffset](../foundation/nsattributedstring/key/baselineoffset.md). If you are writing code for [TextKit](https://developer.apple.com/documentation/appkit/textkit), you need to use [baselineOffset](../foundation/nsattributedstring/key/baselineoffset.md).

## See Also

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
- [kCTGlyphInfoAttributeName](kctglyphinfoattributename.md): The glyph info object to apply to the text associated with this attribute.
- [kCTRunDelegateAttributeName](kctrundelegateattributename.md): The run-delegate object to apply to an attribute range of the string.

# kCTBaselineOffsetAttributeName (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Vertical offset for text position.

## Declaration

```objectivec
extern CFStringRef const kCTBaselineOffsetAttributeName;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute must be a [CFNumberRef](../corefoundation/cfnumber.md) float. The default is standard positioning, following the baselines of the fonts used.

The baseline offset attribute indicates how many points the characters should be shifted perpendicular to their baseline. For horizontal text, a positive baseline value indicates a shift above the text baseline, and a negative baseline value indicates a shift below the text baseline. For vertical text, a positive baseline value indicates a shift to the right of the text baseline, and a negative baseline value indicates a shift to the left of the text baseline. If this value is set to `0.0`, no baseline shift will be performed.

> **Important**

> This attribute is different from [baselineOffset](../foundation/nsattributedstring/key/baselineoffset.md). If you are writing code for [TextKit](https://developer.apple.com/documentation/appkit/textkit), you need to use [baselineOffset](../foundation/nsattributedstring/key/baselineoffset.md).

## See Also

### Related Documentation

- [NSBaselineOffsetAttributeName](../uikit/nsbaselineoffsetattributename.md): The vertical offset for the position of the text.

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
- [kCTGlyphInfoAttributeName](kctglyphinfoattributename.md): The glyph info object to apply to the text associated with this attribute.
- [kCTRunDelegateAttributeName](kctrundelegateattributename.md): The run-delegate object to apply to an attribute range of the string.
