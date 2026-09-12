> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvtimestamp/hosttime](https://developer.apple.com/documentation/corevideo/cvtimestamp/hosttime)

# hostTime (Swift)

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The system time measured by the timestamp.

## Declaration

```swift
var hostTime: UInt64
```

## See Also

### Properties

- [flags](flags.md): A bit field containing additional information about the timestamp.
- [rateScalar](ratescalar.md): The current rate of the device as measured by the timestamps, divided by the nominal rate.
- [reserved](reserved.md): Reserved. Do not use.
- [smpteTime](smptetime.md): The SMPTE time representation of the timestamp.
- [version](version.md): The current `CVTimeStamp` structure is version 0. Some functions require you to specify a version when passing in a timestamp structure to be filled.
- [videoRefreshPeriod](videorefreshperiod.md)
- [videoTime](videotime.md): The start of a frame (or field for interlaced video).
- [videoTimeScale](videotimescale.md): The scale (in units per second) of the `videoTimeScale` and `videoRefreshPeriod` fields.

# hostTime (Objective-C)

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The system time measured by the timestamp.

## Declaration

```objectivec
uint64_t hostTime;
```

## See Also

### Properties

- [flags](flags.md): A bit field containing additional information about the timestamp.
- [rateScalar](ratescalar.md): The current rate of the device as measured by the timestamps, divided by the nominal rate.
- [reserved](reserved.md): Reserved. Do not use.
- [smpteTime](smptetime.md): The SMPTE time representation of the timestamp.
- [version](version.md): The current `CVTimeStamp` structure is version 0. Some functions require you to specify a version when passing in a timestamp structure to be filled.
- [videoRefreshPeriod](videorefreshperiod.md)
- [videoTime](videotime.md): The start of a frame (or field for interlaced video).
- [videoTimeScale](videotimescale.md): The scale (in units per second) of the `videoTimeScale` and `videoRefreshPeriod` fields.
