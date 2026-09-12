> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srwristtemperature/condition-swift.struct](https://developer.apple.com/documentation/sensorkit/srwristtemperature/condition-swift.struct)

# SRWristTemperature.Condition (Swift)

**Framework:** SensorKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The user activities with the watch that can impact the temperature measurement.

## Declaration

```swift
struct Condition
```

## Topics

### Conditions

- [offWrist](condition-swift.struct/offwrist.md): The watch being off the wrist impacts the accuracy.
- [onCharger](condition-swift.struct/oncharger.md): The watch being on the charger impacts the accuracy.
- [inMotion](condition-swift.struct/inmotion.md): The watch being in motion impacts the accuracy.

### Creating conditions

- [init(rawValue:)](condition-swift.struct/init%28rawvalue_%29.md): Creates and returns a new structure with the specified value.

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

### Determining the accuracy

- [condition](condition-swift.property.md): The condition of the measurement that impacts its accuracy.

# SRWristTemperatureCondition (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The user activities with the watch that can impact the temperature measurement.

## Declaration

```objectivec
enum SRWristTemperatureCondition : NSUInteger;
```

## Topics

### Conditions

- [SRWristTemperatureConditionOffWrist](condition-swift.struct/offwrist.md): The watch being off the wrist impacts the accuracy.
- [SRWristTemperatureConditionOnCharger](condition-swift.struct/oncharger.md): The watch being on the charger impacts the accuracy.
- [SRWristTemperatureConditionInMotion](condition-swift.struct/inmotion.md): The watch being in motion impacts the accuracy.

### Enumeration Cases

- [SRWristTemperatureConditionNone](../srwristtemperaturecondition/srwristtemperatureconditionnone.md)

## See Also

### Determining the accuracy

- [condition](condition-swift.property.md): The condition of the measurement that impacts its accuracy.
