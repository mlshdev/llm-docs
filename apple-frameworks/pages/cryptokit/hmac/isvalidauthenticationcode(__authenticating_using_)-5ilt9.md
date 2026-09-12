> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hmac/isvalidauthenticationcode(_:authenticating:using:)-5ilt9](https://developer.apple.com/documentation/cryptokit/hmac/isvalidauthenticationcode(_:authenticating:using:)-5ilt9)

# isValidAuthenticationCode(\_:authenticating:using:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 13.2+ · iPadOS 13.2+ · Mac Catalyst 13.2+ · macOS 10.15+ · tvOS 13.2+ · visionOS 1.0+ · watchOS 6.1+

Returns a Boolean value indicating whether the given message authentication code represented as contiguous bytes is valid for a block of data.

## Declaration

```swift
static func isValidAuthenticationCode<C, D>(_ authenticationCode: C, authenticating authenticatedData: D, using key: SymmetricKey) -> Bool where C : ContiguousBytes, D : DataProtocol
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

- [isValidAuthenticationCode(\_:authenticating:using:)](isvalidauthenticationcode%28__authenticating_using_%29-8ezmw.md): Returns a Boolean value indicating whether the given message authentication code is valid for a block of data.
- [isValidAuthenticationCode(\_:authenticating:using:)](isvalidauthenticationcode%28__authenticating_using_%29-5jbc8.md): Returns a Boolean value indicating whether the given message authentication code is valid for a block of data stored in a buffer.
