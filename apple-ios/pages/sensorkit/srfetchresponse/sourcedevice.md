> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srfetchresponse/sourcedevice](https://developer.apple.com/documentation/sensorkit/srfetchresponse/sourcedevice)

# sourceDevice

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The source of the sample data.

## Declaration

```swift
var sourceDevice: SRSourceDevice? { get }
```

<a id="discussion"></a>

## Discussion

Represents the peripheral supplying data. Useful for distinguishing multiple source peripherals using a common device. Is nullable when no source information is available when providing sample data.
