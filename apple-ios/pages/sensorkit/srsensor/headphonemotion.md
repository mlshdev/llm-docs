> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensor/headphonemotion](https://developer.apple.com/documentation/sensorkit/srsensor/headphonemotion)

# headphoneMotion (Swift)

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
static let headphoneMotion: SRSensor
```

<a id="discussion"></a>

## Discussion

Sensor stream for headphone motion collection

This stream stores samples about headphone motion including:

- acceleration measured by the device’s accelerometer
- rotation rate measured by the device’s gyroscope
- altitude

Fetches from this stream return objects of type \\c NSArray\<CMRecordedDeviceMotion \*\> \* as defined in the CoreMotion framework

# SRSensorHeadphoneMotion (Objective-C)

**Framework:** SensorKit  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
extern SRSensor const SRSensorHeadphoneMotion;
```

<a id="discussion"></a>

## Discussion

Sensor stream for headphone motion collection

This stream stores samples about headphone motion including:

- acceleration measured by the device’s accelerometer
- rotation rate measured by the device’s gyroscope
- altitude

Fetches from this stream return objects of type \\c NSArray\<CMRecordedDeviceMotion \*\> \* as defined in the CoreMotion framework
