> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srelectrocardiogramdata/value](https://developer.apple.com/documentation/sensorkit/srelectrocardiogramdata/value)

# value (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The electrocardiogram data in microvolts.

## Declaration

```swift
var value: Measurement<UnitElectricPotentialDifference> { get }
```

## See Also

### Getting electrocardiogram details

- [flags](flags-swift.property.md)
- [SRElectrocardiogramData.Flags](flags-swift.struct.md): Sensor context or events that occur during a sample ECG data reading.

# value (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The electrocardiogram data in microvolts.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSMeasurement<NSUnitElectricPotentialDifference *> * value;
```

## See Also

### Getting electrocardiogram details

- [flags](flags-swift.property.md)
- [SRElectrocardiogramDataFlags](flags-swift.struct.md): Sensor context or events that occur during a sample ECG data reading.
