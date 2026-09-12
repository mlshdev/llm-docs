> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctforegroundcolorfromcontextattributename](https://developer.apple.com/documentation/coretext/kctforegroundcolorfromcontextattributename)

# kCTForegroundColorFromContextAttributeName (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a foreground color using the context’s fill color.

## Declaration

```swift
let kCTForegroundColorFromContextAttributeName: CFString
```

<a id="Discussion"></a>

## Discussion

Value must be a [CFBoolean](../corefoundation/cfboolean.md) object. Default is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md). The reason this exists is because an [NSAttributedString](../foundation/nsattributedstring.md) object defaults to a black color if no color attribute is set. This forces Core Text to set the color in the context. This attribute allows developers to sidestep this, making Core Text set nothing but font information in the [CGContext](../coregraphics/cgcontext.md). If set, this attribute also determines the color used by [kCTUnderlineStyleAttributeName](kctunderlinestyleattributename.md), in which case it overrides the foreground color.

## See Also

### Constants

- [kCTCharacterShapeAttributeName](kctcharactershapeattributename.md): Deprecated. Controls glyph selection.
- [kCTFontAttributeName](kctfontattributename.md): The font of the text to which this attribute applies.
- [kCTKernAttributeName](kctkernattributename.md): The amount to kern the next character.
- [kCTLigatureAttributeName](kctligatureattributename.md): The type of ligatures to use.
- [kCTForegroundColorAttributeName](kctforegroundcolorattributename.md): The foreground color of the text to which this attribute applies.
- [kCTParagraphStyleAttributeName](kctparagraphstyleattributename.md): The paragraph style of the text to which this attribute applies.
- [kCTStrokeWidthAttributeName](kctstrokewidthattributename.md): The stroke width.
- [kCTStrokeColorAttributeName](kctstrokecolorattributename.md): The stroke color.
- [kCTSuperscriptAttributeName](kctsuperscriptattributename.md): Controls vertical text positioning.
- [kCTUnderlineColorAttributeName](kctunderlinecolorattributename.md): The underline color.
- [kCTUnderlineStyleAttributeName](kctunderlinestyleattributename.md): The style of underlining, to be applied at render time, for the text to which this attribute applies.
- [kCTVerticalFormsAttributeName](kctverticalformsattributename.md): The orientation of the glyphs in the text to which this attribute applies.
- [kCTGlyphInfoAttributeName](kctglyphinfoattributename.md): The glyph info object to apply to the text associated with this attribute.
- [kCTRunDelegateAttributeName](kctrundelegateattributename.md): The run-delegate object to apply to an attribute range of the string.
- [kCTBaselineOffsetAttributeName](kctbaselineoffsetattributename.md): Vertical offset for text position.

# kCTForegroundColorFromContextAttributeName (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a foreground color using the context’s fill color.

## Declaration

```objectivec
extern CFStringRef const kCTForegroundColorFromContextAttributeName;
```

<a id="Discussion"></a>

## Discussion

Value must be a [CFBooleanRef](../corefoundation/cfboolean.md) object. Default is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md). The reason this exists is because an [NSAttributedString](../foundation/nsattributedstring.md) object defaults to a black color if no color attribute is set. This forces Core Text to set the color in the context. This attribute allows developers to sidestep this, making Core Text set nothing but font information in the [CGContextRef](../coregraphics/cgcontext.md). If set, this attribute also determines the color used by [kCTUnderlineStyleAttributeName](kctunderlinestyleattributename.md), in which case it overrides the foreground color.

## See Also

### Constants

- [kCTCharacterShapeAttributeName](kctcharactershapeattributename.md): Deprecated. Controls glyph selection.
- [kCTFontAttributeName](kctfontattributename.md): The font of the text to which this attribute applies.
- [kCTKernAttributeName](kctkernattributename.md): The amount to kern the next character.
- [kCTLigatureAttributeName](kctligatureattributename.md): The type of ligatures to use.
- [kCTForegroundColorAttributeName](kctforegroundcolorattributename.md): The foreground color of the text to which this attribute applies.
- [kCTParagraphStyleAttributeName](kctparagraphstyleattributename.md): The paragraph style of the text to which this attribute applies.
- [kCTStrokeWidthAttributeName](kctstrokewidthattributename.md): The stroke width.
- [kCTStrokeColorAttributeName](kctstrokecolorattributename.md): The stroke color.
- [kCTSuperscriptAttributeName](kctsuperscriptattributename.md): Controls vertical text positioning.
- [kCTUnderlineColorAttributeName](kctunderlinecolorattributename.md): The underline color.
- [kCTUnderlineStyleAttributeName](kctunderlinestyleattributename.md): The style of underlining, to be applied at render time, for the text to which this attribute applies.
- [kCTVerticalFormsAttributeName](kctverticalformsattributename.md): The orientation of the glyphs in the text to which this attribute applies.
- [kCTGlyphInfoAttributeName](kctglyphinfoattributename.md): The glyph info object to apply to the text associated with this attribute.
- [kCTRunDelegateAttributeName](kctrundelegateattributename.md): The run-delegate object to apply to an attribute range of the string.
- [kCTBaselineOffsetAttributeName](kctbaselineoffsetattributename.md): Vertical offset for text position.
