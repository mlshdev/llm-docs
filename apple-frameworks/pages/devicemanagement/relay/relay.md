> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/relay/relay](https://developer.apple.com/documentation/devicemanagement/relay/relay)

# Relay.Relay

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ · visionOS 1.0+ (deprecated in 27.0)

A dictionary that describes a relay server.

> Use the declarative management `com.apple.configuration.network.relay` configuration on platforms where it is available.

## Declaration

```
object Relay.Relay
```

## Properties

- `AdditionalHTTPHeaderFields` — `Relay.Relay.AdditionalHTTPHeaderFields`: A dictionary that contains custom HTTP header keys and values to add to each request. The dictionary key name represents the HTTP header field name to use, and the dictionary value is the string to use as the HTTP header field value.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+
- `HTTP2RelayURL` — `string`: The URL or URI template, as defined in RFC 9298, of a relay server that’s reachable using HTTP/2 and supports proxying TCP and UDP using the CONNECT method.

  Each relay needs to include either `HTTP2RelayURL` or `HTTP3RelayURL`, or it can include both.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+
- `HTTP3RelayURL` — `string`: The URL or URI template, as defined in RFC 9298, of a relay server that’s reachable using HTTP/3 and supports proxying TCP and UDP using the CONNECT method.

  Each relay needs to include either `HTTP2RelayURL` or `HTTP3RelayURL`, or it can include both.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+
- `PayloadCertificateUUID` — `string`: The UUID that points to an identity certificate payload, which the system uses to authenticate the user to the relay server.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+
- `RawPublicKeys` — `[data]`: An array of DER-encoded raw public keys that the system uses to authenticate the server during a TLS handshake. The server needs to use one of the keys in the handshake to authenticate.

  If this array is empty, the system uses the default TLS trust evaluation.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+

## Topics

### Objects

- [Relay.Relay.AdditionalHTTPHeaderFields](relay/additionalhttpheaderfields-data.dictionary.md): Deprecated. A custom HTTP header key field name.
