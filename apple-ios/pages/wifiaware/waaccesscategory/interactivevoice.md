> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waaccesscategory/interactivevoice](https://developer.apple.com/documentation/wifiaware/waaccesscategory/interactivevoice)

# WAAccessCategory.interactiveVoice

**Framework:** Wi-Fi Aware  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A quality-of-service (QoS) type that provides very low-latency for low-throughput flows.

## Declaration

```swift
case interactiveVoice
```

<a id="discussion"></a>

## Discussion

Only use this type if normal Wi-Fi packet transmission delays would be directly visible to the person using your app. Use this type for low data rate, live, unbuffered realtime flows that directly interact with the person using your app.

Use this Wi-Fi access category for packets transmitted by a `NetworkConnection` that was set with `NWParameter`’s `serviceClass = .interactiveVoice`.

> **Important**

> This QoS type doesn’t support high throughput.

For more information, refer to [NWParameters.ServiceClass.interactiveVoice](https://developer.apple.com/documentation/network/nwparameters/serviceclass-swift.enum/interactivevoice)

## See Also

### Providing throughput

- [WAAccessCategory.bestEffort](besteffort.md): A default quality-of-service (QoS) type that provides high throughput for data transfers of any size.
- [WAAccessCategory.background](background.md): A quality-of-service (QoS) type that provides high throughput for delay-tolerant, noninteractive data transfers of any size.
- [WAAccessCategory.interactiveVideo](interactivevideo.md): A quality-of-service (QoS) type that provides low-latency for moderate throughput flows.
