> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/timeoutinterval](https://developer.apple.com/documentation/foundation/nsurlrequest/timeoutinterval)

# timeoutInterval (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request’s timeout interval, in seconds.

## Declaration

```swift
var timeoutInterval: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

If during a connection attempt the request remains idle for longer than the timeout interval, the request is considered to have timed out.

## See Also

### Related Documentation

- [timeoutInterval](../nsmutableurlrequest/timeoutinterval.md): The request’s timeout interval, in seconds.

### Controlling request behavior

- [httpShouldHandleCookies](httpshouldhandlecookies.md): A Boolean value that indicates whether the default cookie handling will be used for this request.
- [httpShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request should continue transmitting data before receiving a response from an earlier transmission.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that indicates whether the request is allowed to use the cellular radio (if present).

# timeoutInterval (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request’s timeout interval, in seconds.

## Declaration

```objectivec
@property (readonly) NSTimeInterval timeoutInterval;
```

<a id="Discussion"></a>

## Discussion

If during a connection attempt the request remains idle for longer than the timeout interval, the request is considered to have timed out.

## See Also

### Related Documentation

- [timeoutInterval](../nsmutableurlrequest/timeoutinterval.md): The request’s timeout interval, in seconds.

### Controlling request behavior

- [HTTPShouldHandleCookies](httpshouldhandlecookies.md): A Boolean value that indicates whether the default cookie handling will be used for this request.
- [HTTPShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request should continue transmitting data before receiving a response from an earlier transmission.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that indicates whether the request is allowed to use the cellular radio (if present).
