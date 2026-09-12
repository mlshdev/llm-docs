> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvtimestamp/videorefreshperiod](https://developer.apple.com/documentation/corevideo/cvtimestamp/videorefreshperiod)

# videoRefreshPeriod (Swift)

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```swift
var videoRefreshPeriod: Int64
```

## See Also

### Properties

- [flags](flags.md): A bit field containing additional information about the timestamp.
- [hostTime](hosttime.md): The system time measured by the timestamp.
- [rateScalar](ratescalar.md): The current rate of the device as measured by the timestamps, divided by the nominal rate.
- [reserved](reserved.md): Reserved. Do not use.
- [smpteTime](smptetime.md): The SMPTE time representation of the timestamp.
- [version](version.md): The current `CVTimeStamp` structure is version 0. Some functions require you to specify a version when passing in a timestamp structure to be filled.
- [videoTime](videotime.md): The start of a frame (or field for interlaced video).
- [videoTimeScale](videotimescale.md): The scale (in units per second) of the `videoTimeScale` and `videoRefreshPeriod` fields.

# videoRefreshPeriod (Objective-C)

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
int64_t videoRefreshPeriod;
```

## See Also

### Properties

- [flags](flags.md): A bit field containing additional information about the timestamp.
- [hostTime](hosttime.md): The system time measured by the timestamp.
- [rateScalar](ratescalar.md): The current rate of the device as measured by the timestamps, divided by the nominal rate.
- [reserved](reserved.md): Reserved. Do not use.
- [smpteTime](smptetime.md): The SMPTE time representation of the timestamp.
- [version](version.md): The current `CVTimeStamp` structure is version 0. Some functions require you to specify a version when passing in a timestamp structure to be filled.
- [videoTime](videotime.md): The start of a frame (or field for interlaced video).
- [videoTimeScale](videotimescale.md): The scale (in units per second) of the `videoTimeScale` and `videoRefreshPeriod` fields.
