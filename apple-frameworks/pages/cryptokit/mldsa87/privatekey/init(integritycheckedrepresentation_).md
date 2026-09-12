> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mldsa87/privatekey/init(integritycheckedrepresentation:)](https://developer.apple.com/documentation/cryptokit/mldsa87/privatekey/init(integritycheckedrepresentation:))

# init(integrityCheckedRepresentation:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Initializes a private key from an integrity-checked data representation.

## Declaration

```swift
init<D>(integrityCheckedRepresentation: D) throws where D : DataProtocol
```

## Parameters

- `integrityCheckedRepresentation`: The integrity-checked data representation of the private key. The parameter needs to be 64 bytes long, and contain the seed and a hash of the public key.

## See Also

### Creating a private key

- [init()](init%28%29.md): Creates a random MLDSA87 private key.
- [init(seedRepresentation:publicKey:)](init%28seedrepresentation_publickey_%29.md): Initializes a private key from the seed representation.
