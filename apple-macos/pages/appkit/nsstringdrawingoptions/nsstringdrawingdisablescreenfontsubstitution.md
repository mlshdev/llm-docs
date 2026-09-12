> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstringdrawingoptions/nsstringdrawingdisablescreenfontsubstitution](https://developer.apple.com/documentation/appkit/nsstringdrawingoptions/nsstringdrawingdisablescreenfontsubstitution)

# NSStringDrawingDisableScreenFontSubstitution

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+ (deprecated in 10.11)

An option that disables screen font substitution.

## Declaration

```objectivec
NSStringDrawingDisableScreenFontSubstitution
```

<a id="Discussion"></a>

## Discussion

This option is equivalent to setting [usesScreenFonts](../nslayoutmanager/usesscreenfonts.md) to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Constants

- [NSStringDrawingUsesLineFragmentOrigin](nsstringdrawinguseslinefragmentorigin.md): Uses the line fragment origin instead of the baseline origin.
- [NSStringDrawingUsesFontLeading](nsstringdrawingusesfontleading.md): Uses the font leading for calculating line heights.
- [NSStringDrawingUsesDeviceMetrics](nsstringdrawingusesdevicemetrics.md): Uses image glyph bounds instead of typographic bounds.
- [NSStringDrawingTruncatesLastVisibleLine](nsstringdrawingtruncateslastvisibleline.md): Truncates and adds the ellipsis character to the last visible line if the text doesn’t fit into the specified bounds.
- [NSStringDrawingOneShot](nsstringdrawingoneshot.md): Deprecated. Suppresses caching layout information.
