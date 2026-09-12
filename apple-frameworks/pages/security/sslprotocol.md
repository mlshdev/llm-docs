> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslprotocol](https://developer.apple.com/documentation/security/sslprotocol)

# SSLProtocol (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An enumeration of valid SSL protocol versions.

## Declaration

```swift
enum SSLProtocol
```

<a id="overview"></a>

## Overview

The descriptions given here apply to the functions [SSLSetProtocolVersion](sslsetprotocolversion.md) and [SSLGetProtocolVersion](sslgetprotocolversion.md). For the functions [SSLSetProtocolVersionEnabled](sslsetprotocolversionenabled.md) and [SSLGetProtocolVersionEnabled](sslgetprotocolversionenabled.md), only the following values are used. For these functions, each constant except [SSLProtocol.sslProtocolAll](sslprotocol/sslprotocolall.md) specifies a single protocol version.

- [SSLProtocol.sslProtocol2](sslprotocol/sslprotocol2.md)
- [SSLProtocol.sslProtocol3](sslprotocol/sslprotocol3.md)
- [SSLProtocol.tlsProtocol1](sslprotocol/tlsprotocol1.md)
- [SSLProtocol.sslProtocolAll](sslprotocol/sslprotocolall.md)

## Topics

### SSL Protocols

- [SSLProtocol.sslProtocolUnknown](sslprotocol/sslprotocolunknown.md): Deprecated. Specifies that no protocol has been or should be negotiated or specified; use default.
- [SSLProtocol.sslProtocol2](sslprotocol/sslprotocol2.md): Deprecated. Specifies that only the SSL 2.0 protocol may be negotiated. Deprecated in iOS.
- [SSLProtocol.sslProtocol3](sslprotocol/sslprotocol3.md): Deprecated. Specifies that the SSL 3.0 protocol is preferred; the SSL 2.0 protocol may be negotiated if the peer cannot use the SSL 3.0 protocol.
- [SSLProtocol.sslProtocol3Only](sslprotocol/sslprotocol3only.md): Deprecated. Specifies that only the SSL 3.0 protocol may be negotiated; fails if the peer tries to negotiate the SSL 2.0 protocol. Deprecated in iOS.
- [SSLProtocol.sslProtocolAll](sslprotocol/sslprotocolall.md): Deprecated. Specifies all supported versions. Deprecated in iOS.

### TLS Protocols

- [SSLProtocol.tlsProtocol1](sslprotocol/tlsprotocol1.md): Deprecated. Specifies that the TLS 1.0 protocol is preferred but lower versions may be negotiated.
- [SSLProtocol.tlsProtocol1Only](sslprotocol/tlsprotocol1only.md): Deprecated. Specifies that only the TLS 1.0 protocol may be negotiated. Deprecated in iOS.
- [SSLProtocol.tlsProtocol11](sslprotocol/tlsprotocol11.md): Deprecated. Specifies that the TLS 1.1 protocol is preferred but lower versions may be negotiated.
- [SSLProtocol.tlsProtocol12](sslprotocol/tlsprotocol12.md): Deprecated. Specifies that the TLS 1.2 protocol is preferred but lower versions may be negotiated.
- [SSLProtocol.tlsProtocol13](sslprotocol/tlsprotocol13.md): Deprecated. Specifies that the TLS 1.3 protocol is preferred but lower versions may be negotiated.
- [SSLProtocol.tlsProtocolMaxSupported](sslprotocol/tlsprotocolmaxsupported.md): Deprecated. The maximum system supported version.

### DTLS Protocols

- [SSLProtocol.dtlsProtocol1](sslprotocol/dtlsprotocol1.md): Deprecated. Specifies the DTLS 1.0 protocol.
- [SSLProtocol.dtlsProtocol12](sslprotocol/dtlsprotocol12.md): Deprecated. Specifies the DTLS 1.2 protocol.

### Initializers

- [init(rawValue:)](sslprotocol/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SSLProtocol (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An enumeration of valid SSL protocol versions.

## Declaration

```objectivec
enum SSLProtocol : int;
```

<a id="overview"></a>

## Overview

The descriptions given here apply to the functions [SSLSetProtocolVersion](sslsetprotocolversion.md) and [SSLGetProtocolVersion](sslgetprotocolversion.md). For the functions [SSLSetProtocolVersionEnabled](sslsetprotocolversionenabled.md) and [SSLGetProtocolVersionEnabled](sslgetprotocolversionenabled.md), only the following values are used. For these functions, each constant except [kSSLProtocolAll](sslprotocol/sslprotocolall.md) specifies a single protocol version.

- [kSSLProtocol2](sslprotocol/sslprotocol2.md)
- [kSSLProtocol3](sslprotocol/sslprotocol3.md)
- [kTLSProtocol1](sslprotocol/tlsprotocol1.md)
- [kSSLProtocolAll](sslprotocol/sslprotocolall.md)

## Topics

### SSL Protocols

- [kSSLProtocolUnknown](sslprotocol/sslprotocolunknown.md): Deprecated. Specifies that no protocol has been or should be negotiated or specified; use default.
- [kSSLProtocol2](sslprotocol/sslprotocol2.md): Deprecated. Specifies that only the SSL 2.0 protocol may be negotiated. Deprecated in iOS.
- [kSSLProtocol3](sslprotocol/sslprotocol3.md): Deprecated. Specifies that the SSL 3.0 protocol is preferred; the SSL 2.0 protocol may be negotiated if the peer cannot use the SSL 3.0 protocol.
- [kSSLProtocol3Only](sslprotocol/sslprotocol3only.md): Deprecated. Specifies that only the SSL 3.0 protocol may be negotiated; fails if the peer tries to negotiate the SSL 2.0 protocol. Deprecated in iOS.
- [kSSLProtocolAll](sslprotocol/sslprotocolall.md): Deprecated. Specifies all supported versions. Deprecated in iOS.

### TLS Protocols

- [kTLSProtocol1](sslprotocol/tlsprotocol1.md): Deprecated. Specifies that the TLS 1.0 protocol is preferred but lower versions may be negotiated.
- [kTLSProtocol1Only](sslprotocol/tlsprotocol1only.md): Deprecated. Specifies that only the TLS 1.0 protocol may be negotiated. Deprecated in iOS.
- [kTLSProtocol11](sslprotocol/tlsprotocol11.md): Deprecated. Specifies that the TLS 1.1 protocol is preferred but lower versions may be negotiated.
- [kTLSProtocol12](sslprotocol/tlsprotocol12.md): Deprecated. Specifies that the TLS 1.2 protocol is preferred but lower versions may be negotiated.
- [kTLSProtocol13](sslprotocol/tlsprotocol13.md): Deprecated. Specifies that the TLS 1.3 protocol is preferred but lower versions may be negotiated.
- [kTLSProtocolMaxSupported](sslprotocol/tlsprotocolmaxsupported.md): Deprecated. The maximum system supported version.

### DTLS Protocols

- [kDTLSProtocol1](sslprotocol/dtlsprotocol1.md): Deprecated. Specifies the DTLS 1.0 protocol.
- [kDTLSProtocol12](sslprotocol/dtlsprotocol12.md): Deprecated. Specifies the DTLS 1.2 protocol.
