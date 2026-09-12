> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waperformancereport/throughputcapacityratio](https://developer.apple.com/documentation/wifiaware/waperformancereport/throughputcapacityratio)

# throughputCapacityRatio

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The current normalized ratio of the throughput capacity and throughput ceiling.

## Declaration

```swift
var throughputCapacityRatio: Double? { get }
```

<a id="discussion"></a>

## Discussion

This ratio reflects the current throughput capability of the data path as a value between `0.0` and `1.0`. It provides a consistent measure of the relative capacity and health of a data path, regardless of the different hardware capabilities across devices.

## See Also

### Getting the throughput metrics

- [throughputCeiling](throughputceiling.md): The highest throughput the connection is capable of under ideal conditions, given the hardware capabilities of both devices.
- [throughputCapacity](throughputcapacity.md): The current estimated average throughput capacity of the data path, given the current radio conditions and concurrent Wi-Fi use cases.
