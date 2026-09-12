> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsusesscreenfontsdocumentattribute](https://developer.apple.com/documentation/appkit/nsusesscreenfontsdocumentattribute)

# NSUsesScreenFontsDocumentAttribute

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.8+ (deprecated in 10.11)

The screen fonts attribute.

## Declaration

```objectivec
extern NSAttributedStringKey NSUsesScreenFontsDocumentAttribute;
```

<a id="discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing a Boolean; this attribute corresponds to the [usesScreenFonts](nslayoutmanager/usesscreenfonts.md) method of [NSLayoutManager](nslayoutmanager.md); if absent, follows the system default setting.

## See Also

### Deprecated keys

- [NSAccessibilityAttachmentTextAttribute](nsaccessibilityattachmenttextattribute.md): Deprecated. Text attachment (`id`).
- [NSExpansionAttributeName](nsexpansionattributename.md): Deprecated. The expansion factor of the text.
- [NSObliquenessAttributeName](nsobliquenessattributename.md): Deprecated. The obliqueness of the text.
- [NSVerticalGlyphFormAttributeName](nsverticalglyphformattributename.md): Deprecated. The vertical glyph form of the text.
- [NSCharacterShapeAttributeName](nscharactershapeattributename.md): Deprecated. The character shape attribute.
