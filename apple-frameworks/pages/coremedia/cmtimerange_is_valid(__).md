> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerange_is_valid(_:)](https://developer.apple.com/documentation/coremedia/cmtimerange_is_valid(_:))

# CMTIMERANGE_IS_VALID(\_:)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a time range is valid.

## Declaration

```swift
func CMTIMERANGE_IS_VALID(_ range: CMTimeRange) -> Bool
```

## Parameters

- `range`: The time range.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `range` is valid; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting Time Ranges

- [CMTIMERANGE_IS_EMPTY(\_:)](cmtimerange_is_empty%28__%29.md): Returns a Boolean value that indicates whether a time range has a duration of zero.
- [CMTIMERANGE_IS_INDEFINITE(\_:)](cmtimerange_is_indefinite%28__%29.md): Returns a Boolean value that indicates whether a time range is indefinite.
- [CMTIMERANGE_IS_INVALID(\_:)](cmtimerange_is_invalid%28__%29.md): Returns a Boolean value that indicates whether a time range is invalid.
- [CMTimeRangeGetEnd(\_:)](cmtimerangegetend%28__%29.md): Returns a time value that represents the end of a time range.
- [CMTimeRangeGetIntersection(\_:otherRange:)](cmtimerangegetintersection%28__otherrange_%29.md): Returns a new time range with the time elements that are common between the input.
- [CMTimeRangeGetUnion(\_:otherRange:)](cmtimerangegetunion%28__otherrange_%29.md): Returns a new time range with the time elements of the input.
