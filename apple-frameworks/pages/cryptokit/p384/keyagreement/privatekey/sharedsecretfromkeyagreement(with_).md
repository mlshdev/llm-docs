> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p384/keyagreement/privatekey/sharedsecretfromkeyagreement(with:)](https://developer.apple.com/documentation/cryptokit/p384/keyagreement/privatekey/sharedsecretfromkeyagreement(with:))

# sharedSecretFromKeyAgreement(with:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Computes a shared secret with the provided public key from another party.

## Declaration

```swift
func sharedSecretFromKeyAgreement(with publicKeyShare: P384.KeyAgreement.PublicKey) throws -> SharedSecret
```

## Parameters

- `publicKeyShare`: The public key from another party to be combined with the private key from this user to create the shared secret.

<a id="return-value"></a>

## Return Value

The computed shared secret.

## See Also

### Creating a shared secret

- [SharedSecret](../../../sharedsecret.md): A key agreement result from which you can derive a symmetric cryptographic key.
