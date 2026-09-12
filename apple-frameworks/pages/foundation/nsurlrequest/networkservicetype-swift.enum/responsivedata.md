> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/networkservicetype-swift.enum/responsivedata](https://developer.apple.com/documentation/foundation/nsurlrequest/networkservicetype-swift.enum/responsivedata)

# NSURLRequest.NetworkServiceType.responsiveData (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A service type for medium-delay tolerant, elastic and inelastic flow, bursty, and long-lived connections.

## Declaration

```swift
case responsiveData
```

<a id="Discussion"></a>

## Discussion

Use this service type for interactive situations where the user is anticipating a quick response, like instant messaging or completing a purchase.

## See Also

### Network service types

- [NSURLRequest.NetworkServiceType.default](default.md): A service type for standard network traffic.
- [NSURLRequest.NetworkServiceType.video](video.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NSURLRequest.NetworkServiceType.background](background.md): A service type for high-delay tolerant, high-loss tolerant, elastic flow, and variable size connections.
- [NSURLRequest.NetworkServiceType.voice](voice.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NSURLRequest.NetworkServiceType.callSignaling](callsignaling.md): A service for low-loss tolerant, inelastic flow, jitter tolerant, short but bursty rate, and variable size connections.
- [NSURLRequest.NetworkServiceType.avStreaming](avstreaming.md): A service type for medium-delay tolerant, low-medium-loss tolerant, elastic flow, constant packet interval, and variable rate and size connections.
- [NSURLRequest.NetworkServiceType.responsiveAV](responsiveav.md): A service type for low-delay tolerant, low-to-medium-loss tolerant, elastic flow, variable packet interval, rate, size responsive and time-sensitive connections.
- [NSURLRequest.NetworkServiceType.voip](voip.md): Deprecated. A service type for VoIP traffic.

# NSURLNetworkServiceTypeResponsiveData (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A service type for medium-delay tolerant, elastic and inelastic flow, bursty, and long-lived connections.

## Declaration

```objectivec
NSURLNetworkServiceTypeResponsiveData
```

<a id="Discussion"></a>

## Discussion

Use this service type for interactive situations where the user is anticipating a quick response, like instant messaging or completing a purchase.

## See Also

### Network service types

- [NSURLNetworkServiceTypeDefault](default.md): A service type for standard network traffic.
- [NSURLNetworkServiceTypeVideo](video.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NSURLNetworkServiceTypeBackground](background.md): A service type for high-delay tolerant, high-loss tolerant, elastic flow, and variable size connections.
- [NSURLNetworkServiceTypeVoice](voice.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NSURLNetworkServiceTypeCallSignaling](callsignaling.md): A service for low-loss tolerant, inelastic flow, jitter tolerant, short but bursty rate, and variable size connections.
- [NSURLNetworkServiceTypeAVStreaming](avstreaming.md): A service type for medium-delay tolerant, low-medium-loss tolerant, elastic flow, constant packet interval, and variable rate and size connections.
- [NSURLNetworkServiceTypeResponsiveAV](responsiveav.md): A service type for low-delay tolerant, low-to-medium-loss tolerant, elastic flow, variable packet interval, rate, size responsive and time-sensitive connections.
- [NSURLNetworkServiceTypeVoIP](voip.md): Deprecated. A service type for VoIP traffic.
