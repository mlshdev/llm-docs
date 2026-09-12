> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secexternalformat](https://developer.apple.com/documentation/security/secexternalformat)

# SecExternalFormat (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The external format of a keychain item.

## Declaration

```swift
enum SecExternalFormat
```

## Topics

### Constants

- [SecExternalFormat.formatUnknown](secexternalformat/formatunknown.md)
- [SecExternalFormat.formatOpenSSL](secexternalformat/formatopenssl.md): Format for asymmetric (public/private) keys. OpenSSL is an open source toolkit for Secure Sockets Layer (SSL) and Transport Layer Security (TLS). Also known as X.509 for public keys.
- [SecExternalFormat.formatSSH](secexternalformat/formatssh.md): OpenSSH 1 format for asymmetric (public/private) keys. OpenSSH is an OpenBSD implementation of the Secure Shell (SSH) protocol.
- [SecExternalFormat.formatBSAFE](secexternalformat/formatbsafe.md): Format for asymmetric keys. BSAFE is a standard from RSA Security for encryption, digital signatures, and privacy.
- [SecExternalFormat.formatSSHv2](secexternalformat/formatsshv2.md): OpenSSH 2 format for public keys. OpenSSH version 2 private keys are in format `kSecFormatOpenSSL` or `kSecFormatWrappedOpenSSL`. OpenSSH is an OpenBSD implementation of the Secure Shell (SSH) protocol.
- [SecExternalFormat.formatRawKey](secexternalformat/formatrawkey.md): Format for symmetric keys. Raw, unformatted key bits. This is the default for symmetric keys.
- [SecExternalFormat.formatWrappedPKCS8](secexternalformat/formatwrappedpkcs8.md): Format for wrapped symmetric and private keys. PKCS8 is the Private-Key Information Syntax Standard from RSA Security.
- [SecExternalFormat.formatWrappedOpenSSL](secexternalformat/formatwrappedopenssl.md): Format for wrapped symmetric and private keys. OpenSSL is an open-source toolkit for Secure Sockets Layer (SSL) and Transport Layer Security (TLS).
- [SecExternalFormat.formatWrappedSSH](secexternalformat/formatwrappedssh.md): OpenSSH 1 format for wrapped symmetric and private keys. OpenSSH is an OpenBSD implementation of the Secure Shell (SSH) protocol.
- [SecExternalFormat.formatWrappedLSH](secexternalformat/formatwrappedlsh.md): Not supported.
- [SecExternalFormat.formatX509Cert](secexternalformat/formatx509cert.md): Format for certificates. DER (distinguished encoding rules) encoded. X.509 is a standard for digital certificates from the International Telecommunication Union (ITU). This is the default for certificates.
- [SecExternalFormat.formatPEMSequence](secexternalformat/formatpemsequence.md): Sequence of certificates and keys with PEM armor. PEM armor refers to a way of expressing binary data as an ASCII string so that it can be transferred over text-only channels such as email. This is the default format for multiple items.
- [SecExternalFormat.formatPKCS7](secexternalformat/formatpkcs7.md): Sequence of certificates, no PEM armor. PKCS7 is the Cryptographic Message Syntax Standard from RSA Security, Inc.
- [SecExternalFormat.formatPKCS12](secexternalformat/formatpkcs12.md): Set of certificates and private keys. PKCS12 is the Personal Information Exchange Syntax from RSA Security, Inc.
- [SecExternalFormat.formatNetscapeCertSequence](secexternalformat/formatnetscapecertsequence.md): Set of certificates in the Netscape Certificate Sequence format.

### Initializers

- [init(rawValue:)](secexternalformat/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecExternalFormat (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The external format of a keychain item.

## Declaration

```objectivec
enum SecExternalFormat : uint32_t;
```

## Topics

### Constants

- [kSecFormatUnknown](secexternalformat/formatunknown.md)
- [kSecFormatOpenSSL](secexternalformat/formatopenssl.md): Format for asymmetric (public/private) keys. OpenSSL is an open source toolkit for Secure Sockets Layer (SSL) and Transport Layer Security (TLS). Also known as X.509 for public keys.
- [kSecFormatSSH](secexternalformat/formatssh.md): OpenSSH 1 format for asymmetric (public/private) keys. OpenSSH is an OpenBSD implementation of the Secure Shell (SSH) protocol.
- [kSecFormatBSAFE](secexternalformat/formatbsafe.md): Format for asymmetric keys. BSAFE is a standard from RSA Security for encryption, digital signatures, and privacy.
- [kSecFormatSSHv2](secexternalformat/formatsshv2.md): OpenSSH 2 format for public keys. OpenSSH version 2 private keys are in format `kSecFormatOpenSSL` or `kSecFormatWrappedOpenSSL`. OpenSSH is an OpenBSD implementation of the Secure Shell (SSH) protocol.
- [kSecFormatRawKey](secexternalformat/formatrawkey.md): Format for symmetric keys. Raw, unformatted key bits. This is the default for symmetric keys.
- [kSecFormatWrappedPKCS8](secexternalformat/formatwrappedpkcs8.md): Format for wrapped symmetric and private keys. PKCS8 is the Private-Key Information Syntax Standard from RSA Security.
- [kSecFormatWrappedOpenSSL](secexternalformat/formatwrappedopenssl.md): Format for wrapped symmetric and private keys. OpenSSL is an open-source toolkit for Secure Sockets Layer (SSL) and Transport Layer Security (TLS).
- [kSecFormatWrappedSSH](secexternalformat/formatwrappedssh.md): OpenSSH 1 format for wrapped symmetric and private keys. OpenSSH is an OpenBSD implementation of the Secure Shell (SSH) protocol.
- [kSecFormatWrappedLSH](secexternalformat/formatwrappedlsh.md): Not supported.
- [kSecFormatX509Cert](secexternalformat/formatx509cert.md): Format for certificates. DER (distinguished encoding rules) encoded. X.509 is a standard for digital certificates from the International Telecommunication Union (ITU). This is the default for certificates.
- [kSecFormatPEMSequence](secexternalformat/formatpemsequence.md): Sequence of certificates and keys with PEM armor. PEM armor refers to a way of expressing binary data as an ASCII string so that it can be transferred over text-only channels such as email. This is the default format for multiple items.
- [kSecFormatPKCS7](secexternalformat/formatpkcs7.md): Sequence of certificates, no PEM armor. PKCS7 is the Cryptographic Message Syntax Standard from RSA Security, Inc.
- [kSecFormatPKCS12](secexternalformat/formatpkcs12.md): Set of certificates and private keys. PKCS12 is the Personal Information Exchange Syntax from RSA Security, Inc.
- [kSecFormatNetscapeCertSequence](secexternalformat/formatnetscapecertsequence.md): Set of certificates in the Netscape Certificate Sequence format.
