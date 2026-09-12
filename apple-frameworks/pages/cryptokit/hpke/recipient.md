> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpke/recipient](https://developer.apple.com/documentation/cryptokit/hpke/recipient)

# HPKE.Recipient

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that represents the receiving side of an HPKE message exchange.

## Declaration

```swift
struct Recipient
```

<a id="overview"></a>

## Overview

To decrypt and verify the identity of encrypted messages, initialize a `Recipient` specifying the appropriate cipher suite, the receiver’s private key, the encapsulated symmetric key, and the additional cryptographic material relevant to your chosen mode of operation. Call [open(\_:)](recipient/open%28__%29.md) or [open(\_:authenticating:)](recipient/open%28__authenticating_%29.md) on the `Recipient` instance for each message in turn to retrieve its cleartext. The recipient of the messages needs to process them in the same order as the `Sender`, using the same cipher suite, encryption mode, and key schedule information (`info` data). Use a separate `Recipient` instance for each stream of messages.

## Topics

### Initializers

- [init(privateKey:ciphersuite:info:encapsulatedKey:)](recipient/init%28privatekey_ciphersuite_info_encapsulatedkey_%29-6jqhf.md): Creates a recipient in base mode.
- [init(privateKey:ciphersuite:info:encapsulatedKey:)](recipient/init%28privatekey_ciphersuite_info_encapsulatedkey_%29-7v86b.md): Creates a recipient in base mode.
- [init(privateKey:ciphersuite:info:encapsulatedKey:authenticatedBy:)](recipient/init%28privatekey_ciphersuite_info_encapsulatedkey_authenticatedby_%29.md): Creates a recipient in authentication mode.
- [init(privateKey:ciphersuite:info:encapsulatedKey:authenticatedBy:presharedKey:presharedKeyIdentifier:)](recipient/init%28privatekey_ciphersuite_info_encapsulatedkey_authenticatedby_presharedkey_presharedkeyidentifier_%29.md): Creates a recipient in authentication and preshared key mode.
- [init(privateKey:ciphersuite:info:encapsulatedKey:presharedKey:presharedKeyIdentifier:)](recipient/init%28privatekey_ciphersuite_info_encapsulatedkey_presharedkey_presharedkeyidentifier_%29.md): Creates a recipient in preshared key (PSK) mode.

### Instance Methods

- [exportSecret(context:outputByteCount:)](recipient/exportsecret%28context_outputbytecount_%29.md): Exports a secret given domain-separation context and the desired output length.
- [open(\_:)](recipient/open%28__%29.md): Decrypts a message, if the ciphertext is valid.
- [open(\_:authenticating:)](recipient/open%28__authenticating_%29.md): Decrypts a message, if the ciphertext is valid, verifying the integrity of additional authentication data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending and receiving messages

- [HPKE.Sender](sender.md): A type that represents the sending side of an HPKE message exchange.
