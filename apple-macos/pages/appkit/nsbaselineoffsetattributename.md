> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbaselineoffsetattributename](https://developer.apple.com/documentation/appkit/nsbaselineoffsetattributename)

# NSBaselineOffsetAttributeName

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The vertical offset for the position of the text.

## Declaration

```objectivec
extern NSAttributedStringKey NSBaselineOffsetAttributeName;
```

<a id="Overview"></a>

## Overview

The value of this attribute is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing a floating point value indicating the character’s offset from the baseline, in points. The default value is `0`.

> **Important**

> This attribute is different from [kCTLanguageAttributeName](https://developer.apple.com/documentation/coretext/kctlanguageattributename); you need to use [kCTLanguageAttributeName](https://developer.apple.com/documentation/coretext/kctlanguageattributename) if you are writing code for [Core Text](https://developer.apple.com/documentation/coretext).

## See Also

### Getting rendering attribute keys

- [NSBackgroundColorAttributeName](nsbackgroundcolorattributename.md): The color of the background behind the text.
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
- [NSUnderlineStyleAttributeName](nsunderlinestyleattributename.md): The underline style of the text.
