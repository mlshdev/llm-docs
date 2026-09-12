> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/aes/gcm/sealedbox/ciphertext](https://developer.apple.com/documentation/cryptokit/aes/gcm/sealedbox/ciphertext)

# ciphertext

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The encrypted data.

## Declaration

```swift
var ciphertext: Data { get }
```

<a id="discussion"></a>

## Discussion

The length of the ciphertext of a sealed box is the same as the length of the plaintext you encrypt.

## See Also

### Inspecting the component elements

- [nonce](nonce.md): The nonce used to encrypt the data.
- [tag](tag.md): An authentication tag.
