> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilinebreakmode](https://developer.apple.com/documentation/uikit/uilinebreakmode)

# UILineBreakMode

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ (deprecated in 6.0) · iPadOS 2.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Options for wrapping and truncating text.

> Use [NSLineBreakMode](nslinebreakmode.md) instead.

## Declaration

```objectivec
enum UILineBreakMode : NSInteger;
```

<a id="overview"></a>

## Overview

For methods that draw at a specified point (as opposed to those that draw in a rectangular region), these options specify the clipping behavior that UIKit applies to the string.

## Topics

### Deprecated constants

- [UILineBreakModeWordWrap](uilinebreakmode/uilinebreakmodewordwrap.md): Deprecated. Wrap or clip the string only at word boundaries.
- [UILineBreakModeCharacterWrap](uilinebreakmode/uilinebreakmodecharacterwrap.md): Deprecated. Wrap or clip the string at the closest character boundary.
- [UILineBreakModeClip](uilinebreakmode/uilinebreakmodeclip.md): Deprecated. Clip the text when reaching the end of the drawing rectangle.
- [UILineBreakModeHeadTruncation](uilinebreakmode/uilinebreakmodeheadtruncation.md): Deprecated. Truncate text (as necessary) from the beginning of the line.
- [UILineBreakModeTailTruncation](uilinebreakmode/uilinebreakmodetailtruncation.md): Deprecated. Truncate text (as necessary) from the end of the line.
- [UILineBreakModeMiddleTruncation](uilinebreakmode/uilinebreakmodemiddletruncation.md): Deprecated. Truncate text (as necessary) from the middle of the line.

## See Also

### Strings

- [NSStringDrawingContext](nsstringdrawingcontext.md): An object that manages metrics for drawing attributed strings.
- [NSStringDrawingOptions](nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.
- [UIBaselineAdjustment](uibaselineadjustment.md): Vertical adjustment options.
- [UITextAlignment](uitextalignment.md): Deprecated. Options for aligning text horizontally.
- [UITextAttributeFont](uitextattributefont.md): Deprecated. The key to the font in a text attributes dictionary.
- [UITextAttributeTextColor](uitextattributetextcolor.md): Deprecated. The key to the text color in a text attributes dictionary.
- [UITextAttributeTextShadowColor](uitextattributetextshadowcolor.md): Deprecated. The key to the text shadow color in a text attributes dictionary.
- [UITextAttributeTextShadowOffset](uitextattributetextshadowoffset.md): Deprecated. The key to the offset for the text shadow in a text attributes dictionary.
