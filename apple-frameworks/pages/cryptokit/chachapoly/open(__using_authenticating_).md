> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/chachapoly/open(_:using:authenticating:)](https://developer.apple.com/documentation/cryptokit/chachapoly/open(_:using:authenticating:))

# open(\_:using:authenticating:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Decrypts the message and verifies the authenticity of both the encrypted message and additional data.

## Declaration

```swift
static func open<AuthenticatedData>(_ sealedBox: ChaChaPoly.SealedBox, using key: SymmetricKey, authenticating authenticatedData: AuthenticatedData) throws -> Data where AuthenticatedData : DataProtocol
```

## Parameters

- `sealedBox`: The sealed box to open.
- `key`: The cryptographic key that was used to seal the message.
- `authenticatedData`: Additional data that was authenticated.

<a id="return-value"></a>

## Return Value

The original plaintext message that was sealed in the box, as long as the correct key is used and authentication succeeds. The call throws an error if decryption or authentication fail.

## See Also

### Decrypting and verifying the message

- [open(\_:using:)](open%28__using_%29.md): Decrypts the message and verifies its authenticity.
