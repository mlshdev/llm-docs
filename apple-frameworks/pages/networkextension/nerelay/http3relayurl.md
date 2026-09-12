> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelay/http3relayurl](https://developer.apple.com/documentation/networkextension/nerelay/http3relayurl)

# http3RelayURL (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A URL identifying the relay server accessible using HTTP/3.

## Declaration

```swift
var http3RelayURL: URL? { get set }
```

## See Also

### Configuring server properties

- [http2RelayURL](http2relayurl.md): A URL identifying the relay server accessible using HTTP/2.
- [dnsOverHTTPSURL](dnsoverhttpsurl.md): The URL of a DNS-over-HTTPS (DoH) resolver accessible from the relay.
- [rawPublicKeys](rawpublickeys.md): An array of TLS raw public keys that the relay server can present during the TLS handshake.

# HTTP3RelayURL (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A URL identifying the relay server accessible using HTTP/3.

## Declaration

```objectivec
@property (copy, nullable) NSURL * HTTP3RelayURL;
```

## See Also

### Configuring server properties

- [HTTP2RelayURL](http2relayurl.md): A URL identifying the relay server accessible using HTTP/2.
- [dnsOverHTTPSURL](dnsoverhttpsurl.md): The URL of a DNS-over-HTTPS (DoH) resolver accessible from the relay.
- [rawPublicKeys](rawpublickeys.md): An array of TLS raw public keys that the relay server can present during the TLS handshake.
