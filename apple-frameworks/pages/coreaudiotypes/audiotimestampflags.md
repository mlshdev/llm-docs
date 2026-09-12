> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiotimestampflags](https://developer.apple.com/documentation/coreaudiotypes/audiotimestampflags)

# AudioTimeStampFlags (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A structure that represents flags for a timestamp.

## Declaration

```swift
struct AudioTimeStampFlags
```

## Topics

### Initializers

- [init(rawValue:)](audiotimestampflags/init%28rawvalue_%29.md): Creates a flag with an unsigned-integer value.

### Type Properties

- [hostTimeValid](audiotimestampflags/hosttimevalid.md): A flag that indicates that the host time is valid.
- [rateScalarValid](audiotimestampflags/ratescalarvalid.md): A flag that indicates that the rate scalar is valid.
- [sampleHostTimeValid](audiotimestampflags/samplehosttimevalid.md): A flag that indicates that the sample frame time and the host time are valid.
- [sampleTimeValid](audiotimestampflags/sampletimevalid.md): A flag that indicates that the sample frame time is valid.
- [smpteTimeValid](audiotimestampflags/smptetimevalid.md): A flag that indicates that the SMPTE time is valid.
- [wordClockTimeValid](audiotimestampflags/wordclocktimevalid.md): A flag that indicates that the word clock time is valid.

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

### Audio Time

- [AudioTimeStamp](audiotimestamp.md): A structure that represents a timestamp value.

# AudioTimeStampFlags (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that represents flags for a timestamp.

## Declaration

```objectivec
enum AudioTimeStampFlags : UInt32;
```

## Topics

### Constants

- [kAudioTimeStampNothingValid](audiotimestampflags/kaudiotimestampnothingvalid.md): A flag that indicates no fields are valid.
- [kAudioTimeStampHostTimeValid](audiotimestampflags/hosttimevalid.md): A flag that indicates that the host time is valid.
- [kAudioTimeStampRateScalarValid](audiotimestampflags/ratescalarvalid.md): A flag that indicates that the rate scalar is valid.
- [kAudioTimeStampSampleHostTimeValid](audiotimestampflags/samplehosttimevalid.md): A flag that indicates that the sample frame time and the host time are valid.
- [kAudioTimeStampSampleTimeValid](audiotimestampflags/sampletimevalid.md): A flag that indicates that the sample frame time is valid.
- [kAudioTimeStampSMPTETimeValid](audiotimestampflags/smptetimevalid.md): A flag that indicates that the SMPTE time is valid.
- [kAudioTimeStampWordClockTimeValid](audiotimestampflags/wordclocktimevalid.md): A flag that indicates that the word clock time is valid.

## See Also

### Audio Time

- [AudioTimeStamp](audiotimestamp.md): A structure that represents a timestamp value.
