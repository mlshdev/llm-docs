> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtlsparameters](https://developer.apple.com/documentation/networkextension/nwtlsparameters)

# NWTLSParameters (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

TLS properties for creating a connection.

> Use the [sec_protocol_options_t](../security/sec_protocol_options_t.md) type from the [Security](../security.md) framework instead.

## Declaration

```swift
class NWTLSParameters
```

## Topics

### Accessing TLS parameters

- [tlsSessionID](nwtlsparameters/tlssessionid.md): Deprecated. The Session ID to use for the associated TCP connection.
- [sslCipherSuites](nwtlsparameters/sslciphersuites.md): Deprecated. The set of allowed cipher suites when negotiating TLS.
- [minimumSSLProtocolVersion](nwtlsparameters/minimumsslprotocolversion.md): Deprecated. The minimum allowed `SSLProtocol` value to use when negotiating TLS.
- [maximumSSLProtocolVersion](nwtlsparameters/maximumsslprotocolversion.md): Deprecated. The maximum allowed `SSLProtocol` value to use when negotiating TLS.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### TCP connections

- [NWTCPConnection](nwtcpconnection.md): Deprecated. An object to manage a TCP connection, with or without TLS.
- [NWTCPConnectionAuthenticationDelegate](nwtcpconnectionauthenticationdelegate.md): Deprecated. A delegate protocol to customize the TLS authentication done by a connection.

# NWTLSParameters (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

TLS properties for creating a connection.

> Use the [sec_protocol_options_t](../security/sec_protocol_options_t.md) type from the [Security](../security.md) framework instead.

## Declaration

```objectivec
@interface NWTLSParameters : NSObject
```

## Topics

### Accessing TLS parameters

- [TLSSessionID](nwtlsparameters/tlssessionid.md): Deprecated. The Session ID to use for the associated TCP connection.
- [SSLCipherSuites](nwtlsparameters/sslciphersuites.md): Deprecated. The set of allowed cipher suites when negotiating TLS.
- [minimumSSLProtocolVersion](nwtlsparameters/minimumsslprotocolversion.md): Deprecated. The minimum allowed `SSLProtocol` value to use when negotiating TLS.
- [maximumSSLProtocolVersion](nwtlsparameters/maximumsslprotocolversion.md): Deprecated. The maximum allowed `SSLProtocol` value to use when negotiating TLS.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### TCP connections

- [NWTCPConnection](nwtcpconnection.md): Deprecated. An object to manage a TCP connection, with or without TLS.
- [NWTCPConnectionAuthenticationDelegate](nwtcpconnectionauthenticationdelegate.md): Deprecated. A delegate protocol to customize the TLS authentication done by a connection.
