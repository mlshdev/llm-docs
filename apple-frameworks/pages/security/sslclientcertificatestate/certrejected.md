> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sslclientcertificatestate/certrejected

# SSLClientCertificateState.certRejected (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Indicates that the client sent a certificate but the certificate failed validation. This value is seen only on the server side. The server application can inspect the certificate using the function `SSLGetPeerCertificates`.

## Declaration

```swift
case certRejected
```

# kSSLClientCertRejected (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Indicates that the client sent a certificate but the certificate failed validation. This value is seen only on the server side. The server application can inspect the certificate using the function `SSLGetPeerCertificates`.

## Declaration

```objectivec
kSSLClientCertRejected
```
