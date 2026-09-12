> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpkepublickeyserialization/init(_:kem:)](https://developer.apple.com/documentation/cryptokit/hpkepublickeyserialization/init(_:kem:))

# init(\_:kem:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a public key from an encoded representation.

## Declaration

```swift
init<D>(_ serialization: D, kem: HPKE.KEM) throws where D : ContiguousBytes
```

<a id="discussion"></a>

## Discussion

- serialization: The serialized key data.
- kem: The key encapsulation mechanism that the sender used to encapsulate the key.
