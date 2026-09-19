> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/secureenclave/mlkem1024

# SecureEnclave.MLKEM1024

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An implementation of the MLKEM1024 key encapsulation mechanism that operates within the Secure Enclave.

## Declaration

```swift
enum MLKEM1024
```

## Topics

### Keys

- [SecureEnclave.MLKEM1024.PrivateKey](mlkem1024/privatekey.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using the secure enclave

- [SecureEnclave.P256](p256.md): An elliptic curve that enables NIST P-256 signatures and key agreement within the Secure Enclave.
- [SecureEnclave.MLKEM768](mlkem768.md): An implementation of the MLKEM768 key encapsulation mechanism that operates within the Secure Enclave.
