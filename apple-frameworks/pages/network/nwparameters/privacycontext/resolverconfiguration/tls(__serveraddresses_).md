> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/privacycontext/resolverconfiguration/tls(_:serveraddresses:)](https://developer.apple.com/documentation/network/nwparameters/privacycontext/resolverconfiguration/tls(_:serveraddresses:))

# NWParameters.PrivacyContext.ResolverConfiguration.tls(\_:serverAddresses:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A DNS-over-TLS resolver configuration.

## Declaration

```swift
case tls(NWEndpoint, serverAddresses: [NWEndpoint])
```

<a id="Discussion"></a>

## Discussion

The hostname of the provided endpoint will be used to validate the TLS certificate of the server. See [RFC 7858](https://tools.ietf.org/html/rfc7858) for more details. The associated server addresses you provide are hints for which well-known DNS server addresses to use.

## See Also

### Resolver Types

- [NWParameters.PrivacyContext.ResolverConfiguration.https(\_:serverAddresses:)](https%28__serveraddresses_%29.md): A DNS-over-HTTPS resolver configuration.
