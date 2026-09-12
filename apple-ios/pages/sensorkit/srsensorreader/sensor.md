> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreader/sensor](https://developer.apple.com/documentation/sensorkit/srsensorreader/sensor)

# sensor (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

The particular sensor that this object reads.

> Use SRReader\<Sensor\> class

## Declaration

```swift
var sensor: SRSensor { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets this property to the sensor you pass into [init(sensor:)](init%28sensor_%29.md).

## See Also

### Creating a sensor reader

- [init(sensor:)](init%28sensor_%29.md): Deprecated. Initializes a new sensor reader object.
- [SRSensor](../srsensor.md): The sensors an app can read.

# sensor (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The particular sensor that this object reads.

## Declaration

```objectivec
@property (copy, readonly) SRSensor sensor;
```

<a id="Discussion"></a>

## Discussion

The framework sets this property to the sensor you pass into [initWithSensor:](init%28sensor_%29.md).

## See Also

### Creating a sensor reader

- [initWithSensor:](init%28sensor_%29.md): Deprecated. Initializes a new sensor reader object.
- [SRSensor](../srsensor.md): The sensors an app can read.
