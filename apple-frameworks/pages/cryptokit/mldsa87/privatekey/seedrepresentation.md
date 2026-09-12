> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mldsa87/privatekey/seedrepresentation](https://developer.apple.com/documentation/cryptokit/mldsa87/privatekey/seedrepresentation)

# seedRepresentation

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The seed representation of the private key.

## Declaration

```swift
var seedRepresentation: Data { get }
```

<a id="discussion"></a>

## Discussion

The seed representation is 32 bytes long, and is the parameter for the `ML-DSA.KeyGen_internal` algorithm (Algorithm 16) of FIPS 204.

## See Also

### Inspecting a private key’s properties

- [integrityCheckedRepresentation](integritycheckedrepresentation.md): The integrity-checked data representation of the private key.
- [publicKey](publickey.md): The associated public key.
