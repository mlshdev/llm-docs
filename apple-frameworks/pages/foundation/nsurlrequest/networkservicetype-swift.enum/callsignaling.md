> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/networkservicetype-swift.enum/callsignaling](https://developer.apple.com/documentation/foundation/nsurlrequest/networkservicetype-swift.enum/callsignaling)

# NSURLRequest.NetworkServiceType.callSignaling (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A service for low-loss tolerant, inelastic flow, jitter tolerant, short but bursty rate, and variable size connections.

## Declaration

```swift
case callSignaling
```

<a id="Discussion"></a>

## Discussion

Use this for establishing, maintaining, and tearing down a VoIP call.

## See Also

### Network service types

- [NSURLRequest.NetworkServiceType.default](default.md): A service type for standard network traffic.
- [NSURLRequest.NetworkServiceType.video](video.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NSURLRequest.NetworkServiceType.background](background.md): A service type for high-delay tolerant, high-loss tolerant, elastic flow, and variable size connections.
- [NSURLRequest.NetworkServiceType.voice](voice.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NSURLRequest.NetworkServiceType.responsiveData](responsivedata.md): A service type for medium-delay tolerant, elastic and inelastic flow, bursty, and long-lived connections.
- [NSURLRequest.NetworkServiceType.avStreaming](avstreaming.md): A service type for medium-delay tolerant, low-medium-loss tolerant, elastic flow, constant packet interval, and variable rate and size connections.
- [NSURLRequest.NetworkServiceType.responsiveAV](responsiveav.md): A service type for low-delay tolerant, low-to-medium-loss tolerant, elastic flow, variable packet interval, rate, size responsive and time-sensitive connections.
- [NSURLRequest.NetworkServiceType.voip](voip.md): Deprecated. A service type for VoIP traffic.

# NSURLNetworkServiceTypeCallSignaling (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A service for low-loss tolerant, inelastic flow, jitter tolerant, short but bursty rate, and variable size connections.

## Declaration

```objectivec
NSURLNetworkServiceTypeCallSignaling
```

<a id="Discussion"></a>

## Discussion

Use this for establishing, maintaining, and tearing down a VoIP call.

## See Also

### Network service types

- [NSURLNetworkServiceTypeDefault](default.md): A service type for standard network traffic.
- [NSURLNetworkServiceTypeVideo](video.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NSURLNetworkServiceTypeBackground](background.md): A service type for high-delay tolerant, high-loss tolerant, elastic flow, and variable size connections.
- [NSURLNetworkServiceTypeVoice](voice.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NSURLNetworkServiceTypeResponsiveData](responsivedata.md): A service type for medium-delay tolerant, elastic and inelastic flow, bursty, and long-lived connections.
- [NSURLNetworkServiceTypeAVStreaming](avstreaming.md): A service type for medium-delay tolerant, low-medium-loss tolerant, elastic flow, constant packet interval, and variable rate and size connections.
- [NSURLNetworkServiceTypeResponsiveAV](responsiveav.md): A service type for low-delay tolerant, low-to-medium-loss tolerant, elastic flow, variable packet interval, rate, size responsive and time-sensitive connections.
- [NSURLNetworkServiceTypeVoIP](voip.md): Deprecated. A service type for VoIP traffic.
