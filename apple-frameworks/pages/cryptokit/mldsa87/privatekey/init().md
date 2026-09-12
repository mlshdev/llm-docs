> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mldsa87/privatekey/init()](https://developer.apple.com/documentation/cryptokit/mldsa87/privatekey/init())

# init()

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a random MLDSA87 private key.

## Declaration

```swift
init() throws
```

<a id="discussion"></a>

## Discussion

This initializer is marked `throws` to support use in generic contexts, but key generation itself doesn’t produce errors.

When you call this initializer directly on a concrete type, rather than through a generic type parameter, you can safely call `try!` to create the key:

```swift
let privateKey = try! MLDSA87.PrivateKey()
```

## See Also

### Creating a private key

- [init(integrityCheckedRepresentation:)](init%28integritycheckedrepresentation_%29.md): Initializes a private key from an integrity-checked data representation.
- [init(seedRepresentation:publicKey:)](init%28seedrepresentation_publickey_%29.md): Initializes a private key from the seed representation.
