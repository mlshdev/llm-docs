> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srreader/sensor](https://developer.apple.com/documentation/sensorkit/srreader/sensor)

# sensor

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The sensor instance associated with this reader.

## Declaration

```swift
final let sensor: Sensor
```

<a id="discussion"></a>

## Discussion

This property provides access to the specific sensor type that this reader manages. The sensor type determines the kind of data that can be fetched and the operations available.
