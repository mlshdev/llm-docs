> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/aes/gcm/nonce/init(copying:)](https://developer.apple.com/documentation/cryptokit/aes/gcm/nonce/init(copying:))

# init(copying:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a nonce from the given data.

## Declaration

```swift
init(copying bytes: RawSpan) throws
```

## Parameters

- `bytes`: The bytes that represent the nonce. The initializer throws an error if the data has a length smaller than 12 bytes.

<a id="discussion"></a>

## Discussion

Unless your use case calls for a nonce with a specific value, use the [init()](init%28%29.md) method to instead create a random nonce.
