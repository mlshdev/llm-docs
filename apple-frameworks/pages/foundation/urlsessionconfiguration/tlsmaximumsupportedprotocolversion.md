> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/tlsmaximumsupportedprotocolversion](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/tlsmaximumsupportedprotocolversion)

# tlsMaximumSupportedProtocolVersion (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum TLS protocol version that the client should request when making connections in this session.

## Declaration

```swift
var tlsMaximumSupportedProtocolVersion: tls_protocol_version_t { get set }
```

## See Also

### Setting security policies

- [tlsMinimumSupportedProtocolVersion](tlsminimumsupportedprotocolversion.md): The minimum TLS protocol version that the client should accept when making connections in this session.
- [urlCredentialStorage](urlcredentialstorage.md): A credential store that provides credentials for authentication.
- [tlsMinimumSupportedProtocol](tlsminimumsupportedprotocol.md): Deprecated. The minimum TLS protocol to accept during protocol negotiation.
- [tlsMaximumSupportedProtocol](tlsmaximumsupportedprotocol.md): Deprecated. The maximum TLS protocol version that the client should request when making connections in this session.
- [requiresDNSSECValidation](requiresdnssecvalidation.md)

# TLSMaximumSupportedProtocolVersion (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum TLS protocol version that the client should request when making connections in this session.

## Declaration

```objectivec
@property tls_protocol_version_t TLSMaximumSupportedProtocolVersion;
```

## See Also

### Setting security policies

- [TLSMinimumSupportedProtocolVersion](tlsminimumsupportedprotocolversion.md): The minimum TLS protocol version that the client should accept when making connections in this session.
- [URLCredentialStorage](urlcredentialstorage.md): A credential store that provides credentials for authentication.
- [TLSMinimumSupportedProtocol](tlsminimumsupportedprotocol.md): Deprecated. The minimum TLS protocol to accept during protocol negotiation.
- [TLSMaximumSupportedProtocol](tlsmaximumsupportedprotocol.md): Deprecated. The maximum TLS protocol version that the client should request when making connections in this session.
- [requiresDNSSECValidation](requiresdnssecvalidation.md)
