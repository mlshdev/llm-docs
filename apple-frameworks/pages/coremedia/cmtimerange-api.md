> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerange-api](https://developer.apple.com/documentation/coremedia/cmtimerange-api)

# CMTimeRange (Swift)

**Framework:** Core Media  
**Kind:** API Collection

A structure that represents a range of time.

<a id="overview"></a>

## Overview

This document describes the API for creating and manipulating `CMTimeRange` structures.

The system represents a `CMTimeRange` as a non-opaque, mutable structure by using two [CMTime](cmtime.md) values that specify the start time and duration of the range. A time range doesn’t include the end time because you calculate it by adding the duration to the start time.

```objc
// An expression that evaluates to false.
CMTimeRangeContainsTime(range, CMTimeRangeGetEnd(range))
```

Convert `CMTimeRanges` to and from `CFDictionaries` (see [CFDictionary](../corefoundation/cfdictionary.md)) using [CMTimeRangeCopyAsDictionary(\_:allocator:)](cmtimerangecopyasdictionary%28__allocator_%29.md) and [CMTimeRangeMakeFromDictionary(\_:)](cmtimerangemakefromdictionary%28__%29.md) to use in annotations and various Core Foundation containers.

The epoch in a `CMTime` that represents a duration must be `0`, and the value must be nonnegative. The epoch in a `CMTime` that represents a timestamp can be nonzero, but functions (such as [CMTimeRangeGetUnion(\_:otherRange:)](cmtimerangegetunion%28__otherrange_%29.md)) can only perform operations on ranges whose start fields have the same epoch. `CMTimeRanges` can’t span different epochs.

For information about additional functions for managing dates and times, see [Time Utilities](../corefoundation/time-utilities.md).

## Topics

### Creating Time Ranges

- [CMTimeRangeMake(start:duration:)](cmtimerangemake%28start_duration_%29.md): Creates a valid time range with a start time and duration.
- [CMTimeRangeMakeFromDictionary(\_:)](cmtimerangemakefromdictionary%28__%29.md): Creates a time range from a dictionary representation of its fields.
- [CMTimeRangeFromTimeToTime(start:end:)](cmtimerangefromtimetotime%28start_end_%29.md): Creates a valid time range from a start and end time.

### Comparing Time Ranges

- [CMTimeRangeEqual(\_:\_:)](cmtimerangeequal%28____%29.md): Returns a Boolean value that indicates whether two time ranges are equal.
- [CMTimeRangeContainsTime(\_:time:)](cmtimerangecontainstime%28__time_%29.md): Returns a Boolean value that indicates whether a time range contains a time.
- [CMTimeRangeContainsTimeRange(\_:otherRange:)](cmtimerangecontainstimerange%28__otherrange_%29.md): Returns a Boolean value that indicates whether a time range contains another time range.

### Inspecting Time Ranges

- [CMTIMERANGE_IS_EMPTY(\_:)](cmtimerange_is_empty%28__%29.md): Returns a Boolean value that indicates whether a time range has a duration of zero.
- [CMTIMERANGE_IS_INDEFINITE(\_:)](cmtimerange_is_indefinite%28__%29.md): Returns a Boolean value that indicates whether a time range is indefinite.
- [CMTIMERANGE_IS_INVALID(\_:)](cmtimerange_is_invalid%28__%29.md): Returns a Boolean value that indicates whether a time range is invalid.
- [CMTIMERANGE_IS_VALID(\_:)](cmtimerange_is_valid%28__%29.md): Returns a Boolean value that indicates whether a time range is valid.
- [CMTimeRangeGetEnd(\_:)](cmtimerangegetend%28__%29.md): Returns a time value that represents the end of a time range.
- [CMTimeRangeGetIntersection(\_:otherRange:)](cmtimerangegetintersection%28__otherrange_%29.md): Returns a new time range with the time elements that are common between the input.
- [CMTimeRangeGetUnion(\_:otherRange:)](cmtimerangegetunion%28__otherrange_%29.md): Returns a new time range with the time elements of the input.

### Utility Functions

- [CMTimeClampToRange(\_:range:)](cmtimeclamptorange%28__range_%29.md): Returns the nearest time value inside the time range.
- [CMTimeMapDurationFromRangeToRange(\_:fromRange:toRange:)](cmtimemapdurationfromrangetorange%28__fromrange_torange_%29.md): Translates a duration through a mapping from two time ranges.
- [CMTimeMapTimeFromRangeToRange(\_:fromRange:toRange:)](cmtimemaptimefromrangetorange%28__fromrange_torange_%29.md): Translates a time through a mapping from two time ranges.
- [CMTimeRangeCopyAsDictionary(\_:allocator:)](cmtimerangecopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time range.
- [CMTimeRangeCopyDescription(allocator:range:)](cmtimerangecopydescription%28allocator_range_%29.md): Returns a string with a description of a time range.
- [CMTimeRangeShow(\_:)](cmtimerangeshow%28__%29.md): Prints a description of the time range to standard error.

### Data Types

- [CMTimeRange](cmtimerange.md): A structure that represents a time range.

### Constants

- [Dictionary Keys](cmtimerange-dictionary-keys.md): Keys to use when working with dictionary representations of a time range.
- [Pre-Specified Time Ranges](pre-specified-time-ranges.md): Constants that specify zero and invalid time ranges.

## See Also

### Time Representation

- [CMTime](cmtime-api.md): A structure that represents time.
- [CMTimeMapping](cmtimemapping-api.md): A structure that maps a segment of a source time range to a target time range.

# CMTimeRange (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

A structure that represents a range of time.

<a id="overview"></a>

## Overview

This document describes the API for creating and manipulating `CMTimeRange` structures.

The system represents a `CMTimeRange` as a non-opaque, mutable structure by using two [CMTime](cmtime.md) values that specify the start time and duration of the range. A time range doesn’t include the end time because you calculate it by adding the duration to the start time.

```objc
// An expression that evaluates to false.
CMTimeRangeContainsTime(range, CMTimeRangeGetEnd(range))
```

Convert `CMTimeRanges` to and from `CFDictionaries` (see [CFDictionaryRef](../corefoundation/cfdictionary.md)) using [CMTimeRangeCopyAsDictionary](cmtimerangecopyasdictionary%28__allocator_%29.md) and [CMTimeRangeMakeFromDictionary](cmtimerangemakefromdictionary%28__%29.md) to use in annotations and various Core Foundation containers.

The epoch in a `CMTime` that represents a duration must be `0`, and the value must be nonnegative. The epoch in a `CMTime` that represents a timestamp can be nonzero, but functions (such as [CMTimeRangeGetUnion](cmtimerangegetunion%28__otherrange_%29.md)) can only perform operations on ranges whose start fields have the same epoch. `CMTimeRanges` can’t span different epochs.

For information about additional functions for managing dates and times, see [Time Utilities](../corefoundation/time-utilities.md).

## Topics

### Creating Time Ranges

- [CMTimeRangeMake](cmtimerangemake%28start_duration_%29.md): Creates a valid time range with a start time and duration.
- [CMTimeRangeMakeFromDictionary](cmtimerangemakefromdictionary%28__%29.md): Creates a time range from a dictionary representation of its fields.
- [CMTimeRangeFromTimeToTime](cmtimerangefromtimetotime%28start_end_%29.md): Creates a valid time range from a start and end time.

### Comparing Time Ranges

- [CMTimeRangeEqual](cmtimerangeequal%28____%29.md): Returns a Boolean value that indicates whether two time ranges are equal.
- [CMTimeRangeContainsTime](cmtimerangecontainstime%28__time_%29.md): Returns a Boolean value that indicates whether a time range contains a time.
- [CMTimeRangeContainsTimeRange](cmtimerangecontainstimerange%28__otherrange_%29.md): Returns a Boolean value that indicates whether a time range contains another time range.

### Inspecting Time Ranges

- [CMTIMERANGE_IS_EMPTY](cmtimerange_is_empty.md): Returns a Boolean value that indicates whether a time range has a duration of zero.
- [CMTIMERANGE_IS_INDEFINITE](cmtimerange_is_indefinite.md): Returns a Boolean value that indicates whether a time range is indefinite.
- [CMTIMERANGE_IS_INVALID](cmtimerange_is_invalid.md): Returns a Boolean value that indicates whether a time range is invalid.
- [CMTIMERANGE_IS_VALID](cmtimerange_is_valid.md): Returns a Boolean value that indicates whether a time range is valid.
- [CMTimeRangeGetEnd](cmtimerangegetend%28__%29.md): Returns a time value that represents the end of a time range.
- [CMTimeRangeGetIntersection](cmtimerangegetintersection%28__otherrange_%29.md): Returns a new time range with the time elements that are common between the input.
- [CMTimeRangeGetUnion](cmtimerangegetunion%28__otherrange_%29.md): Returns a new time range with the time elements of the input.

### Utility Functions

- [CMTimeClampToRange](cmtimeclamptorange%28__range_%29.md): Returns the nearest time value inside the time range.
- [CMTimeMapDurationFromRangeToRange](cmtimemapdurationfromrangetorange%28__fromrange_torange_%29.md): Translates a duration through a mapping from two time ranges.
- [CMTimeMapTimeFromRangeToRange](cmtimemaptimefromrangetorange%28__fromrange_torange_%29.md): Translates a time through a mapping from two time ranges.
- [CMTimeRangeCopyAsDictionary](cmtimerangecopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time range.
- [CMTimeRangeCopyDescription](cmtimerangecopydescription%28allocator_range_%29.md): Returns a string with a description of a time range.
- [CMTimeRangeShow](cmtimerangeshow%28__%29.md): Prints a description of the time range to standard error.

### Data Types

- [CMTimeRange](cmtimerange.md): A structure that represents a time range.

### Constants

- [Dictionary Keys](cmtimerange-dictionary-keys.md): Keys to use when working with dictionary representations of a time range.
- [Pre-Specified Time Ranges](pre-specified-time-ranges.md): Constants that specify zero and invalid time ranges.

## See Also

### Time Representation

- [CMTime](cmtime-api.md): A structure that represents time.
- [CMTimeMapping](cmtimemapping-api.md): A structure that maps a segment of a source time range to a target time range.
