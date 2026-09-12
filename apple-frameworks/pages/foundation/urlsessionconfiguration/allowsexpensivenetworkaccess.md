> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/allowsexpensivenetworkaccess](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/allowsexpensivenetworkaccess)

# allowsExpensiveNetworkAccess (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether connections may use a network interface that the system considers expensive.

## Declaration

```swift
var allowsExpensiveNetworkAccess: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The system determines what constitutes “expensive” based on the nature of the network interface and other factors. iOS 13 considers most cellular networks and personal hotspots expensive. If there are no nonexpensive network interfaces available and the session’s [allowsExpensiveNetworkAccess](allowsexpensivenetworkaccess.md) property is [false](https://developer.apple.com/documentation/swift/false), any task created from the session fails. In this case, the error provided when the task fails has a [networkUnavailableReason](../urlerror/networkunavailablereason-swift.property.md) property whose value is [NSURLErrorNetworkUnavailableReasonExpensive](../nsurlerrornetworkunavailablereason/nsurlerrornetworkunavailablereasonexpensive.md).

You can limit your app’s of use of expensive network access to user-initiated tasks, and put off discretionary tasks until a nonexpensive interface becomes available. To do this, set [allowsExpensiveNetworkAccess](allowsexpensivenetworkaccess.md) (and [allowsConstrainedNetworkAccess](allowsconstrainednetworkaccess.md)) to [false](https://developer.apple.com/documentation/swift/false) and [waitsForConnectivity](waitsforconnectivity.md) to [true](https://developer.apple.com/documentation/swift/true). This way, your [URLSessionTask](../urlsessiontask.md) waits for a suitable interface to become available before sending or receiving data.

To test the behavior of this property, you can override the device’s current values for cellular and Wi-Fi cost in Settings \> Developer \> Network Override.

> **Tip**

>  Prefer basing your app’s policy logic around the [allowsConstrainedNetworkAccess](allowsconstrainednetworkaccess.md) property rather than this one. People using your app can use the “Low Data Mode” setting to set the constrained status, and thereby choose to use a potentially expensive network.

## See Also

### Supporting limited modes

- [allowsConstrainedNetworkAccess](allowsconstrainednetworkaccess.md): A Boolean value that indicates whether connections may use the network when the user has specified Low Data Mode.

# allowsExpensiveNetworkAccess (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether connections may use a network interface that the system considers expensive.

## Declaration

```objectivec
@property BOOL allowsExpensiveNetworkAccess;
```

<a id="Discussion"></a>

## Discussion

The system determines what constitutes “expensive” based on the nature of the network interface and other factors. iOS 13 considers most cellular networks and personal hotspots expensive. If there are no nonexpensive network interfaces available and the session’s [allowsExpensiveNetworkAccess](allowsexpensivenetworkaccess.md) property is [false](https://developer.apple.com/documentation/swift/false), any task created from the session fails. In this case, the error provided when the task fails has a [networkUnavailableReason](../urlerror/networkunavailablereason-swift.property.md) property whose value is [NSURLErrorNetworkUnavailableReasonExpensive](../nsurlerrornetworkunavailablereason/nsurlerrornetworkunavailablereasonexpensive.md).

You can limit your app’s of use of expensive network access to user-initiated tasks, and put off discretionary tasks until a nonexpensive interface becomes available. To do this, set [allowsExpensiveNetworkAccess](allowsexpensivenetworkaccess.md) (and [allowsConstrainedNetworkAccess](allowsconstrainednetworkaccess.md)) to [false](https://developer.apple.com/documentation/swift/false) and [waitsForConnectivity](waitsforconnectivity.md) to [true](https://developer.apple.com/documentation/swift/true). This way, your [NSURLSessionTask](../urlsessiontask.md) waits for a suitable interface to become available before sending or receiving data.

To test the behavior of this property, you can override the device’s current values for cellular and Wi-Fi cost in Settings \> Developer \> Network Override.

> **Tip**

>  Prefer basing your app’s policy logic around the [allowsConstrainedNetworkAccess](allowsconstrainednetworkaccess.md) property rather than this one. People using your app can use the “Low Data Mode” setting to set the constrained status, and thereby choose to use a potentially expensive network.

## See Also

### Supporting limited modes

- [allowsConstrainedNetworkAccess](allowsconstrainednetworkaccess.md): A Boolean value that indicates whether connections may use the network when the user has specified Low Data Mode.
