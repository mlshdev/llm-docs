> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/multipathservicetype-swift.enum/interactive](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/multipathservicetype-swift.enum/interactive)

# URLSessionConfiguration.MultipathServiceType.interactive (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A service whereby Multipath TCP attempts to use the lowest-latency interface.

## Declaration

```swift
case interactive
```

<a id="Discussion"></a>

## Discussion

Specify this option for latency-sensitive, low-volume connections that might use cellular data. You must also set the [Multipath Entitlement](../../../bundleresources/entitlements/com.apple.developer.networking.multipath.md) in the Xcode Capabilities pane for your app.

## See Also

### Service types

- [URLSessionConfiguration.MultipathServiceType.none](none.md): The default service type indicating that Multipath TCP should not be used.
- [URLSessionConfiguration.MultipathServiceType.handover](handover.md): A Multipath TCP service that provides seamless handover between Wi-Fi and cellular in order to preserve the connection.
- [URLSessionConfiguration.MultipathServiceType.aggregate](aggregate.md): A service that aggregates the capacities of other Multipath options in an attempt to increase throughput and minimize latency.

# NSURLSessionMultipathServiceTypeInteractive (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A service whereby Multipath TCP attempts to use the lowest-latency interface.

## Declaration

```objectivec
NSURLSessionMultipathServiceTypeInteractive
```

<a id="Discussion"></a>

## Discussion

Specify this option for latency-sensitive, low-volume connections that might use cellular data. You must also set the [Multipath Entitlement](../../../bundleresources/entitlements/com.apple.developer.networking.multipath.md) in the Xcode Capabilities pane for your app.

## See Also

### Service types

- [NSURLSessionMultipathServiceTypeNone](none.md): The default service type indicating that Multipath TCP should not be used.
- [NSURLSessionMultipathServiceTypeHandover](handover.md): A Multipath TCP service that provides seamless handover between Wi-Fi and cellular in order to preserve the connection.
- [NSURLSessionMultipathServiceTypeAggregate](aggregate.md): A service that aggregates the capacities of other Multipath options in an attempt to increase throughput and minimize latency.
