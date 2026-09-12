> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471588-atsui_attribute_selectors](https://developer.apple.com/documentation/coreservices/1471588-atsui_attribute_selectors)

# ATSUI Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability for Apple Type Services for Unicode Imaging.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltATSUFeatures](1471588-atsui_attribute_selectors/gestaltatsufeatures.md)
- [gestaltATSUTrackingFeature](1471588-atsui_attribute_selectors/gestaltatsutrackingfeature.md): If the bit specified by this mask constant is set, the functions `ATSUCountFontTracking` and `ATSUGetIndFontTracking` are available.
- [gestaltATSUMemoryFeature](1471588-atsui_attribute_selectors/gestaltatsumemoryfeature.md): If the bit specified by this mask is set, the functions `ATSUCreateMemorySetting`, `ATSUSetCurrentMemorySetting`, `ATSUGetCurrentMemorySetting`, and `ATSUDisposeMemorySetting` are available.
- [gestaltATSUFallbacksFeature](1471588-atsui_attribute_selectors/gestaltatsufallbacksfeature.md): If the bit specified by this mask is set, the functions `ATSUSetFontFallbacks` and `ATSUGetFontFallbacks` are available.
- [gestaltATSUGlyphBoundsFeature](1471588-atsui_attribute_selectors/gestaltatsuglyphboundsfeature.md): If the bit specified by this mask is set, the function `ATSUGetGlyphBounds` is available.
- [gestaltATSULineControlFeature](1471588-atsui_attribute_selectors/gestaltatsulinecontrolfeature.md): If the bit specified by this mask is set, the functions `ATSUCopyLineControls`, `ATSUSetLineControls`, `ATSUGetLineControl`, `ATSUGetAllLineControls`, and `ATSUClearLineControls` are available.
- [gestaltATSULayoutCreateAndCopyFeature](1471588-atsui_attribute_selectors/gestaltatsulayoutcreateandcopyfeature.md): If the bit specified by this mask is set, the function `ATSUCreateAndCopyTextLayout` is available.
- [gestaltATSULayoutCacheClearFeature](1471588-atsui_attribute_selectors/gestaltatsulayoutcacheclearfeature.md): If the bit specified by this mask is set, the function `ATSUClearLayoutCache` is available.
- [gestaltATSUTextLocatorUsageFeature](1471588-atsui_attribute_selectors/gestaltatsutextlocatorusagefeature.md): If the bit specified by this mask is set, the text-break locator attribute is available for both style and text layout objects.
- [gestaltATSULowLevelOrigFeatures](1471588-atsui_attribute_selectors/gestaltatsulowlevelorigfeatures.md): If the bit specified by this mask is set, the low-level features introduced in ATSUI version 2.0 are available.
- [gestaltATSUFallbacksObjFeatures](1471588-atsui_attribute_selectors/gestaltatsufallbacksobjfeatures.md): If the bit specified by this mask is set, `ATSUFontFallbacks` objects are available.
- [gestaltATSUIgnoreLeadingFeature](1471588-atsui_attribute_selectors/gestaltatsuignoreleadingfeature.md): If the bit specified by this mask is set, the line layout option (`kATSIgnoreFontLeadingTag`) to ignore the font leading value is available.
- [gestaltATSUByCharacterClusterFeature](1471588-atsui_attribute_selectors/gestaltatsubycharacterclusterfeature.md): If the bit specified by this mask is set, ATSUI cursor movement types are available.
- [gestaltATSUAscentDescentControlsFeature](1471588-atsui_attribute_selectors/gestaltatsuascentdescentcontrolsfeature.md): If the bit specified by this mask is set, ascent and descent controls (`kATSUDescentTag` and `kATSUAscentTag`) are available.
- [gestaltATSUHighlightInactiveTextFeature](1471588-atsui_attribute_selectors/gestaltatsuhighlightinactivetextfeature.md): If the bit specified by this mask is set, the highlight inactive text feature is available.
- [gestaltATSUPositionToCursorFeature](1471588-atsui_attribute_selectors/gestaltatsupositiontocursorfeature.md): If the bit specified by this mask is set, the position-to-cursor feature is available.
- [gestaltATSUBatchBreakLinesFeature](1471588-atsui_attribute_selectors/gestaltatsubatchbreaklinesfeature.md): If the bit specified by this mask is set, the `ATSUBatchBreakLines` function is available.
- [gestaltATSUTabSupportFeature](1471588-atsui_attribute_selectors/gestaltatsutabsupportfeature.md): If the bit specified by this mask is set, support for tabs is available.
- [gestaltATSUDirectAccess](1471588-atsui_attribute_selectors/gestaltatsudirectaccess.md): If the bit specified by this mask is set, ATSU direct-access functions are available. These functions let you access glyph information directly.
- [gestaltATSUDecimalTabFeature](1471588-atsui_attribute_selectors/gestaltatsudecimaltabfeature.md): If the bit specified by this mask is set, your application can set a decimal tab character.
- [gestaltATSUBiDiCursorPositionFeature](1471588-atsui_attribute_selectors/gestaltatsubidicursorpositionfeature.md): If the bit specified by this mask is set, support for bidirectional cursor positioning is available.
- [gestaltATSUNearestCharLineBreakFeature](1471588-atsui_attribute_selectors/gestaltatsunearestcharlinebreakfeature.md): If the bit specified by this mask is set, the nearest character line break feature is available.
- [gestaltATSUHighlightColorControlFeature](1471588-atsui_attribute_selectors/gestaltatsuhighlightcolorcontrolfeature.md): If the bit specified by this mask is set, your application can control highlight color.
- [gestaltATSUUnderlineOptionsStyleFeature](1471588-atsui_attribute_selectors/gestaltatsuunderlineoptionsstylefeature.md): If the bit specified by this mask is set, underline options are available.
- [gestaltATSUStrikeThroughStyleFeature](1471588-atsui_attribute_selectors/gestaltatsustrikethroughstylefeature.md): If the bit specified by this mask is set, strike through styles are available.
- [gestaltATSUDropShadowStyleFeature](1471588-atsui_attribute_selectors/gestaltatsudropshadowstylefeature.md): If the bit specified by this mask is set, drop shadow features are available.
