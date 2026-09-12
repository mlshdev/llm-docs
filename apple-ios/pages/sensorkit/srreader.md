> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srreader](https://developer.apple.com/documentation/sensorkit/srreader)

# SRReader

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

`SRReader` serves as the primary interface for accessing sensor data from various device sensors.

## Declaration

```swift
final class SRReader<Sensor> where Sensor : SRDataSensor
```

## Topics

### Initializers

- [init(sensor:)](srreader/init%28sensor_%29.md): Creates a new sensor reader for the specified sensor type.

### Instance Properties

- [authorizationStatus](srreader/authorizationstatus.md): The current authorization status for accessing the sensor data.
- [devices](srreader/devices.md): Returns device information for all devices that have stored data for the given sensor in SensorKit
- [sensor](srreader/sensor.md): The sensor instance associated with this reader.

### Instance Methods

- [deletionRecords(matching:)](srreader/deletionrecords%28matching_%29.md): Fetches sensor data based on the provided request parameters. The reader must be authorized for the sensor for this to succeed.
- [samples(matching:)](srreader/samples%28matching_%29.md): Fetches sensor data based on the provided request parameters. The reader must be authorized for the sensor for this to succeed.
- [startRecording()](srreader/startrecording%28%29.md): Starts recording sensor data.
- [stopRecording()](srreader/stoprecording%28%29.md): Stops recording sensor data.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
