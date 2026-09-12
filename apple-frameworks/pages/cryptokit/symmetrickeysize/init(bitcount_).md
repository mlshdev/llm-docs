> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/symmetrickeysize/init(bitcount:)](https://developer.apple.com/documentation/cryptokit/symmetrickeysize/init(bitcount:))

# init(bitCount:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new key size of the given length.

## Declaration

```swift
init(bitCount: Int)
```

## Parameters

- `bitCount`: The number of bits in the key size.

<a id="discussion"></a>

## Discussion

In most cases, you can use one of the standard key sizes, like bits256. If instead you need a key with a non-standard size, use the [init(bitCount:)](init%28bitcount_%29.md) initializer to create a custom key size.
