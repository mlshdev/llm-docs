> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/insecure/sha1/finalize()](https://developer.apple.com/documentation/cryptokit/insecure/sha1/finalize())

# finalize()

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Finalizes the hash function and returns the computed digest.

## Declaration

```swift
func finalize() -> Insecure.SHA1.Digest
```

<a id="return-value"></a>

## Return Value

The computed digest of the data.

<a id="discussion"></a>

## Discussion

Call this method after you provide the hash function with all the data to hash by making one or more calls to the `update(data:)` or [update(bufferPointer:)](update%28bufferpointer_%29.md) method. After finalizing the hash function, discard it. To compute a new digest, create a new hash function with a call to the [init()](init%28%29.md) method.

## See Also

### Computing a hash iteratively

- [init()](init%28%29.md): Creates a SHA1 hash function.
- [update(bufferPointer:)](update%28bufferpointer_%29.md): Incrementally updates the hash function with the contents of the buffer.
