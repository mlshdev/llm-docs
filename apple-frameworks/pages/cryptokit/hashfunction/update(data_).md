> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hashfunction/update(data:)](https://developer.apple.com/documentation/cryptokit/hashfunction/update(data:))

# update(data:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Incrementally updates the hash function with the given data.

## Declaration

```swift
mutating func update<D>(data: D) where D : DataProtocol
```

## Parameters

- `data`: The next block of data for the ongoing digest calculation. You can provide this as any type that conforms to [DataProtocol](../../foundation/dataprotocol.md), like [Data](../../foundation/data.md) or an array of [UInt8](https://developer.apple.com/documentation/swift/uint8) instances.

<a id="discussion"></a>

## Discussion

Call this method one or more times to provide data to the hash function in blocks. After providing the last block of data, call the [finalize()](finalize%28%29.md) method to get the computed digest. Don’t call the update method again after finalizing the hash function.

## See Also

### Computing a hash iteratively

- [init()](init%28%29.md): Creates a hash function.
- [update(bufferPointer:)](update%28bufferpointer_%29.md): Incrementally updates the hash function with the contents of the buffer.
- [finalize()](finalize%28%29.md): Finalizes the hash function and returns the computed digest.
