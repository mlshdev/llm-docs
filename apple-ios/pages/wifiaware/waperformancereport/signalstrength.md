> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waperformancereport/signalstrength](https://developer.apple.com/documentation/wifiaware/waperformancereport/signalstrength)

# signalStrength

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The current signal strength of the remote device.

## Declaration

```swift
let signalStrength: Double?
```

<a id="discussion"></a>

## Discussion

The resulting value can be  between `0.0` (weakest) and `1.0` (strongest), or it can be `nil` if the system can’t measure the value.
