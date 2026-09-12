> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontattributename](https://developer.apple.com/documentation/appkit/nsfontattributename)

# NSFontAttributeName

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The font of the text.

## Declaration

```objectivec
extern NSAttributedStringKey NSFontAttributeName;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is a [UIFont](https://developer.apple.com/documentation/uikit/uifont) object. Use this attribute to change the font for a range of text. If you do not specify this attribute, the string uses a 12-point Helvetica(Neue) font by default.

## See Also

### Getting rendering attribute keys

- [NSBackgroundColorAttributeName](nsbackgroundcolorattributename.md): The color of the background behind the text.
- [NSBaselineOffsetAttributeName](nsbaselineoffsetattributename.md): The vertical offset for the position of the text.
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
