> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpke/aead/exportonly](https://developer.apple.com/documentation/cryptokit/hpke/aead/exportonly)

# HPKE.AEAD.exportOnly

**Framework:** Apple CryptoKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An export-only mode.

## Declaration

```swift
case exportOnly
```

<a id="discussion"></a>

## Discussion

In export-only mode, HPKE negotiates key derivation, but you can’t use it to encrypt or decrypt data.
