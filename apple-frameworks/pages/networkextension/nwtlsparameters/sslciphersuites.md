> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtlsparameters/sslciphersuites](https://developer.apple.com/documentation/networkextension/nwtlsparameters/sslciphersuites)

# sslCipherSuites (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The set of allowed cipher suites when negotiating TLS.

> Use the [sec_protocol_options_append_tls_ciphersuite(\_:\_:)](../../security/sec_protocol_options_append_tls_ciphersuite%28____%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```swift
var sslCipherSuites: Set<NSNumber>? { get set }
```

<a id="Discussion"></a>

## Discussion

Values for cipher suites are defined in `<Security/CipherSuite.h>`. These values should be wrapped as [NSNumber](../../foundation/nsnumber.md) objects in a set. If this property is set to `nil`, the default cipher suites will be used.

## See Also

### Accessing TLS parameters

- [tlsSessionID](tlssessionid.md): Deprecated. The Session ID to use for the associated TCP connection.
- [minimumSSLProtocolVersion](minimumsslprotocolversion.md): Deprecated. The minimum allowed `SSLProtocol` value to use when negotiating TLS.
- [maximumSSLProtocolVersion](maximumsslprotocolversion.md): Deprecated. The maximum allowed `SSLProtocol` value to use when negotiating TLS.

# SSLCipherSuites (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The set of allowed cipher suites when negotiating TLS.

> Use the [sec_protocol_options_append_tls_ciphersuite](../../security/sec_protocol_options_append_tls_ciphersuite%28____%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```objectivec
@property (copy, nullable) NSSet<NSNumber *> * SSLCipherSuites;
```

<a id="Discussion"></a>

## Discussion

Values for cipher suites are defined in `<Security/CipherSuite.h>`. These values should be wrapped as [NSNumber](../../foundation/nsnumber.md) objects in a set. If this property is set to `nil`, the default cipher suites will be used.

## See Also

### Accessing TLS parameters

- [TLSSessionID](tlssessionid.md): Deprecated. The Session ID to use for the associated TCP connection.
- [minimumSSLProtocolVersion](minimumsslprotocolversion.md): Deprecated. The minimum allowed `SSLProtocol` value to use when negotiating TLS.
- [maximumSSLProtocolVersion](maximumsslprotocolversion.md): Deprecated. The maximum allowed `SSLProtocol` value to use when negotiating TLS.
