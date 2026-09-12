> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waperformancereport/throughputceiling](https://developer.apple.com/documentation/wifiaware/waperformancereport/throughputceiling)

# throughputCeiling

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The highest throughput the connection is capable of under ideal conditions, given the hardware capabilities of both devices.

## Declaration

```swift
let throughputCeiling: Double?
```

<a id="discussion"></a>

## Discussion

The result is in `Mbps` and can be `nil` if the system can’t calculate it.

## See Also

### Getting the throughput metrics

- [throughputCapacity](throughputcapacity.md): The current estimated average throughput capacity of the data path, given the current radio conditions and concurrent Wi-Fi use cases.
- [throughputCapacityRatio](throughputcapacityratio.md): The current normalized ratio of the throughput capacity and throughput ceiling.
