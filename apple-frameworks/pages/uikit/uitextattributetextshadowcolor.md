> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextattributetextshadowcolor](https://developer.apple.com/documentation/uikit/uitextattributetextshadowcolor)

# UITextAttributeTextShadowColor

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The key to the text shadow color in a text attributes dictionary.

> Instead, use [NSShadowAttributeName](nsshadowattributename.md) with an [NSShadow](nsshadow.md) object as the value.

## Declaration

```objectivec
extern NSString * const UITextAttributeTextShadowColor;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an instance of [UIColor](uicolor.md).

## See Also

### Strings

- [NSStringDrawingContext](nsstringdrawingcontext.md): An object that manages metrics for drawing attributed strings.
- [NSStringDrawingOptions](nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.
- [UIBaselineAdjustment](uibaselineadjustment.md): Vertical adjustment options.
- [UILineBreakMode](uilinebreakmode.md): Deprecated. Options for wrapping and truncating text.
- [UITextAlignment](uitextalignment.md): Deprecated. Options for aligning text horizontally.
- [UITextAttributeFont](uitextattributefont.md): Deprecated. The key to the font in a text attributes dictionary.
- [UITextAttributeTextColor](uitextattributetextcolor.md): Deprecated. The key to the text color in a text attributes dictionary.
- [UITextAttributeTextShadowOffset](uitextattributetextshadowoffset.md): Deprecated. The key to the offset for the text shadow in a text attributes dictionary.
