> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/proxyconfiguration/applycredential(username:password:)](https://developer.apple.com/documentation/network/proxyconfiguration/applycredential(username:password:))

# applyCredential(username:password:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets a username and password to use as authentication for a proxy configuration.

## Declaration

```swift
func applyCredential(username: String, password: String)
```

## Parameters

- `username`: A proxy authentication username.
- `password`: A proxy authentication password.

## See Also

### Customizing Proxy Behavior

- [allowFailover](allowfailover.md): A Boolean that indicates whether or not a proxy configuration allows failover to non-proxied connections. Failover isn’t allowed by default.
