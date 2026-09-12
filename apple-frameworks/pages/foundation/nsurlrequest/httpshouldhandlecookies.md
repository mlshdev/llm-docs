> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/httpshouldhandlecookies](https://developer.apple.com/documentation/foundation/nsurlrequest/httpshouldhandlecookies)

# httpShouldHandleCookies (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the default cookie handling will be used for this request.

## Declaration

```swift
var httpShouldHandleCookies: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the default cookie handling will be used for this request, [false](https://developer.apple.com/documentation/swift/false) otherwise. The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [httpShouldHandleCookies](../nsmutableurlrequest/httpshouldhandlecookies.md): A Boolean value that indicates whether the request should use the default cookie handling for the request.

### Controlling request behavior

- [timeoutInterval](timeoutinterval.md): The request’s timeout interval, in seconds.
- [httpShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request should continue transmitting data before receiving a response from an earlier transmission.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that indicates whether the request is allowed to use the cellular radio (if present).

# HTTPShouldHandleCookies (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the default cookie handling will be used for this request.

## Declaration

```objectivec
@property (readonly) BOOL HTTPShouldHandleCookies;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the default cookie handling will be used for this request, [false](https://developer.apple.com/documentation/swift/false) otherwise. The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [HTTPShouldHandleCookies](../nsmutableurlrequest/httpshouldhandlecookies.md): A Boolean value that indicates whether the request should use the default cookie handling for the request.

### Controlling request behavior

- [timeoutInterval](timeoutinterval.md): The request’s timeout interval, in seconds.
- [HTTPShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request should continue transmitting data before receiving a response from an earlier transmission.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that indicates whether the request is allowed to use the cellular radio (if present).
