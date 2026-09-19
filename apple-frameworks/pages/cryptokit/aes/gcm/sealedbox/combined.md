> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/aes/gcm/sealedbox/combined

# combined

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A combined element composed of the nonce, encrypted data, and authentication tag.

## Declaration

```swift
var combined: Data? { get }
```

<a id="discussion"></a>

## Discussion

The combined representation is only available when the [AES.GCM.Nonce](../nonce.md) size is the default size of 12 bytes. The data layout of the combined representation is nonce, ciphertext, then tag.
