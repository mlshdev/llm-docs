> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waperformancereport](https://developer.apple.com/documentation/wifiaware/waperformancereport)

# WAPerformanceReport

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The current performance state of the data path.

## Declaration

```swift
struct WAPerformanceReport
```

## Topics

### Reporting the data collection time

- [timestamp](waperformancereport/timestamp.md): The time that the framework generates the report.
- [localTimestamp](waperformancereport/localtimestamp.md): The time the report was generated, using a local monotonically increasing clock.

### Getting the throughput metrics

- [throughputCeiling](waperformancereport/throughputceiling.md): The highest throughput the connection is capable of under ideal conditions, given the hardware capabilities of both devices.
- [throughputCapacity](waperformancereport/throughputcapacity.md): The current estimated average throughput capacity of the data path, given the current radio conditions and concurrent Wi-Fi use cases.
- [throughputCapacityRatio](waperformancereport/throughputcapacityratio.md): The current normalized ratio of the throughput capacity and throughput ceiling.

### Getting the latency metrics

- [transmitLatency](waperformancereport/transmitlatency.md): The measured transmit latency per access category that is in use with the remote devices and that the system can measure.
- [WAPerformanceReport.TransmitLatencyMetrics](waperformancereport/transmitlatencymetrics.md): A report of the transmit latency to the specified peer.

### Getting the radio metrics

- [signalStrength](waperformancereport/signalstrength.md): The current signal strength of the remote device.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Connection performance

- [NWPath](https://developer.apple.com/documentation/network/nwpath): An object that contains information about the properties of the network that a connection uses, or that are available to your app.
- [WAPath](wapath.md): A representation of the current Wi-Fi Aware path.
- [WAPerformanceMode](waperformancemode.md): The performance mode that indicates what performance criterion to prioritize.
- [WAAccessCategory](waaccesscategory.md): The underling quality-of-service (QoS) the Wi-Fi layer uses to transmit data packets from a connection over the air.
