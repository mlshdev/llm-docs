> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelay/dnsoverhttpsurl](https://developer.apple.com/documentation/networkextension/nerelay/dnsoverhttpsurl)

# dnsOverHTTPSURL (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The URL of a DNS-over-HTTPS (DoH) resolver accessible from the relay.

## Declaration

```swift
var dnsOverHTTPSURL: URL? { get set }
```

## See Also

### Configuring server properties

- [http3RelayURL](http3relayurl.md): A URL identifying the relay server accessible using HTTP/3.
- [http2RelayURL](http2relayurl.md): A URL identifying the relay server accessible using HTTP/2.
- [rawPublicKeys](rawpublickeys.md): An array of TLS raw public keys that the relay server can present during the TLS handshake.

# dnsOverHTTPSURL (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The URL of a DNS-over-HTTPS (DoH) resolver accessible from the relay.

## Declaration

```objectivec
@property (copy, nullable) NSURL * dnsOverHTTPSURL;
```

## See Also

### Configuring server properties

- [HTTP3RelayURL](http3relayurl.md): A URL identifying the relay server accessible using HTTP/3.
- [HTTP2RelayURL](http2relayurl.md): A URL identifying the relay server accessible using HTTP/2.
- [rawPublicKeys](rawpublickeys.md): An array of TLS raw public keys that the relay server can present during the TLS handshake.
