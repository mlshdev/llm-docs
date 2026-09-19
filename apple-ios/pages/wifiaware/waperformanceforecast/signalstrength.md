> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waperformanceforecast/signalstrength

# signalStrength

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The estimated signal strength of the remote device.

## Declaration

```swift
let signalStrength: Double?
```

<a id="discussion"></a>

## Discussion

The resulting value can be between `0.0` (weakest) and `1.0` (strongest), or it can be `nil` if the system can’t measure the value.
