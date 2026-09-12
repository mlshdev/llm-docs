> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/tlsminimumsupportedprotocol](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/tlsminimumsupportedprotocol)

# tlsMinimumSupportedProtocol (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.9+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The minimum TLS protocol to accept during protocol negotiation.

> Use [tlsMinimumSupportedProtocolVersion](tlsminimumsupportedprotocolversion.md) instead.

## Declaration

```swift
var tlsMinimumSupportedProtocol: SSLProtocol { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the minimum supported TLS protocol version for tasks within sessions based on this configuration.

## See Also

### Setting security policies

- [tlsMinimumSupportedProtocolVersion](tlsminimumsupportedprotocolversion.md): The minimum TLS protocol version that the client should accept when making connections in this session.
- [tlsMaximumSupportedProtocolVersion](tlsmaximumsupportedprotocolversion.md): The maximum TLS protocol version that the client should request when making connections in this session.
- [urlCredentialStorage](urlcredentialstorage.md): A credential store that provides credentials for authentication.
- [tlsMaximumSupportedProtocol](tlsmaximumsupportedprotocol.md): Deprecated. The maximum TLS protocol version that the client should request when making connections in this session.
- [requiresDNSSECValidation](requiresdnssecvalidation.md)

# TLSMinimumSupportedProtocol (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.9+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The minimum TLS protocol to accept during protocol negotiation.

> Use [TLSMinimumSupportedProtocolVersion](tlsminimumsupportedprotocolversion.md) instead.

## Declaration

```objectivec
@property SSLProtocol TLSMinimumSupportedProtocol;
```

<a id="Discussion"></a>

## Discussion

This property determines the minimum supported TLS protocol version for tasks within sessions based on this configuration.

## See Also

### Setting security policies

- [TLSMinimumSupportedProtocolVersion](tlsminimumsupportedprotocolversion.md): The minimum TLS protocol version that the client should accept when making connections in this session.
- [TLSMaximumSupportedProtocolVersion](tlsmaximumsupportedprotocolversion.md): The maximum TLS protocol version that the client should request when making connections in this session.
- [URLCredentialStorage](urlcredentialstorage.md): A credential store that provides credentials for authentication.
- [TLSMaximumSupportedProtocol](tlsmaximumsupportedprotocol.md): Deprecated. The maximum TLS protocol version that the client should request when making connections in this session.
- [requiresDNSSECValidation](requiresdnssecvalidation.md)
