> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mlkem1024/privatekey/init(seedrepresentation:publickey:)](https://developer.apple.com/documentation/cryptokit/mlkem1024/privatekey/init(seedrepresentation:publickey:))

# init(seedRepresentation:publicKey:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Initializes a private key from a seed representation and optional public key.

## Declaration

```swift
init<D>(seedRepresentation: D, publicKey: MLKEM1024.PublicKey?) throws where D : DataProtocol
```

## Parameters

- `seedRepresentation`: The seed representation `d||z`, as specified in the `ML-KEM.KeyGen_internal(d,z)` algorithm (Algorithm 16) of FIPS 203.
- `publicKey`: An optional public key. Pass this to check that the initialized private key is consistent with the public key. The initializer throws if the public key doesn’t match the expected value.

## See Also

### Creating a private key

- [generate()](generate%28%29.md): Generates a new, random private key.
- [init()](init%28%29.md): Initializes a random private key.
- [init(integrityCheckedRepresentation:)](init%28integritycheckedrepresentation_%29.md): Initializes a private key from an integrity-checked representation.
