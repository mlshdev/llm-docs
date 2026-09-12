> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/totp/algorithm-swift.enum](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/totp/algorithm-swift.enum)

# ASImportableCredential.TOTP.Algorithm

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An enumeration of algorithm types that all importers are expected to support.

## Declaration

```swift
enum Algorithm
```

## Topics

### Algorithms

- [ASImportableCredential.TOTP.Algorithm.sha1](algorithm-swift.enum/sha1.md): The SHA-1 algorithm.
- [ASImportableCredential.TOTP.Algorithm.sha256](algorithm-swift.enum/sha256.md): The SHA-256 algorithm.
- [ASImportableCredential.TOTP.Algorithm.sha512](algorithm-swift.enum/sha512.md): The SHA-512 algorithm.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing TOTP properties

- [secret](secret.md): The secret associated with this generator.
- [period](period.md): The period, in seconds, used by the generator to refresh codes.
- [digits](digits.md): The number of digits in the code used by the generator.
- [algorithm](algorithm-swift.property.md): The algorithm used by the generator.
- [issuer](issuer.md): The issuer of the generator, if any.
