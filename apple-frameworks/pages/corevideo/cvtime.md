> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvtime](https://developer.apple.com/documentation/corevideo/cvtime)

# CVTime (Swift)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for reporting Core Video time values.

## Declaration

```swift
struct CVTime
```

<a id="overview"></a>

## Overview

This structure is equivalent to the QuickTime `QTTime` structure.

## Topics

### Initializers

- [init()](cvtime/init%28%29.md)
- [init(timeValue:timeScale:flags:)](cvtime/init%28timevalue_timescale_flags_%29.md)
- [init(timeValue:timeScale:)](cvtime/init%28timevalue_timescale_%29.md): Initialize a valid CVTime value. Note: When `timeValue` has nonzero value, `timeScale` must be greater than 0.

### Properties

- [flags](cvtime/flags.md): The flags associated with the `CVTime` value. See [CVTime Values](cvtime-values.md) for possible values. If `kCVTimeIsIndefinite` is set, you should not use any of the other fields in this structure.
- [timeScale](cvtime/timescale.md): The time scale for this value.
- [timeValue](cvtime/timevalue.md): The time value.

### Instance Properties

- [flagOptions](cvtime/flagoptions.md): `CVTimeFlags` representation of `CVTime.flags`

### Type Properties

- [indefinite](cvtime/indefinite.md): CVTime with indefinite value
- [zero](cvtime/zero.md): CVTime with 0 value

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CVTimeStamp](cvtimestamp-api.md): A structure for representing a display timestamp.
- [CVSMPTETime](cvsmptetime.md): A structure for holding an SMPTE time.

# CVTime (Objective-C)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for reporting Core Video time values.

## Declaration

```objectivec
typedef struct { ... } CVTime;
```

<a id="overview"></a>

## Overview

This structure is equivalent to the QuickTime `QTTime` structure.

## Topics

### Properties

- [flags](cvtime/flags.md): The flags associated with the `CVTime` value. See [CVTime Values](cvtime-values.md) for possible values. If `kCVTimeIsIndefinite` is set, you should not use any of the other fields in this structure.
- [timeScale](cvtime/timescale.md): The time scale for this value.
- [timeValue](cvtime/timevalue.md): The time value.

## See Also

### Data Types

- [CVTimeStamp](cvtimestamp-api.md): A structure for representing a display timestamp.
- [CVSMPTETime](cvsmptetime.md): A structure for holding an SMPTE time.
