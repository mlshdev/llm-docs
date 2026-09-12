> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehiclestatusevent/energy](https://developer.apple.com/documentation/energykit/electricvehiclestatusevent/energy)

# energy

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A state of charge in milliwatt-hours at the time of the status event.

## Declaration

```swift
let energy: Measurement<UnitEnergy>
```

## See Also

### Getting status information

- [status](status-swift.property.md): The current status of the vehicle relative to charger connection.
- [ElectricVehicleStatusEvent.Status](status-swift.enum.md): The status of an electric vehicle’s charger connection.
- [stateOfCharge](stateofcharge.md): A state of charge as a percentage at the time of the status event.
- [estimatedRange](estimatedrange.md): An estimated range of driving distance based on the current energy state.
