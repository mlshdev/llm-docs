> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/quicdatagram(alpn:)](https://developer.apple.com/documentation/network/nwparameters/quicdatagram(alpn:))

# quicDatagram(alpn:)

**Framework:** Network  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a set of default parameters for connections and listeners that use QUIC datagrams, with a set of supported Application-Layer Protocol Negotiation values.

## Declaration

```swift
final class func quicDatagram(alpn: [String]) -> NWParameters
```

## Parameters

- `alpn`: A set of supported Application-Layer Protocol Negotiation values.

## See Also

### Creating Parameters

- [tls](tls.md): A set of default parameters for connections and listeners that use TLS and TCP.
- [tcp](tcp.md): A set of default parameters for connections and listeners that use TCP.
- [dtls](dtls.md): A set of default parameters for connections and listeners that use DTLS and UDP.
- [udp](udp.md): A set of default parameters for connections and listeners that use UDP.
- [quic(alpn:)](quic%28alpn_%29.md): Returns a set of default parameters for connections and listeners that use QUIC, with a set of supported Application-Layer Protocol Negotiation values.
- [init(tls:tcp:)](init%28tls_tcp_%29.md): Initializes parameters for TLS connections and listeners with custom TLS and TCP options.
- [init(dtls:udp:)](init%28dtls_udp_%29.md): Initializes parameters for DTLS connections and listeners with custom DTLS and UDP options.
- [init(quic:)](init%28quic_%29.md): Initializes parameters for QUIC connections and listeners with custom QUIC options.
- [init()](init%28%29.md): Initializes parameters for connections, listeners, and browsers with no protocols specified.
- [init(customIPProtocolNumber:)](init%28customipprotocolnumber_%29.md): Initializes parameters for connections and listeners using a custom IP protocol.
- [copy()](copy%28%29.md): Performs a deep copy of a parameters object.
