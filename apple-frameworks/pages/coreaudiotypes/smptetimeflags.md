> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/smptetimeflags](https://developer.apple.com/documentation/coreaudiotypes/smptetimeflags)

# SMPTETimeFlags (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A structure that defines SMPTE time flags.

## Declaration

```swift
struct SMPTETimeFlags
```

## Topics

### Initializers

- [init(rawValue:)](smptetimeflags/init%28rawvalue_%29.md)

### Type Properties

- [running](smptetimeflags/running.md)
- [valid](smptetimeflags/valid.md)

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

### SMPTE Time

- [SMPTETime](smptetime.md): A structure that defines an SMPTE time value.
- [SMPTETimeType](smptetimetype.md): Constants that define SMPTE time types.

# SMPTETimeFlags (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that defines SMPTE time flags.

## Declaration

```objectivec
enum SMPTETimeFlags : UInt32;
```

## Topics

### Constants

- [kSMPTETimeRunning](smptetimeflags/running.md)
- [kSMPTETimeUnknown](smptetimeflags/ksmptetimeunknown.md)
- [kSMPTETimeValid](smptetimeflags/valid.md)

## See Also

### SMPTE Time

- [SMPTETime](smptetime.md): A structure that defines an SMPTE time value.
- [SMPTETimeType](smptetimetype.md): Constants that define SMPTE time types.
