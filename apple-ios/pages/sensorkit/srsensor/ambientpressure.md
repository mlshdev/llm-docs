> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensor/ambientpressure](https://developer.apple.com/documentation/sensorkit/srsensor/ambientpressure)

# ambientPressure (Swift)

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A sensor that provides pressure and temperature metrics.

## Declaration

```swift
static let ambientPressure: SRSensor
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is `[`[CMRecordedPressureData](https://developer.apple.com/documentation/coremotion/cmrecordedpressuredata)`]`.

You need to provide a reason to record ambient pressure by adding the [SRSensorUsageElevation](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusageelevation) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading environment sensors

- [ambientLightSensor](ambientlightsensor.md): A sensor that provides ambient light information.

# SRSensorAmbientPressure (Objective-C)

**Framework:** SensorKit  
**Kind:** Global Variable  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A sensor that provides pressure and temperature metrics.

## Declaration

```objectivec
extern SRSensor const SRSensorAmbientPressure;
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is `[`[CMRecordedPressureData](https://developer.apple.com/documentation/coremotion/cmrecordedpressuredata)`]`.

You need to provide a reason to record ambient pressure by adding the [SRSensorUsageElevation](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusageelevation) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading environment sensors

- [SRSensorAmbientLightSensor](ambientlightsensor.md): A sensor that provides ambient light information.
