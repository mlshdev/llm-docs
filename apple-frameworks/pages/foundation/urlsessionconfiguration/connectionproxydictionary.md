> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/connectionproxydictionary](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/connectionproxydictionary)

# connectionProxyDictionary (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing information about the proxy to use within this session.

## Declaration

```swift
var connectionProxyDictionary: [AnyHashable : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

This property controls which proxy tasks within sessions based on this configuration use when connecting to remote hosts.

Prefer using [proxyConfigurations](proxyconfigurations.md), which supports secure proxy and relay types.

The default value is `NULL`, which means that tasks use the default system settings.

See `Global Proxy Configuration` for more information about these dictionaries.

## See Also

### Setting HTTP policy and proxy properties

- [httpMaximumConnectionsPerHost](httpmaximumconnectionsperhost.md): The maximum number of simultaneous HTTP/1.1 connections to make to a given host.
- [httpShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value that determines whether the session should use HTTP pipelining.
- [proxyConfigurations](proxyconfigurations.md): An array of proxy configuration objects containing information about the proxies to use within this session.

# connectionProxyDictionary (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing information about the proxy to use within this session.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary * connectionProxyDictionary;
```

<a id="Discussion"></a>

## Discussion

This property controls which proxy tasks within sessions based on this configuration use when connecting to remote hosts.

Prefer using [proxyConfigurations](proxyconfigurations.md), which supports secure proxy and relay types.

The default value is `NULL`, which means that tasks use the default system settings.

See `Global Proxy Configuration` for more information about these dictionaries.

## See Also

### Setting HTTP policy and proxy properties

- [HTTPMaximumConnectionsPerHost](httpmaximumconnectionsperhost.md): The maximum number of simultaneous HTTP/1.1 connections to make to a given host.
- [HTTPShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value that determines whether the session should use HTTP pipelining.
- [proxyConfigurations](../nsurlsessionconfiguration/proxyconfigurations.md): An array of proxy configuration objects containing information about the proxies to use within this session.
