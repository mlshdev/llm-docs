> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/multipathservicetype-swift.enum/none](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/multipathservicetype-swift.enum/none)

# URLSessionConfiguration.MultipathServiceType.none (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The default service type indicating that Multipath TCP should not be used.

## Declaration

```swift
case none
```

## See Also

### Service types

- [URLSessionConfiguration.MultipathServiceType.handover](handover.md): A Multipath TCP service that provides seamless handover between Wi-Fi and cellular in order to preserve the connection.
- [URLSessionConfiguration.MultipathServiceType.interactive](interactive.md): A service whereby Multipath TCP attempts to use the lowest-latency interface.
- [URLSessionConfiguration.MultipathServiceType.aggregate](aggregate.md): A service that aggregates the capacities of other Multipath options in an attempt to increase throughput and minimize latency.

# NSURLSessionMultipathServiceTypeNone (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The default service type indicating that Multipath TCP should not be used.

## Declaration

```objectivec
NSURLSessionMultipathServiceTypeNone
```

## See Also

### Service types

- [NSURLSessionMultipathServiceTypeHandover](handover.md): A Multipath TCP service that provides seamless handover between Wi-Fi and cellular in order to preserve the connection.
- [NSURLSessionMultipathServiceTypeInteractive](interactive.md): A service whereby Multipath TCP attempts to use the lowest-latency interface.
- [NSURLSessionMultipathServiceTypeAggregate](aggregate.md): A service that aggregates the capacities of other Multipath options in an attempt to increase throughput and minimize latency.
