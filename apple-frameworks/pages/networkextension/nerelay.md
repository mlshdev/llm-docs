> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelay](https://developer.apple.com/documentation/networkextension/nerelay)

# NERelay (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A single relay server configuration that you can chain together with other relays.

## Declaration

```swift
class NERelay
```

<a id="overview"></a>

## Overview

Relay servers are secure HTTP proxies that allow proxying TCP traffic using the `CONNECT` method and UDP traffic using the `connect-udp` protocol defined in [RFC 9298](https://www.rfc-editor.org/rfc/rfc9298.html).

## Topics

### Configuring server properties

- [http3RelayURL](nerelay/http3relayurl.md): A URL identifying the relay server accessible using HTTP/3.
- [http2RelayURL](nerelay/http2relayurl.md): A URL identifying the relay server accessible using HTTP/2.
- [dnsOverHTTPSURL](nerelay/dnsoverhttpsurl.md): The URL of a DNS-over-HTTPS (DoH) resolver accessible from the relay.
- [rawPublicKeys](nerelay/rawpublickeys.md): An array of TLS raw public keys that the relay server can present during the TLS handshake.

### Configuring client properties

- [additionalHTTPHeaderFields](nerelay/additionalhttpheaderfields.md): A dictionary of additional HTTP headers to send as part of `CONNECT` requests to the relay.
- [identityData](nerelay/identitydata.md): The PKCS12 data for the relay client authentication.
- [identityDataPassword](nerelay/identitydatapassword.md): The password the relay uses to decrypt the PKCS12 identity data.
- [syntheticDNSAnswerIPv4Prefix](nerelay/syntheticdnsansweripv4prefix.md): An IPv4 address prefix the relay uses to handle address info requests.
- [syntheticDNSAnswerIPv6Prefix](nerelay/syntheticdnsansweripv6prefix.md): An IPv6 address prefix the relay uses to handle address info requests.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Relay configuration

- [NERelayManager](nerelaymanager.md): An object you use to create and manage a network relay configuration.

# NERelay (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A single relay server configuration that you can chain together with other relays.

## Declaration

```objectivec
@interface NERelay : NSObject
```

<a id="overview"></a>

## Overview

Relay servers are secure HTTP proxies that allow proxying TCP traffic using the `CONNECT` method and UDP traffic using the `connect-udp` protocol defined in [RFC 9298](https://www.rfc-editor.org/rfc/rfc9298.html).

## Topics

### Configuring server properties

- [HTTP3RelayURL](nerelay/http3relayurl.md): A URL identifying the relay server accessible using HTTP/3.
- [HTTP2RelayURL](nerelay/http2relayurl.md): A URL identifying the relay server accessible using HTTP/2.
- [dnsOverHTTPSURL](nerelay/dnsoverhttpsurl.md): The URL of a DNS-over-HTTPS (DoH) resolver accessible from the relay.
- [rawPublicKeys](nerelay/rawpublickeys.md): An array of TLS raw public keys that the relay server can present during the TLS handshake.

### Configuring client properties

- [additionalHTTPHeaderFields](nerelay/additionalhttpheaderfields.md): A dictionary of additional HTTP headers to send as part of `CONNECT` requests to the relay.
- [identityData](nerelay/identitydata.md): The PKCS12 data for the relay client authentication.
- [identityDataPassword](nerelay/identitydatapassword.md): The password the relay uses to decrypt the PKCS12 identity data.
- [syntheticDNSAnswerIPv4Prefix](nerelay/syntheticdnsansweripv4prefix.md): An IPv4 address prefix the relay uses to handle address info requests.
- [syntheticDNSAnswerIPv6Prefix](nerelay/syntheticdnsansweripv6prefix.md): An IPv6 address prefix the relay uses to handle address info requests.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Relay configuration

- [NERelayManager](nerelaymanager.md): An object you use to create and manage a network relay configuration.
