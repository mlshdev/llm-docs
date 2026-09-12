> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramsample/nanosecondssincestart](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramsample/nanosecondssincestart)

# nanosecondsSinceStart (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The time in nanoseconds since the start of the data recording.

## Declaration

```swift
var nanosecondsSinceStart: Int64 { get }
```

## See Also

### Accessing PPG data

- [startDate](startdate.md): The start date of the photoplethysmogram (PPG) sensor data recording.
- [usage](usage-swift.property.md): The method that the person or system uses to take the reading.
- [SRPhotoplethysmogramSample.Usage](usage-swift.struct.md): The possible ways that a person or the system may take a photoplethysmogram (PPG) reading.
- [opticalSamples](opticalsamples.md): The samples recorded by the photoplethysmogram (PPG) optical sensor.
- [SRPhotoplethysmogramOpticalSample](../srphotoplethysmogramopticalsample.md): A data sample from the photoplethysmogram (PPG) optical sensor.
- [accelerometerSamples](accelerometersamples.md): The samples recorded by the photoplethysmogram (PPG) accelerometer.
- [SRPhotoplethysmogramAccelerometerSample](../srphotoplethysmogramaccelerometersample.md): A data sample from the photoplethysmogram (PPG) accelerometer.
- [temperature](temperature.md): The samples recorded by the photoplethysmogram (PPG) thermometer.

# nanosecondsSinceStart (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The time in nanoseconds since the start of the data recording.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) int64_t nanosecondsSinceStart;
```

## See Also

### Accessing PPG data

- [startDate](startdate.md): The start date of the photoplethysmogram (PPG) sensor data recording.
- [usage](usage-swift.property.md): The method that the person or system uses to take the reading.
- [SRPhotoplethysmogramSampleUsage](usage-swift.struct.md): The possible ways that a person or the system may take a photoplethysmogram (PPG) reading.
- [opticalSamples](opticalsamples.md): The samples recorded by the photoplethysmogram (PPG) optical sensor.
- [SRPhotoplethysmogramOpticalSample](../srphotoplethysmogramopticalsample.md): A data sample from the photoplethysmogram (PPG) optical sensor.
- [accelerometerSamples](accelerometersamples.md): The samples recorded by the photoplethysmogram (PPG) accelerometer.
- [SRPhotoplethysmogramAccelerometerSample](../srphotoplethysmogramaccelerometersample.md): A data sample from the photoplethysmogram (PPG) accelerometer.
- [temperature](temperature.md): The samples recorded by the photoplethysmogram (PPG) thermometer.
