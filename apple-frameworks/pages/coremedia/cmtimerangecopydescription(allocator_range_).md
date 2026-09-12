> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerangecopydescription(allocator:range:)](https://developer.apple.com/documentation/coremedia/cmtimerangecopydescription(allocator:range:))

# CMTimeRangeCopyDescription(allocator:range:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a string with a description of a time range.

## Declaration

```swift
func CMTimeRangeCopyDescription(allocator: CFAllocator?, range: CMTimeRange) -> CFString?
```

## Parameters

- `allocator`: The allocator the function uses when allocating memory for the description.
- `range`: The time range to describe.

<a id="return-value"></a>

## Return Value

A string description.

<a id="Discussion"></a>

## Discussion

You use this from within `CFShow` on an object that contains `CMTimeRange` fields. It is also useful from other client debugging code.  The caller owns the `CFString` this function returns and is responsible for releasing it. Pass `kCFAllocatorDefault` to use the default allocator.

## See Also

### Utility Functions

- [CMTimeClampToRange(\_:range:)](cmtimeclamptorange%28__range_%29.md): Returns the nearest time value inside the time range.
- [CMTimeMapDurationFromRangeToRange(\_:fromRange:toRange:)](cmtimemapdurationfromrangetorange%28__fromrange_torange_%29.md): Translates a duration through a mapping from two time ranges.
- [CMTimeMapTimeFromRangeToRange(\_:fromRange:toRange:)](cmtimemaptimefromrangetorange%28__fromrange_torange_%29.md): Translates a time through a mapping from two time ranges.
- [CMTimeRangeCopyAsDictionary(\_:allocator:)](cmtimerangecopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time range.
- [CMTimeRangeShow(\_:)](cmtimerangeshow%28__%29.md): Prints a description of the time range to standard error.

# CMTimeRangeCopyDescription (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a string with a description of a time range.

## Declaration

```objectivec
extern CFStringRefCMTimeRangeCopyDescription(CFAllocatorRef allocator, CMTimeRange range);
```

## Parameters

- `allocator`: The allocator the function uses when allocating memory for the description.
- `range`: The time range to describe.

<a id="return-value"></a>

## Return Value

A string description.

<a id="Discussion"></a>

## Discussion

You use this from within `CFShow` on an object that contains `CMTimeRange` fields. It is also useful from other client debugging code.  The caller owns the `CFString` this function returns and is responsible for releasing it. Pass `kCFAllocatorDefault` to use the default allocator.

## See Also

### Utility Functions

- [CMTimeClampToRange](cmtimeclamptorange%28__range_%29.md): Returns the nearest time value inside the time range.
- [CMTimeMapDurationFromRangeToRange](cmtimemapdurationfromrangetorange%28__fromrange_torange_%29.md): Translates a duration through a mapping from two time ranges.
- [CMTimeMapTimeFromRangeToRange](cmtimemaptimefromrangetorange%28__fromrange_torange_%29.md): Translates a time through a mapping from two time ranges.
- [CMTimeRangeCopyAsDictionary](cmtimerangecopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time range.
- [CMTimeRangeShow](cmtimerangeshow%28__%29.md): Prints a description of the time range to standard error.
