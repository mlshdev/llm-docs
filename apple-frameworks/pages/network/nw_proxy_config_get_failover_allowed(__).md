> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_proxy_config_get_failover_allowed(_:)](https://developer.apple.com/documentation/network/nw_proxy_config_get_failover_allowed(_:))

# nw_proxy_config_get_failover_allowed(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Checks if a proxy configuration allows failover to non-proxied connections.

## Declaration

```swift
func nw_proxy_config_get_failover_allowed(_ proxy_config: nw_proxy_config_t) -> Bool
```

## Parameters

- `proxy_config`: The proxy configuration to check.

<a id="return-value"></a>

## Return Value

A Boolean that indicates whether or not a proxy configuration allows failover to non-proxied connections.

# nw_proxy_config_get_failover_allowed (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Checks if a proxy configuration allows failover to non-proxied connections.

## Declaration

```objectivec
bool nw_proxy_config_get_failover_allowed(nw_proxy_config_t proxy_config);
```

## Parameters

- `proxy_config`: The proxy configuration to check.

<a id="return-value"></a>

## Return Value

A Boolean that indicates whether or not a proxy configuration allows failover to non-proxied connections.
