> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/proxyconfiguration/init(relayhops:)](https://developer.apple.com/documentation/network/proxyconfiguration/init(relayhops:))

# init(relayHops:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Initializes a proxy configuration with one or two relay hops.

## Declaration

```swift
init(relayHops: [ProxyConfiguration.RelayHop])
```

## Parameters

- `relayHops`: An array of relay hops, which must contain either one or two hops.

## See Also

### Creating Proxy Configurations

- [ProxyConfiguration.RelayHop](relayhop.md): A single relay server you can chain together with other servers.
- [init(httpCONNECTProxy:tlsOptions:)](init%28httpconnectproxy_tlsoptions_%29.md): Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.
- [init(socksv5Proxy:)](init%28socksv5proxy_%29.md): Initializes a SOCKSv5 proxy configuration.
