> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_privacy_context_t](https://developer.apple.com/documentation/network/nw_privacy_context_t)

# nw_privacy_context_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object that defines the privacy requirements for a set of connections.

## Declaration

```swift
typealias nw_privacy_context_t = any OS_nw_privacy_context
```

<a id="Discussion"></a>

## Discussion

Use *NW_DEFAULT_PRIVACY_CONTEXT* to specify the default shared privacy context that applies to all connections that do not use a custom context.

## Topics

### Configuring Custom Privacy Settings

- [nw_privacy_context_create(\_:)](nw_privacy_context_create%28__%29.md): Initializes a privacy context with a description string.
- [nw_privacy_context_disable_logging(\_:)](nw_privacy_context_disable_logging%28__%29.md): Disables system logging of connection activity.
- [nw_privacy_context_flush_cache(\_:)](nw_privacy_context_flush_cache%28__%29.md): Flushes all cached data, such as TLS session state, created by connections associated with the privacy context.

### Requiring Encrypted DNS

- [nw_privacy_context_require_encrypted_name_resolution(\_:\_:\_:)](nw_privacy_context_require_encrypted_name_resolution%28______%29.md): Requires that any DNS name resolution for connections associated with this context use encrypted transports, such as TLS or HTTPS.
- [nw_resolver_config_t](nw_resolver_config_t.md): A DNS server configuration that uses TLS or HTTPS.
- [nw_resolver_config_create_https(\_:)](nw_resolver_config_create_https%28__%29.md): Initializes a DNS-over-HTTPS resolver configuration.
- [nw_resolver_config_create_tls(\_:)](nw_resolver_config_create_tls%28__%29.md): Initializes a DNS-over-TLS resolver configuration.
- [nw_resolver_config_add_server_address(\_:\_:)](nw_resolver_config_add_server_address%28____%29.md): Provides a well-known DNS server address to use instead of looking up the address dynamically.

### Configuring Proxies

- [nw_privacy_context_add_proxy(\_:\_:)](nw_privacy_context_add_proxy%28____%29.md): Applies a proxy configuration to all connections associated with this context.
- [nw_privacy_context_clear_proxies(\_:)](nw_privacy_context_clear_proxies%28__%29.md): Clears out any proxies added using [nw_privacy_context_add_proxy(\_:\_:)](nw_privacy_context_add_proxy%28____%29.md)
- [nw_proxy_config_t](nw_proxy_config_t.md): A proxy configuration for Relays, Oblivious HTTP, HTTP CONNECT, or SOCKSv5.

## See Also

### Configuring Privacy Settings

- [nw_parameters_set_privacy_context(\_:\_:)](nw_parameters_set_privacy_context%28____%29.md): Associates a privacy context with any connections or listeners that use the parameters.

# nw_privacy_context_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object that defines the privacy requirements for a set of connections.

## Declaration

```objectivec
typedef NSObject<OS_nw_privacy_context> * nw_privacy_context_t;
```

<a id="Discussion"></a>

## Discussion

Use *NW_DEFAULT_PRIVACY_CONTEXT* to specify the default shared privacy context that applies to all connections that do not use a custom context.

## Topics

### Configuring Custom Privacy Settings

- [nw_privacy_context_create](nw_privacy_context_create%28__%29.md): Initializes a privacy context with a description string.
- [nw_privacy_context_disable_logging](nw_privacy_context_disable_logging%28__%29.md): Disables system logging of connection activity.
- [nw_privacy_context_flush_cache](nw_privacy_context_flush_cache%28__%29.md): Flushes all cached data, such as TLS session state, created by connections associated with the privacy context.

### Requiring Encrypted DNS

- [nw_privacy_context_require_encrypted_name_resolution](nw_privacy_context_require_encrypted_name_resolution%28______%29.md): Requires that any DNS name resolution for connections associated with this context use encrypted transports, such as TLS or HTTPS.
- [nw_resolver_config_t](nw_resolver_config_t.md): A DNS server configuration that uses TLS or HTTPS.
- [nw_resolver_config_create_https](nw_resolver_config_create_https%28__%29.md): Initializes a DNS-over-HTTPS resolver configuration.
- [nw_resolver_config_create_tls](nw_resolver_config_create_tls%28__%29.md): Initializes a DNS-over-TLS resolver configuration.
- [nw_resolver_config_add_server_address](nw_resolver_config_add_server_address%28____%29.md): Provides a well-known DNS server address to use instead of looking up the address dynamically.

### Configuring Proxies

- [nw_privacy_context_add_proxy](nw_privacy_context_add_proxy%28____%29.md): Applies a proxy configuration to all connections associated with this context.
- [nw_privacy_context_clear_proxies](nw_privacy_context_clear_proxies%28__%29.md): Clears out any proxies added using [nw_privacy_context_add_proxy](nw_privacy_context_add_proxy%28____%29.md)
- [nw_proxy_config_t](nw_proxy_config_t.md): A proxy configuration for Relays, Oblivious HTTP, HTTP CONNECT, or SOCKSv5.

## See Also

### Configuring Privacy Settings

- [nw_parameters_set_privacy_context](nw_parameters_set_privacy_context%28____%29.md): Associates a privacy context with any connections or listeners that use the parameters.
