> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobliquenessattributename](https://developer.apple.com/documentation/appkit/nsobliquenessattributename)

# NSObliquenessAttributeName

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 27.0)

The obliqueness of the text.

## Declaration

```objectivec
extern NSAttributedStringKey NSObliquenessAttributeName;
```

<a id="discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing a floating point value indicating skew to be applied to glyphs. The default value is `0`, indicating no skew.

## See Also

### Deprecated keys

- [NSAccessibilityAttachmentTextAttribute](nsaccessibilityattachmenttextattribute.md): Deprecated. Text attachment (`id`).
- [NSExpansionAttributeName](nsexpansionattributename.md): Deprecated. The expansion factor of the text.
- [NSVerticalGlyphFormAttributeName](nsverticalglyphformattributename.md): Deprecated. The vertical glyph form of the text.
- [NSCharacterShapeAttributeName](nscharactershapeattributename.md): Deprecated. The character shape attribute.
- [NSUsesScreenFontsDocumentAttribute](nsusesscreenfontsdocumentattribute.md): Deprecated. The screen fonts attribute.
