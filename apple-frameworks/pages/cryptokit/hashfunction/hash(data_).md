> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hashfunction/hash(data:)](https://developer.apple.com/documentation/cryptokit/hashfunction/hash(data:))

# hash(data:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Computes the digest of the bytes in the given data instance and returns the computed digest.

## Declaration

```swift
static func hash<D>(data: D) -> Self.Digest where D : DataProtocol
```

## Parameters

- `data`: The data whose digest the hash function should compute. This can be any type that conforms to [DataProtocol](../../foundation/dataprotocol.md), like [Data](../../foundation/data.md) or an array of [UInt8](https://developer.apple.com/documentation/swift/uint8) instances.

<a id="return-value"></a>

## Return Value

The computed digest of the data.

<a id="discussion"></a>

## Discussion

Use this method if all your data fits into a single data instance. If the data you want to hash is too large, initialize a hash function and use the [update(data:)](update%28data_%29.md) and [finalize()](finalize%28%29.md) methods to compute the digest in blocks.
