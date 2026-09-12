> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramsample/startdate](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramsample/startdate)

# startDate (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The start date of the photoplethysmogram (PPG) sensor data recording.

## Declaration

```swift
var startDate: Date { get }
```

## See Also

### Accessing PPG data

- [nanosecondsSinceStart](nanosecondssincestart.md): The time in nanoseconds since the start of the data recording.
- [usage](usage-swift.property.md): The method that the person or system uses to take the reading.
- [SRPhotoplethysmogramSample.Usage](usage-swift.struct.md): The possible ways that a person or the system may take a photoplethysmogram (PPG) reading.
- [opticalSamples](opticalsamples.md): The samples recorded by the photoplethysmogram (PPG) optical sensor.
- [SRPhotoplethysmogramOpticalSample](../srphotoplethysmogramopticalsample.md): A data sample from the photoplethysmogram (PPG) optical sensor.
- [accelerometerSamples](accelerometersamples.md): The samples recorded by the photoplethysmogram (PPG) accelerometer.
- [SRPhotoplethysmogramAccelerometerSample](../srphotoplethysmogramaccelerometersample.md): A data sample from the photoplethysmogram (PPG) accelerometer.
- [temperature](temperature.md): The samples recorded by the photoplethysmogram (PPG) thermometer.

# startDate (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The start date of the photoplethysmogram (PPG) sensor data recording.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDate * startDate;
```

## See Also

### Accessing PPG data

- [nanosecondsSinceStart](nanosecondssincestart.md): The time in nanoseconds since the start of the data recording.
- [usage](usage-swift.property.md): The method that the person or system uses to take the reading.
- [SRPhotoplethysmogramSampleUsage](usage-swift.struct.md): The possible ways that a person or the system may take a photoplethysmogram (PPG) reading.
- [opticalSamples](opticalsamples.md): The samples recorded by the photoplethysmogram (PPG) optical sensor.
- [SRPhotoplethysmogramOpticalSample](../srphotoplethysmogramopticalsample.md): A data sample from the photoplethysmogram (PPG) optical sensor.
- [accelerometerSamples](accelerometersamples.md): The samples recorded by the photoplethysmogram (PPG) accelerometer.
- [SRPhotoplethysmogramAccelerometerSample](../srphotoplethysmogramaccelerometersample.md): A data sample from the photoplethysmogram (PPG) accelerometer.
- [temperature](temperature.md): The samples recorded by the photoplethysmogram (PPG) thermometer.
