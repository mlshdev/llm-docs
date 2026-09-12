> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensor/messagesusagereport](https://developer.apple.com/documentation/sensorkit/srsensor/messagesusagereport)

# messagesUsageReport (Swift)

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A sensor that provides information about use of the Messages app.

## Declaration

```swift
static let messagesUsageReport: SRSensor
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRMessagesUsageReport](../srmessagesusagereport.md).

You need to provide a reason to record Messages app usage by adding the [SRSensorUsageMessageUsage](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagemessageusage) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading app activity sensors

- [phoneUsageReport](phoneusagereport.md): A sensor that reports the amount of time that the user is on phone calls.

# SRSensorMessagesUsageReport (Objective-C)

**Framework:** SensorKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A sensor that provides information about use of the Messages app.

## Declaration

```objectivec
extern SRSensor const SRSensorMessagesUsageReport;
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRMessagesUsageReport](../srmessagesusagereport.md).

You need to provide a reason to record Messages app usage by adding the [SRSensorUsageMessageUsage](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagemessageusage) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading app activity sensors

- [SRSensorPhoneUsageReport](phoneusagereport.md): A sensor that reports the amount of time that the user is on phone calls.
