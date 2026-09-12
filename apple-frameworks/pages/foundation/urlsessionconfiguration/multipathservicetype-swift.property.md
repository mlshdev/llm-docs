> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/multipathservicetype-swift.property](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/multipathservicetype-swift.property)

# multipathServiceType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A service type that specifies the Multipath TCP connection policy for transmitting data over Wi-Fi and cellular interfaces.

## Declaration

```swift
var multipathServiceType: URLSessionConfiguration.MultipathServiceType { get set }
```

## Mentioned In

- [Improving network reliability using Multipath TCP](../improving-network-reliability-using-multipath-tcp.md)

<a id="Discussion"></a>

## Discussion

Multipath TCP, defined by the IETF in [RFC 6824](https://tools.ietf.org/html/rfc6824), is an extension to TCP that permits multiple interfaces to transmit a single data stream. This capability allows a seamless handover from Wi-Fi to cellular, aimed at making both interfaces more efficient and improving the user experience.

The [multipathServiceType](multipathservicetype-swift.property.md) property defines which policy the Multipath TCP stack uses to schedule traffic across Wi-Fi and cellular interfaces. The default value is `none`, meaning Multipath TCP is disabled. You can also select handover mode, which provides seamless handover between Wi-Fi and cellular.

Multipath TCP requires server support. Resources for Linux-based systems are available at [https://mptcp.dev](https://mptcp.dev).

## See Also

### Supporting Multipath TCP

- [Improving network reliability using Multipath TCP](../improving-network-reliability-using-multipath-tcp.md): Use the available radios in iOS devices to improve your app’s network reliability and performance.
- [URLSessionConfiguration.MultipathServiceType](multipathservicetype-swift.enum.md): Constants that specify the type of service that Multipath TCP uses.
- [Multipath Entitlement](../../bundleresources/entitlements/com.apple.developer.networking.multipath.md): A Boolean value indicating whether your app may use Multipath protocols to seamlessly transition between Wi-Fi and cellular networks.

# multipathServiceType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A service type that specifies the Multipath TCP connection policy for transmitting data over Wi-Fi and cellular interfaces.

## Declaration

```objectivec
@property NSURLSessionMultipathServiceType multipathServiceType;
```

## Mentioned In

- [Improving network reliability using Multipath TCP](../improving-network-reliability-using-multipath-tcp.md)

<a id="Discussion"></a>

## Discussion

Multipath TCP, defined by the IETF in [RFC 6824](https://tools.ietf.org/html/rfc6824), is an extension to TCP that permits multiple interfaces to transmit a single data stream. This capability allows a seamless handover from Wi-Fi to cellular, aimed at making both interfaces more efficient and improving the user experience.

The [multipathServiceType](multipathservicetype-swift.property.md) property defines which policy the Multipath TCP stack uses to schedule traffic across Wi-Fi and cellular interfaces. The default value is `none`, meaning Multipath TCP is disabled. You can also select handover mode, which provides seamless handover between Wi-Fi and cellular.

Multipath TCP requires server support. Resources for Linux-based systems are available at [https://mptcp.dev](https://mptcp.dev).

## See Also

### Supporting Multipath TCP

- [Improving network reliability using Multipath TCP](../improving-network-reliability-using-multipath-tcp.md): Use the available radios in iOS devices to improve your app’s network reliability and performance.
- [NSURLSessionMultipathServiceType](multipathservicetype-swift.enum.md): Constants that specify the type of service that Multipath TCP uses.
- [Multipath Entitlement](../../bundleresources/entitlements/com.apple.developer.networking.multipath.md): A Boolean value indicating whether your app may use Multipath protocols to seamlessly transition between Wi-Fi and cellular networks.
