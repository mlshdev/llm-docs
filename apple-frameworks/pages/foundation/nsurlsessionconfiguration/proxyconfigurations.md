> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlsessionconfiguration/proxyconfigurations](https://developer.apple.com/documentation/foundation/nsurlsessionconfiguration/proxyconfigurations)

# proxyConfigurations

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An array of proxy configuration objects containing information about the proxies to use within this session.

## Declaration

```objectivec
@property (copy) NSArray<NSObject<OS_nw_proxy_config> *> * proxyConfigurations;
```

<a id="Discussion"></a>

## Discussion

This property controls which proxy tasks to use within sessions based on this configuration when connecting to remote hosts.

The default value is the empty array, which means that tasks use the default system settings.

## See Also

### Setting HTTP policy and proxy properties

- [HTTPMaximumConnectionsPerHost](../urlsessionconfiguration/httpmaximumconnectionsperhost.md): The maximum number of simultaneous HTTP/1.1 connections to make to a given host.
- [HTTPShouldUsePipelining](../urlsessionconfiguration/httpshouldusepipelining.md): Deprecated. A Boolean value that determines whether the session should use HTTP pipelining.
- [connectionProxyDictionary](../urlsessionconfiguration/connectionproxydictionary.md): A dictionary containing information about the proxy to use within this session.
