> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hkdf/expand(pseudorandomkey:info:outputbytecount:)](https://developer.apple.com/documentation/cryptokit/hkdf/expand(pseudorandomkey:info:outputbytecount:))

# expand(pseudoRandomKey:info:outputByteCount:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Expands cryptographically strong key material into a derived symmetric key.

## Declaration

```swift
static func expand<PRK, Info>(pseudoRandomKey prk: PRK, info: Info?, outputByteCount: Int) -> SymmetricKey where PRK : ContiguousBytes, Info : DataProtocol
```

## Parameters

- `prk`: A pseudorandom, cryptographically strong key generated from the `extract(inputKeyMaterial:salt:)` function.
- `info`: The shared information to use for key derivation.
- `outputByteCount`: The length in bytes of the resulting symmetric key.

<a id="return-value"></a>

## Return Value

The derived symmetric key.

<a id="discussion"></a>

## Discussion

Generate cryptographically strong key material to use with this function by calling `extract(inputKeyMaterial:salt:)`.
