> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/proxyconfiguration](https://developer.apple.com/documentation/network/proxyconfiguration)

# ProxyConfiguration

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A proxy configuration for Relays, Oblivious HTTP, HTTP CONNECT, or SOCKSv5.

## Declaration

```swift
struct ProxyConfiguration
```

## Topics

### Creating Proxy Configurations

- [init(relayHops:)](proxyconfiguration/init%28relayhops_%29.md): Initializes a proxy configuration with one or two relay hops.
- [ProxyConfiguration.RelayHop](proxyconfiguration/relayhop.md): A single relay server you can chain together with other servers.
- [init(httpCONNECTProxy:tlsOptions:)](proxyconfiguration/init%28httpconnectproxy_tlsoptions_%29.md): Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.
- [init(socksv5Proxy:)](proxyconfiguration/init%28socksv5proxy_%29.md): Initializes a SOCKSv5 proxy configuration.

### Customizing Proxy Behavior

- [allowFailover](proxyconfiguration/allowfailover.md): A Boolean that indicates whether or not a proxy configuration allows failover to non-proxied connections. Failover isn’t allowed by default.
- [applyCredential(username:password:)](proxyconfiguration/applycredential%28username_password_%29.md): Sets a username and password to use as authentication for a proxy configuration.

### Initializers

- [init(obliviousHTTPRelay:relayResourcePath:gatewayKeyConfig:matchDomains:)](proxyconfiguration/init%28oblivioushttprelay_relayresourcepath_gatewaykeyconfig_matchdomains_%29.md)

### Instance Properties

- [excludedDomains](proxyconfiguration/excludeddomains.md)
- [matchDomains](proxyconfiguration/matchdomains.md)

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Proxies

- [proxyConfigurations](nwparameters/privacycontext/proxyconfigurations.md): Applies proxy configurations for all connections associated with this context.
