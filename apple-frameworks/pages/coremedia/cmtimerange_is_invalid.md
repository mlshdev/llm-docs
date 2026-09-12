> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerange_is_invalid](https://developer.apple.com/documentation/coremedia/cmtimerange_is_invalid)

# CMTIMERANGE_IS_INVALID

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a time range is invalid.

## Declaration

```objectivec
#define CMTIMERANGE_IS_INVALID(range)
```

## Parameters

- `range`: The time range to be tested for invalidity.

<a id="return-value"></a>

## Return Value

`true` if `range` is invalid; otherwise, `false`.

## See Also

### Inspecting Time Ranges

- [CMTIMERANGE_IS_EMPTY](cmtimerange_is_empty.md): Returns a Boolean value that indicates whether a time range has a duration of zero.
- [CMTIMERANGE_IS_INDEFINITE](cmtimerange_is_indefinite.md): Returns a Boolean value that indicates whether a time range is indefinite.
- [CMTIMERANGE_IS_VALID](cmtimerange_is_valid.md): Returns a Boolean value that indicates whether a time range is valid.
- [CMTimeRangeGetEnd](cmtimerangegetend%28__%29.md): Returns a time value that represents the end of a time range.
- [CMTimeRangeGetIntersection](cmtimerangegetintersection%28__otherrange_%29.md): Returns a new time range with the time elements that are common between the input.
- [CMTimeRangeGetUnion](cmtimerangegetunion%28__otherrange_%29.md): Returns a new time range with the time elements of the input.
