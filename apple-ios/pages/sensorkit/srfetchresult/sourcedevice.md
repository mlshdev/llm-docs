> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srfetchresult/sourcedevice](https://developer.apple.com/documentation/sensorkit/srfetchresult/sourcedevice)

# sourceDevice (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
var sourceDevice: SRSourceDevice? { get }
```

<a id="discussion"></a>

## Discussion

The source of the sample data

Represents the peripheral supplying data. Useful for distinguishing multiple source peripherals using a common device. Is nullable when no source information is available when providing sample data.

# sourceDevice (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) SRSourceDevice * sourceDevice;
```

<a id="discussion"></a>

## Discussion

The source of the sample data

Represents the peripheral supplying data. Useful for distinguishing multiple source peripherals using a common device. Is nullable when no source information is available when providing sample data.
