> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hmac/authenticationcode(for:using:)-heea](https://developer.apple.com/documentation/cryptokit/hmac/authenticationcode(for:using:)-heea)

# authenticationCode(for:using:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Computes a message authentication code for the given data.

## Declaration

```swift
static func authenticationCode(for data: RawSpan, using key: SymmetricKey) -> HMAC<H>.MAC
```

## Parameters

- `data`: The data for which to compute the authentication code.
- `key`: The symmetric key used to secure the computation.

<a id="return-value"></a>

## Return Value

The message authentication code.
