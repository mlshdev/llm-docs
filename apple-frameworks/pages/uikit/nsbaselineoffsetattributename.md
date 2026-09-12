> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsbaselineoffsetattributename](https://developer.apple.com/documentation/uikit/nsbaselineoffsetattributename)

# NSBaselineOffsetAttributeName

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The vertical offset for the position of the text.

## Declaration

```objectivec
extern NSAttributedStringKey const NSBaselineOffsetAttributeName;
```

<a id="Overview"></a>

## Overview

The value of this attribute is an [NSNumber](../foundation/nsnumber.md) object containing a floating point value indicating the character’s offset from the baseline, in points. The default value is `0`.

> **Important**

> This attribute is different from [kCTLanguageAttributeName](../coretext/kctlanguageattributename.md); you need to use [kCTLanguageAttributeName](../coretext/kctlanguageattributename.md) if you are writing code for [Core Text](../coretext.md).

## See Also

### Getting rendering attribute keys

- [NSBackgroundColorAttributeName](nsbackgroundcolorattributename.md): The color of the background behind the text.
- [NSFontAttributeName](nsfontattributename.md): The font of the text.
- [NSForegroundColorAttributeName](nsforegroundcolorattributename.md): The color of the text.
- [NSKernAttributeName](nskernattributename.md): The kerning of the text.
- [NSLigatureAttributeName](nsligatureattributename.md): The ligature of the text.
- [NSParagraphStyleAttributeName](nsparagraphstyleattributename.md): The paragraph style of the text.
- [NSStrikethroughColorAttributeName](nsstrikethroughcolorattributename.md): The color of the strikethrough.
- [NSStrikethroughStyleAttributeName](nsstrikethroughstyleattributename.md): The strikethrough style of the text.
- [NSStrokeColorAttributeName](nsstrokecolorattributename.md): The color of the stroke.
- [NSStrokeWidthAttributeName](nsstrokewidthattributename.md): The width of the stroke.
- [NSTrackingAttributeName](nstrackingattributename.md): The amount to modify the default tracking.
- [NSUnderlineColorAttributeName](nsunderlinecolorattributename.md): The color of the underline.
- [NSUnderlineStyleAttributeName](nsunderlinestyleattributename.md): The underline style of the text.
- [NSWritingDirectionAttributeName](nswritingdirectionattributename.md): The writing direction of the text.
