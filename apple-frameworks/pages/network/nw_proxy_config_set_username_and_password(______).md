> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_proxy_config_set_username_and_password(_:_:_:)](https://developer.apple.com/documentation/network/nw_proxy_config_set_username_and_password(_:_:_:))

# nw_proxy_config_set_username_and_password(\_:\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets a username and password to use as authentication for a proxy configuration.

## Declaration

```swift
func nw_proxy_config_set_username_and_password(_ proxy_config: nw_proxy_config_t, _ username: UnsafePointer<CChar>, _ password: UnsafePointer<CChar>?)
```

## Parameters

- `proxy_config`: The proxy configuration to modify.
- `username`: A proxy authentication username.
- `password`: A proxy authentication password.

## See Also

### Customizing Proxy Behavior

- [nw_proxy_config_set_failover_allowed(\_:\_:)](nw_proxy_config_set_failover_allowed%28____%29.md): Configures whether or not a proxy configuration allows failover to non-proxied connections. Failover isn’t allowed by default.

# nw_proxy_config_set_username_and_password (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets a username and password to use as authentication for a proxy configuration.

## Declaration

```objectivec
void nw_proxy_config_set_username_and_password(nw_proxy_config_t proxy_config, const char *username, const char *password);
```

## Parameters

- `proxy_config`: The proxy configuration to modify.
- `username`: A proxy authentication username.
- `password`: A proxy authentication password.

## See Also

### Customizing Proxy Behavior

- [nw_proxy_config_set_failover_allowed](nw_proxy_config_set_failover_allowed%28____%29.md): Configures whether or not a proxy configuration allows failover to non-proxied connections. Failover isn’t allowed by default.
