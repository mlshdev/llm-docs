> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_proxy_config_create_oblivious_http(_:_:_:_:)](https://developer.apple.com/documentation/network/nw_proxy_config_create_oblivious_http(_:_:_:_:))

# nw_proxy_config_create_oblivious_http(\_:\_:\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Initializes an Oblivious HTTP proxy configuration using a relay and a gateway.

## Declaration

```swift
func nw_proxy_config_create_oblivious_http(_ relay: nw_relay_hop_t, _ relay_resource_path: UnsafePointer<CChar>, _ gateway_key_config: UnsafePointer<UInt8>, _ gateway_key_config_length: Int) -> nw_proxy_config_t
```

## Parameters

- `relay`: The Oblivious HTTP relay hop.
- `relay_resource_path`: The HTTP path to use for requests to the Oblivious HTTP relay that will forward requests to the gateway.
- `gateway_key_config`: The [key configuration](https://www.ietf.org/archive/id/draft-ietf-ohai-ohttp-08.html#name-key-configuration-encoding) for the Oblivious HTTP gateway.
- `gateway_key_config_length`: The length of the key configuration buffer in `gateway_key_config.`

<a id="return-value"></a>

## Return Value

An initialized proxy configuration object.

<a id="Discussion"></a>

## Discussion

[Oblivious HTTP](https://www.ietf.org/archive/id/draft-ietf-ohai-ohttp-08.html) provides per-message encryption to a gateway through a relay.

## See Also

### Creating Proxy Configurations

- [nw_proxy_config_create_relay(\_:\_:)](nw_proxy_config_create_relay%28____%29.md): Initializes a proxy configuration with one or two relay hops.
- [nw_relay_hop_t](nw_relay_hop_t.md): A single relay server you can chain together with other servers.
- [nw_proxy_config_create_http_connect(\_:\_:)](nw_proxy_config_create_http_connect%28____%29.md): Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.
- [nw_proxy_config_create_socksv5(\_:)](nw_proxy_config_create_socksv5%28__%29.md): Initializes a SOCKSv5 proxy configuration.

# nw_proxy_config_create_oblivious_http (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Initializes an Oblivious HTTP proxy configuration using a relay and a gateway.

## Declaration

```objectivec
nw_proxy_config_tnw_proxy_config_create_oblivious_http(nw_relay_hop_t relay, const char *relay_resource_path, const uint8_t *gateway_key_config, size_t gateway_key_config_length);
```

## Parameters

- `relay`: The Oblivious HTTP relay hop.
- `relay_resource_path`: The HTTP path to use for requests to the Oblivious HTTP relay that will forward requests to the gateway.
- `gateway_key_config`: The [key configuration](https://www.ietf.org/archive/id/draft-ietf-ohai-ohttp-08.html#name-key-configuration-encoding) for the Oblivious HTTP gateway.
- `gateway_key_config_length`: The length of the key configuration buffer in `gateway_key_config.`

<a id="return-value"></a>

## Return Value

An initialized proxy configuration object.

<a id="Discussion"></a>

## Discussion

[Oblivious HTTP](https://www.ietf.org/archive/id/draft-ietf-ohai-ohttp-08.html) provides per-message encryption to a gateway through a relay.

## See Also

### Creating Proxy Configurations

- [nw_proxy_config_create_relay](nw_proxy_config_create_relay%28____%29.md): Initializes a proxy configuration with one or two relay hops.
- [nw_relay_hop_t](nw_relay_hop_t.md): A single relay server you can chain together with other servers.
- [nw_proxy_config_create_http_connect](nw_proxy_config_create_http_connect%28____%29.md): Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.
- [nw_proxy_config_create_socksv5](nw_proxy_config_create_socksv5%28__%29.md): Initializes a SOCKSv5 proxy configuration.
