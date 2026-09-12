> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreader/delegate](https://developer.apple.com/documentation/sensorkit/srsensorreader/delegate)

# delegate (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

An object that responds to sensor-related events.

> Use SRReader\<Sensor\> class

## Declaration

```swift
weak var delegate: (any SRSensorReaderDelegate)? { get set }
```

## See Also

### Responding to sensor events

- [SRSensorReaderDelegate](../srsensorreaderdelegate.md): Deprecated. A set of callbacks the framework invokes to notify the app of sensor-related events.

# delegate (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An object that responds to sensor-related events.

## Declaration

```objectivec
@property (weak) id<SRSensorReaderDelegate> delegate;
```

## See Also

### Responding to sensor events

- [SRSensorReaderDelegate](../srsensorreaderdelegate.md): Deprecated. A set of callbacks the framework invokes to notify the app of sensor-related events.
