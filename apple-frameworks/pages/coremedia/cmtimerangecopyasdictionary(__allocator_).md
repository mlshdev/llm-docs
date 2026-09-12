> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerangecopyasdictionary(_:allocator:)](https://developer.apple.com/documentation/coremedia/cmtimerangecopyasdictionary(_:allocator:))

# CMTimeRangeCopyAsDictionary(\_:allocator:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a dictionary representation of a time range.

## Declaration

```swift
func CMTimeRangeCopyAsDictionary(_ range: CMTimeRange, allocator: CFAllocator?) -> CFDictionary?
```

## Parameters

- `range`: The time range from which to create a dictionary.
- `allocator`: The allocator with which to create a dictionary.

<a id="return-value"></a>

## Return Value

A dictionary that represents the time range.

<a id="Discussion"></a>

## Discussion

This is useful when putting `CMTimeRanges` in Core Foundation container types. Pass `kCFAllocatorDefault` to use the default allocator.

For keys in the dictionary, see [Dictionary Keys](cmtimerange-dictionary-keys.md).

## See Also

### Utility Functions

- [CMTimeClampToRange(\_:range:)](cmtimeclamptorange%28__range_%29.md): Returns the nearest time value inside the time range.
- [CMTimeMapDurationFromRangeToRange(\_:fromRange:toRange:)](cmtimemapdurationfromrangetorange%28__fromrange_torange_%29.md): Translates a duration through a mapping from two time ranges.
- [CMTimeMapTimeFromRangeToRange(\_:fromRange:toRange:)](cmtimemaptimefromrangetorange%28__fromrange_torange_%29.md): Translates a time through a mapping from two time ranges.
- [CMTimeRangeCopyDescription(allocator:range:)](cmtimerangecopydescription%28allocator_range_%29.md): Returns a string with a description of a time range.
- [CMTimeRangeShow(\_:)](cmtimerangeshow%28__%29.md): Prints a description of the time range to standard error.

# CMTimeRangeCopyAsDictionary (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a dictionary representation of a time range.

## Declaration

```objectivec
extern CFDictionaryRefCMTimeRangeCopyAsDictionary(CMTimeRange range, CFAllocatorRef allocator);
```

## Parameters

- `range`: The time range from which to create a dictionary.
- `allocator`: The allocator with which to create a dictionary.

<a id="return-value"></a>

## Return Value

A dictionary that represents the time range.

<a id="Discussion"></a>

## Discussion

This is useful when putting `CMTimeRanges` in Core Foundation container types. Pass `kCFAllocatorDefault` to use the default allocator.

For keys in the dictionary, see [Dictionary Keys](cmtimerange-dictionary-keys.md).

## See Also

### Utility Functions

- [CMTimeClampToRange](cmtimeclamptorange%28__range_%29.md): Returns the nearest time value inside the time range.
- [CMTimeMapDurationFromRangeToRange](cmtimemapdurationfromrangetorange%28__fromrange_torange_%29.md): Translates a duration through a mapping from two time ranges.
- [CMTimeMapTimeFromRangeToRange](cmtimemaptimefromrangetorange%28__fromrange_torange_%29.md): Translates a time through a mapping from two time ranges.
- [CMTimeRangeCopyDescription](cmtimerangecopydescription%28allocator_range_%29.md): Returns a string with a description of a time range.
- [CMTimeRangeShow](cmtimerangeshow%28__%29.md): Prints a description of the time range to standard error.
