> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvtimestamp](https://developer.apple.com/documentation/corevideo/cvtimestamp)

# CVTimeStamp (Swift)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for defining a display timestamp.

## Declaration

```swift
struct CVTimeStamp
```

<a id="overview"></a>

## Overview

This structure is designed to be very similar to the audio timestamp defined in the Core Audio framework except that, in CVTimeStamp, floating-point values are not used to represent the video equivalent of sample times.

## Topics

### Initializers

- [init()](cvtimestamp/init%28%29.md)
- [init(version:videoTimeScale:videoTime:hostTime:rateScalar:videoRefreshPeriod:smpteTime:flags:reserved:)](cvtimestamp/init%28version_videotimescale_videotime_hosttime_ratescalar_videorefreshperiod_smptetime_flags_reserved_%29.md)
- [init(videoTime:hostTime:rateScaler:videoRefreshPeriod:smpteTime:topField:bottomField:)](cvtimestamp/init%28videotime_hosttime_ratescaler_videorefreshperiod_smptetime_topfield_bottomfield_%29.md): Initialize a CVTimeStamp containing specified fields. The bits corrsrponding to non-nil arguments are set in `CVTimeStamp.flags`.

### Properties

- [flags](cvtimestamp/flags.md): A bit field containing additional information about the timestamp.
- [hostTime](cvtimestamp/hosttime.md): The system time measured by the timestamp.
- [rateScalar](cvtimestamp/ratescalar.md): The current rate of the device as measured by the timestamps, divided by the nominal rate.
- [reserved](cvtimestamp/reserved.md): Reserved. Do not use.
- [smpteTime](cvtimestamp/smptetime.md): The SMPTE time representation of the timestamp.
- [version](cvtimestamp/version.md): The current `CVTimeStamp` structure is version 0. Some functions require you to specify a version when passing in a timestamp structure to be filled.
- [videoRefreshPeriod](cvtimestamp/videorefreshperiod.md)
- [videoTime](cvtimestamp/videotime.md): The start of a frame (or field for interlaced video).
- [videoTimeScale](cvtimestamp/videotimescale.md): The scale (in units per second) of the `videoTimeScale` and `videoRefreshPeriod` fields.

### Instance Properties

- [flagOptions](cvtimestamp/flagoptions.md): `CVTimeStampFlags` representation of `CVTimeStamp.flags`

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CVTimeStamp (Objective-C)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for defining a display timestamp.

## Declaration

```objectivec
typedef struct { ... } CVTimeStamp;
```

<a id="overview"></a>

## Overview

This structure is designed to be very similar to the audio timestamp defined in the Core Audio framework except that, in CVTimeStamp, floating-point values are not used to represent the video equivalent of sample times.

## Topics

### Properties

- [flags](cvtimestamp/flags.md): A bit field containing additional information about the timestamp.
- [hostTime](cvtimestamp/hosttime.md): The system time measured by the timestamp.
- [rateScalar](cvtimestamp/ratescalar.md): The current rate of the device as measured by the timestamps, divided by the nominal rate.
- [reserved](cvtimestamp/reserved.md): Reserved. Do not use.
- [smpteTime](cvtimestamp/smptetime.md): The SMPTE time representation of the timestamp.
- [version](cvtimestamp/version.md): The current `CVTimeStamp` structure is version 0. Some functions require you to specify a version when passing in a timestamp structure to be filled.
- [videoRefreshPeriod](cvtimestamp/videorefreshperiod.md)
- [videoTime](cvtimestamp/videotime.md): The start of a frame (or field for interlaced video).
- [videoTimeScale](cvtimestamp/videotimescale.md): The scale (in units per second) of the `videoTimeScale` and `videoRefreshPeriod` fields.
