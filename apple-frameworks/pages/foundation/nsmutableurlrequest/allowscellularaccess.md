> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/allowscellularaccess](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/allowscellularaccess)

# allowsCellularAccess (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether a connection can use the device’s cellular network (if present).

## Declaration

```swift
var allowsCellularAccess: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) (the default) makes the request eligible to run over cellular, subject to other considerations (including, but not limited to, the [allowsCellularAccess](../urlsessionconfiguration/allowscellularaccess.md) property of the [URLSessionConfiguration](../urlsessionconfiguration.md)). Setting this value to [false](https://developer.apple.com/documentation/swift/false) ensures that the request will never run over cellular.

## See Also

### Related Documentation

- [waitsForConnectivity](../urlsessionconfiguration/waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.

### Controlling request behavior

- [timeoutInterval](timeoutinterval.md): The request’s timeout interval, in seconds.
- [httpShouldHandleCookies](httpshouldhandlecookies.md): A Boolean value that indicates whether the request should use the default cookie handling for the request.
- [httpShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request can continue transmitting data before receiving a response from an earlier transmission.

# allowsCellularAccess (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether a connection can use the device’s cellular network (if present).

## Declaration

```objectivec
@property BOOL allowsCellularAccess;
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) (the default) makes the request eligible to run over cellular, subject to other considerations (including, but not limited to, the [allowsCellularAccess](../urlsessionconfiguration/allowscellularaccess.md) property of the [NSURLSessionConfiguration](../urlsessionconfiguration.md)). Setting this value to [false](https://developer.apple.com/documentation/swift/false) ensures that the request will never run over cellular.

## See Also

### Related Documentation

- [waitsForConnectivity](../urlsessionconfiguration/waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.

### Controlling request behavior

- [timeoutInterval](timeoutinterval.md): The request’s timeout interval, in seconds.
- [HTTPShouldHandleCookies](httpshouldhandlecookies.md): A Boolean value that indicates whether the request should use the default cookie handling for the request.
- [HTTPShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request can continue transmitting data before receiving a response from an earlier transmission.
