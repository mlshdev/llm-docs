> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextattributefont](https://developer.apple.com/documentation/uikit/uitextattributefont)

# UITextAttributeFont

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The key to the font in a text attributes dictionary.

> Use [NSFontAttributeName](nsfontattributename.md) instead.

## Declaration

```objectivec
extern NSString * const UITextAttributeFont;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an instance of [UIFont](uifont.md).

Use a font with size `0.0` to get the default font size for the current context.

## See Also

### Strings

- [NSStringDrawingContext](nsstringdrawingcontext.md): An object that manages metrics for drawing attributed strings.
- [NSStringDrawingOptions](nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.
- [UIBaselineAdjustment](uibaselineadjustment.md): Vertical adjustment options.
- [UILineBreakMode](uilinebreakmode.md): Deprecated. Options for wrapping and truncating text.
- [UITextAlignment](uitextalignment.md): Deprecated. Options for aligning text horizontally.
- [UITextAttributeTextColor](uitextattributetextcolor.md): Deprecated. The key to the text color in a text attributes dictionary.
- [UITextAttributeTextShadowColor](uitextattributetextshadowcolor.md): Deprecated. The key to the text shadow color in a text attributes dictionary.
- [UITextAttributeTextShadowOffset](uitextattributetextshadowoffset.md): Deprecated. The key to the offset for the text shadow in a text attributes dictionary.
