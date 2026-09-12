> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hmac/isvalidauthenticationcode(_:authenticating:using:)-8ezmw](https://developer.apple.com/documentation/cryptokit/hmac/isvalidauthenticationcode(_:authenticating:using:)-8ezmw)

# isValidAuthenticationCode(\_:authenticating:using:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value indicating whether the given message authentication code is valid for a block of data.

## Declaration

```swift
static func isValidAuthenticationCode<D>(_ authenticationCode: HMAC<H>.MAC, authenticating authenticatedData: D, using key: SymmetricKey) -> Bool where D : DataProtocol
```

## Parameters

- `authenticationCode`: The authentication code to compare.
- `authenticatedData`: The block of data to compare.
- `key`: The symmetric key for the authentication code.

<a id="return-value"></a>

## Return Value

A Boolean value that’s `true` if the message authentication code is valid for the specified block of data.

## See Also

### Checking an authentication code

- [isValidAuthenticationCode(\_:authenticating:using:)](isvalidauthenticationcode%28__authenticating_using_%29-5jbc8.md): Returns a Boolean value indicating whether the given message authentication code is valid for a block of data stored in a buffer.
- [isValidAuthenticationCode(\_:authenticating:using:)](isvalidauthenticationcode%28__authenticating_using_%29-5ilt9.md): Returns a Boolean value indicating whether the given message authentication code represented as contiguous bytes is valid for a block of data.
