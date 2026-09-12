> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensor/phoneusagereport](https://developer.apple.com/documentation/sensorkit/srsensor/phoneusagereport)

# phoneUsageReport (Swift)

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A sensor that reports the amount of time that the user is on phone calls.

## Declaration

```swift
static let phoneUsageReport: SRSensor
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRPhoneUsageReport](../srphoneusagereport.md).

You need to provide a reason to record phone usage by adding the [SRSensorUsagePhoneUsage](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagephoneusage) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading app activity sensors

- [messagesUsageReport](messagesusagereport.md): A sensor that provides information about use of the Messages app.

# SRSensorPhoneUsageReport (Objective-C)

**Framework:** SensorKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A sensor that reports the amount of time that the user is on phone calls.

## Declaration

```objectivec
extern SRSensor const SRSensorPhoneUsageReport;
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRPhoneUsageReport](../srphoneusagereport.md).

You need to provide a reason to record phone usage by adding the [SRSensorUsagePhoneUsage](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagephoneusage) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading app activity sensors

- [SRSensorMessagesUsageReport](messagesusagereport.md): A sensor that provides information about use of the Messages app.
