> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsstrokecolorattributename](https://developer.apple.com/documentation/uikit/nsstrokecolorattributename)

# NSStrokeColorAttributeName

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The color of the stroke.

## Declaration

```objectivec
extern NSAttributedStringKey const NSStrokeColorAttributeName;
```

<a id="Overview"></a>

## Overview

The value of this parameter is a [UIColor](uicolor.md) object. If it is not defined (which is the case by default), it is assumed to be the same as the value of [NSForegroundColorAttributeName](nsforegroundcolorattributename.md); otherwise, it describes the outline color. For more details, see [Drawing attributed strings that are both filled and stroked](https://developer.apple.com/library/archive/qa/qa1531/_index.html#//apple_ref/doc/uid/DTS40007490).

## See Also

### Getting rendering attribute keys

- [NSBackgroundColorAttributeName](nsbackgroundcolorattributename.md): The color of the background behind the text.
- [NSBaselineOffsetAttributeName](nsbaselineoffsetattributename.md): The vertical offset for the position of the text.
- [NSFontAttributeName](nsfontattributename.md): The font of the text.
- [NSForegroundColorAttributeName](nsforegroundcolorattributename.md): The color of the text.
- [NSKernAttributeName](nskernattributename.md): The kerning of the text.
- [NSLigatureAttributeName](nsligatureattributename.md): The ligature of the text.
- [NSParagraphStyleAttributeName](nsparagraphstyleattributename.md): The paragraph style of the text.
- [NSStrikethroughColorAttributeName](nsstrikethroughcolorattributename.md): The color of the strikethrough.
- [NSStrikethroughStyleAttributeName](nsstrikethroughstyleattributename.md): The strikethrough style of the text.
- [NSStrokeWidthAttributeName](nsstrokewidthattributename.md): The width of the stroke.
- [NSTrackingAttributeName](nstrackingattributename.md): The amount to modify the default tracking.
- [NSUnderlineColorAttributeName](nsunderlinecolorattributename.md): The color of the underline.
- [NSUnderlineStyleAttributeName](nsunderlinestyleattributename.md): The underline style of the text.
- [NSWritingDirectionAttributeName](nswritingdirectionattributename.md): The writing direction of the text.
