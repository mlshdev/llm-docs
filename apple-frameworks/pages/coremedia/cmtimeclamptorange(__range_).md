> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimeclamptorange(_:range:)](https://developer.apple.com/documentation/coremedia/cmtimeclamptorange(_:range:))

# CMTimeClampToRange(\_:range:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the nearest time value inside the time range.

## Declaration

```swift
func CMTimeClampToRange(_ time: CMTime, range: CMTimeRange) -> CMTime
```

## Parameters

- `time`: The time to clamp.
- `range`: The time range to examine.

<a id="return-value"></a>

## Return Value

A time structure inside the time range.

<a id="Discussion"></a>

## Discussion

The function returns the times inside the range you specify unmodified. Times before the start and after the end time of the time range return the start and end time of the range. If the `CMTimeRange` argument is empty, this function returns an invalid `CMTime`. If the given `CMTime` is invalid, the function returns an invalid `CMTime`.

## See Also

### Utility Functions

- [CMTimeMapDurationFromRangeToRange(\_:fromRange:toRange:)](cmtimemapdurationfromrangetorange%28__fromrange_torange_%29.md): Translates a duration through a mapping from two time ranges.
- [CMTimeMapTimeFromRangeToRange(\_:fromRange:toRange:)](cmtimemaptimefromrangetorange%28__fromrange_torange_%29.md): Translates a time through a mapping from two time ranges.
- [CMTimeRangeCopyAsDictionary(\_:allocator:)](cmtimerangecopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time range.
- [CMTimeRangeCopyDescription(allocator:range:)](cmtimerangecopydescription%28allocator_range_%29.md): Returns a string with a description of a time range.
- [CMTimeRangeShow(\_:)](cmtimerangeshow%28__%29.md): Prints a description of the time range to standard error.

# CMTimeClampToRange (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the nearest time value inside the time range.

## Declaration

```objectivec
extern CMTime CMTimeClampToRange(CMTime time, CMTimeRange range);
```

## Parameters

- `time`: The time to clamp.
- `range`: The time range to examine.

<a id="return-value"></a>

## Return Value

A time structure inside the time range.

<a id="Discussion"></a>

## Discussion

The function returns the times inside the range you specify unmodified. Times before the start and after the end time of the time range return the start and end time of the range. If the `CMTimeRange` argument is empty, this function returns an invalid `CMTime`. If the given `CMTime` is invalid, the function returns an invalid `CMTime`.

## See Also

### Utility Functions

- [CMTimeMapDurationFromRangeToRange](cmtimemapdurationfromrangetorange%28__fromrange_torange_%29.md): Translates a duration through a mapping from two time ranges.
- [CMTimeMapTimeFromRangeToRange](cmtimemaptimefromrangetorange%28__fromrange_torange_%29.md): Translates a time through a mapping from two time ranges.
- [CMTimeRangeCopyAsDictionary](cmtimerangecopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time range.
- [CMTimeRangeCopyDescription](cmtimerangecopydescription%28allocator_range_%29.md): Returns a string with a description of a time range.
- [CMTimeRangeShow](cmtimerangeshow%28__%29.md): Prints a description of the time range to standard error.
