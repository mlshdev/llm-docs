> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/multipathservicetype-swift.enum](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/multipathservicetype-swift.enum)

# URLSessionConfiguration.MultipathServiceType (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that specify the type of service that Multipath TCP uses.

## Declaration

```swift
enum MultipathServiceType
```

## Mentioned In

- [Improving network reliability using Multipath TCP](../improving-network-reliability-using-multipath-tcp.md)

## Topics

### Service types

- [URLSessionConfiguration.MultipathServiceType.none](multipathservicetype-swift.enum/none.md): The default service type indicating that Multipath TCP should not be used.
- [URLSessionConfiguration.MultipathServiceType.handover](multipathservicetype-swift.enum/handover.md): A Multipath TCP service that provides seamless handover between Wi-Fi and cellular in order to preserve the connection.
- [URLSessionConfiguration.MultipathServiceType.interactive](multipathservicetype-swift.enum/interactive.md): A service whereby Multipath TCP attempts to use the lowest-latency interface.
- [URLSessionConfiguration.MultipathServiceType.aggregate](multipathservicetype-swift.enum/aggregate.md): A service that aggregates the capacities of other Multipath options in an attempt to increase throughput and minimize latency.

### Initializers

- [init(rawValue:)](multipathservicetype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Multipath TCP

- [Improving network reliability using Multipath TCP](../improving-network-reliability-using-multipath-tcp.md): Use the available radios in iOS devices to improve your app’s network reliability and performance.
- [multipathServiceType](multipathservicetype-swift.property.md): A service type that specifies the Multipath TCP connection policy for transmitting data over Wi-Fi and cellular interfaces.
- [Multipath Entitlement](../../bundleresources/entitlements/com.apple.developer.networking.multipath.md): A Boolean value indicating whether your app may use Multipath protocols to seamlessly transition between Wi-Fi and cellular networks.

# NSURLSessionMultipathServiceType (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that specify the type of service that Multipath TCP uses.

## Declaration

```objectivec
enum NSURLSessionMultipathServiceType : NSInteger;
```

## Mentioned In

- [Improving network reliability using Multipath TCP](../improving-network-reliability-using-multipath-tcp.md)

## Topics

### Service types

- [NSURLSessionMultipathServiceTypeNone](multipathservicetype-swift.enum/none.md): The default service type indicating that Multipath TCP should not be used.
- [NSURLSessionMultipathServiceTypeHandover](multipathservicetype-swift.enum/handover.md): A Multipath TCP service that provides seamless handover between Wi-Fi and cellular in order to preserve the connection.
- [NSURLSessionMultipathServiceTypeInteractive](multipathservicetype-swift.enum/interactive.md): A service whereby Multipath TCP attempts to use the lowest-latency interface.
- [NSURLSessionMultipathServiceTypeAggregate](multipathservicetype-swift.enum/aggregate.md): A service that aggregates the capacities of other Multipath options in an attempt to increase throughput and minimize latency.

## See Also

### Supporting Multipath TCP

- [Improving network reliability using Multipath TCP](../improving-network-reliability-using-multipath-tcp.md): Use the available radios in iOS devices to improve your app’s network reliability and performance.
- [multipathServiceType](multipathservicetype-swift.property.md): A service type that specifies the Multipath TCP connection policy for transmitting data over Wi-Fi and cellular interfaces.
- [Multipath Entitlement](../../bundleresources/entitlements/com.apple.developer.networking.multipath.md): A Boolean value indicating whether your app may use Multipath protocols to seamlessly transition between Wi-Fi and cellular networks.
