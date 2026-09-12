> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemaptimefromrangetorange(_:fromrange:torange:)](https://developer.apple.com/documentation/coremedia/cmtimemaptimefromrangetorange(_:fromrange:torange:))

# CMTimeMapTimeFromRangeToRange(\_:fromRange:toRange:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Translates a time through a mapping from two time ranges.

## Declaration

```swift
func CMTimeMapTimeFromRangeToRange(_ t: CMTime, fromRange: CMTimeRange, toRange: CMTimeRange) -> CMTime
```

## Parameters

- `t`: The time value to translate.
- `fromRange`: The time range from which the function translates the time range.
- `toRange`: The time range to which the function maps the time value.

<a id="return-value"></a>

## Return Value

A time structure that represents the translated time.

<a id="Discussion"></a>

## Discussion

The start and end time of `fromRange` maps to the start and end time of `toRange` respectively. The function maps other times linearly using the formula:

```objc
result = (t-fromRange.start)*(toRange.duration/fromRange.duration)+toRange.start
```

If either `CMTimeRange` argument is empty, the function returns an invalid `CMTime`. If `t` doesn’t have the same epoch as `fromRange.start`, the function returns an invalid `CMTime`. If both `fromRange` and `toRange` have duration `kCMTimePositiveInfinity`, the function offsets `t` relative to the differences between their starts, but not scaled.

## See Also

### Utility Functions

- [CMTimeClampToRange(\_:range:)](cmtimeclamptorange%28__range_%29.md): Returns the nearest time value inside the time range.
- [CMTimeMapDurationFromRangeToRange(\_:fromRange:toRange:)](cmtimemapdurationfromrangetorange%28__fromrange_torange_%29.md): Translates a duration through a mapping from two time ranges.
- [CMTimeRangeCopyAsDictionary(\_:allocator:)](cmtimerangecopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time range.
- [CMTimeRangeCopyDescription(allocator:range:)](cmtimerangecopydescription%28allocator_range_%29.md): Returns a string with a description of a time range.
- [CMTimeRangeShow(\_:)](cmtimerangeshow%28__%29.md): Prints a description of the time range to standard error.

# CMTimeMapTimeFromRangeToRange (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Translates a time through a mapping from two time ranges.

## Declaration

```objectivec
extern CMTime CMTimeMapTimeFromRangeToRange(CMTime t, CMTimeRange fromRange, CMTimeRange toRange);
```

## Parameters

- `t`: The time value to translate.
- `fromRange`: The time range from which the function translates the time range.
- `toRange`: The time range to which the function maps the time value.

<a id="return-value"></a>

## Return Value

A time structure that represents the translated time.

<a id="Discussion"></a>

## Discussion

The start and end time of `fromRange` maps to the start and end time of `toRange` respectively. The function maps other times linearly using the formula:

```objc
result = (t-fromRange.start)*(toRange.duration/fromRange.duration)+toRange.start
```

If either `CMTimeRange` argument is empty, the function returns an invalid `CMTime`. If `t` doesn’t have the same epoch as `fromRange.start`, the function returns an invalid `CMTime`. If both `fromRange` and `toRange` have duration `kCMTimePositiveInfinity`, the function offsets `t` relative to the differences between their starts, but not scaled.

## See Also

### Utility Functions

- [CMTimeClampToRange](cmtimeclamptorange%28__range_%29.md): Returns the nearest time value inside the time range.
- [CMTimeMapDurationFromRangeToRange](cmtimemapdurationfromrangetorange%28__fromrange_torange_%29.md): Translates a duration through a mapping from two time ranges.
- [CMTimeRangeCopyAsDictionary](cmtimerangecopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time range.
- [CMTimeRangeCopyDescription](cmtimerangecopydescription%28allocator_range_%29.md): Returns a string with a description of a time range.
- [CMTimeRangeShow](cmtimerangeshow%28__%29.md): Prints a description of the time range to standard error.
