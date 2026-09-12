> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waperformanceforecast/localthroughputceiling](https://developer.apple.com/documentation/wifiaware/waperformanceforecast/localthroughputceiling)

# localThroughputCeiling

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The highest throughput a connection from the local device to the remote device is capable of under ideal conditions, given the hardware capabilities of the local device. The actual throughput achieved can be lower in the presence of other active connections.

## Declaration

```swift
let localThroughputCeiling: Double?
```

<a id="discussion"></a>

## Discussion

The result is in `Mbps` and can be `nil` if the system can’t calculate it.
