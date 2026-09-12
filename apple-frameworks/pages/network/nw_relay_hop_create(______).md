> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_relay_hop_create(_:_:_:)](https://developer.apple.com/documentation/network/nw_relay_hop_create(_:_:_:))

# nw_relay_hop_create(\_:\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a configuration for a secure relay accessible using HTTP/3, with an optional HTTP/2 fallback.

## Declaration

```swift
func nw_relay_hop_create(_ http3_relay_endpoint: nw_endpoint_t?, _ http2_relay_endpoint: nw_endpoint_t?, _ relay_tls_options: nw_protocol_options_t?) -> nw_relay_hop_t
```

## Parameters

- `http3_relay_endpoint`: A URL or host endpoint identifying the relay server accessible using HTTP/3.
- `http2_relay_endpoint`: An optional URL or host endpoint identifying the relay server accessible using HTTP/2. This can be the same endpoint as `http3_relay_endpoint`.
- `relay_tls_options`: The TLS options to use for the TLS handshake to the relay.

<a id="return-value"></a>

## Return Value

An initialized relay hop object.

## See Also

### Configuring Relay Hops

- [nw_relay_hop_add_additional_http_header_field(\_:\_:\_:)](nw_relay_hop_add_additional_http_header_field%28______%29.md): Adds an HTTP header name and value pair to send as part of `CONNECT` requests to the relay.

# nw_relay_hop_create (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a configuration for a secure relay accessible using HTTP/3, with an optional HTTP/2 fallback.

## Declaration

```objectivec
nw_relay_hop_tnw_relay_hop_create(nw_endpoint_t http3_relay_endpoint, nw_endpoint_t http2_relay_endpoint, nw_protocol_options_t relay_tls_options);
```

## Parameters

- `http3_relay_endpoint`: A URL or host endpoint identifying the relay server accessible using HTTP/3.
- `http2_relay_endpoint`: An optional URL or host endpoint identifying the relay server accessible using HTTP/2. This can be the same endpoint as `http3_relay_endpoint`.
- `relay_tls_options`: The TLS options to use for the TLS handshake to the relay.

<a id="return-value"></a>

## Return Value

An initialized relay hop object.

## See Also

### Configuring Relay Hops

- [nw_relay_hop_add_additional_http_header_field](nw_relay_hop_add_additional_http_header_field%28______%29.md): Adds an HTTP header name and value pair to send as part of `CONNECT` requests to the relay.
