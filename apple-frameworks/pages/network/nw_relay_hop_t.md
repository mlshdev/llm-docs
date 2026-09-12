> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_relay_hop_t](https://developer.apple.com/documentation/network/nw_relay_hop_t)

# nw_relay_hop_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A single relay server you can chain together with other servers.

## Declaration

```swift
typealias nw_relay_hop_t = any OS_nw_relay_hop
```

<a id="Discussion"></a>

## Discussion

Relay servers are secure HTTP proxies that allow proxying TCP traffic using the `CONNECT` method and UDP traffic using the `connect-udp` protocol defined in [RFC 9298](https://www.rfc-editor.org/rfc/rfc9298.html).

## Topics

### Configuring Relay Hops

- [nw_relay_hop_create(\_:\_:\_:)](nw_relay_hop_create%28______%29.md): Creates a configuration for a secure relay accessible using HTTP/3, with an optional HTTP/2 fallback.
- [nw_relay_hop_add_additional_http_header_field(\_:\_:\_:)](nw_relay_hop_add_additional_http_header_field%28______%29.md): Adds an HTTP header name and value pair to send as part of `CONNECT` requests to the relay.

## See Also

### Creating Proxy Configurations

- [nw_proxy_config_create_relay(\_:\_:)](nw_proxy_config_create_relay%28____%29.md): Initializes a proxy configuration with one or two relay hops.
- [nw_proxy_config_create_oblivious_http(\_:\_:\_:\_:)](nw_proxy_config_create_oblivious_http%28________%29.md): Initializes an Oblivious HTTP proxy configuration using a relay and a gateway.
- [nw_proxy_config_create_http_connect(\_:\_:)](nw_proxy_config_create_http_connect%28____%29.md): Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.
- [nw_proxy_config_create_socksv5(\_:)](nw_proxy_config_create_socksv5%28__%29.md): Initializes a SOCKSv5 proxy configuration.

# nw_relay_hop_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A single relay server you can chain together with other servers.

## Declaration

```objectivec
typedef NSObject<OS_nw_relay_hop> * nw_relay_hop_t;
```

<a id="Discussion"></a>

## Discussion

Relay servers are secure HTTP proxies that allow proxying TCP traffic using the `CONNECT` method and UDP traffic using the `connect-udp` protocol defined in [RFC 9298](https://www.rfc-editor.org/rfc/rfc9298.html).

## Topics

### Configuring Relay Hops

- [nw_relay_hop_create](nw_relay_hop_create%28______%29.md): Creates a configuration for a secure relay accessible using HTTP/3, with an optional HTTP/2 fallback.
- [nw_relay_hop_add_additional_http_header_field](nw_relay_hop_add_additional_http_header_field%28______%29.md): Adds an HTTP header name and value pair to send as part of `CONNECT` requests to the relay.

## See Also

### Creating Proxy Configurations

- [nw_proxy_config_create_relay](nw_proxy_config_create_relay%28____%29.md): Initializes a proxy configuration with one or two relay hops.
- [nw_proxy_config_create_oblivious_http](nw_proxy_config_create_oblivious_http%28________%29.md): Initializes an Oblivious HTTP proxy configuration using a relay and a gateway.
- [nw_proxy_config_create_http_connect](nw_proxy_config_create_http_connect%28____%29.md): Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.
- [nw_proxy_config_create_socksv5](nw_proxy_config_create_socksv5%28__%29.md): Initializes a SOCKSv5 proxy configuration.
