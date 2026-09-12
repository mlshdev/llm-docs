> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehicleloadevent/electricalmeasurement/performancemetrics-swift.struct](https://developer.apple.com/documentation/energykit/electricvehicleloadevent/electricalmeasurement/performancemetrics-swift.struct)

# ElectricVehicleLoadEvent.ElectricalMeasurement.PerformanceMetrics

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

Performance metrics for the current electrical measurement.

## Declaration

```swift
struct PerformanceMetrics
```

<a id="overview"></a>

## Overview

Performance metrics provide additional context about the vehicle’s state during charging, such as the estimated driving range and battery temperature.

## Topics

### Creating performance metrics

- [init(estimatedRange:batteryTemperature:)](performancemetrics-swift.struct/init%28estimatedrange_batterytemperature_%29.md): Creates performance metrics for the current measurement.

### Getting performance data

- [estimatedRange](performancemetrics-swift.struct/estimatedrange.md): An estimate of how far the vehicle can travel based on the current state of charge.
- [batteryTemperature](performancemetrics-swift.struct/batterytemperature.md): A battery pack temperature.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting performance metrics

- [performanceMetrics](performancemetrics-swift.property.md): Performance metrics for an electrical measurement.
