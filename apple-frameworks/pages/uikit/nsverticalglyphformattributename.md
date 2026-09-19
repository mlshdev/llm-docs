> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nsverticalglyphformattributename

# NSVerticalGlyphFormAttributeName

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 27.2)

The vertical glyph form of the text.

## Declaration

```objectivec
extern NSAttributedStringKey const NSVerticalGlyphFormAttributeName;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](../foundation/nsnumber.md) object containing an integer. The value `0` indicates horizontal text. The value `1` indicates vertical text. In iOS, horizontal text is always used and specifying a different value is undefined.

## See Also

### Deprecated keys

- [NSExpansionAttributeName](nsexpansionattributename.md): Deprecated. The expansion factor of the text.
- [NSObliquenessAttributeName](nsobliquenessattributename.md): Deprecated. The obliqueness of the text.
