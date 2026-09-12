> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waperformanceforecast](https://developer.apple.com/documentation/wifiaware/waperformanceforecast)

# WAPerformanceForecast

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The performance forecast for a connection setup to the remote device.

## Declaration

```swift
struct WAPerformanceForecast
```

## Topics

### Instance Properties

- [localInfrastructureThroughputCapacityRatio](waperformanceforecast/localinfrastructurethroughputcapacityratio.md): The estimated normalized ratio of the local Wi-Fi Infrastructure throughput capacity and the local Wi-Fi Infrastructure throughput ceiling, if a Wi-Fi Aware connection is setup to the remote device.
- [localThroughputCapacity](waperformanceforecast/localthroughputcapacity.md): The estimated average throughput capacity of the local device for a connection setup to the remote device.
- [localThroughputCapacityRatio](waperformanceforecast/localthroughputcapacityratio.md): The estimated normalized ratio of the local throughput capacity and the local throughput ceiling.
- [localThroughputCeiling](waperformanceforecast/localthroughputceiling.md): The highest throughput a connection from the local device to the remote device is capable of under ideal conditions, given the hardware capabilities of the local device. The actual throughput achieved can be lower in the presence of other active connections.
- [localTimestamp](waperformanceforecast/localtimestamp.md): The time the forecast was generated, using a local monotonically increasing clock.
- [signalStrength](waperformanceforecast/signalstrength.md): The estimated signal strength of the remote device.
- [timestamp](waperformanceforecast/timestamp.md): The time the forecast was generated.
- [unavailabilityLatencyCeiling](waperformanceforecast/unavailabilitylatencyceiling.md): The highest forecasted packet latency due to this device’s unavailability.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
