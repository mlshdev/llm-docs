> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstringdrawingoptions](https://developer.apple.com/documentation/appkit/nsstringdrawingoptions)

# NSStringDrawingOptions

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Constants that specify the rendering options for drawing a string.

## Declaration

```objectivec
enum NSStringDrawingOptions : NSInteger;
```

## Topics

### Constants

- [NSStringDrawingUsesLineFragmentOrigin](nsstringdrawingoptions/nsstringdrawinguseslinefragmentorigin.md): Uses the line fragment origin instead of the baseline origin.
- [NSStringDrawingUsesFontLeading](nsstringdrawingoptions/nsstringdrawingusesfontleading.md): Uses the font leading for calculating line heights.
- [NSStringDrawingUsesDeviceMetrics](nsstringdrawingoptions/nsstringdrawingusesdevicemetrics.md): Uses image glyph bounds instead of typographic bounds.
- [NSStringDrawingTruncatesLastVisibleLine](nsstringdrawingoptions/nsstringdrawingtruncateslastvisibleline.md): Truncates and adds the ellipsis character to the last visible line if the text doesn’t fit into the specified bounds.
- [NSStringDrawingDisableScreenFontSubstitution](nsstringdrawingoptions/nsstringdrawingdisablescreenfontsubstitution.md): Deprecated. An option that disables screen font substitution.
- [NSStringDrawingOneShot](nsstringdrawingoptions/nsstringdrawingoneshot.md): Deprecated. Suppresses caching layout information.

### Enumeration Cases

- [NSStringDrawingOptionsResolvesNaturalAlignmentWithBaseWritingDirection](nsstringdrawingoptions/nsstringdrawingoptionsresolvesnaturalalignmentwithbasewritingdirection.md): Specifies the behavior for resolving [NSTextAlignmentNatural](nstextalignment/natural.md) to the visual alignment.

## See Also

### Strings

- [NSStringDrawingContext](nsstringdrawingcontext.md): An object that manages metrics for drawing attributed strings.
