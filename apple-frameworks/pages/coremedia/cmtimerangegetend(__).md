> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerangegetend(_:)](https://developer.apple.com/documentation/coremedia/cmtimerangegetend(_:))

# CMTimeRangeGetEnd(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a time value that represents the end of a time range.

## Declaration

```swift
func CMTimeRangeGetEnd(_ range: CMTimeRange) -> CMTime
```

## Parameters

- `range`: The time range from which to find the end of the time range.

<a id="return-value"></a>

## Return Value

A time structure.

## See Also

### Inspecting Time Ranges

- [CMTIMERANGE_IS_EMPTY(\_:)](cmtimerange_is_empty%28__%29.md): Returns a Boolean value that indicates whether a time range has a duration of zero.
- [CMTIMERANGE_IS_INDEFINITE(\_:)](cmtimerange_is_indefinite%28__%29.md): Returns a Boolean value that indicates whether a time range is indefinite.
- [CMTIMERANGE_IS_INVALID(\_:)](cmtimerange_is_invalid%28__%29.md): Returns a Boolean value that indicates whether a time range is invalid.
- [CMTIMERANGE_IS_VALID(\_:)](cmtimerange_is_valid%28__%29.md): Returns a Boolean value that indicates whether a time range is valid.
- [CMTimeRangeGetIntersection(\_:otherRange:)](cmtimerangegetintersection%28__otherrange_%29.md): Returns a new time range with the time elements that are common between the input.
- [CMTimeRangeGetUnion(\_:otherRange:)](cmtimerangegetunion%28__otherrange_%29.md): Returns a new time range with the time elements of the input.

# CMTimeRangeGetEnd (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a time value that represents the end of a time range.

## Declaration

```objectivec
extern CMTime CMTimeRangeGetEnd(CMTimeRange range);
```

## Parameters

- `range`: The time range from which to find the end of the time range.

<a id="return-value"></a>

## Return Value

A time structure.

## See Also

### Inspecting Time Ranges

- [CMTIMERANGE_IS_EMPTY](cmtimerange_is_empty.md): Returns a Boolean value that indicates whether a time range has a duration of zero.
- [CMTIMERANGE_IS_INDEFINITE](cmtimerange_is_indefinite.md): Returns a Boolean value that indicates whether a time range is indefinite.
- [CMTIMERANGE_IS_INVALID](cmtimerange_is_invalid.md): Returns a Boolean value that indicates whether a time range is invalid.
- [CMTIMERANGE_IS_VALID](cmtimerange_is_valid.md): Returns a Boolean value that indicates whether a time range is valid.
- [CMTimeRangeGetIntersection](cmtimerangegetintersection%28__otherrange_%29.md): Returns a new time range with the time elements that are common between the input.
- [CMTimeRangeGetUnion](cmtimerangegetunion%28__otherrange_%29.md): Returns a new time range with the time elements of the input.
