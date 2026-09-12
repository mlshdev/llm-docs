> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/proxyconfiguration/relayhop](https://developer.apple.com/documentation/network/proxyconfiguration/relayhop)

# ProxyConfiguration.RelayHop

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A single relay server you can chain together with other servers.

## Declaration

```swift
struct RelayHop
```

<a id="overview"></a>

## Overview

Relay servers are secure HTTP proxies that allow proxying TCP traffic using the `CONNECT` method and UDP traffic using the `connect-udp` protocol defined in [RFC 9298](https://www.rfc-editor.org/rfc/rfc9298.html).

## Topics

### Creating Relay Hops

- [init(http3RelayEndpoint:http2RelayEndpoint:tlsOptions:additionalHTTPHeaderFields:)](relayhop/init%28http3relayendpoint_http2relayendpoint_tlsoptions_additionalhttpheaderfields_%29.md): Creates a configuration for a secure relay accessible using HTTP/3, with an optional HTTP/2 fallback.
- [init(http2RelayEndpoint:tlsOptions:additionalHTTPHeaderFields:)](relayhop/init%28http2relayendpoint_tlsoptions_additionalhttpheaderfields_%29.md): Creates a configuration for a secure relay accessible only using HTTP/2.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Proxy Configurations

- [init(relayHops:)](init%28relayhops_%29.md): Initializes a proxy configuration with one or two relay hops.
- [init(httpCONNECTProxy:tlsOptions:)](init%28httpconnectproxy_tlsoptions_%29.md): Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.
- [init(socksv5Proxy:)](init%28socksv5proxy_%29.md): Initializes a SOCKSv5 proxy configuration.
