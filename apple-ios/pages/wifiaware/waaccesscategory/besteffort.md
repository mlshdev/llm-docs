> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waaccesscategory/besteffort](https://developer.apple.com/documentation/wifiaware/waaccesscategory/besteffort)

# WAAccessCategory.bestEffort

**Framework:** Wi-Fi Aware  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A default quality-of-service (QoS) type that provides high throughput for data transfers of any size.

## Declaration

```swift
case bestEffort
```

<a id="discussion"></a>

## Discussion

This Wi-Fi access category is the default for packets transmitted by a `NetworkConnection`, as well as if you set `serviceClass = .bestEffort` with [NWParameters](https://developer.apple.com/documentation/network/nwparameters). Use this category for bulk transfers that are visible to a person using your app.

For more information, refer to [NWParameters.ServiceClass.bestEffort](https://developer.apple.com/documentation/network/nwparameters/serviceclass-swift.enum/besteffort)

## See Also

### Providing throughput

- [WAAccessCategory.background](background.md): A quality-of-service (QoS) type that provides high throughput for delay-tolerant, noninteractive data transfers of any size.
- [WAAccessCategory.interactiveVideo](interactivevideo.md): A quality-of-service (QoS) type that provides low-latency for moderate throughput flows.
- [WAAccessCategory.interactiveVoice](interactivevoice.md): A quality-of-service (QoS) type that provides very low-latency for low-throughput flows.
