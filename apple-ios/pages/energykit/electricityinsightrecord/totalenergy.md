> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityinsightrecord/totalenergy

# totalEnergy

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The total electrical energy consumed or generated.

## Declaration

```swift
var totalEnergy: Measurement<UnitEnergy>?
```

## Mentioned In

- [Providing charging history for electric vehicles](../providing-informative-charging-history-for-electric-vehicles.md)

## See Also

### Getting the insight record data

- [totalRuntime](totalruntime.md): The total time that electricity-consuming devices actively ran.
- [range](range.md): The time period that the insight record spans.
