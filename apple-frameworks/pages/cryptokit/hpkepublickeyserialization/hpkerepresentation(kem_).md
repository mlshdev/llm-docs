> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpkepublickeyserialization/hpkerepresentation(kem:)](https://developer.apple.com/documentation/cryptokit/hpkepublickeyserialization/hpkerepresentation(kem:))

# hpkeRepresentation(kem:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an encoded representation of the public key.

## Declaration

```swift
func hpkeRepresentation(kem: HPKE.KEM) throws -> Data
```

<a id="return-value"></a>

## Return Value

The encoded key data.

<a id="discussion"></a>

## Discussion

- kem: The key encapsulation mechanism for encapsulating the key.
