> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensor/deviceusagereport](https://developer.apple.com/documentation/sensorkit/srsensor/deviceusagereport)

# deviceUsageReport (Swift)

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A sensor that provides information about device usage.

## Declaration

```swift
static let deviceUsageReport: SRSensor
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRDeviceUsageReport](../srdeviceusagereport.md).

You need to provide a reason to record the device usage by adding the [SRSensorUsageDeviceUsage](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagedeviceusage) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading device sensors

- [keyboardMetrics](keyboardmetrics.md): A sensor that provides information about keyboard usage.
- [onWristState](onwriststate.md): A sensor that describes the watch’s position on the wrist.

# SRSensorDeviceUsageReport (Objective-C)

**Framework:** SensorKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A sensor that provides information about device usage.

## Declaration

```objectivec
extern SRSensor const SRSensorDeviceUsageReport;
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRDeviceUsageReport](../srdeviceusagereport.md).

You need to provide a reason to record the device usage by adding the [SRSensorUsageDeviceUsage](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagedeviceusage) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading device sensors

- [SRSensorKeyboardMetrics](keyboardmetrics.md): A sensor that provides information about keyboard usage.
- [SRSensorOnWristState](onwriststate.md): A sensor that describes the watch’s position on the wrist.
