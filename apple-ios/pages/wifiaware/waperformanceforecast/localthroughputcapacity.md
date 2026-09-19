> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waperformanceforecast/localthroughputcapacity

# localThroughputCapacity

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The estimated average throughput capacity of the local device for a connection setup to the remote device.

## Declaration

```swift
let localThroughputCapacity: Double?
```

<a id="discussion"></a>

## Discussion

The result is in `Mbps` and can be `nil` if the system can’t calculate the capacity.
