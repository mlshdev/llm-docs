> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/mlkem768/privatekey/seedrepresentation](https://developer.apple.com/documentation/cryptokit/mlkem768/privatekey/seedrepresentation)

# seedRepresentation

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The private key’s seed representation.

## Declaration

```swift
var seedRepresentation: Data { get }
```

<a id="discussion"></a>

## Discussion

The seed is `d||z`, as specified in the algorithm `ML-KEM.KeyGen_internal(d,z)` (Algorithm 16) of FIPS 203.

## See Also

### Inspecting a private key’s properties

- [integrityCheckedRepresentation](integritycheckedrepresentation.md): An integrity-checked representation of the private key.
- [publicKey](publickey.md): The corresponding public key.
