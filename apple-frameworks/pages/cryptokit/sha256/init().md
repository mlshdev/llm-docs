> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/sha256/init()](https://developer.apple.com/documentation/cryptokit/sha256/init())

# init()

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a SHA256 hash function.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

Initialize a new hash function by calling this method if you want to hash data iteratively, such as when you don’t have a buffer large enough to hold all the data at once. Provide data blocks to the hash function using the `update(data:)` or [update(bufferPointer:)](update%28bufferpointer_%29.md) method. After providing all the data, call [finalize()](finalize%28%29.md) to get the digest.

If your data fits into a single buffer, you can use the `hash(data:)` method instead, to compute the digest in a single call.

## See Also

### Computing a hash iteratively

- [update(bufferPointer:)](update%28bufferpointer_%29.md): Incrementally updates the hash function with the contents of the buffer.
- [finalize()](finalize%28%29.md): Finalizes the hash function and returns the computed digest.
