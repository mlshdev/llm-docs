> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p384/signing/ecdsasignature](https://developer.apple.com/documentation/cryptokit/p384/signing/ecdsasignature)

# P384.Signing.ECDSASignature

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A P-384 elliptic curve digital signature algorithm (ECDSA) signature.

## Declaration

```swift
struct ECDSASignature
```

## Topics

### Creating a signature

- [init(derRepresentation:)](ecdsasignature/init%28derrepresentation_%29.md): Creates a P-384 digital signature from a Distinguished Encoding Rules (DER) encoded representation.
- [init(rawRepresentation:)](ecdsasignature/init%28rawrepresentation_%29.md): Creates a P-384 digital signature from a raw representation.

### Representing the signature

- [derRepresentation](ecdsasignature/derrepresentation.md): A Distinguished Encoding Rules (DER) encoded representation of a P-384 digital signature.
- [rawRepresentation](ecdsasignature/rawrepresentation.md): A raw data representation of a P-384 digital signature.

## Relationships

### Conforms To

- [ContiguousBytes](../../../foundation/contiguousbytes.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a signature

- [signature(for:)](privatekey/signature%28for_%29-8nncg.md): Generates an Elliptic Curve Digital Signature Algorithm (ECDSA) signature of the data you provide over the P-384 elliptic curve, using SHA-384 as the hash function.
- [signature(for:)](privatekey/signature%28for_%29-wrsj.md): Generates an Elliptic Curve Digital Signature Algorithm (ECDSA) signature of the digest you provide over the P-384 elliptic curve.
