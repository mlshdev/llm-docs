> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelay/rawpublickeys](https://developer.apple.com/documentation/networkextension/nerelay/rawpublickeys)

# rawPublicKeys (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An array of TLS raw public keys that the relay server can present during the TLS handshake.

## Declaration

```swift
var rawPublicKeys: [Data]? { get set }
```

<a id="Discussion"></a>

## Discussion

If you set one or more keys, the raw public keys are used to authenticate the relay server. If no keys are set, or if the array is `nil`, default TLS server certificate evaluation is used.

## See Also

### Configuring server properties

- [http3RelayURL](http3relayurl.md): A URL identifying the relay server accessible using HTTP/3.
- [http2RelayURL](http2relayurl.md): A URL identifying the relay server accessible using HTTP/2.
- [dnsOverHTTPSURL](dnsoverhttpsurl.md): The URL of a DNS-over-HTTPS (DoH) resolver accessible from the relay.

# rawPublicKeys (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An array of TLS raw public keys that the relay server can present during the TLS handshake.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSData *> * rawPublicKeys;
```

<a id="Discussion"></a>

## Discussion

If you set one or more keys, the raw public keys are used to authenticate the relay server. If no keys are set, or if the array is `nil`, default TLS server certificate evaluation is used.

## See Also

### Configuring server properties

- [HTTP3RelayURL](http3relayurl.md): A URL identifying the relay server accessible using HTTP/3.
- [HTTP2RelayURL](http2relayurl.md): A URL identifying the relay server accessible using HTTP/2.
- [dnsOverHTTPSURL](dnsoverhttpsurl.md): The URL of a DNS-over-HTTPS (DoH) resolver accessible from the relay.
