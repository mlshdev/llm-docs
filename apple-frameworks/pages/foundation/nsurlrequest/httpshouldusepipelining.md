> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/httpshouldusepipelining](https://developer.apple.com/documentation/foundation/nsurlrequest/httpshouldusepipelining)

# httpShouldUsePipelining (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 18.4) · iPadOS 4.0+ (deprecated in 18.4) · Mac Catalyst 13.1+ (deprecated in 18.4) · macOS 10.7+ (deprecated in 15.4) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 2.0+ (deprecated in 11.4)

A Boolean value that indicates whether the request should continue transmitting data before receiving a response from an earlier transmission.

> Pipelining is an HTTP/1.1 concept. Adopt HTTP/2 or later instead.

## Declaration

```swift
var httpShouldUsePipelining: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the request should continue transmitting data; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [httpShouldUsePipelining](../nsmutableurlrequest/httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request can continue transmitting data before receiving a response from an earlier transmission.

### Controlling request behavior

- [timeoutInterval](timeoutinterval.md): The request’s timeout interval, in seconds.
- [httpShouldHandleCookies](httpshouldhandlecookies.md): A Boolean value that indicates whether the default cookie handling will be used for this request.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that indicates whether the request is allowed to use the cellular radio (if present).

# HTTPShouldUsePipelining (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 18.4) · iPadOS 4.0+ (deprecated in 18.4) · Mac Catalyst 13.1+ (deprecated in 18.4) · macOS 10.7+ (deprecated in 15.4) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 2.0+ (deprecated in 11.4)

A Boolean value that indicates whether the request should continue transmitting data before receiving a response from an earlier transmission.

> Pipelining is an HTTP/1.1 concept. Adopt HTTP/2 or later instead.

## Declaration

```objectivec
@property (readonly) BOOL HTTPShouldUsePipelining;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the request should continue transmitting data; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [HTTPShouldUsePipelining](../nsmutableurlrequest/httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request can continue transmitting data before receiving a response from an earlier transmission.

### Controlling request behavior

- [timeoutInterval](timeoutinterval.md): The request’s timeout interval, in seconds.
- [HTTPShouldHandleCookies](httpshouldhandlecookies.md): A Boolean value that indicates whether the default cookie handling will be used for this request.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that indicates whether the request is allowed to use the cellular radio (if present).
