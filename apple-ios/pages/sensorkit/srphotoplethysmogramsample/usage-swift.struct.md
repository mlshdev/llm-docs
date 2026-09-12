> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramsample/usage-swift.struct](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramsample/usage-swift.struct)

# SRPhotoplethysmogramSample.Usage (Swift)

**Framework:** SensorKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The possible ways that a person or the system may take a photoplethysmogram (PPG) reading.

## Declaration

```swift
struct Usage
```

## Topics

### Getting the reading method

- [foregroundHeartRate](usage-swift.struct/foregroundheartrate.md): A heart rate reading that a person takes while using an app.
- [deepBreathing](usage-swift.struct/deepbreathing.md): A deep breathing sensor reading that a person takes while using an app.
- [foregroundBloodOxygen](usage-swift.struct/foregroundbloodoxygen.md): A blood oxygen reading that a person takes while using an app.
- [backgroundSystem](usage-swift.struct/backgroundsystem.md): A reading taken by the system in the background.

### Initializing usage

- [init(rawValue:)](usage-swift.struct/init%28rawvalue_%29.md): Initializes a PPG usage structure.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing PPG data

- [startDate](startdate.md): The start date of the photoplethysmogram (PPG) sensor data recording.
- [nanosecondsSinceStart](nanosecondssincestart.md): The time in nanoseconds since the start of the data recording.
- [usage](usage-swift.property.md): The method that the person or system uses to take the reading.
- [opticalSamples](opticalsamples.md): The samples recorded by the photoplethysmogram (PPG) optical sensor.
- [SRPhotoplethysmogramOpticalSample](../srphotoplethysmogramopticalsample.md): A data sample from the photoplethysmogram (PPG) optical sensor.
- [accelerometerSamples](accelerometersamples.md): The samples recorded by the photoplethysmogram (PPG) accelerometer.
- [SRPhotoplethysmogramAccelerometerSample](../srphotoplethysmogramaccelerometersample.md): A data sample from the photoplethysmogram (PPG) accelerometer.
- [temperature](temperature.md): The samples recorded by the photoplethysmogram (PPG) thermometer.

# SRPhotoplethysmogramSampleUsage (Objective-C)

**Framework:** SensorKit  
**Kind:** Type Alias  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The possible ways that a person or the system may take a photoplethysmogram (PPG) reading.

## Declaration

```objectivec
typedef NSString * SRPhotoplethysmogramSampleUsage;
```

## Topics

### Getting the reading method

- [SRPhotoplethysmogramSampleUsageForegroundHeartRate](usage-swift.struct/foregroundheartrate.md): A heart rate reading that a person takes while using an app.
- [SRPhotoplethysmogramSampleUsageDeepBreathing](usage-swift.struct/deepbreathing.md): A deep breathing sensor reading that a person takes while using an app.
- [SRPhotoplethysmogramSampleUsageForegroundBloodOxygen](usage-swift.struct/foregroundbloodoxygen.md): A blood oxygen reading that a person takes while using an app.
- [SRPhotoplethysmogramSampleUsageBackgroundSystem](usage-swift.struct/backgroundsystem.md): A reading taken by the system in the background.

## See Also

### Accessing PPG data

- [startDate](startdate.md): The start date of the photoplethysmogram (PPG) sensor data recording.
- [nanosecondsSinceStart](nanosecondssincestart.md): The time in nanoseconds since the start of the data recording.
- [usage](usage-swift.property.md): The method that the person or system uses to take the reading.
- [opticalSamples](opticalsamples.md): The samples recorded by the photoplethysmogram (PPG) optical sensor.
- [SRPhotoplethysmogramOpticalSample](../srphotoplethysmogramopticalsample.md): A data sample from the photoplethysmogram (PPG) optical sensor.
- [accelerometerSamples](accelerometersamples.md): The samples recorded by the photoplethysmogram (PPG) accelerometer.
- [SRPhotoplethysmogramAccelerometerSample](../srphotoplethysmogramaccelerometersample.md): A data sample from the photoplethysmogram (PPG) accelerometer.
- [temperature](temperature.md): The samples recorded by the photoplethysmogram (PPG) thermometer.
