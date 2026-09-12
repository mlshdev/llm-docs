> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/insecure/md5/update(bufferpointer:)](https://developer.apple.com/documentation/cryptokit/insecure/md5/update(bufferpointer:))

# update(bufferPointer:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Incrementally updates the hash function with the contents of the buffer.

## Declaration

```swift
mutating func update(bufferPointer: UnsafeRawBufferPointer)
```

## Parameters

- `bufferPointer`: A pointer to the next block of data for the ongoing digest calculation.

<a id="discussion"></a>

## Discussion

Call this method one or more times to provide data to the hash function in blocks. After providing the last block of data, call the [finalize()](finalize%28%29.md) method to get the computed digest. Don’t call the update method again after finalizing the hash function.

> **Note**

> Typically, it’s safer to use an instance of [Data](../../../foundation/data.md), or some other type that conforms to the [DataProtocol](../../../foundation/dataprotocol.md), to hold your data. When possible, use the `update(data:)` method instead.

## See Also

### Computing a hash iteratively

- [init()](init%28%29.md): Creates a MD5 hash function.
- [finalize()](finalize%28%29.md): Finalizes the hash function and returns the computed digest.
