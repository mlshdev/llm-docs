> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/httpshouldusepipelining](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/httpshouldusepipelining)

# httpShouldUsePipelining (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 18.4) · iPadOS 7.0+ (deprecated in 18.4) · Mac Catalyst 13.1+ (deprecated in 18.4) · macOS 10.9+ (deprecated in 15.4) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 2.0+ (deprecated in 11.4)

A Boolean value that determines whether the session should use HTTP pipelining.

> Pipelining is an HTTP/1.1 concept. Adopt HTTP/2 or later instead.

## Declaration

```swift
var httpShouldUsePipelining: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines whether tasks within sessions based on this configuration should use HTTP pipelining. You can also enable pipelining on a per-task basis by creating the task with an [NSURLRequest](../nsurlrequest.md) object.

The default value is [false](https://developer.apple.com/documentation/swift/false).

HTTP/2 and later ignore this property. HTTP/1.1 only considers this property in the classic loading mode ([usesClassicLoadingMode](usesclassicloadingmode.md)).

## See Also

### Setting HTTP policy and proxy properties

- [httpMaximumConnectionsPerHost](httpmaximumconnectionsperhost.md): The maximum number of simultaneous HTTP/1.1 connections to make to a given host.
- [proxyConfigurations](proxyconfigurations.md): An array of proxy configuration objects containing information about the proxies to use within this session.
- [connectionProxyDictionary](connectionproxydictionary.md): A dictionary containing information about the proxy to use within this session.

# HTTPShouldUsePipelining (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 18.4) · iPadOS 7.0+ (deprecated in 18.4) · Mac Catalyst 13.1+ (deprecated in 18.4) · macOS 10.9+ (deprecated in 15.4) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 2.0+ (deprecated in 11.4)

A Boolean value that determines whether the session should use HTTP pipelining.

> Pipelining is an HTTP/1.1 concept. Adopt HTTP/2 or later instead.

## Declaration

```objectivec
@property BOOL HTTPShouldUsePipelining;
```

<a id="Discussion"></a>

## Discussion

This property determines whether tasks within sessions based on this configuration should use HTTP pipelining. You can also enable pipelining on a per-task basis by creating the task with an [NSURLRequest](../nsurlrequest.md) object.

The default value is [false](https://developer.apple.com/documentation/swift/false).

HTTP/2 and later ignore this property. HTTP/1.1 only considers this property in the classic loading mode ([usesClassicLoadingMode](usesclassicloadingmode.md)).

## See Also

### Setting HTTP policy and proxy properties

- [HTTPMaximumConnectionsPerHost](httpmaximumconnectionsperhost.md): The maximum number of simultaneous HTTP/1.1 connections to make to a given host.
- [proxyConfigurations](../nsurlsessionconfiguration/proxyconfigurations.md): An array of proxy configuration objects containing information about the proxies to use within this session.
- [connectionProxyDictionary](connectionproxydictionary.md): A dictionary containing information about the proxy to use within this session.
