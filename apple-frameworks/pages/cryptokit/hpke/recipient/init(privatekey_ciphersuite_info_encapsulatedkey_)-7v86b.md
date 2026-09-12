> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpke/recipient/init(privatekey:ciphersuite:info:encapsulatedkey:)-7v86b](https://developer.apple.com/documentation/cryptokit/hpke/recipient/init(privatekey:ciphersuite:info:encapsulatedkey:)-7v86b)

# init(privateKey:ciphersuite:info:encapsulatedKey:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a recipient in base mode.

## Declaration

```swift
init<SK>(privateKey: SK, ciphersuite: HPKE.Ciphersuite, info: Data, encapsulatedKey: Data) throws where SK : HPKEKEMPrivateKey
```

## Parameters

- `privateKey`: The recipient’s private key for decrypting the incoming messages.
- `ciphersuite`: The cipher suite that defines the cryptographic algorithms to use.
- `info`: Data that the key derivation function uses to compute the symmetric key material. The sender and the recipient need to use the same `info` data.
- `encapsulatedKey`: The encapsulated symmetric key that the sender provides.

<a id="discussion"></a>

## Discussion

The `Receiver` decrypts messages in base mode using the encapsulated key with the key schedule information (`info` data).

> **Note**

> The system throws errors from [HPKE.Errors](../errors.md) when it encounters them.
