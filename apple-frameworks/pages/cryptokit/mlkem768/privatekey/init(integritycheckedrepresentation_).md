> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mlkem768/privatekey/init(integritycheckedrepresentation:)](https://developer.apple.com/documentation/cryptokit/mlkem768/privatekey/init(integritycheckedrepresentation:))

# init(integrityCheckedRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Initializes a private key from an integrity-checked representation.

## Declaration

```swift
init<D>(integrityCheckedRepresentation: D) throws where D : DataProtocol
```

## Parameters

- `integrityCheckedRepresentation`: A representation of the private key that includes the seed value, and a hash of the corresponding public key.

## See Also

### Creating a private key

- [generate()](generate%28%29.md): Generates a new, random private key.
- [init()](init%28%29.md): Initializes a random private key.
- [init(seedRepresentation:publicKey:)](init%28seedrepresentation_publickey_%29.md): Initializes a private key from a seed representation and optional public key.
