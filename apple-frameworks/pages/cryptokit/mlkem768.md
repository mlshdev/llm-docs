> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mlkem768](https://developer.apple.com/documentation/cryptokit/mlkem768)

# MLKEM768

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The Module-Lattice key encapsulation mechanism (KEM).

## Declaration

```swift
enum MLKEM768
```

## Topics

### Keys

- [MLKEM768.PrivateKey](mlkem768/privatekey.md): A private key you use to decapsulate shared secrets with the Module-Lattice key encapsulation mechanism.
- [MLKEM768.PublicKey](mlkem768/publickey.md): A public key you use to encapsulate shared secrets with the Module-Lattice key encapsulation mechanism.

### Structures

- [MLKEM768.OneTimePrivateKey](mlkem768/onetimeprivatekey.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Key encapsulation mechanisms (KEM)

- [KEM](kem.md): A key encapsulation mechanism.
- [MLKEM1024](mlkem1024.md): The Module-Lattice key encapsulation mechanism (KEM).
- [XWingMLKEM768X25519](xwingmlkem768x25519.md): The X-Wing (ML-KEM768 with X25519) Key Encapsulation Mechanism, defined in https://datatracker.ietf.org/doc/html/draft-connolly-cfrg-xwing-kem-06
