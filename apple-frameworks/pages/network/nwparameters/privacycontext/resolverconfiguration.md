> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/privacycontext/resolverconfiguration](https://developer.apple.com/documentation/network/nwparameters/privacycontext/resolverconfiguration)

# NWParameters.PrivacyContext.ResolverConfiguration

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A DNS server configuration that uses TLS or HTTPS.

## Declaration

```swift
enum ResolverConfiguration
```

## Topics

### Resolver Types

- [NWParameters.PrivacyContext.ResolverConfiguration.https(\_:serverAddresses:)](resolverconfiguration/https%28__serveraddresses_%29.md): A DNS-over-HTTPS resolver configuration.
- [NWParameters.PrivacyContext.ResolverConfiguration.tls(\_:serverAddresses:)](resolverconfiguration/tls%28__serveraddresses_%29.md): A DNS-over-TLS resolver configuration.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requiring Encrypted DNS

- [requireEncryptedNameResolution(\_:fallbackResolver:)](requireencryptednameresolution%28__fallbackresolver_%29.md): Requires that any DNS name resolution for connections associated with this context use encrypted transports, such as TLS or HTTPS.
