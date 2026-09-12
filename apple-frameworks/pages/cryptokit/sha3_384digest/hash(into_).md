> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/sha3_384digest/hash(into:)](https://developer.apple.com/documentation/cryptokit/sha3_384digest/hash(into:))

# hash(into:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Hashes the essential components of the digest by feeding them into the given hash function.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

## Parameters

- `hasher`: The hash function to use when combining the components of the digest.

<a id="discussion"></a>

## Discussion

This method is part of the digest’s conformance to Swift standard library’s [Hashable](https://developer.apple.com/documentation/swift/hashable) protocol, making it possible to compare digests. Don’t confuse that hashing with the cryptographically secure hashing that you use to create the digest in the first place by, for example, calling `SHA3_384/hash(data:)`.
