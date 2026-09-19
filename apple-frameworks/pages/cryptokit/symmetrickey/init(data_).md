> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/symmetrickey/init(data:)

# init(data:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a key from the given data.

## Declaration

```swift
init<D>(data: D) where D : ContiguousBytes
```

## Parameters

- `data`: The contiguous bytes from which to create the key.

## See Also

### Creating a key

- [init(size:)](init%28size_%29.md): Generates a new random key of the given size.
