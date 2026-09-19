> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/unichararrayoffset

# UniCharArrayOffset

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Represents the boundary between two characters.

## Declaration

```objectivec
typedef unsigned long UniCharArrayOffset;
```

<a id="discussion"></a>

## Discussion

A `UniCharArrayOffset` represents the boundary between two characters. For example, the first character in a buffer lies between offsets 0 and 1. So the first character in the buffer can be referred to as either “offset 0, leading” or “offset 1, trailing.” This distinction is useful when you deal with caret positions.
