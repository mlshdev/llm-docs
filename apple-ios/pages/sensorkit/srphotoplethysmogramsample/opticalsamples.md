> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramsample/opticalsamples](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramsample/opticalsamples)

# opticalSamples (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The samples recorded by the photoplethysmogram (PPG) optical sensor.

## Declaration

```swift
var opticalSamples: [SRPhotoplethysmogramOpticalSample] { get }
```

## See Also

### Accessing PPG data

- [startDate](startdate.md): The start date of the photoplethysmogram (PPG) sensor data recording.
- [nanosecondsSinceStart](nanosecondssincestart.md): The time in nanoseconds since the start of the data recording.
- [usage](usage-swift.property.md): The method that the person or system uses to take the reading.
- [SRPhotoplethysmogramSample.Usage](usage-swift.struct.md): The possible ways that a person or the system may take a photoplethysmogram (PPG) reading.
- [SRPhotoplethysmogramOpticalSample](../srphotoplethysmogramopticalsample.md): A data sample from the photoplethysmogram (PPG) optical sensor.
- [accelerometerSamples](accelerometersamples.md): The samples recorded by the photoplethysmogram (PPG) accelerometer.
- [SRPhotoplethysmogramAccelerometerSample](../srphotoplethysmogramaccelerometersample.md): A data sample from the photoplethysmogram (PPG) accelerometer.
- [temperature](temperature.md): The samples recorded by the photoplethysmogram (PPG) thermometer.

# opticalSamples (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The samples recorded by the photoplethysmogram (PPG) optical sensor.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<SRPhotoplethysmogramOpticalSample *> * opticalSamples;
```

## See Also

### Accessing PPG data

- [startDate](startdate.md): The start date of the photoplethysmogram (PPG) sensor data recording.
- [nanosecondsSinceStart](nanosecondssincestart.md): The time in nanoseconds since the start of the data recording.
- [usage](usage-swift.property.md): The method that the person or system uses to take the reading.
- [SRPhotoplethysmogramSampleUsage](usage-swift.struct.md): The possible ways that a person or the system may take a photoplethysmogram (PPG) reading.
- [SRPhotoplethysmogramOpticalSample](../srphotoplethysmogramopticalsample.md): A data sample from the photoplethysmogram (PPG) optical sensor.
- [accelerometerSamples](accelerometersamples.md): The samples recorded by the photoplethysmogram (PPG) accelerometer.
- [SRPhotoplethysmogramAccelerometerSample](../srphotoplethysmogramaccelerometersample.md): A data sample from the photoplethysmogram (PPG) accelerometer.
- [temperature](temperature.md): The samples recorded by the photoplethysmogram (PPG) thermometer.
