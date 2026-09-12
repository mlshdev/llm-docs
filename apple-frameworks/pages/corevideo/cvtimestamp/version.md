> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvtimestamp/version](https://developer.apple.com/documentation/corevideo/cvtimestamp/version)

# version (Swift)

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The current `CVTimeStamp` structure is version 0. Some functions require you to specify a version when passing in a timestamp structure to be filled.

## Declaration

```swift
var version: UInt32
```

## See Also

### Properties

- [flags](flags.md): A bit field containing additional information about the timestamp.
- [hostTime](hosttime.md): The system time measured by the timestamp.
- [rateScalar](ratescalar.md): The current rate of the device as measured by the timestamps, divided by the nominal rate.
- [reserved](reserved.md): Reserved. Do not use.
- [smpteTime](smptetime.md): The SMPTE time representation of the timestamp.
- [videoRefreshPeriod](videorefreshperiod.md)
- [videoTime](videotime.md): The start of a frame (or field for interlaced video).
- [videoTimeScale](videotimescale.md): The scale (in units per second) of the `videoTimeScale` and `videoRefreshPeriod` fields.

# version (Objective-C)

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The current `CVTimeStamp` structure is version 0. Some functions require you to specify a version when passing in a timestamp structure to be filled.

## Declaration

```objectivec
uint32_t version;
```

## See Also

### Properties

- [flags](flags.md): A bit field containing additional information about the timestamp.
- [hostTime](hosttime.md): The system time measured by the timestamp.
- [rateScalar](ratescalar.md): The current rate of the device as measured by the timestamps, divided by the nominal rate.
- [reserved](reserved.md): Reserved. Do not use.
- [smpteTime](smptetime.md): The SMPTE time representation of the timestamp.
- [videoRefreshPeriod](videorefreshperiod.md)
- [videoTime](videotime.md): The start of a frame (or field for interlaced video).
- [videoTimeScale](videotimescale.md): The scale (in units per second) of the `videoTimeScale` and `videoRefreshPeriod` fields.
