> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensor/onwriststate](https://developer.apple.com/documentation/sensorkit/srsensor/onwriststate)

# onWristState (Swift)

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A sensor that describes the watch’s position on the wrist.

## Declaration

```swift
static let onWristState: SRSensor
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRWristDetection](../srwristdetection.md)

You need to provide a reason to detect the watch position by adding the [SRSensorUsageWristDetection](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagewristdetection) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading device sensors

- [deviceUsageReport](deviceusagereport.md): A sensor that provides information about device usage.
- [keyboardMetrics](keyboardmetrics.md): A sensor that provides information about keyboard usage.

# SRSensorOnWristState (Objective-C)

**Framework:** SensorKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A sensor that describes the watch’s position on the wrist.

## Declaration

```objectivec
extern SRSensor const SRSensorOnWristState;
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRWristDetection](../srwristdetection.md)

You need to provide a reason to detect the watch position by adding the [SRSensorUsageWristDetection](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagewristdetection) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading device sensors

- [SRSensorDeviceUsageReport](deviceusagereport.md): A sensor that provides information about device usage.
- [SRSensorKeyboardMetrics](keyboardmetrics.md): A sensor that provides information about keyboard usage.
