> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsettingskeyusage](https://developer.apple.com/documentation/security/sectrustsettingskeyusage)

# SecTrustSettingsKeyUsage (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Allowed uses for the encryption key in a certificate.

## Declaration

```swift
struct SecTrustSettingsKeyUsage
```

## Topics

### Initializers

- [init(rawValue:)](sectrustsettingskeyusage/init%28rawvalue_%29.md): Initializes a trust settings key usage structure.

### Constants

- [useSignature](sectrustsettingskeyusage/usesignature.md): The key can be used to sign data or verify a signature.
- [useEnDecryptData](sectrustsettingskeyusage/useendecryptdata.md): The key can be used to encrypt or decrypt data.
- [useEnDecryptKey](sectrustsettingskeyusage/useendecryptkey.md): The key can be used to encrypt or decrypt (wrap or unwrap) a key.
- [useSignCert](sectrustsettingskeyusage/usesigncert.md): The key can be used to sign a certificate or verify a signature.
- [useSignRevocation](sectrustsettingskeyusage/usesignrevocation.md): The key can be used to sign an OCSP (online certificate status protocol) message or CRL (certificate verification list), or to verify a signature.
- [useKeyExchange](sectrustsettingskeyusage/usekeyexchange.md): The key is a private key that has been shared using a key exchange protocol, such as Diffie-Hellman key exchange.
- [useAny](sectrustsettingskeyusage/useany.md): The key can be used for any purpose.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SecTrustSettingsKeyUsage (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Allowed uses for the encryption key in a certificate.

## Declaration

```objectivec
enum SecTrustSettingsKeyUsage : uint32_t;
```

## Topics

### Constants

- [kSecTrustSettingsKeyUseSignature](sectrustsettingskeyusage/usesignature.md): The key can be used to sign data or verify a signature.
- [kSecTrustSettingsKeyUseEnDecryptData](sectrustsettingskeyusage/useendecryptdata.md): The key can be used to encrypt or decrypt data.
- [kSecTrustSettingsKeyUseEnDecryptKey](sectrustsettingskeyusage/useendecryptkey.md): The key can be used to encrypt or decrypt (wrap or unwrap) a key.
- [kSecTrustSettingsKeyUseSignCert](sectrustsettingskeyusage/usesigncert.md): The key can be used to sign a certificate or verify a signature.
- [kSecTrustSettingsKeyUseSignRevocation](sectrustsettingskeyusage/usesignrevocation.md): The key can be used to sign an OCSP (online certificate status protocol) message or CRL (certificate verification list), or to verify a signature.
- [kSecTrustSettingsKeyUseKeyExchange](sectrustsettingskeyusage/usekeyexchange.md): The key is a private key that has been shared using a key exchange protocol, such as Diffie-Hellman key exchange.
- [kSecTrustSettingsKeyUseAny](sectrustsettingskeyusage/useany.md): The key can be used for any purpose.
