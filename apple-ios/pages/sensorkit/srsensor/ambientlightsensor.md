> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensor/ambientlightsensor](https://developer.apple.com/documentation/sensorkit/srsensor/ambientlightsensor)

# ambientLightSensor (Swift)

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A sensor that provides ambient light information.

## Declaration

```swift
static let ambientLightSensor: SRSensor
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRAmbientLightSample](../srambientlightsample.md).

You need to provide a reason to record ambient light by adding the [SRSensorUsageAmbientLightSensor](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusageambientlightsensor) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading environment sensors

- [ambientPressure](ambientpressure.md): A sensor that provides pressure and temperature metrics.

# SRSensorAmbientLightSensor (Objective-C)

**Framework:** SensorKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A sensor that provides ambient light information.

## Declaration

```objectivec
extern SRSensor const SRSensorAmbientLightSensor;
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRAmbientLightSample](../srambientlightsample.md).

You need to provide a reason to record ambient light by adding the [SRSensorUsageAmbientLightSensor](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusageambientlightsensor) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading environment sensors

- [SRSensorAmbientPressure](ambientpressure.md): A sensor that provides pressure and temperature metrics.
