> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/allowsexpensivenetworkaccess](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/allowsexpensivenetworkaccess)

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

The system determines what constitutes “expensive” based on the nature of the network interface and other factors. iOS 13 considers most cellular networks and personal hotspots expensive. If there are no nonexpensive network interfaces available and the request’s [allowsExpensiveNetworkAccess](allowsexpensivenetworkaccess.md) property is [false](https://developer.apple.com/documentation/swift/false), any task created from the request fails. In this case, the error provided when the task fails has a [networkUnavailableReason](../urlerror/networkunavailablereason-swift.property.md) property whose value is [NSURLErrorNetworkUnavailableReasonExpensive](../nsurlerrornetworkunavailablereason/nsurlerrornetworkunavailablereasonexpensive.md).

Setting this property on a request overrides the [allowsExpensiveNetworkAccess](../urlsessionconfiguration/allowsexpensivenetworkaccess.md) property of [URLSessionConfiguration](../urlsessionconfiguration.md). For example, if the session configuration’s [allowsExpensiveNetworkAccess](../urlsessionconfiguration/allowsexpensivenetworkaccess.md) value is [false](https://developer.apple.com/documentation/swift/false), and you create a task from a request whose [allowsExpensiveNetworkAccess](allowsexpensivenetworkaccess.md) is [true](https://developer.apple.com/documentation/swift/true), the task treats the value as [true](https://developer.apple.com/documentation/swift/true).

Limit your app’s of use of expensive network access to user-initiated tasks, and put off discretionary tasks until a nonexpensive interface becomes available.

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

The system determines what constitutes “expensive” based on the nature of the network interface and other factors. iOS 13 considers most cellular networks and personal hotspots expensive. If there are no nonexpensive network interfaces available and the request’s [allowsExpensiveNetworkAccess](allowsexpensivenetworkaccess.md) property is [false](https://developer.apple.com/documentation/swift/false), any task created from the request fails. In this case, the error provided when the task fails has a [networkUnavailableReason](../urlerror/networkunavailablereason-swift.property.md) property whose value is [NSURLErrorNetworkUnavailableReasonExpensive](../nsurlerrornetworkunavailablereason/nsurlerrornetworkunavailablereasonexpensive.md).

Setting this property on a request overrides the [allowsExpensiveNetworkAccess](../urlsessionconfiguration/allowsexpensivenetworkaccess.md) property of [NSURLSessionConfiguration](../urlsessionconfiguration.md). For example, if the session configuration’s [allowsExpensiveNetworkAccess](../urlsessionconfiguration/allowsexpensivenetworkaccess.md) value is [false](https://developer.apple.com/documentation/swift/false), and you create a task from a request whose [allowsExpensiveNetworkAccess](allowsexpensivenetworkaccess.md) is [true](https://developer.apple.com/documentation/swift/true), the task treats the value as [true](https://developer.apple.com/documentation/swift/true).

Limit your app’s of use of expensive network access to user-initiated tasks, and put off discretionary tasks until a nonexpensive interface becomes available.

## See Also

### Supporting limited modes

- [allowsConstrainedNetworkAccess](allowsconstrainednetworkaccess.md): A Boolean value that indicates whether connections may use the network when the user has specified Low Data Mode.
