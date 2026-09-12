> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/networkservicetype-swift.enum](https://developer.apple.com/documentation/foundation/nsurlrequest/networkservicetype-swift.enum)

# NSURLRequest.NetworkServiceType (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that specify how a request uses network resources.

## Declaration

```swift
enum NetworkServiceType
```

<a id="overview"></a>

## Overview

The network service type provides a hint to the operating system about the nature and use of the underlying traffic. This hint enhances the system’s ability to prioritize traffic, determine how quickly it needs to wake up the cellular or Wi-Fi radio, and so on. By providing accurate information, you improve the system’s ability to optimally balance battery life, performance, and other considerations.

Make connections using the [NSURLRequest.NetworkServiceType.default](networkservicetype-swift.enum/default.md) service type.

## Topics

### Network service types

- [NSURLRequest.NetworkServiceType.default](networkservicetype-swift.enum/default.md): A service type for standard network traffic.
- [NSURLRequest.NetworkServiceType.video](networkservicetype-swift.enum/video.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NSURLRequest.NetworkServiceType.background](networkservicetype-swift.enum/background.md): A service type for high-delay tolerant, high-loss tolerant, elastic flow, and variable size connections.
- [NSURLRequest.NetworkServiceType.voice](networkservicetype-swift.enum/voice.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NSURLRequest.NetworkServiceType.callSignaling](networkservicetype-swift.enum/callsignaling.md): A service for low-loss tolerant, inelastic flow, jitter tolerant, short but bursty rate, and variable size connections.
- [NSURLRequest.NetworkServiceType.responsiveData](networkservicetype-swift.enum/responsivedata.md): A service type for medium-delay tolerant, elastic and inelastic flow, bursty, and long-lived connections.
- [NSURLRequest.NetworkServiceType.avStreaming](networkservicetype-swift.enum/avstreaming.md): A service type for medium-delay tolerant, low-medium-loss tolerant, elastic flow, constant packet interval, and variable rate and size connections.
- [NSURLRequest.NetworkServiceType.responsiveAV](networkservicetype-swift.enum/responsiveav.md): A service type for low-delay tolerant, low-to-medium-loss tolerant, elastic flow, variable packet interval, rate, size responsive and time-sensitive connections.
- [NSURLRequest.NetworkServiceType.voip](networkservicetype-swift.enum/voip.md): Deprecated. A service type for VoIP traffic.

### Initializers

- [init(rawValue:)](networkservicetype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the service type

- [networkServiceType](../nsmutableurlrequest/networkservicetype.md): The network service type of the connection.

# NSURLRequestNetworkServiceType (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that specify how a request uses network resources.

## Declaration

```objectivec
enum NSURLRequestNetworkServiceType : NSUInteger;
```

<a id="overview"></a>

## Overview

The network service type provides a hint to the operating system about the nature and use of the underlying traffic. This hint enhances the system’s ability to prioritize traffic, determine how quickly it needs to wake up the cellular or Wi-Fi radio, and so on. By providing accurate information, you improve the system’s ability to optimally balance battery life, performance, and other considerations.

Make connections using the [NSURLNetworkServiceTypeDefault](networkservicetype-swift.enum/default.md) service type.

## Topics

### Network service types

- [NSURLNetworkServiceTypeDefault](networkservicetype-swift.enum/default.md): A service type for standard network traffic.
- [NSURLNetworkServiceTypeVideo](networkservicetype-swift.enum/video.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NSURLNetworkServiceTypeBackground](networkservicetype-swift.enum/background.md): A service type for high-delay tolerant, high-loss tolerant, elastic flow, and variable size connections.
- [NSURLNetworkServiceTypeVoice](networkservicetype-swift.enum/voice.md): A service type for low-delay tolerant, very low-loss tolerant, inelastic flow, and constant packet rate connections.
- [NSURLNetworkServiceTypeCallSignaling](networkservicetype-swift.enum/callsignaling.md): A service for low-loss tolerant, inelastic flow, jitter tolerant, short but bursty rate, and variable size connections.
- [NSURLNetworkServiceTypeResponsiveData](networkservicetype-swift.enum/responsivedata.md): A service type for medium-delay tolerant, elastic and inelastic flow, bursty, and long-lived connections.
- [NSURLNetworkServiceTypeAVStreaming](networkservicetype-swift.enum/avstreaming.md): A service type for medium-delay tolerant, low-medium-loss tolerant, elastic flow, constant packet interval, and variable rate and size connections.
- [NSURLNetworkServiceTypeResponsiveAV](networkservicetype-swift.enum/responsiveav.md): A service type for low-delay tolerant, low-to-medium-loss tolerant, elastic flow, variable packet interval, rate, size responsive and time-sensitive connections.
- [NSURLNetworkServiceTypeVoIP](networkservicetype-swift.enum/voip.md): Deprecated. A service type for VoIP traffic.

## See Also

### Accessing the service type

- [networkServiceType](../nsmutableurlrequest/networkservicetype.md): The network service type of the connection.
