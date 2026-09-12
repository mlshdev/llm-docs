> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/timeoutinterval](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/timeoutinterval)

# timeoutInterval (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request’s timeout interval, in seconds.

## Declaration

```swift
var timeoutInterval: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

If during a connection attempt the request remains idle for longer than the timeout interval, the request is considered to have timed out. The default timeout interval is 60 seconds.

As a general rule, you should not use short timeout intervals. Instead, you should provide an easy way for the user to cancel a long-running operation. For more information, read [Designing for Real-World Networks](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/NetworkingOverview/WhyNetworkingIsHard/WhyNetworkingIsHard.html#//apple_ref/doc/uid/TP40010220-CH13) in [Networking Overview](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/NetworkingOverview/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010220).

<a id="Special-considerations"></a>

### Special considerations

In iOS versions prior to iOS 6, the minimum (and default) timeout interval for any request containing a request body was 240 seconds.

## See Also

### Controlling request behavior

- [httpShouldHandleCookies](httpshouldhandlecookies.md): A Boolean value that indicates whether the request should use the default cookie handling for the request.
- [httpShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request can continue transmitting data before receiving a response from an earlier transmission.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that indicates whether a connection can use the device’s cellular network (if present).

# timeoutInterval (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request’s timeout interval, in seconds.

## Declaration

```objectivec
@property NSTimeInterval timeoutInterval;
```

<a id="Discussion"></a>

## Discussion

If during a connection attempt the request remains idle for longer than the timeout interval, the request is considered to have timed out. The default timeout interval is 60 seconds.

As a general rule, you should not use short timeout intervals. Instead, you should provide an easy way for the user to cancel a long-running operation. For more information, read [Designing for Real-World Networks](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/NetworkingOverview/WhyNetworkingIsHard/WhyNetworkingIsHard.html#//apple_ref/doc/uid/TP40010220-CH13) in [Networking Overview](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/NetworkingOverview/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010220).

<a id="Special-considerations"></a>

### Special considerations

In iOS versions prior to iOS 6, the minimum (and default) timeout interval for any request containing a request body was 240 seconds.

## See Also

### Controlling request behavior

- [HTTPShouldHandleCookies](httpshouldhandlecookies.md): A Boolean value that indicates whether the request should use the default cookie handling for the request.
- [HTTPShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value that indicates whether the request can continue transmitting data before receiving a response from an earlier transmission.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that indicates whether a connection can use the device’s cellular network (if present).
