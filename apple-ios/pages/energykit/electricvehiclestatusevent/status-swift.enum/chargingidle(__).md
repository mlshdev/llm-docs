> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricvehiclestatusevent/status-swift.enum/chargingidle(_:)

# ElectricVehicleStatusEvent.Status.chargingIdle(\_:)

**Framework:** EnergyKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A status that indicates the charger is connected but the vehicle isn’t charging.

## Declaration

```swift
case chargingIdle(ElectricVehicleChargingReason.IdleReason)
```

## Mentioned In

- [Providing charging history for electric vehicles](../../providing-informative-charging-history-for-electric-vehicles.md)

<a id="discussion"></a>

## Discussion

The associated [ElectricVehicleChargingReason.IdleReason](../../electricvehiclechargingreason/idlereason.md) explains why charging isn’t active.

## See Also

### Charging states

- [ElectricVehicleStatusEvent.Status.chargingActive(\_:)](chargingactive%28__%29.md): A status that indicates that the vehicle is actively charging.
