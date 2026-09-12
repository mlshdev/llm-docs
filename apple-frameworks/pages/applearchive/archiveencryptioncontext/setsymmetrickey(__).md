> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveencryptioncontext/setsymmetrickey(_:)](https://developer.apple.com/documentation/applearchive/archiveencryptioncontext/setsymmetrickey(_:))

# setSymmetricKey(\_:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Sets the symmetric encryption key that the context requires for symmetric encryption mode.

## Declaration

```swift
func setSymmetricKey(_ key: SymmetricKey) throws
```

## Parameters

- `key`: The symmetric encryption key.

<a id="Discussion"></a>

## Discussion

Use this function to set the encryption key for a context with a symmetric [profile](profile-swift.property.md).

## See Also

### Related Documentation

- [SymmetricKey](../../cryptokit/symmetrickey.md): A symmetric cryptographic key.

### Setting and retrieving keys

- [mainKey](mainkey.md): The main key used to append data to an existing archive.
- [symmetricKey](symmetrickey.md): The symmetric encryption key used to encrypt or decrypt an archive.
- [generateSymmetricKey()](generatesymmetrickey%28%29.md): Generates a symmetric encryption key.
- [setRecipientPrivateKey(\_:)](setrecipientprivatekey%28__%29.md): Sets the recipient private key that the context requires to decrypt an archive to a specific recipient in ECDHE encryption profiles.
- [setSigningPrivateKey(\_:)](setsigningprivatekey%28__%29.md): Sets the signing private key that corresponds to the signing public key that you used to create the archive.
- [setRecipientPublicKey(\_:)](setrecipientpublickey%28__%29.md): Sets the recipient public key that the context requires to encrypt an archive to a specific recipient in ECDHE encryption profiles.
- [setSigningPublicKey(\_:)](setsigningpublickey%28__%29.md): Sets the signing public key that the context requires to unlock a signed archive.
