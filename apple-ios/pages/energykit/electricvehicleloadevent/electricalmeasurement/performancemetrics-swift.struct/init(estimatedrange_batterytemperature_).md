> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehicleloadevent/electricalmeasurement/performancemetrics-swift.struct/init(estimatedrange:batterytemperature:)](https://developer.apple.com/documentation/energykit/electricvehicleloadevent/electricalmeasurement/performancemetrics-swift.struct/init(estimatedrange:batterytemperature:))

# init(estimatedRange:batteryTemperature:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

Creates performance metrics for the current measurement.

## Declaration

```swift
init(estimatedRange: Measurement<UnitLength>? = nil, batteryTemperature: Measurement<UnitTemperature>? = nil)
```

## Parameters

- `estimatedRange`: The estimated range of driving distance based on the current energy state, or `nil` if an estimate is unavailable.
- `batteryTemperature`: The battery pack temperature, or `nil` if the temperature is unavailable.
