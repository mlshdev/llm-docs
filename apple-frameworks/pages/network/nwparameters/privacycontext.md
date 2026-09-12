> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/privacycontext](https://developer.apple.com/documentation/network/nwparameters/privacycontext)

# NWParameters.PrivacyContext

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An object that defines the privacy requirements for a set of connections.

## Declaration

```swift
class PrivacyContext
```

## Topics

### Configuring Custom Privacy Settings

- [init(description:)](privacycontext/init%28description_%29.md): Initializes a privacy context with a description string.
- [default](privacycontext/default.md): The privacy context that applies to all connections that do not use a custom context.
- [disableLogging()](privacycontext/disablelogging%28%29.md): Disables system logging of connection activity.
- [flushCache()](privacycontext/flushcache%28%29.md): Flushes all cached data, such as TLS session state, created by connections associated with the privacy context.

### Requiring Encrypted DNS

- [requireEncryptedNameResolution(\_:fallbackResolver:)](privacycontext/requireencryptednameresolution%28__fallbackresolver_%29.md): Requires that any DNS name resolution for connections associated with this context use encrypted transports, such as TLS or HTTPS.
- [NWParameters.PrivacyContext.ResolverConfiguration](privacycontext/resolverconfiguration.md): A DNS server configuration that uses TLS or HTTPS.

### Configuring Proxies

- [proxyConfigurations](privacycontext/proxyconfigurations.md): Applies proxy configurations for all connections associated with this context.
- [ProxyConfiguration](../proxyconfiguration.md): A proxy configuration for Relays, Oblivious HTTP, HTTP CONNECT, or SOCKSv5.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Privacy Settings

- [setPrivacyContext(\_:)](setprivacycontext%28__%29.md): Associates a privacy context with any connections or listeners that use the parameters.
