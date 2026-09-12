> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/allowsconstrainednetworkaccess](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/allowsconstrainednetworkaccess)

# allowsConstrainedNetworkAccess (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether connections may use the network when the user has specified Low Data Mode.

## Declaration

```swift
var allowsConstrainedNetworkAccess: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

In iOS 13 and later, users can set their device to use Low Data Mode as one of the Cellular Data Options in the Settings app. Users can turn on Low Data Mode to reduce your app’s network data usage. This property controls a URL session’s behavior when the user turns on Low Data Mode. If there are no nonconstrained network interfaces available and the session’s [allowsConstrainedNetworkAccess](allowsconstrainednetworkaccess.md) property is [false](https://developer.apple.com/documentation/swift/false), any task created from the session fails. In this case, the error provided when the task fails has a [networkUnavailableReason](../urlerror/networkunavailablereason-swift.property.md) property whose value is [NSURLErrorNetworkUnavailableReasonConstrained](../nsurlerrornetworkunavailablereason/nsurlerrornetworkunavailablereasonconstrained.md).

Limit your app’s of use of constrained network access to user-initiated tasks, and put off discretionary tasks until a nonconstrained interface becomes available. To do this, set [allowsConstrainedNetworkAccess](allowsconstrainednetworkaccess.md) (and [allowsExpensiveNetworkAccess](allowsexpensivenetworkaccess.md)) to [false](https://developer.apple.com/documentation/swift/false) and [waitsForConnectivity](waitsforconnectivity.md) to [true](https://developer.apple.com/documentation/swift/true). This way, your [URLSessionTask](../urlsessiontask.md) waits for a suitable interface to become available before sending or receiving data.

## See Also

### Supporting limited modes

- [allowsExpensiveNetworkAccess](allowsexpensivenetworkaccess.md): A Boolean value that indicates whether connections may use a network interface that the system considers expensive.

# allowsConstrainedNetworkAccess (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether connections may use the network when the user has specified Low Data Mode.

## Declaration

```objectivec
@property BOOL allowsConstrainedNetworkAccess;
```

<a id="Discussion"></a>

## Discussion

In iOS 13 and later, users can set their device to use Low Data Mode as one of the Cellular Data Options in the Settings app. Users can turn on Low Data Mode to reduce your app’s network data usage. This property controls a URL session’s behavior when the user turns on Low Data Mode. If there are no nonconstrained network interfaces available and the session’s [allowsConstrainedNetworkAccess](allowsconstrainednetworkaccess.md) property is [false](https://developer.apple.com/documentation/swift/false), any task created from the session fails. In this case, the error provided when the task fails has a [networkUnavailableReason](../urlerror/networkunavailablereason-swift.property.md) property whose value is [NSURLErrorNetworkUnavailableReasonConstrained](../nsurlerrornetworkunavailablereason/nsurlerrornetworkunavailablereasonconstrained.md).

Limit your app’s of use of constrained network access to user-initiated tasks, and put off discretionary tasks until a nonconstrained interface becomes available. To do this, set [allowsConstrainedNetworkAccess](allowsconstrainednetworkaccess.md) (and [allowsExpensiveNetworkAccess](allowsexpensivenetworkaccess.md)) to [false](https://developer.apple.com/documentation/swift/false) and [waitsForConnectivity](waitsforconnectivity.md) to [true](https://developer.apple.com/documentation/swift/true). This way, your [NSURLSessionTask](../urlsessiontask.md) waits for a suitable interface to become available before sending or receiving data.

## See Also

### Supporting limited modes

- [allowsExpensiveNetworkAccess](allowsexpensivenetworkaccess.md): A Boolean value that indicates whether connections may use a network interface that the system considers expensive.
