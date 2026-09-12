> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctunderlinestyleattributename](https://developer.apple.com/documentation/coretext/kctunderlinestyleattributename)

# kCTUnderlineStyleAttributeName (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The style of underlining, to be applied at render time, for the text to which this attribute applies.

## Declaration

```swift
let kCTUnderlineStyleAttributeName: CFString
```

<a id="Discussion"></a>

## Discussion

Value must be a [CFNumber](../corefoundation/cfnumber.md) object. Default is [kCTUnderlineStyleNone](ctunderlinestyle/kctunderlinestylenone.md). Set a value of something other than [kCTUnderlineStyleNone](ctunderlinestyle/kctunderlinestylenone.md) to draw an underline. In addition, the constants listed in  [CTUnderlineStyleModifiers](ctunderlinestylemodifiers.md) can be used to modify the look of the underline. The underline color is determined by the text’s foreground color.

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
- [kCTVerticalFormsAttributeName](kctverticalformsattributename.md): The orientation of the glyphs in the text to which this attribute applies.
- [kCTGlyphInfoAttributeName](kctglyphinfoattributename.md): The glyph info object to apply to the text associated with this attribute.
- [kCTRunDelegateAttributeName](kctrundelegateattributename.md): The run-delegate object to apply to an attribute range of the string.
- [kCTBaselineOffsetAttributeName](kctbaselineoffsetattributename.md): Vertical offset for text position.

# kCTUnderlineStyleAttributeName (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The style of underlining, to be applied at render time, for the text to which this attribute applies.

## Declaration

```objectivec
extern CFStringRef const kCTUnderlineStyleAttributeName;
```

<a id="Discussion"></a>

## Discussion

Value must be a [CFNumberRef](../corefoundation/cfnumber.md) object. Default is [kCTUnderlineStyleNone](ctunderlinestyle/kctunderlinestylenone.md). Set a value of something other than [kCTUnderlineStyleNone](ctunderlinestyle/kctunderlinestylenone.md) to draw an underline. In addition, the constants listed in  [CTUnderlineStyleModifiers](ctunderlinestylemodifiers.md) can be used to modify the look of the underline. The underline color is determined by the text’s foreground color.

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
- [kCTVerticalFormsAttributeName](kctverticalformsattributename.md): The orientation of the glyphs in the text to which this attribute applies.
- [kCTGlyphInfoAttributeName](kctglyphinfoattributename.md): The glyph info object to apply to the text associated with this attribute.
- [kCTRunDelegateAttributeName](kctrundelegateattributename.md): The run-delegate object to apply to an attribute range of the string.
- [kCTBaselineOffsetAttributeName](kctbaselineoffsetattributename.md): Vertical offset for text position.
