> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hmac/update(data:)](https://developer.apple.com/documentation/cryptokit/hmac/update(data:))

# update(data:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Updates the message authentication code computation with a block of data.

## Declaration

```swift
mutating func update<D>(data: D) where D : DataProtocol
```

## Parameters

- `data`: The data for which to compute the authentication code.

## See Also

### Creating an authentication code iteratively

- [init(key:)](init%28key_%29.md): Creates a message authentication code generator.
- [finalize()](finalize%28%29.md): Finalizes the message authentication computation and returns the computed code.
