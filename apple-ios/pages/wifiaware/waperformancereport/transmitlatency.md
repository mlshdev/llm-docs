> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waperformancereport/transmitlatency](https://developer.apple.com/documentation/wifiaware/waperformancereport/transmitlatency)

# transmitLatency

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The measured transmit latency per access category that is in use with the remote devices and that the system can measure.

## Declaration

```swift
let transmitLatency: [WAAccessCategory : WAPerformanceReport.TransmitLatencyMetrics]
```

<a id="discussion"></a>

## Discussion

The system only reports in-use and measurable access categories. The dictionary is empty if there’s no activity, or if the system can’t measure the data.

## See Also

### Getting the latency metrics

- [WAPerformanceReport.TransmitLatencyMetrics](transmitlatencymetrics.md): A report of the transmit latency to the specified peer.
