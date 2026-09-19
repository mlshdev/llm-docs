> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/chachapoly/sealedbox/tag

# tag

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An authentication tag.

## Declaration

```swift
var tag: Data { get }
```

<a id="discussion"></a>

## Discussion

The authentication tag has a length of 16 bytes.

## See Also

### Inspecting the component elements

- [nonce](nonce.md): The nonce used to encrypt the data.
- [ciphertext](ciphertext.md): The encrypted data.
