> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/mldsa87/privatekey/integritycheckedrepresentation

# integrityCheckedRepresentation

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The integrity-checked data representation of the private key.

## Declaration

```swift
var integrityCheckedRepresentation: Data { get }
```

<a id="discussion"></a>

## Discussion

This representation is 64 bytes long, and contains the seed and a hash of the public key.

## See Also

### Inspecting a private key’s properties

- [publicKey](publickey.md): The associated public key.
- [seedRepresentation](seedrepresentation.md): The seed representation of the private key.
