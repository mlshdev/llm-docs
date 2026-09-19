> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensorkit/srwristtemperature/condition-swift.property

# condition (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The condition of the measurement that impacts its accuracy.

## Declaration

```swift
var condition: SRWristTemperature.Condition { get }
```

## See Also

### Determining the accuracy

- [SRWristTemperature.Condition](condition-swift.struct.md): The user activities with the watch that can impact the temperature measurement.

# condition (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The condition of the measurement that impacts its accuracy.

## Declaration

```objectivec
@property (nonatomic, readonly) SRWristTemperatureCondition condition;
```

## See Also

### Determining the accuracy

- [SRWristTemperatureCondition](condition-swift.struct.md): The user activities with the watch that can impact the temperature measurement.
