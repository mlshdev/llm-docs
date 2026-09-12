> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreader/init(sensor:)](https://developer.apple.com/documentation/sensorkit/srsensorreader/init(sensor:))

# init(sensor:) (Swift)

**Framework:** SensorKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Initializes a new sensor reader object.

> Use SRReader\<Sensor\> class

## Declaration

```swift
init(sensor: SRSensor)
```

## Parameters

- `sensor`: The sensor from which to read information.

## See Also

### Creating a sensor reader

- [SRSensor](../srsensor.md): The sensors an app can read.
- [sensor](sensor.md): Deprecated. The particular sensor that this object reads.

# initWithSensor: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Initializes a new sensor reader object.

## Declaration

```objectivec
- (instancetype) initWithSensor:(SRSensor) sensor;
```

## Parameters

- `sensor`: The sensor from which to read information.

## See Also

### Creating a sensor reader

- [SRSensor](../srsensor.md): The sensors an app can read.
- [sensor](sensor.md): Deprecated. The particular sensor that this object reads.
