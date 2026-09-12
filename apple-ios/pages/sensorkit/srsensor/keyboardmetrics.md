> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensor/keyboardmetrics](https://developer.apple.com/documentation/sensorkit/srsensor/keyboardmetrics)

# keyboardMetrics (Swift)

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A sensor that provides information about keyboard usage.

## Declaration

```swift
static let keyboardMetrics: SRSensor
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRKeyboardMetrics](../srkeyboardmetrics.md).

You need to provide a reason to record keyboard metrics by adding the [SRSensorUsageKeyboardMetrics](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagekeyboardmetrics) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading device sensors

- [deviceUsageReport](deviceusagereport.md): A sensor that provides information about device usage.
- [onWristState](onwriststate.md): A sensor that describes the watch’s position on the wrist.

# SRSensorKeyboardMetrics (Objective-C)

**Framework:** SensorKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A sensor that provides information about keyboard usage.

## Declaration

```objectivec
extern SRSensor const SRSensorKeyboardMetrics;
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRKeyboardMetrics](../srkeyboardmetrics.md).

You need to provide a reason to record keyboard metrics by adding the [SRSensorUsageKeyboardMetrics](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagekeyboardmetrics) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading device sensors

- [SRSensorDeviceUsageReport](deviceusagereport.md): A sensor that provides information about device usage.
- [SRSensorOnWristState](onwriststate.md): A sensor that describes the watch’s position on the wrist.
