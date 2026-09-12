> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehicleloadevent/electricalmeasurement/performancemetrics-swift.struct/batterytemperature](https://developer.apple.com/documentation/energykit/electricvehicleloadevent/electricalmeasurement/performancemetrics-swift.struct/batterytemperature)

# batteryTemperature

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A battery pack temperature.

## Declaration

```swift
let batteryTemperature: Measurement<UnitTemperature>?
```

<a id="discussion"></a>

## Discussion

The system sets this property to `nil` when temperature data is unavailable.

## See Also

### Getting performance data

- [estimatedRange](estimatedrange.md): An estimate of how far the vehicle can travel based on the current state of charge.
