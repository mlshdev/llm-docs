> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehicleloadevent/electricalmeasurement/init(stateofcharge:direction:power:energy:performancemetrics:)](https://developer.apple.com/documentation/energykit/electricvehicleloadevent/electricalmeasurement/init(stateofcharge:direction:power:energy:performancemetrics:))

# init(stateOfCharge:direction:power:energy:performanceMetrics:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

Creates an electrical measurement with optional performance metrics.

## Declaration

```swift
init(stateOfCharge: Int, direction: ElectricityFlowDirection, power: Measurement<UnitPower>, energy: Measurement<UnitEnergy>, performanceMetrics: ElectricVehicleLoadEvent.ElectricalMeasurement.PerformanceMetrics?)
```

## Parameters

- `stateOfCharge`: The remaining capacity available in the battery as a percentage (0-100).
- `direction`: The direction of electricity flow.
- `power`: The instantaneous power in milliwatts.
- `energy`: The accumulated electrical energy in milliwatt-hours.
- `performanceMetrics`: Performance metrics for this measurement, or `nil` if the metrics are unavailable.

## See Also

### Creating an electrical measurement

- [init(stateOfCharge:direction:power:energy:)](init%28stateofcharge_direction_power_energy_%29.md): Deprecated. Initializes an electrical measurement for the electrical load event.
