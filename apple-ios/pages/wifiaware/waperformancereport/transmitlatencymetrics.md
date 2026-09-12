> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waperformancereport/transmitlatencymetrics](https://developer.apple.com/documentation/wifiaware/waperformancereport/transmitlatencymetrics)

# WAPerformanceReport.TransmitLatencyMetrics

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A report of the transmit latency to the specified peer.

## Declaration

```swift
struct TransmitLatencyMetrics
```

## Topics

### Identifying the Wi-Fi access category

- [accessCategory](transmitlatencymetrics/accesscategory.md): The Wi-Fi quality-of-service (QoS) category that this latency data tracks.

### Getting the average Latency

- [average](transmitlatencymetrics/average.md): The average per-packet transmit latency measured for this flow’s peers.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the latency metrics

- [transmitLatency](transmitlatency.md): The measured transmit latency per access category that is in use with the remote devices and that the system can measure.
