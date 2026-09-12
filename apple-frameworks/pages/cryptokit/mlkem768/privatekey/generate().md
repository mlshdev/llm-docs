> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mlkem768/privatekey/generate()](https://developer.apple.com/documentation/cryptokit/mlkem768/privatekey/generate())

# generate()

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Generates a new, random private key.

## Declaration

```swift
static func generate() throws -> MLKEM768.PrivateKey
```

## See Also

### Creating a private key

- [init()](init%28%29.md): Initializes a random private key.
- [init(integrityCheckedRepresentation:)](init%28integritycheckedrepresentation_%29.md): Initializes a private key from an integrity-checked representation.
- [init(seedRepresentation:publicKey:)](init%28seedrepresentation_publickey_%29.md): Initializes a private key from a seed representation and optional public key.
