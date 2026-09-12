> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilinebreakmode/uilinebreakmodetailtruncation](https://developer.apple.com/documentation/uikit/uilinebreakmode/uilinebreakmodetailtruncation)

# UILineBreakModeTailTruncation

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 6.0) · iPadOS 2.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Truncate text (as necessary) from the end of the line.

> Use [NSLineBreakByTruncatingTail](../nslinebreakmode/bytruncatingtail.md) instead.

## Declaration

```objectivec
UILineBreakModeTailTruncation
```

<a id="Discussion"></a>

## Discussion

For multiple lines of text, only text on the last line truncates.

## See Also

### Deprecated constants

- [UILineBreakModeWordWrap](uilinebreakmodewordwrap.md): Deprecated. Wrap or clip the string only at word boundaries.
- [UILineBreakModeCharacterWrap](uilinebreakmodecharacterwrap.md): Deprecated. Wrap or clip the string at the closest character boundary.
- [UILineBreakModeClip](uilinebreakmodeclip.md): Deprecated. Clip the text when reaching the end of the drawing rectangle.
- [UILineBreakModeHeadTruncation](uilinebreakmodeheadtruncation.md): Deprecated. Truncate text (as necessary) from the beginning of the line.
- [UILineBreakModeMiddleTruncation](uilinebreakmodemiddletruncation.md): Deprecated. Truncate text (as necessary) from the middle of the line.
