> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstexthighlightstyle](https://developer.apple.com/documentation/uikit/nstexthighlightstyle)

# NSTextHighlightStyle

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Constants that specify the type of highlight to apply to text.

## Declaration

```objectivec
typedef NSString * NSTextHighlightStyle;
```

<a id="Overview"></a>

## Overview

Use an [NSTextHighlightStyle](nstexthighlightstyle.md) structure as the value of the [NSTextHighlightStyleAttributeName](nstexthighlightstyleattributename.md) attribute. That attribute applies a highlight to the text to emphasize it. The highlight contributes a background color and a contrasting foreground color to the text.

## Topics

### Getting the highlight styles

- [NSTextHighlightStyleDefault](nstexthighlightstyledefault.md): The default highlight style to apply to text.

## See Also

### Getting text content attributes

- [TextKit string attribute keys](textkit-string-attribute-keys.md): UIKit-specific keys you use to apply attributes to ranges of characters in an attributed string.
- [NSTextHighlightColorScheme](nstexthighlightcolorscheme.md): Constants that specify the highlight color to use with the text.
- [NSTextEffectStyle](nstexteffectstyle.md): Constants for the type of effect to apply to the text.
- [NSUnderlineStyle](nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.
- [NSWritingDirectionFormatType](nswritingdirectionformattype.md): Constants for the writing direction attribute key.
