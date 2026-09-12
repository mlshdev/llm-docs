> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpke/sender](https://developer.apple.com/documentation/cryptokit/hpke/sender)

# HPKE.Sender

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that represents the sending side of an HPKE message exchange.

## Declaration

```swift
struct Sender
```

<a id="overview"></a>

## Overview

To create encrypted messages, initialize a `Sender` specifying the appropriate cipher suite, the recipient’s public key, and the additional cryptographic material relevant to your chosen mode of operation. Call [seal(\_:)](sender/seal%28__%29.md) or [seal(\_:authenticating:)](sender/seal%28__authenticating_%29.md) on the `Sender` instance for each message in turn to retrieve its ciphertext. The recipient of the messages needs to process them in the same order as the `Sender`, using the same encryption mode, cipher suite, and key schedule information (`info`), as well as the `Sender`’s [encapsulatedKey](sender/encapsulatedkey.md).

## Topics

### Initializers

- [init(recipientKey:ciphersuite:info:)](sender/init%28recipientkey_ciphersuite_info_%29-56p88.md): Creates a sender in base mode.
- [init(recipientKey:ciphersuite:info:)](sender/init%28recipientkey_ciphersuite_info_%29-swk5.md): Creates a sender in base mode.
- [init(recipientKey:ciphersuite:info:authenticatedBy:)](sender/init%28recipientkey_ciphersuite_info_authenticatedby_%29.md): Creates a sender in authentication mode.
- [init(recipientKey:ciphersuite:info:authenticatedBy:presharedKey:presharedKeyIdentifier:)](sender/init%28recipientkey_ciphersuite_info_authenticatedby_presharedkey_presharedkeyidentifier_%29.md): Creates a sender in authentication and preshared key mode.
- [init(recipientKey:ciphersuite:info:presharedKey:presharedKeyIdentifier:)](sender/init%28recipientkey_ciphersuite_info_presharedkey_presharedkeyidentifier_%29.md): Creates a sender in preshared key (PSK) mode.

### Instance Properties

- [encapsulatedKey](sender/encapsulatedkey.md): The encapsulated symmetric key that the recipient uses to decrypt messages.

### Instance Methods

- [exportSecret(context:outputByteCount:)](sender/exportsecret%28context_outputbytecount_%29.md): Exports a secret given domain-separation context and the desired output length.
- [seal(\_:)](sender/seal%28__%29.md): Encrypts the given cleartext message.
- [seal(\_:authenticating:)](sender/seal%28__authenticating_%29.md): Encrypts the given cleartext message and attaches additional authenticated data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending and receiving messages

- [HPKE.Recipient](recipient.md): A type that represents the receiving side of an HPKE message exchange.
