> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/diffiehellmankeyagreement/sharedsecretfromkeyagreement(with:)](https://developer.apple.com/documentation/cryptokit/diffiehellmankeyagreement/sharedsecretfromkeyagreement(with:))

# sharedSecretFromKeyAgreement(with:)

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Performs a Diffie-Hellman Key Agreement.

## Declaration

```swift
func sharedSecretFromKeyAgreement(with publicKeyShare: Self.PublicKey) throws -> SharedSecret
```

## Parameters

- `publicKeyShare`: The public key share.

<a id="return-value"></a>

## Return Value

The resulting key agreement result.
