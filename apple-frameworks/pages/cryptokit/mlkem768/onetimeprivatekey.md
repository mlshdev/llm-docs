> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mlkem768/onetimeprivatekey](https://developer.apple.com/documentation/cryptokit/mlkem768/onetimeprivatekey)

# MLKEM768.OneTimePrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
struct OneTimePrivateKey
```

## Topics

### Initializers

- [init()](onetimeprivatekey/init%28%29.md): Initializes a random one-time-use private key.

### Instance Properties

- [publicKey](onetimeprivatekey/publickey.md): The corresponding public key.

### Instance Methods

- [decapsulate(\_:)](onetimeprivatekey/decapsulate%28__%29.md): Decapsulate a shared secret.

### Type Methods

- [generate()](onetimeprivatekey/generate%28%29.md): Generates a new, random one-time-use private key.

## Relationships

### Conforms To

- [KEMOneTimePrivateKey](../kemonetimeprivatekey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
