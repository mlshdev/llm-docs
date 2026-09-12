> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/allowscellularaccess](https://developer.apple.com/documentation/foundation/nsurlrequest/allowscellularaccess)

# allowsCellularAccess (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the request is allowed to use the cellular radio (if present).

## Declaration

```swift
var allowsCellularAccess: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the cellular radio can be used; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Related Documentation

- [allowsCellularAccess](../nsmutableurlrequest/allowscellularaccess.md): A Boolean value that indicates whether a connection can use the device’s cellular network (if present).

### Controlling request behavior

- [timeoutInterval](timeoutinterval.md): The request’s timeout interval, in seconds.
- [httpShouldHandleCookies](httpshouldhandlecookies.md): A Boolean value that indicates whether the default cookie handling will be used for this request.
- [httpShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request should continue transmitting data before receiving a response from an earlier transmission.

# allowsCellularAccess (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the request is allowed to use the cellular radio (if present).

## Declaration

```objectivec
@property (readonly) BOOL allowsCellularAccess;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the cellular radio can be used; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Related Documentation

- [allowsCellularAccess](../nsmutableurlrequest/allowscellularaccess.md): A Boolean value that indicates whether a connection can use the device’s cellular network (if present).

### Controlling request behavior

- [timeoutInterval](timeoutinterval.md): The request’s timeout interval, in seconds.
- [HTTPShouldHandleCookies](httpshouldhandlecookies.md): A Boolean value that indicates whether the default cookie handling will be used for this request.
- [HTTPShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request should continue transmitting data before receiving a response from an earlier transmission.
