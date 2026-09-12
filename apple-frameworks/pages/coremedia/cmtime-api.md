> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime-api](https://developer.apple.com/documentation/coremedia/cmtime-api)

# CMTime (Swift)

**Framework:** Core Media  
**Kind:** API Collection

A structure that represents time.

<a id="overview"></a>

## Overview

Core Media represents time as a rational value, with a time value as the numerator and timescale as the denominator. The structure can represent a specific numeric time in the media timeline, and can also represent nonnumeric values like invalid and indefinite times or positive and negative infinity.

## Topics

### Creating a Time

- [CMTimeMake(value:timescale:)](cmtimemake%28value_timescale_%29.md): Creates a time with a value and timescale.
- [CMTimeMakeWithEpoch(value:timescale:epoch:)](cmtimemakewithepoch%28value_timescale_epoch_%29.md): Creates a time with a value, timescale, and epoch.
- [CMTimeMakeWithSeconds(\_:preferredTimescale:)](cmtimemakewithseconds%28__preferredtimescale_%29.md): Creates a time that represents a number of seconds in a preferred timescale.
- [CMTimeMakeFromDictionary(\_:)](cmtimemakefromdictionary%28__%29.md): Creates a time from a dictionary representation of its fields.

### Inspecting a Time

- [CMTimeGetSeconds(\_:)](cmtimegetseconds%28__%29.md): Returns a representation of the time in seconds.
- [CMTimeAbsoluteValue(\_:)](cmtimeabsolutevalue%28__%29.md): Returns the absolute value of a time.
- [CMTIME_IS_VALID(\_:)](cmtime_is_valid%28__%29.md): Returns a Boolean value that indicates whether a given time is valid.
- [CMTIME_IS_INVALID(\_:)](cmtime_is_invalid%28__%29.md): Returns a Boolean value that indicates whether a given time is invalid.
- [CMTIME_IS_POSITIVEINFINITY(\_:)](cmtime_is_positiveinfinity%28__%29.md): Returns a Boolean value that indicates whether a given time is positive infinity.
- [CMTIME_IS_NEGATIVEINFINITY(\_:)](cmtime_is_negativeinfinity%28__%29.md): Returns a Boolean value that indicates whether a given time is negative infinity.
- [CMTIME_IS_INDEFINITE(\_:)](cmtime_is_indefinite%28__%29.md): Returns a Boolean value that indicates whether a given time is indefinite.
- [CMTIME_IS_NUMERIC(\_:)](cmtime_is_numeric%28__%29.md): Returns a Boolean value that indicates whether a given time is numeric.
- [CMTIME_HAS_BEEN_ROUNDED(\_:)](cmtime_has_been_rounded%28__%29.md): Returns a Boolean value that indicates whether the system rounded the time value.

### Performing Time Calculations

- [CMTimeAdd(\_:\_:)](cmtimeadd%28____%29.md): Returns the sum of two times.
- [CMTimeSubtract(\_:\_:)](cmtimesubtract%28____%29.md): Returns the difference between two times.
- [CMTimeMultiply(\_:multiplier:)](cmtimemultiply%28__multiplier_%29.md): Returns the result of multiplying a time by an integer multiplier.
- [CMTimeMultiplyByFloat64(\_:multiplier:)](cmtimemultiplybyfloat64%28__multiplier_%29.md): Returns the result of multiplying a time by a floating-point multiplier.
- [CMTimeMultiplyByRatio(\_:multiplier:divisor:)](cmtimemultiplybyratio%28__multiplier_divisor_%29.md): Returns the result of multiplying a time by an integer multiplier, and then dividing the result by the divisor.

### Changing the Timescale

- [CMTimeConvertScale(\_:timescale:method:)](cmtimeconvertscale%28__timescale_method_%29.md): Converts the source time to a new timescale using the specified rounding method.
- [CMTimeRoundingMethod](cmtimeroundingmethod.md): An enumeration of rounding methods to use when performing time calculations.

### Comparing Times

- [CMTimeCompare(\_:\_:)](cmtimecompare%28____%29.md): Returns the numerical relationship of two times.
- [CMTimeMaximum(\_:\_:)](cmtimemaximum%28____%29.md): Returns the greater of two time values.
- [CMTimeMinimum(\_:\_:)](cmtimeminimum%28____%29.md): Returns the lesser of two time values.

### Representing Times

- [CMTimeShow(\_:)](cmtimeshow%28__%29.md): Prints a description of the time to the console.
- [CMTimeCopyDescription(allocator:time:)](cmtimecopydescription%28allocator_time_%29.md): Creates a string representation of the time.
- [CMTimeCopyAsDictionary(\_:allocator:)](cmtimecopyasdictionary%28__allocator_%29.md): Creates a dictionary representation of the time.

### Data Types

- [CMTime](cmtime.md): A structure that represents time.
- [CMTimeValue](cmtimevalue.md): An integer time value.
- [CMTimeScale](cmtimescale.md): An integer timescale.
- [CMTimeEpoch](cmtimeepoch.md): An epoch for a time.
- [CMTimeFlags](cmtimeflags.md): A structure that defines the flags for a time value.

### Constants

- [Time](cmtime-time.md): Defined time values.
- [Timescale](cmtime-timescale.md): Defined timescale values.
- [Dictionary Keys](cmtime-dictionary-keys.md): Keys to use when working with dictionary representations of time.

## See Also

### Time Representation

- [CMTimeRange](cmtimerange-api.md): A structure that represents a range of time.
- [CMTimeMapping](cmtimemapping-api.md): A structure that maps a segment of a source time range to a target time range.

# CMTime (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

A structure that represents time.

<a id="overview"></a>

## Overview

Core Media represents time as a rational value, with a time value as the numerator and timescale as the denominator. The structure can represent a specific numeric time in the media timeline, and can also represent nonnumeric values like invalid and indefinite times or positive and negative infinity.

## Topics

### Creating a Time

- [CMTimeMake](cmtimemake%28value_timescale_%29.md): Creates a time with a value and timescale.
- [CMTimeMakeWithEpoch](cmtimemakewithepoch%28value_timescale_epoch_%29.md): Creates a time with a value, timescale, and epoch.
- [CMTimeMakeWithSeconds](cmtimemakewithseconds%28__preferredtimescale_%29.md): Creates a time that represents a number of seconds in a preferred timescale.
- [CMTimeMakeFromDictionary](cmtimemakefromdictionary%28__%29.md): Creates a time from a dictionary representation of its fields.

### Inspecting a Time

- [CMTimeGetSeconds](cmtimegetseconds%28__%29.md): Returns a representation of the time in seconds.
- [CMTimeAbsoluteValue](cmtimeabsolutevalue%28__%29.md): Returns the absolute value of a time.
- [CMTIME_IS_VALID](cmtime_is_valid.md): Returns a Boolean value that indicates whether a time is valid.
- [CMTIME_IS_INVALID](cmtime_is_invalid.md): Returns a Boolean value that indicates whether a time is invalid.
- [CMTIME_IS_POSITIVE_INFINITY](cmtime_is_positive_infinity.md): Returns a Boolean value that indicates whether a time is positive infinity.
- [CMTIME_IS_NEGATIVE_INFINITY](cmtime_is_negative_infinity.md): Returns a Boolean value that indicates whether a time is negative infinity.
- [CMTIME_IS_INDEFINITE](cmtime_is_indefinite.md): Returns a Boolean value that indicates whether a time is indefinite.
- [CMTIME_IS_NUMERIC](cmtime_is_numeric.md): Returns a Boolean value that indicates whether a time is numeric.
- [CMTIME_HAS_BEEN_ROUNDED](cmtime_has_been_rounded.md): Returns a Boolean value that indicates whether the system rounded the time.

### Performing Time Calculations

- [CMTimeAdd](cmtimeadd%28____%29.md): Returns the sum of two times.
- [CMTimeSubtract](cmtimesubtract%28____%29.md): Returns the difference between two times.
- [CMTimeMultiply](cmtimemultiply%28__multiplier_%29.md): Returns the result of multiplying a time by an integer multiplier.
- [CMTimeMultiplyByFloat64](cmtimemultiplybyfloat64%28__multiplier_%29.md): Returns the result of multiplying a time by a floating-point multiplier.
- [CMTimeMultiplyByRatio](cmtimemultiplybyratio%28__multiplier_divisor_%29.md): Returns the result of multiplying a time by an integer multiplier, and then dividing the result by the divisor.

### Changing the Timescale

- [CMTimeConvertScale](cmtimeconvertscale%28__timescale_method_%29.md): Converts the source time to a new timescale using the specified rounding method.
- [CMTimeRoundingMethod](cmtimeroundingmethod.md): An enumeration of rounding methods to use when performing time calculations.

### Comparing Times

- [CMTIME_COMPARE_INLINE](cmtime_compare_inline.md): Returns a Boolean value that indicates whether the specified comparison is true.
- [CMTimeCompare](cmtimecompare%28____%29.md): Returns the numerical relationship of two times.
- [CMTimeMaximum](cmtimemaximum%28____%29.md): Returns the greater of two time values.
- [CMTimeMinimum](cmtimeminimum%28____%29.md): Returns the lesser of two time values.

### Representing Times

- [CMTimeShow](cmtimeshow%28__%29.md): Prints a description of the time to the console.
- [CMTimeCopyDescription](cmtimecopydescription%28allocator_time_%29.md): Creates a string representation of the time.
- [CMTimeCopyAsDictionary](cmtimecopyasdictionary%28__allocator_%29.md): Creates a dictionary representation of the time.

### Data Types

- [CMTime](cmtime.md): A structure that represents time.
- [CMTimeValue](cmtimevalue.md): An integer time value.
- [CMTimeScale](cmtimescale.md): An integer timescale.
- [CMTimeEpoch](cmtimeepoch.md): An epoch for a time.
- [CMTimeFlags](cmtimeflags.md): A structure that defines the flags for a time value.

### Constants

- [Time](cmtime-time.md): Defined time values.
- [Timescale](cmtime-timescale.md): Defined timescale values.
- [Dictionary Keys](cmtime-dictionary-keys.md): Keys to use when working with dictionary representations of time.

## See Also

### Time Representation

- [CMTimeRange](cmtimerange-api.md): A structure that represents a range of time.
- [CMTimeMapping](cmtimemapping-api.md): A structure that maps a segment of a source time range to a target time range.
