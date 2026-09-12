> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicvalueleakstatus](https://developer.apple.com/documentation/homekit/hmcharacteristicvalueleakstatus)

# HMCharacteristicValueLeakStatus (Swift)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Possible values for leak detection.

## Declaration

```swift
enum HMCharacteristicValueLeakStatus
```

## Topics

### Leak Status

- [HMCharacteristicValueLeakStatus.none](hmcharacteristicvalueleakstatus/none.md): No leak detected.
- [HMCharacteristicValueLeakStatus.detected](hmcharacteristicvalueleakstatus/detected.md): Leak detected.

### Initializers

- [init(rawValue:)](hmcharacteristicvalueleakstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HMCharacteristicValueLeakStatus (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Possible values for leak detection.

## Declaration

```objectivec
enum HMCharacteristicValueLeakStatus : NSInteger;
```

## Topics

### Leak Status

- [HMCharacteristicValueLeakStatusNone](hmcharacteristicvalueleakstatus/none.md): No leak detected.
- [HMCharacteristicValueLeakStatusDetected](hmcharacteristicvalueleakstatus/detected.md): Leak detected.
