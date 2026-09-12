> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waaccesscategory/background](https://developer.apple.com/documentation/wifiaware/waaccesscategory/background)

# WAAccessCategory.background

**Framework:** Wi-Fi Aware  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A quality-of-service (QoS) type that provides high throughput for delay-tolerant, noninteractive data transfers of any size.

## Declaration

```swift
case background
```

<a id="discussion"></a>

## Discussion

Use this Wi-Fi access category for background data transfers, to prevent background traffic from interfering with other higher-priority flows, and for packets transmitted by a `NetworkConnection` that you set with NWParameter’s `serviceClass = .background`.

For more information, refer to [NWParameters.ServiceClass.background](https://developer.apple.com/documentation/network/nwparameters/serviceclass-swift.enum/background)

## See Also

### Providing throughput

- [WAAccessCategory.bestEffort](besteffort.md): A default quality-of-service (QoS) type that provides high throughput for data transfers of any size.
- [WAAccessCategory.interactiveVideo](interactivevideo.md): A quality-of-service (QoS) type that provides low-latency for moderate throughput flows.
- [WAAccessCategory.interactiveVoice](interactivevoice.md): A quality-of-service (QoS) type that provides very low-latency for low-throughput flows.
