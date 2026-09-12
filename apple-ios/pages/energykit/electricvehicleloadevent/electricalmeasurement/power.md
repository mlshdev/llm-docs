> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehicleloadevent/electricalmeasurement/power](https://developer.apple.com/documentation/energykit/electricvehicleloadevent/electricalmeasurement/power)

# power

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The instantaneous power in milli-watts \[mW\] of the reporting device.

## Declaration

```swift
let power: Measurement<UnitPower>
```

## See Also

### Getting electrical measurements

- [stateOfCharge](stateofcharge.md): The remaining capacity available in a battery An integer ranging from `0` to `100` that’s proportional to the percentage of remaining capacity available in the battery where `0` and `100` correspond to the min and max state of charge respectively.
- [direction](direction.md): The electricity being imported or exported to the grid.
- [energy](energy.md): The cumulative energy in milli-watt-hours \[mWh\] of the reporting device rounded to the nearest integer.
