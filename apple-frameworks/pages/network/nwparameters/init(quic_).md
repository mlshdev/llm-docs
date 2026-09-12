> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/init(quic:)](https://developer.apple.com/documentation/network/nwparameters/init(quic:))

# init(quic:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Initializes parameters for QUIC connections and listeners with custom QUIC options.

## Declaration

```swift
convenience init(quic: NWProtocolQUIC.Options)
```

## Parameters

- `quic`: A QUIC options instance.

## See Also

### Creating Parameters

- [tls](tls.md): A set of default parameters for connections and listeners that use TLS and TCP.
- [tcp](tcp.md): A set of default parameters for connections and listeners that use TCP.
- [dtls](dtls.md): A set of default parameters for connections and listeners that use DTLS and UDP.
- [udp](udp.md): A set of default parameters for connections and listeners that use UDP.
- [quic(alpn:)](quic%28alpn_%29.md): Returns a set of default parameters for connections and listeners that use QUIC, with a set of supported Application-Layer Protocol Negotiation values.
- [quicDatagram(alpn:)](quicdatagram%28alpn_%29.md): Returns a set of default parameters for connections and listeners that use QUIC datagrams, with a set of supported Application-Layer Protocol Negotiation values.
- [init(tls:tcp:)](init%28tls_tcp_%29.md): Initializes parameters for TLS connections and listeners with custom TLS and TCP options.
- [init(dtls:udp:)](init%28dtls_udp_%29.md): Initializes parameters for DTLS connections and listeners with custom DTLS and UDP options.
- [init()](init%28%29.md): Initializes parameters for connections, listeners, and browsers with no protocols specified.
- [init(customIPProtocolNumber:)](init%28customipprotocolnumber_%29.md): Initializes parameters for connections and listeners using a custom IP protocol.
- [copy()](copy%28%29.md): Performs a deep copy of a parameters object.
