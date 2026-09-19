> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waperformanceforecast/localthroughputcapacityratio

# localThroughputCapacityRatio

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The estimated normalized ratio of the local throughput capacity and the local throughput ceiling.

## Declaration

```swift
let localThroughputCapacityRatio: Double?
```

<a id="discussion"></a>

## Discussion

This ratio reflects the estimated throughput capability for a connection setup to the remote device as a value between `0.0` and `1.0`.
