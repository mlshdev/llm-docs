> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_resolver_config_create_https(_:)](https://developer.apple.com/documentation/network/nw_resolver_config_create_https(_:))

# nw_resolver_config_create_https(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes a DNS-over-HTTPS resolver configuration.

## Declaration

```swift
func nw_resolver_config_create_https(_ url_endpoint: nw_endpoint_t) -> nw_resolver_config_t
```

## Parameters

- `url_endpoint`: The URL describes the location of the DNS server, such as “https://dnsserver.example.net/dns-query”. See [RFC 8484](https://tools.ietf.org/html/rfc8484) for more details.

## See Also

### Requiring Encrypted DNS

- [nw_privacy_context_require_encrypted_name_resolution(\_:\_:\_:)](nw_privacy_context_require_encrypted_name_resolution%28______%29.md): Requires that any DNS name resolution for connections associated with this context use encrypted transports, such as TLS or HTTPS.
- [nw_resolver_config_t](nw_resolver_config_t.md): A DNS server configuration that uses TLS or HTTPS.
- [nw_resolver_config_create_tls(\_:)](nw_resolver_config_create_tls%28__%29.md): Initializes a DNS-over-TLS resolver configuration.
- [nw_resolver_config_add_server_address(\_:\_:)](nw_resolver_config_add_server_address%28____%29.md): Provides a well-known DNS server address to use instead of looking up the address dynamically.

# nw_resolver_config_create_https (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes a DNS-over-HTTPS resolver configuration.

## Declaration

```objectivec
nw_resolver_config_tnw_resolver_config_create_https(nw_endpoint_t url_endpoint);
```

## Parameters

- `url_endpoint`: The URL describes the location of the DNS server, such as “https://dnsserver.example.net/dns-query”. See [RFC 8484](https://tools.ietf.org/html/rfc8484) for more details.

## See Also

### Requiring Encrypted DNS

- [nw_privacy_context_require_encrypted_name_resolution](nw_privacy_context_require_encrypted_name_resolution%28______%29.md): Requires that any DNS name resolution for connections associated with this context use encrypted transports, such as TLS or HTTPS.
- [nw_resolver_config_t](nw_resolver_config_t.md): A DNS server configuration that uses TLS or HTTPS.
- [nw_resolver_config_create_tls](nw_resolver_config_create_tls%28__%29.md): Initializes a DNS-over-TLS resolver configuration.
- [nw_resolver_config_add_server_address](nw_resolver_config_add_server_address%28____%29.md): Provides a well-known DNS server address to use instead of looking up the address dynamically.
