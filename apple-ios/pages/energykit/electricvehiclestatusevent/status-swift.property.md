> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehiclestatusevent/status-swift.property](https://developer.apple.com/documentation/energykit/electricvehiclestatusevent/status-swift.property)

# status

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

The current status of the vehicle relative to charger connection.

## Declaration

```swift
let status: ElectricVehicleStatusEvent.Status
```

## See Also

### Getting status information

- [ElectricVehicleStatusEvent.Status](status-swift.enum.md): The status of an electric vehicle’s charger connection.
- [stateOfCharge](stateofcharge.md): A state of charge as a percentage at the time of the status event.
- [energy](energy.md): A state of charge in milliwatt-hours at the time of the status event.
- [estimatedRange](estimatedrange.md): An estimated range of driving distance based on the current energy state.
