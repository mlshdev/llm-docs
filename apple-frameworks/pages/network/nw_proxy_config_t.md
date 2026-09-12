> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_proxy_config_t](https://developer.apple.com/documentation/network/nw_proxy_config_t)

# nw_proxy_config_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A proxy configuration for Relays, Oblivious HTTP, HTTP CONNECT, or SOCKSv5.

## Declaration

```swift
typealias nw_proxy_config_t = any OS_nw_proxy_config
```

## Topics

### Creating Proxy Configurations

- [nw_proxy_config_create_relay(\_:\_:)](nw_proxy_config_create_relay%28____%29.md): Initializes a proxy configuration with one or two relay hops.
- [nw_relay_hop_t](nw_relay_hop_t.md): A single relay server you can chain together with other servers.
- [nw_proxy_config_create_oblivious_http(\_:\_:\_:\_:)](nw_proxy_config_create_oblivious_http%28________%29.md): Initializes an Oblivious HTTP proxy configuration using a relay and a gateway.
- [nw_proxy_config_create_http_connect(\_:\_:)](nw_proxy_config_create_http_connect%28____%29.md): Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.
- [nw_proxy_config_create_socksv5(\_:)](nw_proxy_config_create_socksv5%28__%29.md): Initializes a SOCKSv5 proxy configuration.

### Customizing Proxy Behavior

- [nw_proxy_config_set_failover_allowed(\_:\_:)](nw_proxy_config_set_failover_allowed%28____%29.md): Configures whether or not a proxy configuration allows failover to non-proxied connections. Failover isn’t allowed by default.
- [nw_proxy_config_set_username_and_password(\_:\_:\_:)](nw_proxy_config_set_username_and_password%28______%29.md): Sets a username and password to use as authentication for a proxy configuration.

### Inspecting Proxies

- [nw_proxy_config_get_failover_allowed(\_:)](nw_proxy_config_get_failover_allowed%28__%29.md): Checks if a proxy configuration allows failover to non-proxied connections.

## See Also

### Configuring Proxies

- [nw_privacy_context_add_proxy(\_:\_:)](nw_privacy_context_add_proxy%28____%29.md): Applies a proxy configuration to all connections associated with this context.
- [nw_privacy_context_clear_proxies(\_:)](nw_privacy_context_clear_proxies%28__%29.md): Clears out any proxies added using [nw_privacy_context_add_proxy(\_:\_:)](nw_privacy_context_add_proxy%28____%29.md)

# nw_proxy_config_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A proxy configuration for Relays, Oblivious HTTP, HTTP CONNECT, or SOCKSv5.

## Declaration

```objectivec
typedef NSObject<OS_nw_proxy_config> * nw_proxy_config_t;
```

## Topics

### Creating Proxy Configurations

- [nw_proxy_config_create_relay](nw_proxy_config_create_relay%28____%29.md): Initializes a proxy configuration with one or two relay hops.
- [nw_relay_hop_t](nw_relay_hop_t.md): A single relay server you can chain together with other servers.
- [nw_proxy_config_create_oblivious_http](nw_proxy_config_create_oblivious_http%28________%29.md): Initializes an Oblivious HTTP proxy configuration using a relay and a gateway.
- [nw_proxy_config_create_http_connect](nw_proxy_config_create_http_connect%28____%29.md): Initializes a legacy HTTP CONNECT configuration for a proxy server accessible using HTTP/1.1.
- [nw_proxy_config_create_socksv5](nw_proxy_config_create_socksv5%28__%29.md): Initializes a SOCKSv5 proxy configuration.

### Customizing Proxy Behavior

- [nw_proxy_config_set_failover_allowed](nw_proxy_config_set_failover_allowed%28____%29.md): Configures whether or not a proxy configuration allows failover to non-proxied connections. Failover isn’t allowed by default.
- [nw_proxy_config_set_username_and_password](nw_proxy_config_set_username_and_password%28______%29.md): Sets a username and password to use as authentication for a proxy configuration.

### Inspecting Proxies

- [nw_proxy_config_get_failover_allowed](nw_proxy_config_get_failover_allowed%28__%29.md): Checks if a proxy configuration allows failover to non-proxied connections.

## See Also

### Configuring Proxies

- [nw_privacy_context_add_proxy](nw_privacy_context_add_proxy%28____%29.md): Applies a proxy configuration to all connections associated with this context.
- [nw_privacy_context_clear_proxies](nw_privacy_context_clear_proxies%28__%29.md): Clears out any proxies added using [nw_privacy_context_add_proxy](nw_privacy_context_add_proxy%28____%29.md)
