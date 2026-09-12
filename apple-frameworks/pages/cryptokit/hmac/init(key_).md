> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hmac/init(key:)](https://developer.apple.com/documentation/cryptokit/hmac/init(key:))

# init(key:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a message authentication code generator.

## Declaration

```swift
init(key: SymmetricKey)
```

## Parameters

- `key`: The symmetric key used to secure the computation.

## See Also

### Creating an authentication code iteratively

- [update(data:)](update%28data_%29.md): Updates the message authentication code computation with a block of data.
- [finalize()](finalize%28%29.md): Finalizes the message authentication computation and returns the computed code.
