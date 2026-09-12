> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/sha3_384/init()](https://developer.apple.com/documentation/cryptokit/sha3_384/init())

# init()

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a SHA3-384 hash function.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

Initialize a new hash function by calling this method if you want to hash data iteratively, such as when you don’t have a buffer large enough to hold all the data at once. Provide data blocks to the hash function using the `update(data:)` or [update(bufferPointer:)](update%28bufferpointer_%29.md) method. After providing all the data, call [finalize()](finalize%28%29.md) to get the digest.

If your data fits into a single buffer, you can use the `hash(data:)` method instead, to compute the digest in a single call.
