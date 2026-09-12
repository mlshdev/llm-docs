> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsverticalglyphformattributename](https://developer.apple.com/documentation/appkit/nsverticalglyphformattributename)

# NSVerticalGlyphFormAttributeName

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 27.0)

The vertical glyph form of the text.

## Declaration

```objectivec
extern NSAttributedStringKey NSVerticalGlyphFormAttributeName;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing an integer. The value `0` indicates horizontal text. The value `1` indicates vertical text. In iOS, horizontal text is always used and specifying a different value is undefined.

## See Also

### Deprecated keys

- [NSAccessibilityAttachmentTextAttribute](nsaccessibilityattachmenttextattribute.md): Deprecated. Text attachment (`id`).
- [NSExpansionAttributeName](nsexpansionattributename.md): Deprecated. The expansion factor of the text.
- [NSObliquenessAttributeName](nsobliquenessattributename.md): Deprecated. The obliqueness of the text.
- [NSCharacterShapeAttributeName](nscharactershapeattributename.md): Deprecated. The character shape attribute.
- [NSUsesScreenFontsDocumentAttribute](nsusesscreenfontsdocumentattribute.md): Deprecated. The screen fonts attribute.
