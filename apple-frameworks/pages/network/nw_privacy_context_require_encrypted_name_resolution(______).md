> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_privacy_context_require_encrypted_name_resolution(_:_:_:)](https://developer.apple.com/documentation/network/nw_privacy_context_require_encrypted_name_resolution(_:_:_:))

# nw_privacy_context_require_encrypted_name_resolution(\_:\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Requires that any DNS name resolution for connections associated with this context use encrypted transports, such as TLS or HTTPS.

## Declaration

```swift
func nw_privacy_context_require_encrypted_name_resolution(_ privacy_context: nw_privacy_context_t, _ require_encrypted_name_resolution: Bool, _ fallback_resolver_config: nw_resolver_config_t?)
```

## See Also

### Requiring Encrypted DNS

- [nw_resolver_config_t](nw_resolver_config_t.md): A DNS server configuration that uses TLS or HTTPS.
- [nw_resolver_config_create_https(\_:)](nw_resolver_config_create_https%28__%29.md): Initializes a DNS-over-HTTPS resolver configuration.
- [nw_resolver_config_create_tls(\_:)](nw_resolver_config_create_tls%28__%29.md): Initializes a DNS-over-TLS resolver configuration.
- [nw_resolver_config_add_server_address(\_:\_:)](nw_resolver_config_add_server_address%28____%29.md): Provides a well-known DNS server address to use instead of looking up the address dynamically.

# nw_privacy_context_require_encrypted_name_resolution (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Requires that any DNS name resolution for connections associated with this context use encrypted transports, such as TLS or HTTPS.

## Declaration

```objectivec
void nw_privacy_context_require_encrypted_name_resolution(nw_privacy_context_t privacy_context, bool require_encrypted_name_resolution, nw_resolver_config_t fallback_resolver_config);
```

## See Also

### Requiring Encrypted DNS

- [nw_resolver_config_t](nw_resolver_config_t.md): A DNS server configuration that uses TLS or HTTPS.
- [nw_resolver_config_create_https](nw_resolver_config_create_https%28__%29.md): Initializes a DNS-over-HTTPS resolver configuration.
- [nw_resolver_config_create_tls](nw_resolver_config_create_tls%28__%29.md): Initializes a DNS-over-TLS resolver configuration.
- [nw_resolver_config_add_server_address](nw_resolver_config_add_server_address%28____%29.md): Provides a well-known DNS server address to use instead of looking up the address dynamically.
