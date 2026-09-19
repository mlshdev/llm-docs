> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricvehiclestatusevent/stateofcharge

# stateOfCharge

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A state of charge as a percentage at the time of the status event.

## Declaration

```swift
let stateOfCharge: Int
```

<a id="discussion"></a>

## Discussion

An integer from 0 to 100 in which 0 indicates an empty battery, and 100 indicates a full battery.

## See Also

### Getting status information

- [status](status-swift.property.md): The current status of the vehicle relative to charger connection.
- [ElectricVehicleStatusEvent.Status](status-swift.enum.md): The status of an electric vehicle’s charger connection.
- [energy](energy.md): A state of charge in milliwatt-hours at the time of the status event.
- [estimatedRange](estimatedrange.md): An estimated range of driving distance based on the current energy state.
