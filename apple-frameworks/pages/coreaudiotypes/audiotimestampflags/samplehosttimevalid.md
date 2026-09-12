> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiotimestampflags/samplehosttimevalid](https://developer.apple.com/documentation/coreaudiotypes/audiotimestampflags/samplehosttimevalid)

# sampleHostTimeValid (Swift)

**Framework:** Core Audio Types  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A flag that indicates that the sample frame time and the host time are valid.

## Declaration

```swift
static var sampleHostTimeValid: AudioTimeStampFlags { get }
```

## See Also

### Type Properties

- [hostTimeValid](hosttimevalid.md): A flag that indicates that the host time is valid.
- [rateScalarValid](ratescalarvalid.md): A flag that indicates that the rate scalar is valid.
- [sampleTimeValid](sampletimevalid.md): A flag that indicates that the sample frame time is valid.
- [smpteTimeValid](smptetimevalid.md): A flag that indicates that the SMPTE time is valid.
- [wordClockTimeValid](wordclocktimevalid.md): A flag that indicates that the word clock time is valid.

# kAudioTimeStampSampleHostTimeValid (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A flag that indicates that the sample frame time and the host time are valid.

## Declaration

```objectivec
kAudioTimeStampSampleHostTimeValid
```

## See Also

### Constants

- [kAudioTimeStampNothingValid](kaudiotimestampnothingvalid.md): A flag that indicates no fields are valid.
- [kAudioTimeStampHostTimeValid](hosttimevalid.md): A flag that indicates that the host time is valid.
- [kAudioTimeStampRateScalarValid](ratescalarvalid.md): A flag that indicates that the rate scalar is valid.
- [kAudioTimeStampSampleTimeValid](sampletimevalid.md): A flag that indicates that the sample frame time is valid.
- [kAudioTimeStampSMPTETimeValid](smptetimevalid.md): A flag that indicates that the SMPTE time is valid.
- [kAudioTimeStampWordClockTimeValid](wordclocktimevalid.md): A flag that indicates that the word clock time is valid.
