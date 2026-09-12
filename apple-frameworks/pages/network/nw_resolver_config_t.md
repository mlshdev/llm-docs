> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_resolver_config_t](https://developer.apple.com/documentation/network/nw_resolver_config_t)

# nw_resolver_config_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A DNS server configuration that uses TLS or HTTPS.

## Declaration

```swift
typealias nw_resolver_config_t = any OS_nw_resolver_config
```

## See Also

### Requiring Encrypted DNS

- [nw_privacy_context_require_encrypted_name_resolution(\_:\_:\_:)](nw_privacy_context_require_encrypted_name_resolution%28______%29.md): Requires that any DNS name resolution for connections associated with this context use encrypted transports, such as TLS or HTTPS.
- [nw_resolver_config_create_https(\_:)](nw_resolver_config_create_https%28__%29.md): Initializes a DNS-over-HTTPS resolver configuration.
- [nw_resolver_config_create_tls(\_:)](nw_resolver_config_create_tls%28__%29.md): Initializes a DNS-over-TLS resolver configuration.
- [nw_resolver_config_add_server_address(\_:\_:)](nw_resolver_config_add_server_address%28____%29.md): Provides a well-known DNS server address to use instead of looking up the address dynamically.

# nw_resolver_config_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A DNS server configuration that uses TLS or HTTPS.

## Declaration

```objectivec
typedef NSObject<OS_nw_resolver_config> * nw_resolver_config_t;
```

## See Also

### Requiring Encrypted DNS

- [nw_privacy_context_require_encrypted_name_resolution](nw_privacy_context_require_encrypted_name_resolution%28______%29.md): Requires that any DNS name resolution for connections associated with this context use encrypted transports, such as TLS or HTTPS.
- [nw_resolver_config_create_https](nw_resolver_config_create_https%28__%29.md): Initializes a DNS-over-HTTPS resolver configuration.
- [nw_resolver_config_create_tls](nw_resolver_config_create_tls%28__%29.md): Initializes a DNS-over-TLS resolver configuration.
- [nw_resolver_config_add_server_address](nw_resolver_config_add_server_address%28____%29.md): Provides a well-known DNS server address to use instead of looking up the address dynamically.
