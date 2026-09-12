> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/serviceclass-swift.enum/interactivevoice](https://developer.apple.com/documentation/network/nwparameters/serviceclass-swift.enum/interactivevoice)

# NWParameters.ServiceClass.interactiveVoice

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.

## Declaration

```swift
case interactiveVoice
```

<a id="discussion"></a>

## Discussion

This service type doesn’t work well for bulk transfers because it doesn’t support high throughput.

## See Also

### Service Classes

- [NWParameters.ServiceClass.bestEffort](besteffort.md): The default service type.
- [NWParameters.ServiceClass.background](background.md): A service type for high-delay tolerant, high-loss tolerant, elastic flow, and variable size connections.
- [NWParameters.ServiceClass.interactiveVideo](interactivevideo.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NWParameters.ServiceClass.responsiveData](responsivedata.md): A service type for medium-delay tolerant, inelastic flow, and bursty connections.
- [NWParameters.ServiceClass.signaling](signaling.md): A service type for low-loss tolerant, inelastic flow, jitter tolerant, bursty but short rate, and variable size connections.
