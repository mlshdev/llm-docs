> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemapdurationfromrangetorange(_:fromrange:torange:)](https://developer.apple.com/documentation/coremedia/cmtimemapdurationfromrangetorange(_:fromrange:torange:))

# CMTimeMapDurationFromRangeToRange(\_:fromRange:toRange:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Translates a duration through a mapping from two time ranges.

## Declaration

```swift
func CMTimeMapDurationFromRangeToRange(_ dur: CMTime, fromRange: CMTimeRange, toRange: CMTimeRange) -> CMTime
```

## Parameters

- `dur`: The duration to translate.
- `fromRange`: The time range from which the function translates the duration.
- `toRange`: The time range to which the function maps the duration.

<a id="return-value"></a>

## Return Value

A time structure that represents the translated duration.

<a id="Discussion"></a>

## Discussion

The function scales the duration in proportion to the ratio between the ranges’ durations:

```objc
result = dur*(toRange.duration/fromRange.duration)
```

If `dur` doesn’t have the epoch `0`, the function returns an invalid `CMTime`.

## See Also

### Utility Functions

- [CMTimeClampToRange(\_:range:)](cmtimeclamptorange%28__range_%29.md): Returns the nearest time value inside the time range.
- [CMTimeMapTimeFromRangeToRange(\_:fromRange:toRange:)](cmtimemaptimefromrangetorange%28__fromrange_torange_%29.md): Translates a time through a mapping from two time ranges.
- [CMTimeRangeCopyAsDictionary(\_:allocator:)](cmtimerangecopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time range.
- [CMTimeRangeCopyDescription(allocator:range:)](cmtimerangecopydescription%28allocator_range_%29.md): Returns a string with a description of a time range.
- [CMTimeRangeShow(\_:)](cmtimerangeshow%28__%29.md): Prints a description of the time range to standard error.

# CMTimeMapDurationFromRangeToRange (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Translates a duration through a mapping from two time ranges.

## Declaration

```objectivec
extern CMTime CMTimeMapDurationFromRangeToRange(CMTime dur, CMTimeRange fromRange, CMTimeRange toRange);
```

## Parameters

- `dur`: The duration to translate.
- `fromRange`: The time range from which the function translates the duration.
- `toRange`: The time range to which the function maps the duration.

<a id="return-value"></a>

## Return Value

A time structure that represents the translated duration.

<a id="Discussion"></a>

## Discussion

The function scales the duration in proportion to the ratio between the ranges’ durations:

```objc
result = dur*(toRange.duration/fromRange.duration)
```

If `dur` doesn’t have the epoch `0`, the function returns an invalid `CMTime`.

## See Also

### Utility Functions

- [CMTimeClampToRange](cmtimeclamptorange%28__range_%29.md): Returns the nearest time value inside the time range.
- [CMTimeMapTimeFromRangeToRange](cmtimemaptimefromrangetorange%28__fromrange_torange_%29.md): Translates a time through a mapping from two time ranges.
- [CMTimeRangeCopyAsDictionary](cmtimerangecopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time range.
- [CMTimeRangeCopyDescription](cmtimerangecopydescription%28allocator_range_%29.md): Returns a string with a description of a time range.
- [CMTimeRangeShow](cmtimerangeshow%28__%29.md): Prints a description of the time range to standard error.
