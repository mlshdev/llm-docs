> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hkdf/expand(pseudorandomkey:info:into:)](https://developer.apple.com/documentation/cryptokit/hkdf/expand(pseudorandomkey:info:into:))

# expand(pseudoRandomKey:info:into:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Expands cryptographically strong key material into a derived symmetric key.

## Declaration

```swift
static func expand(pseudoRandomKey prk: RawSpan, info: RawSpan?, into output: inout OutputRawSpan)
```

## Parameters

- `prk`: A pseudorandom, cryptographically strong key generated from the `extract(inputKeyMaterial:salt:)` function.
- `info`: The shared information to use for key derivation.

<a id="discussion"></a>

## Discussion

Generate cryptographically strong key material to use with this function by calling `extract(inputKeyMaterial:salt:)`.
