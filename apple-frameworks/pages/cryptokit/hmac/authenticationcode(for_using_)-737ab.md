> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/hmac/authenticationcode(for:using:)-737ab

# authenticationCode(for:using:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Computes a message authentication code for the given data.

## Declaration

```swift
static func authenticationCode<D>(for data: D, using key: SymmetricKey) -> HMAC<H>.MAC where D : DataProtocol
```

## Parameters

- `data`: The data for which to compute the authentication code.
- `key`: The symmetric key used to secure the computation.

<a id="return-value"></a>

## Return Value

The message authentication code.
