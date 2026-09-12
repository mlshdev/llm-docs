> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/multipathservicetype-swift.enum/handover](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/multipathservicetype-swift.enum/handover)

# URLSessionConfiguration.MultipathServiceType.handover (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Multipath TCP service that provides seamless handover between Wi-Fi and cellular in order to preserve the connection.

## Declaration

```swift
case handover
```

<a id="Discussion"></a>

## Discussion

Specify this option for long-lived or persistent connections. You must also set the [Multipath Entitlement](../../../bundleresources/entitlements/com.apple.developer.networking.multipath.md) in the Xcode Capabilities pane for your app.

## See Also

### Service types

- [URLSessionConfiguration.MultipathServiceType.none](none.md): The default service type indicating that Multipath TCP should not be used.
- [URLSessionConfiguration.MultipathServiceType.interactive](interactive.md): A service whereby Multipath TCP attempts to use the lowest-latency interface.
- [URLSessionConfiguration.MultipathServiceType.aggregate](aggregate.md): A service that aggregates the capacities of other Multipath options in an attempt to increase throughput and minimize latency.

# NSURLSessionMultipathServiceTypeHandover (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Multipath TCP service that provides seamless handover between Wi-Fi and cellular in order to preserve the connection.

## Declaration

```objectivec
NSURLSessionMultipathServiceTypeHandover
```

<a id="Discussion"></a>

## Discussion

Specify this option for long-lived or persistent connections. You must also set the [Multipath Entitlement](../../../bundleresources/entitlements/com.apple.developer.networking.multipath.md) in the Xcode Capabilities pane for your app.

## See Also

### Service types

- [NSURLSessionMultipathServiceTypeNone](none.md): The default service type indicating that Multipath TCP should not be used.
- [NSURLSessionMultipathServiceTypeInteractive](interactive.md): A service whereby Multipath TCP attempts to use the lowest-latency interface.
- [NSURLSessionMultipathServiceTypeAggregate](aggregate.md): A service that aggregates the capacities of other Multipath options in an attempt to increase throughput and minimize latency.
