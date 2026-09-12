> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslclientcertificatestate](https://developer.apple.com/documentation/security/sslclientcertificatestate)

# SSLClientCertificateState (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An enumeration of the states of client certificate exchange.

## Declaration

```swift
enum SSLClientCertificateState
```

## Topics

### Constants

- [SSLClientCertificateState.certNone](sslclientcertificatestate/certnone.md): Deprecated. Indicates that the server hasn’t asked for a certificate and that the client hasn’t sent one.
- [SSLClientCertificateState.certRequested](sslclientcertificatestate/certrequested.md): Deprecated. Indicates that the server has asked for a certificate, but the client has not sent it.
- [SSLClientCertificateState.certSent](sslclientcertificatestate/certsent.md): Deprecated. Indicates that the server asked for a certificate, the client sent one, and the server validated it. The application can inspect the certificate using the function `SSLGetPeerCertificates`.
- [SSLClientCertificateState.certRejected](sslclientcertificatestate/certrejected.md): Deprecated. Indicates that the client sent a certificate but the certificate failed validation. This value is seen only on the server side. The server application can inspect the certificate using the function `SSLGetPeerCertificates`.

### Initializers

- [init(rawValue:)](sslclientcertificatestate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SSLClientCertificateState (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An enumeration of the states of client certificate exchange.

## Declaration

```objectivec
enum SSLClientCertificateState : int;
```

## Topics

### Constants

- [kSSLClientCertNone](sslclientcertificatestate/certnone.md): Deprecated. Indicates that the server hasn’t asked for a certificate and that the client hasn’t sent one.
- [kSSLClientCertRequested](sslclientcertificatestate/certrequested.md): Deprecated. Indicates that the server has asked for a certificate, but the client has not sent it.
- [kSSLClientCertSent](sslclientcertificatestate/certsent.md): Deprecated. Indicates that the server asked for a certificate, the client sent one, and the server validated it. The application can inspect the certificate using the function `SSLGetPeerCertificates`.
- [kSSLClientCertRejected](sslclientcertificatestate/certrejected.md): Deprecated. Indicates that the client sent a certificate but the certificate failed validation. This value is seen only on the server side. The server application can inspect the certificate using the function `SSLGetPeerCertificates`.
