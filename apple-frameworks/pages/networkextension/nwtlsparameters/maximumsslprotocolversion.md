> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtlsparameters/maximumsslprotocolversion](https://developer.apple.com/documentation/networkextension/nwtlsparameters/maximumsslprotocolversion)

# maximumSSLProtocolVersion (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The maximum allowed `SSLProtocol` value to use when negotiating TLS.

> Use the [sec_protocol_options_set_max_tls_protocol_version(\_:\_:)](../../security/sec_protocol_options_set_max_tls_protocol_version%28____%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```swift
var maximumSSLProtocolVersion: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Values for `SSLProtocol` are defined in `<Security/SecureTransport.h>`. If set to a non-zero value, the SSL handshake will not accept any protocol version greater than the maximum.

> **Important**

>  This property should be used with caution, since it may limit the use of preferred SSL protocols.

## See Also

### Accessing TLS parameters

- [tlsSessionID](tlssessionid.md): Deprecated. The Session ID to use for the associated TCP connection.
- [sslCipherSuites](sslciphersuites.md): Deprecated. The set of allowed cipher suites when negotiating TLS.
- [minimumSSLProtocolVersion](minimumsslprotocolversion.md): Deprecated. The minimum allowed `SSLProtocol` value to use when negotiating TLS.

# maximumSSLProtocolVersion (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The maximum allowed `SSLProtocol` value to use when negotiating TLS.

> Use the [sec_protocol_options_set_max_tls_protocol_version](../../security/sec_protocol_options_set_max_tls_protocol_version%28____%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```objectivec
@property (assign) NSUInteger maximumSSLProtocolVersion;
```

<a id="Discussion"></a>

## Discussion

Values for `SSLProtocol` are defined in `<Security/SecureTransport.h>`. If set to a non-zero value, the SSL handshake will not accept any protocol version greater than the maximum.

> **Important**

>  This property should be used with caution, since it may limit the use of preferred SSL protocols.

## See Also

### Accessing TLS parameters

- [TLSSessionID](tlssessionid.md): Deprecated. The Session ID to use for the associated TCP connection.
- [SSLCipherSuites](sslciphersuites.md): Deprecated. The set of allowed cipher suites when negotiating TLS.
- [minimumSSLProtocolVersion](minimumsslprotocolversion.md): Deprecated. The minimum allowed `SSLProtocol` value to use when negotiating TLS.
