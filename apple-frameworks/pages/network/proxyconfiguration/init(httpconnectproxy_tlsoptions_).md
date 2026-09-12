> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/proxyconfiguration/init(httpconnectproxy:tlsoptions:)](https://developer.apple.com/documentation/network/proxyconfiguration/init(httpconnectproxy:tlsoptions:))

# init(httpCONNECTProxy:tlsOptions:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.

## Declaration

```swift
init(httpCONNECTProxy: NWEndpoint, tlsOptions: NWProtocolTLS.Options? = nil)
```

## Parameters

- `httpCONNECTProxy`: A host endpoint identifying the proxy server accessible using HTTP/1.1.
- `tlsOptions`: Optional TLS options to use for a TLS handshake to the relay. If no TLS options are provided, the proxy will be accessed using cleartext HTTP.

<a id="Discussion"></a>

## Discussion

These HTTP CONNECT proxies only handle TCP connections. To support UDP proxying, use [init(relayHops:)](init%28relayhops_%29.md).

## See Also

### Creating Proxy Configurations

- [init(relayHops:)](init%28relayhops_%29.md): Initializes a proxy configuration with one or two relay hops.
- [ProxyConfiguration.RelayHop](relayhop.md): A single relay server you can chain together with other servers.
- [init(socksv5Proxy:)](init%28socksv5proxy_%29.md): Initializes a SOCKSv5 proxy configuration.
