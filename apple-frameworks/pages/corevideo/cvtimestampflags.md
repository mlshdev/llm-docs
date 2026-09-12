> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvtimestampflags](https://developer.apple.com/documentation/corevideo/cvtimestampflags)

# CVTimeStampFlags (Swift)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```swift
struct CVTimeStampFlags
```

## Topics

### Constants

- [bottomField](cvtimestampflags/bottomfield.md): The timestamp represents the bottom lines of an interlaced image.
- [hostTimeValid](cvtimestampflags/hosttimevalid.md): The value in the host time field is valid.
- [isInterlaced](cvtimestampflags/isinterlaced.md): A convenience constant indicating that the timestamp is for an interlaced image.
- [rateScalarValid](cvtimestampflags/ratescalarvalid.md): The value in the rate scalar field is valid.
- [smpteTimeValid](cvtimestampflags/smptetimevalid.md): The value in the SMPTE time field is valid.
- [topField](cvtimestampflags/topfield.md): The timestamp represents the top lines of an interlaced image.
- [videoHostTimeValid](cvtimestampflags/videohosttimevalid.md): A convenience constant indicating that both the video time and host time fields are valid.
- [videoRefreshPeriodValid](cvtimestampflags/videorefreshperiodvalid.md): The value in the video refresh period field is valid.
- [videoTimeValid](cvtimestampflags/videotimevalid.md): The value in the video time field is valid.

### Initializers

- [init(rawValue:)](cvtimestampflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Enumerations

- [CVSMPTETimeType](cvsmptetimetype.md)
- [CVSMPTETimeFlags](cvsmptetimeflags.md)
- [CVTimeFlags](cvtimeflags.md)

# CVTimeStampFlags (Objective-C)

**Framework:** Core Video  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
enum CVTimeStampFlags : uint64_t;
```

## Topics

### Constants

- [kCVTimeStampBottomField](cvtimestampflags/bottomfield.md): The timestamp represents the bottom lines of an interlaced image.
- [kCVTimeStampHostTimeValid](cvtimestampflags/hosttimevalid.md): The value in the host time field is valid.
- [kCVTimeStampIsInterlaced](cvtimestampflags/isinterlaced.md): A convenience constant indicating that the timestamp is for an interlaced image.
- [kCVTimeStampRateScalarValid](cvtimestampflags/ratescalarvalid.md): The value in the rate scalar field is valid.
- [kCVTimeStampSMPTETimeValid](cvtimestampflags/smptetimevalid.md): The value in the SMPTE time field is valid.
- [kCVTimeStampTopField](cvtimestampflags/topfield.md): The timestamp represents the top lines of an interlaced image.
- [kCVTimeStampVideoHostTimeValid](cvtimestampflags/videohosttimevalid.md): A convenience constant indicating that both the video time and host time fields are valid.
- [kCVTimeStampVideoRefreshPeriodValid](cvtimestampflags/videorefreshperiodvalid.md): The value in the video refresh period field is valid.
- [kCVTimeStampVideoTimeValid](cvtimestampflags/videotimevalid.md): The value in the video time field is valid.

## See Also

### Enumerations

- [CVSMPTETimeType](cvsmptetimetype.md)
- [CVSMPTETimeFlags](cvsmptetimeflags.md)
- [CVTimeFlags](cvtimeflags.md)
