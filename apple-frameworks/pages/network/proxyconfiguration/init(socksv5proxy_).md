> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/proxyconfiguration/init(socksv5proxy:)](https://developer.apple.com/documentation/network/proxyconfiguration/init(socksv5proxy:))

# init(socksv5Proxy:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Initializes a SOCKSv5 proxy configuration.

## Declaration

```swift
init(socksv5Proxy: NWEndpoint)
```

## Parameters

- `socksv5Proxy`: A host endpoint identifying the SOCKS proxy server.

## See Also

### Creating Proxy Configurations

- [init(relayHops:)](init%28relayhops_%29.md): Initializes a proxy configuration with one or two relay hops.
- [ProxyConfiguration.RelayHop](relayhop.md): A single relay server you can chain together with other servers.
- [init(httpCONNECTProxy:tlsOptions:)](init%28httpconnectproxy_tlsoptions_%29.md): Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.
