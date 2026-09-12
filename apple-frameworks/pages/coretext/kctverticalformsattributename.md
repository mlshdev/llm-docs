> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctverticalformsattributename](https://developer.apple.com/documentation/coretext/kctverticalformsattributename)

# kCTVerticalFormsAttributeName (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The orientation of the glyphs in the text to which this attribute applies.

## Declaration

```swift
let kCTVerticalFormsAttributeName: CFString
```

<a id="Discussion"></a>

## Discussion

Value must be a [CFBoolean](../corefoundation/cfboolean.md) object. Default is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md). A value of [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) indicates that horizontal glyph forms are to be used; [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that vertical glyph forms are to be used.

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
- [kCTGlyphInfoAttributeName](kctglyphinfoattributename.md): The glyph info object to apply to the text associated with this attribute.
- [kCTRunDelegateAttributeName](kctrundelegateattributename.md): The run-delegate object to apply to an attribute range of the string.
- [kCTBaselineOffsetAttributeName](kctbaselineoffsetattributename.md): Vertical offset for text position.

# kCTVerticalFormsAttributeName (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The orientation of the glyphs in the text to which this attribute applies.

## Declaration

```objectivec
extern CFStringRef const kCTVerticalFormsAttributeName;
```

<a id="Discussion"></a>

## Discussion

Value must be a [CFBooleanRef](../corefoundation/cfboolean.md) object. Default is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md). A value of [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) indicates that horizontal glyph forms are to be used; [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that vertical glyph forms are to be used.

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
- [kCTGlyphInfoAttributeName](kctglyphinfoattributename.md): The glyph info object to apply to the text associated with this attribute.
- [kCTRunDelegateAttributeName](kctrundelegateattributename.md): The run-delegate object to apply to an attribute range of the string.
- [kCTBaselineOffsetAttributeName](kctbaselineoffsetattributename.md): Vertical offset for text position.
