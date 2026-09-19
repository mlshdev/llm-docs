> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waperformancereport/transmitlatencymetrics/average

# average

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The average per-packet transmit latency measured for this flow’s peers.

## Declaration

```swift
let average: Duration?
```

<a id="discussion"></a>

## Discussion

This property returns `nil` if the system can’t measure the transmit latency.
