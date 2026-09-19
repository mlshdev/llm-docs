> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtime_is_indefinite

# CMTIME_IS_INDEFINITE

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a time is indefinite.

## Declaration

```objectivec
#define CMTIME_IS_INDEFINITE(time)
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the time is indefinite; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting a Time

- [CMTimeGetSeconds](cmtimegetseconds%28__%29.md): Returns a representation of the time in seconds.
- [CMTimeAbsoluteValue](cmtimeabsolutevalue%28__%29.md): Returns the absolute value of a time.
- [CMTIME_IS_VALID](cmtime_is_valid.md): Returns a Boolean value that indicates whether a time is valid.
- [CMTIME_IS_INVALID](cmtime_is_invalid.md): Returns a Boolean value that indicates whether a time is invalid.
- [CMTIME_IS_POSITIVE_INFINITY](cmtime_is_positive_infinity.md): Returns a Boolean value that indicates whether a time is positive infinity.
- [CMTIME_IS_NEGATIVE_INFINITY](cmtime_is_negative_infinity.md): Returns a Boolean value that indicates whether a time is negative infinity.
- [CMTIME_IS_NUMERIC](cmtime_is_numeric.md): Returns a Boolean value that indicates whether a time is numeric.
- [CMTIME_HAS_BEEN_ROUNDED](cmtime_has_been_rounded.md): Returns a Boolean value that indicates whether the system rounded the time.
