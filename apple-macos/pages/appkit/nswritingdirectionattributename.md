> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingdirectionattributename](https://developer.apple.com/documentation/appkit/nswritingdirectionattributename)

# NSWritingDirectionAttributeName

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

The writing direction of the text.

## Declaration

```objectivec
extern NSAttributedStringKey NSWritingDirectionAttributeName;
```

<a id="Overview"></a>

## Overview

The value of this attribute is an [NSArray](https://developer.apple.com/documentation/foundation/nsarray) object containing [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects representing the nested levels of writing direction overrides, in order from outermost to innermost.

This attribute provides a means to override the default bidirectional text algorithm, equivalent to using the Unicode bidi control characters `LRE`, `RLE`, `LRO`, or `RLO` paired with `PDF`, but as a higher-level attribute. (See [Unicode Standard Annex #9](http://unicode.org/reports/tr9/) for information about the Unicode bidi formatting codes.) The `NSWritingDirectionAttributeName` constant is a character-level attribute that provides a higher-level alternative to the inclusion of explicit bidirectional control characters in text. It is the `NSAttributedString` equivalent of the HTML markup using `bdo` element with the `dir` attribute.

The values of the `NSNumber` objects should be `0`, `1`, `2`, or `3`, for `LRE`, `RLE`, `LRO`, or `RLO` respectively, and combinations of [NSWritingDirectionLeftToRight](nswritingdirection/lefttoright.md) and [NSWritingDirectionRightToLeft](nswritingdirection/righttoleft.md) with [NSTextWritingDirectionEmbedding](nstextwritingdirectionembedding.md) or [NSTextWritingDirectionOverride](nstextwritingdirectionoverride.md), as shown in the following table.

| Array `NSNumber` Values | Unicode Control Characters | Writing Direction Constants |
| --- | --- | --- |
| `0` | `LRE` | `NSWritingDirectionLeftToRight \| NSTextWritingDirectionEmbedding` |
| `1` | `RLE` | `NSWritingDirectionRightToLeft \| NSTextWritingDirectionEmbedding` |
| `2` | `LRO` | `NSWritingDirectionLeftToRight \| NSTextWritingDirectionOverride` |
| `3` | `RLO` | `NSWritingDirectionRightToLeft \| NSTextWritingDirectionOverride` |

## See Also

### Getting rendering attribute keys

- [NSBackgroundColorAttributeName](nsbackgroundcolorattributename.md): The color of the background behind the text.
- [NSBaselineOffsetAttributeName](nsbaselineoffsetattributename.md): The vertical offset for the position of the text.
- [NSFontAttributeName](nsfontattributename.md): The font of the text.
- [NSForegroundColorAttributeName](nsforegroundcolorattributename.md): The color of the text.
- [NSGlyphInfoAttributeName](nsglyphinfoattributename.md): The name of a glyph info object.
- [NSKernAttributeName](nskernattributename.md): The kerning of the text.
- [NSLigatureAttributeName](nsligatureattributename.md): The ligature of the text.
- [NSParagraphStyleAttributeName](nsparagraphstyleattributename.md): The paragraph style of the text.
- [NSStrikethroughColorAttributeName](nsstrikethroughcolorattributename.md): The color of the strikethrough.
- [NSStrikethroughStyleAttributeName](nsstrikethroughstyleattributename.md): The strikethrough style of the text.
- [NSStrokeColorAttributeName](nsstrokecolorattributename.md): The color of the stroke.
- [NSStrokeWidthAttributeName](nsstrokewidthattributename.md): The width of the stroke.
- [NSSuperscriptAttributeName](nssuperscriptattributename.md): The superscript of the text.
- [NSTrackingAttributeName](nstrackingattributename.md): The amount to modify the default tracking.
- [NSUnderlineColorAttributeName](nsunderlinecolorattributename.md): The color of the underline.
