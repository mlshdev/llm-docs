> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscharactershapeattributename](https://developer.apple.com/documentation/appkit/nscharactershapeattributename)

# NSCharacterShapeAttributeName

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.11)

The character shape attribute.

## Declaration

```objectivec
extern NSAttributedStringKey NSCharacterShapeAttributeName;
```

<a id="discussion"></a>

## Discussion

An integer value. The value is interpreted as Apple Type Services `kCharacterShapeType selector + 1`.

The character shape feature type (`kCharacterShapeType`) is used when a single font contains different appearances for the same character shape, and these shapes are not traditionally treated as swashes. It is needed for languages such as Chinese that have both traditional and simplified character sets. The default value is `0` (disable). `1` is `kTraditionalCharactersSelector`, and so on. Refer to `<ATS/SFNTLayoutTypes.h>` and Font Features in ATSUI Programming Guide for additional information.

## See Also

### Deprecated keys

- [NSAccessibilityAttachmentTextAttribute](nsaccessibilityattachmenttextattribute.md): Deprecated. Text attachment (`id`).
- [NSExpansionAttributeName](nsexpansionattributename.md): Deprecated. The expansion factor of the text.
- [NSObliquenessAttributeName](nsobliquenessattributename.md): Deprecated. The obliqueness of the text.
- [NSVerticalGlyphFormAttributeName](nsverticalglyphformattributename.md): Deprecated. The vertical glyph form of the text.
- [NSUsesScreenFontsDocumentAttribute](nsusesscreenfontsdocumentattribute.md): Deprecated. The screen fonts attribute.
