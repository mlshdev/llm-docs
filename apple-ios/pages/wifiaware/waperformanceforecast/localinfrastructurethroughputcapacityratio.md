> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waperformanceforecast/localinfrastructurethroughputcapacityratio](https://developer.apple.com/documentation/wifiaware/waperformanceforecast/localinfrastructurethroughputcapacityratio)

# localInfrastructureThroughputCapacityRatio

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The estimated normalized ratio of the local Wi-Fi Infrastructure throughput capacity and the local Wi-Fi Infrastructure throughput ceiling, if a Wi-Fi Aware connection is setup to the remote device.

## Declaration

```swift
let localInfrastructureThroughputCapacityRatio: Double?
```

<a id="discussion"></a>

## Discussion

This ratio reflects the estimated throughput capability for a connection setup to the remote device as a value between `0.0` and `1.0`.
