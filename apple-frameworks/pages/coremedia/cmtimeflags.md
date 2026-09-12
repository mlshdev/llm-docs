> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimeflags](https://developer.apple.com/documentation/coremedia/cmtimeflags)

# CMTimeFlags (Swift)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that defines the flags for a time value.

## Declaration

```swift
struct CMTimeFlags
```

## Topics

### Properties

- [valid](cmtimeflags/valid.md): A flag that indicates a time is valid.
- [hasBeenRounded](cmtimeflags/hasbeenrounded.md): A flag that indicates a previous time calculation rounded the result.
- [positiveInfinity](cmtimeflags/positiveinfinity.md): A flag that indicates the time is positive infinity.
- [negativeInfinity](cmtimeflags/negativeinfinity.md): A flag that indicates the time is negative infinity.
- [indefinite](cmtimeflags/indefinite.md): A flag that indicates the time is indefinite.
- [impliedValueFlagsMask](cmtimeflags/impliedvalueflagsmask.md): A flag that indicates the time is positive or negative infinity, or indefinite.

### Initializers

- [init(rawValue:)](cmtimeflags/init%28rawvalue_%29.md)

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

### Data Types

- [CMTime](cmtime.md): A structure that represents time.
- [CMTimeValue](cmtimevalue.md): An integer time value.
- [CMTimeScale](cmtimescale.md): An integer timescale.
- [CMTimeEpoch](cmtimeepoch.md): An epoch for a time.

# CMTimeFlags (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that defines the flags for a time value.

## Declaration

```objectivec
enum CMTimeFlags : uint32_t;
```

## Topics

### Properties

- [kCMTimeFlags_Valid](cmtimeflags/valid.md): A flag that indicates a time is valid.
- [kCMTimeFlags_HasBeenRounded](cmtimeflags/hasbeenrounded.md): A flag that indicates a previous time calculation rounded the result.
- [kCMTimeFlags_PositiveInfinity](cmtimeflags/positiveinfinity.md): A flag that indicates the time is positive infinity.
- [kCMTimeFlags_NegativeInfinity](cmtimeflags/negativeinfinity.md): A flag that indicates the time is negative infinity.
- [kCMTimeFlags_Indefinite](cmtimeflags/indefinite.md): A flag that indicates the time is indefinite.
- [kCMTimeFlags_ImpliedValueFlagsMask](cmtimeflags/impliedvalueflagsmask.md): A flag that indicates the time is positive or negative infinity, or indefinite.

## See Also

### Data Types

- [CMTime](cmtime.md): A structure that represents time.
- [CMTimeValue](cmtimevalue.md): An integer time value.
- [CMTimeScale](cmtimescale.md): An integer timescale.
- [CMTimeEpoch](cmtimeepoch.md): An epoch for a time.
