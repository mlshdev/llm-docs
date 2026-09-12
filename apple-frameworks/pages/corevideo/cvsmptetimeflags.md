> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvsmptetimeflags](https://developer.apple.com/documentation/corevideo/cvsmptetimeflags)

# CVSMPTETimeFlags (Swift)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```swift
struct CVSMPTETimeFlags
```

## Topics

### Constants

- [running](cvsmptetimeflags/running.md): Time is running.
- [valid](cvsmptetimeflags/valid.md): The full time is valid.

### Initializers

- [init(rawValue:)](cvsmptetimeflags/init%28rawvalue_%29.md)

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
- [CVTimeFlags](cvtimeflags.md)
- [CVTimeStampFlags](cvtimestampflags.md)

# CVSMPTETimeFlags (Objective-C)

**Framework:** Core Video  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
enum CVSMPTETimeFlags : uint32_t;
```

## Topics

### Constants

- [kCVSMPTETimeRunning](cvsmptetimeflags/running.md): Time is running.
- [kCVSMPTETimeValid](cvsmptetimeflags/valid.md): The full time is valid.

## See Also

### Enumerations

- [CVSMPTETimeType](cvsmptetimetype.md)
- [CVTimeFlags](cvtimeflags.md)
- [CVTimeStampFlags](cvtimestampflags.md)
