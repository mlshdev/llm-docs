> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hmac](https://developer.apple.com/documentation/cryptokit/hmac)

# HMAC

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A hash-based message authentication algorithm.

## Declaration

```swift
struct HMAC<H> where H : HashFunction
```

<a id="overview"></a>

## Overview

Use hash-based message authentication to create a code with a value that’s dependent on both a block of data and a symmetric cryptographic key. Another party with access to the data and the same secret key can compute the code again and compare it to the original to detect whether the data changed. This serves a purpose similar to digital signing and verification, but depends on a shared symmetric key instead of public-key cryptography.

As with digital signing, the data isn’t hidden by this process. When you need to encrypt the data as well as authenticate it, use a cipher like [AES](aes.md) or [ChaChaPoly](chachapoly.md) to put the data into a sealed box (an instance of [AES.GCM.SealedBox](aes/gcm/sealedbox.md) or [ChaChaPoly.SealedBox](chachapoly/sealedbox.md)).

## Topics

### Getting a key

- [HMAC.Key](hmac/key.md): An alias for the symmetric key type used to compute or verify a message authentication code.
- [SymmetricKey](symmetrickey.md): A symmetric cryptographic key.

### Working with codes

- [HMAC.MAC](hmac/mac.md): An alias for a hash-based message authentication code.
- [HashedAuthenticationCode](hashedauthenticationcode.md): A hash-based message authentication code.
- [MessageAuthenticationCode](messageauthenticationcode.md): A type that represents a message authentication code.

### Creating an authentication code iteratively

- [init(key:)](hmac/init%28key_%29.md): Creates a message authentication code generator.
- [update(data:)](hmac/update%28data_%29.md): Updates the message authentication code computation with a block of data.
- [finalize()](hmac/finalize%28%29.md): Finalizes the message authentication computation and returns the computed code.

### Checking an authentication code

- [isValidAuthenticationCode(\_:authenticating:using:)](hmac/isvalidauthenticationcode%28__authenticating_using_%29-8ezmw.md): Returns a Boolean value indicating whether the given message authentication code is valid for a block of data.
- [isValidAuthenticationCode(\_:authenticating:using:)](hmac/isvalidauthenticationcode%28__authenticating_using_%29-5jbc8.md): Returns a Boolean value indicating whether the given message authentication code is valid for a block of data stored in a buffer.
- [isValidAuthenticationCode(\_:authenticating:using:)](hmac/isvalidauthenticationcode%28__authenticating_using_%29-5ilt9.md): Returns a Boolean value indicating whether the given message authentication code represented as contiguous bytes is valid for a block of data.

### Instance Methods

- [update(bytes:)](hmac/update%28bytes_%29.md)

### Type Methods

- [authenticationCode(for:using:)](hmac/authenticationcode%28for_using_%29-737ab.md): Computes a message authentication code for the given data.
- [authenticationCode(for:using:)](hmac/authenticationcode%28for_using_%29-heea.md): Computes a message authentication code for the given data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Message authentication codes

- [SymmetricKey](symmetrickey.md): A symmetric cryptographic key.
- [SymmetricKeySize](symmetrickeysize.md): The sizes that a symmetric cryptographic key can take.
