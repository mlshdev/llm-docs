> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtlsparameters/tlssessionid](https://developer.apple.com/documentation/networkextension/nwtlsparameters/tlssessionid)

# tlsSessionID (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The Session ID to use for the associated TCP connection.

> Use the [sec_protocol_options_set_tls_resumption_enabled(\_:\_:)](../../security/sec_protocol_options_set_tls_resumption_enabled%28____%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```swift
var tlsSessionID: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

The Session ID is used for TLS session resumption.

## See Also

### Accessing TLS parameters

- [sslCipherSuites](sslciphersuites.md): Deprecated. The set of allowed cipher suites when negotiating TLS.
- [minimumSSLProtocolVersion](minimumsslprotocolversion.md): Deprecated. The minimum allowed `SSLProtocol` value to use when negotiating TLS.
- [maximumSSLProtocolVersion](maximumsslprotocolversion.md): Deprecated. The maximum allowed `SSLProtocol` value to use when negotiating TLS.

# TLSSessionID (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The Session ID to use for the associated TCP connection.

> Use the [sec_protocol_options_set_tls_resumption_enabled](../../security/sec_protocol_options_set_tls_resumption_enabled%28____%29.md) function from the [Security](../../security.md) framework instead.

## Declaration

```objectivec
@property (copy, nullable) NSData * TLSSessionID;
```

<a id="Discussion"></a>

## Discussion

The Session ID is used for TLS session resumption.

## See Also

### Accessing TLS parameters

- [SSLCipherSuites](sslciphersuites.md): Deprecated. The set of allowed cipher suites when negotiating TLS.
- [minimumSSLProtocolVersion](minimumsslprotocolversion.md): Deprecated. The minimum allowed `SSLProtocol` value to use when negotiating TLS.
- [maximumSSLProtocolVersion](maximumsslprotocolversion.md): Deprecated. The maximum allowed `SSLProtocol` value to use when negotiating TLS.
