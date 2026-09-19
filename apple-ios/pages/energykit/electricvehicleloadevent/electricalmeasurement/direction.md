> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricvehicleloadevent/electricalmeasurement/direction

# direction

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The electricity being imported or exported to the grid.

## Declaration

```swift
let direction: ElectricityFlowDirection
```

## See Also

### Getting electrical measurements

- [stateOfCharge](stateofcharge.md): The remaining capacity available in a battery An integer ranging from `0` to `100` that’s proportional to the percentage of remaining capacity available in the battery where `0` and `100` correspond to the min and max state of charge respectively.
- [power](power.md): The instantaneous power in milli-watts \[mW\] of the reporting device.
- [energy](energy.md): The cumulative energy in milli-watt-hours \[mWh\] of the reporting device rounded to the nearest integer.
