> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/symmetrickey/init(size:)](https://developer.apple.com/documentation/cryptokit/symmetrickey/init(size:))

# init(size:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Generates a new random key of the given size.

## Declaration

```swift
init(size: SymmetricKeySize)
```

## Parameters

- `size`: The size of the key to generate. You can use one of the standard sizes, like [bits256](../symmetrickeysize/bits256.md), or you can create a key of custom length by initializing a [SymmetricKeySize](../symmetrickeysize.md) instance with a non-standard value.

## See Also

### Creating a key

- [init(data:)](init%28data_%29.md): Creates a key from the given data.
