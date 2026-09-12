> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/chachapoly/sealedbox/combined](https://developer.apple.com/documentation/cryptokit/chachapoly/sealedbox/combined)

# combined

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A combined element composed of the tag, the nonce, and the ciphertext.

## Declaration

```swift
let combined: Data
```

<a id="discussion"></a>

## Discussion

The data layout of the combined representation is: nonce, ciphertext, then tag.
