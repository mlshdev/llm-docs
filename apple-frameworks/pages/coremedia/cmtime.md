> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime](https://developer.apple.com/documentation/coremedia/cmtime)

# CMTime (Swift)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that represents time.

## Declaration

```swift
struct CMTime
```

<a id="overview"></a>

## Overview

Core Media represents time as a rational value, with a time value as the numerator and timescale as the denominator. The structure can represent a specific numeric time in the media timeline, and can also represent nonnumeric values like invalid and indefinite times or positive and negative infinity.

## Topics

### Creating a Time

- [init(value:timescale:)](cmtime/init%28value_timescale_%29.md): Creates a time with a value and timescale.
- [init(value:timescale:flags:epoch:)](cmtime/init%28value_timescale_flags_epoch_%29.md): Creates a time with a value, timescale, flags, and epoch.
- [init(seconds:preferredTimescale:)](cmtime/init%28seconds_preferredtimescale_%29.md): Creates a time that represents number of seconds in a preferred timescale.
- [init()](cmtime/init%28%29.md): Creates a time with an invalid value.

### Inspecting a Time

- [seconds](cmtime/seconds.md): A representation of the time in seconds.
- [hasBeenRounded](cmtime/hasbeenrounded.md): A Boolean value that indicates whether the system rounded the time.
- [isValid](cmtime/isvalid.md): A Boolean value that indicates whether a time is valid.
- [isNumeric](cmtime/isnumeric.md): A Boolean value that indicates whether a time is numeric.
- [isIndefinite](cmtime/isindefinite.md): A Boolean value that indicates whether a time is indefinite.
- [isPositiveInfinity](cmtime/ispositiveinfinity.md): A Boolean value that indicates whether a time represents positive infinity.
- [isNegativeInfinity](cmtime/isnegativeinfinity.md): A Boolean value that indicates whether a time represents negative infinity.

### Performing Time Calcualtions

- [+(\_:\_:)](cmtime/+%28____%29.md): Returns a new time that represents the sum of two times.
- [-(\_:\_:)](cmtime/-%28____%29.md): Returns a new time that represents the difference between two times.

### Changing the Timescale

- [convertScale(\_:method:)](cmtime/convertscale%28__method_%29.md): Converts the source time to a new timescale using the specified rounding method.
- [CMTimeRoundingMethod](cmtimeroundingmethod.md): An enumeration of rounding methods to use when performing time calculations.

### Accessing Time Values

- [value](cmtime/value.md): A time value that represents the numerator of a rational time.
- [timescale](cmtime/timescale.md): A timescale that represents the denominator of a rational time.
- [flags](cmtime/flags.md): The flags associated with a time.
- [epoch](cmtime/epoch.md): The epoch of the time.

### Constants

- [zero](cmtime/zero.md): A value that represents time zero.
- [invalid](cmtime/invalid.md): A value that represents an invalid time.
- [indefinite](cmtime/indefinite.md): A value that represents an indefinite time.
- [negativeInfinity](cmtime/negativeinfinity.md): A value that represents negative infinity.
- [positiveInfinity](cmtime/positiveinfinity.md): A value that represents positive infinity.

### Operators

- [!=(\_:\_:)](cmtime/!=%28____%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CVAttachmentValueRepresentable](../corevideo/cvattachmentvaluerepresentable.md)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [CMTimeValue](cmtimevalue.md): An integer time value.
- [CMTimeScale](cmtimescale.md): An integer timescale.
- [CMTimeEpoch](cmtimeepoch.md): An epoch for a time.
- [CMTimeFlags](cmtimeflags.md): A structure that defines the flags for a time value.

# CMTime (Objective-C)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents time.

## Declaration

```objectivec
typedef struct { ... } CMTime;
```

<a id="overview"></a>

## Overview

Core Media represents time as a rational value, with a time value as the numerator and timescale as the denominator. The structure can represent a specific numeric time in the media timeline, and can also represent nonnumeric values like invalid and indefinite times or positive and negative infinity.

## Topics

### Changing the Timescale

- [CMTimeRoundingMethod](cmtimeroundingmethod.md): An enumeration of rounding methods to use when performing time calculations.

### Accessing Time Values

- [value](cmtime/value.md): A time value that represents the numerator of a rational time.
- [timescale](cmtime/timescale.md): A timescale that represents the denominator of a rational time.
- [flags](cmtime/flags.md): The flags associated with a time.
- [epoch](cmtime/epoch.md): The epoch of the time.

### Constants

- [kCMTimeZero](cmtime/zero.md): A value that represents time zero.
- [kCMTimeInvalid](cmtime/invalid.md): A value that represents an invalid time.
- [kCMTimeIndefinite](cmtime/indefinite.md): A value that represents an indefinite time.
- [kCMTimeNegativeInfinity](cmtime/negativeinfinity.md): A value that represents negative infinity.
- [kCMTimePositiveInfinity](cmtime/positiveinfinity.md): A value that represents positive infinity.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Data Types

- [CMTimeValue](cmtimevalue.md): An integer time value.
- [CMTimeScale](cmtimescale.md): An integer timescale.
- [CMTimeEpoch](cmtimeepoch.md): An epoch for a time.
- [CMTimeFlags](cmtimeflags.md): A structure that defines the flags for a time value.
