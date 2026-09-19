> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nsexpansionattributename

# NSExpansionAttributeName

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 27.2)

The expansion factor of the text.

## Declaration

```objectivec
extern NSAttributedStringKey const NSExpansionAttributeName;
```

<a id="Overview"></a>

## Overview

The value of this attribute is an [NSNumber](../foundation/nsnumber.md) object containing a floating point value indicating the log of the expansion factor to be applied to glyphs. The default value is `0`, indicating no expansion.

## See Also

### Deprecated keys

- [NSObliquenessAttributeName](nsobliquenessattributename.md): Deprecated. The obliqueness of the text.
- [NSVerticalGlyphFormAttributeName](nsverticalglyphformattributename.md): Deprecated. The vertical glyph form of the text.
