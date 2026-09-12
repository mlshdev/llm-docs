> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehiclestatusevent/status-swift.enum/chargerpluggedin](https://developer.apple.com/documentation/energykit/electricvehiclestatusevent/status-swift.enum/chargerpluggedin)

# ElectricVehicleStatusEvent.Status.chargerPluggedIn

**Framework:** EnergyKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A status that indicates when the charger connects to the vehicle.

## Declaration

```swift
case chargerPluggedIn
```

## Mentioned In

- [Providing charging history for electric vehicles](../../providing-informative-charging-history-for-electric-vehicles.md)

<a id="discussion"></a>

## Discussion

This status represents the initial connection before any charging logic determines whether to begin charging or remain idle.

## See Also

### Connection states

- [ElectricVehicleStatusEvent.Status.chargerUnplugged](chargerunplugged.md): A status that indicates when the charger disconnects from the vehicle.
