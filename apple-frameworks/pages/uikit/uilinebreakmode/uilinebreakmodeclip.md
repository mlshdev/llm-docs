> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilinebreakmode/uilinebreakmodeclip](https://developer.apple.com/documentation/uikit/uilinebreakmode/uilinebreakmodeclip)

# UILineBreakModeClip

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 6.0) · iPadOS 2.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Clip the text when reaching the end of the drawing rectangle.

> Use [NSLineBreakByClipping](../nslinebreakmode/byclipping.md) instead.

## Declaration

```objectivec
UILineBreakModeClip
```

<a id="Discussion"></a>

## Discussion

This option could result in a partially rendered character at the end of a string.

## See Also

### Deprecated constants

- [UILineBreakModeWordWrap](uilinebreakmodewordwrap.md): Deprecated. Wrap or clip the string only at word boundaries.
- [UILineBreakModeCharacterWrap](uilinebreakmodecharacterwrap.md): Deprecated. Wrap or clip the string at the closest character boundary.
- [UILineBreakModeHeadTruncation](uilinebreakmodeheadtruncation.md): Deprecated. Truncate text (as necessary) from the beginning of the line.
- [UILineBreakModeTailTruncation](uilinebreakmodetailtruncation.md): Deprecated. Truncate text (as necessary) from the end of the line.
- [UILineBreakModeMiddleTruncation](uilinebreakmodemiddletruncation.md): Deprecated. Truncate text (as necessary) from the middle of the line.
