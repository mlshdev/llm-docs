> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/chachapoly/seal(_:using:nonce:)](https://developer.apple.com/documentation/cryptokit/chachapoly/seal(_:using:nonce:))

# seal(\_:using:nonce:)

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Secures the given plaintext message with encryption and an authentication tag.

## Declaration

```swift
static func seal<Plaintext>(_ message: Plaintext, using key: SymmetricKey, nonce: ChaChaPoly.Nonce? = nil) throws -> ChaChaPoly.SealedBox where Plaintext : DataProtocol
```

## Parameters

- `message`: The plaintext data to seal.
- `key`: A cryptographic key used to seal the message.
- `nonce`: The nonce the sealing process requires. If you don’t provide a nonce, the method generates a random one by invoking [init()](nonce/init%28%29.md).

<a id="return-value"></a>

## Return Value

The sealed message.

## See Also

### Securing the plaintext message

- [seal(\_:using:nonce:authenticating:)](seal%28__using_nonce_authenticating_%29.md): Secures the given plaintext message with encryption and an authentication tag that covers both the encrypted data and additional data.
