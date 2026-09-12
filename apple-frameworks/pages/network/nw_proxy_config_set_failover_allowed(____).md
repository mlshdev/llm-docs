> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_proxy_config_set_failover_allowed(_:_:)](https://developer.apple.com/documentation/network/nw_proxy_config_set_failover_allowed(_:_:))

# nw_proxy_config_set_failover_allowed(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Configures whether or not a proxy configuration allows failover to non-proxied connections. Failover isn’t allowed by default.

## Declaration

```swift
func nw_proxy_config_set_failover_allowed(_ proxy_config: nw_proxy_config_t, _ failover_allowed: Bool)
```

## Parameters

- `proxy_config`: The proxy configuration to modify.
- `failover_allowed`: A Boolean that indicates whether or not a proxy configuration allows failover to non-proxied connections.

## See Also

### Customizing Proxy Behavior

- [nw_proxy_config_set_username_and_password(\_:\_:\_:)](nw_proxy_config_set_username_and_password%28______%29.md): Sets a username and password to use as authentication for a proxy configuration.

# nw_proxy_config_set_failover_allowed (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Configures whether or not a proxy configuration allows failover to non-proxied connections. Failover isn’t allowed by default.

## Declaration

```objectivec
void nw_proxy_config_set_failover_allowed(nw_proxy_config_t proxy_config, bool failover_allowed);
```

## Parameters

- `proxy_config`: The proxy configuration to modify.
- `failover_allowed`: A Boolean that indicates whether or not a proxy configuration allows failover to non-proxied connections.

## See Also

### Customizing Proxy Behavior

- [nw_proxy_config_set_username_and_password](nw_proxy_config_set_username_and_password%28______%29.md): Sets a username and password to use as authentication for a proxy configuration.
