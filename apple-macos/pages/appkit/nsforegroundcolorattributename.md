> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsforegroundcolorattributename](https://developer.apple.com/documentation/appkit/nsforegroundcolorattributename)

# NSForegroundColorAttributeName

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The color of the text.

## Declaration

```objectivec
extern NSAttributedStringKey NSForegroundColorAttributeName;
```

<a id="Discussion"></a>

## Discussion

In macOS, the value of this attribute is an [NSColor](nscolor.md) instance. In iOS, tvOS, watchOS, and Mac Catalyst, the value of this attribute is a [UIColor](https://developer.apple.com/documentation/uikit/uicolor) instance. Use this attribute to specify the color of the text during rendering. If you don’t specify this attribute, the text renders in black.

## See Also

### Getting rendering attribute keys

- [NSBackgroundColorAttributeName](nsbackgroundcolorattributename.md): The color of the background behind the text.
- [NSBaselineOffsetAttributeName](nsbaselineoffsetattributename.md): The vertical offset for the position of the text.
- [NSFontAttributeName](nsfontattributename.md): The font of the text.
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
