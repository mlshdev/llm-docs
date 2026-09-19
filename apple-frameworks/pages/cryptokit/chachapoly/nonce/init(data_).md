> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/chachapoly/nonce/init(data:)

# init(data:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a nonce from the given data.

## Declaration

```swift
init<D>(data: D) throws where D : DataProtocol
```

## Parameters

- `data`: A 12-byte data representation of the nonce. The initializer throws an error if the data isn’t 12 bytes long.

<a id="discussion"></a>

## Discussion

Unless your use case calls for a nonce with a specific value, use the [init()](init%28%29.md) method to instead create a random nonce.

## See Also

### Creating a nonce

- [init()](init%28%29.md): Creates a new random nonce.
