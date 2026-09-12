> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hkdf/extract(inputkeymaterial:salt:)-7qmzj](https://developer.apple.com/documentation/cryptokit/hkdf/extract(inputkeymaterial:salt:)-7qmzj)

# extract(inputKeyMaterial:salt:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates cryptographically strong key material from a main key or passcode that you specify.

## Declaration

```swift
static func extract(inputKeyMaterial: SymmetricKey, salt: RawSpan?) -> HashedAuthenticationCode<H>
```

## Parameters

- `inputKeyMaterial`: The main key or passcode the derivation function uses to derive a key.
- `salt`: The salt to use for key derivation.

<a id="return-value"></a>

## Return Value

A pseudorandom, cryptographically strong key in the form of a hashed authentication code.

<a id="discussion"></a>

## Discussion

Generate a derived symmetric key from the cryptographically strong key material this function creates by calling [expand(pseudoRandomKey:info:outputByteCount:)](expand%28pseudorandomkey_info_outputbytecount_%29.md).
