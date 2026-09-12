> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/privacycontext/resolverconfiguration/https(_:serveraddresses:)](https://developer.apple.com/documentation/network/nwparameters/privacycontext/resolverconfiguration/https(_:serveraddresses:))

# NWParameters.PrivacyContext.ResolverConfiguration.https(\_:serverAddresses:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A DNS-over-HTTPS resolver configuration.

## Declaration

```swift
case https(URL, serverAddresses: [NWEndpoint])
```

<a id="Discussion"></a>

## Discussion

The URL describes the location of the DNS server, such as “https://dnsserver.example.net/dns-query”. See [RFC 8484](https://tools.ietf.org/html/rfc8484) for more details. The associated server addresses you provide are hints for which well-known DNS server addresses to use.

## See Also

### Resolver Types

- [NWParameters.PrivacyContext.ResolverConfiguration.tls(\_:serverAddresses:)](tls%28__serveraddresses_%29.md): A DNS-over-TLS resolver configuration.
