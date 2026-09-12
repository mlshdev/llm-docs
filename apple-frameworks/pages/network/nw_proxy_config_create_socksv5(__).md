> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_proxy_config_create_socksv5(_:)](https://developer.apple.com/documentation/network/nw_proxy_config_create_socksv5(_:))

# nw_proxy_config_create_socksv5(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Initializes a SOCKSv5 proxy configuration.

## Declaration

```swift
func nw_proxy_config_create_socksv5(_ proxy_endpoint: nw_endpoint_t) -> nw_proxy_config_t
```

## Parameters

- `proxy_endpoint`: A host endpoint identifying the SOCKS proxy server.

<a id="return-value"></a>

## Return Value

An initialized proxy configuration object.

## See Also

### Creating Proxy Configurations

- [nw_proxy_config_create_relay(\_:\_:)](nw_proxy_config_create_relay%28____%29.md): Initializes a proxy configuration with one or two relay hops.
- [nw_relay_hop_t](nw_relay_hop_t.md): A single relay server you can chain together with other servers.
- [nw_proxy_config_create_oblivious_http(\_:\_:\_:\_:)](nw_proxy_config_create_oblivious_http%28________%29.md): Initializes an Oblivious HTTP proxy configuration using a relay and a gateway.
- [nw_proxy_config_create_http_connect(\_:\_:)](nw_proxy_config_create_http_connect%28____%29.md): Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.

# nw_proxy_config_create_socksv5 (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Initializes a SOCKSv5 proxy configuration.

## Declaration

```objectivec
nw_proxy_config_tnw_proxy_config_create_socksv5(nw_endpoint_t proxy_endpoint);
```

## Parameters

- `proxy_endpoint`: A host endpoint identifying the SOCKS proxy server.

<a id="return-value"></a>

## Return Value

An initialized proxy configuration object.

## See Also

### Creating Proxy Configurations

- [nw_proxy_config_create_relay](nw_proxy_config_create_relay%28____%29.md): Initializes a proxy configuration with one or two relay hops.
- [nw_relay_hop_t](nw_relay_hop_t.md): A single relay server you can chain together with other servers.
- [nw_proxy_config_create_oblivious_http](nw_proxy_config_create_oblivious_http%28________%29.md): Initializes an Oblivious HTTP proxy configuration using a relay and a gateway.
- [nw_proxy_config_create_http_connect](nw_proxy_config_create_http_connect%28____%29.md): Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.
