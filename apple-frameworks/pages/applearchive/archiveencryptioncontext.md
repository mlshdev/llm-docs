> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveencryptioncontext](https://developer.apple.com/documentation/applearchive/archiveencryptioncontext)

# ArchiveEncryptionContext

**Framework:** Apple Archive  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

An object that encapsulates all parameters, keys, and data necessary to open an encrypted archive for both encryption and decryption streams.

## Declaration

```swift
class ArchiveEncryptionContext
```

## Topics

### Creating an archive encryption context

- [init(from:)](archiveencryptioncontext/init%28from_%29.md): Returns a new encryption context from the specified encrypted stream.
- [init(profile:compressionAlgorithm:compressionBlockSize:)](archiveencryptioncontext/init%28profile_compressionalgorithm_compressionblocksize_%29.md): Returns a new encryption context from the specified profile, compression algorithm, and block size.

### Setting and retrieving keys

- [mainKey](archiveencryptioncontext/mainkey.md): The main key used to append data to an existing archive.
- [symmetricKey](archiveencryptioncontext/symmetrickey.md): The symmetric encryption key used to encrypt or decrypt an archive.
- [generateSymmetricKey()](archiveencryptioncontext/generatesymmetrickey%28%29.md): Generates a symmetric encryption key.
- [setSymmetricKey(\_:)](archiveencryptioncontext/setsymmetrickey%28__%29.md): Sets the symmetric encryption key that the context requires for symmetric encryption mode.
- [setRecipientPrivateKey(\_:)](archiveencryptioncontext/setrecipientprivatekey%28__%29.md): Sets the recipient private key that the context requires to decrypt an archive to a specific recipient in ECDHE encryption profiles.
- [setSigningPrivateKey(\_:)](archiveencryptioncontext/setsigningprivatekey%28__%29.md): Sets the signing private key that corresponds to the signing public key that you used to create the archive.
- [setRecipientPublicKey(\_:)](archiveencryptioncontext/setrecipientpublickey%28__%29.md): Sets the recipient public key that the context requires to encrypt an archive to a specific recipient in ECDHE encryption profiles.
- [setSigningPublicKey(\_:)](archiveencryptioncontext/setsigningpublickey%28__%29.md): Sets the signing public key that the context requires to unlock a signed archive.

### Signing an encryption context

- [sign(encryptedStream:encryptionContext:)](archiveencryptioncontext/sign%28encryptedstream_encryptioncontext_%29.md): Signs an encrypted archive using the credentials stored in the specified encryption context.
- [signatureMode](archiveencryptioncontext/signaturemode-swift.property.md): The signature mode, such as an ECDSA Nist P-256 signature.
- [ArchiveEncryptionContext.SignatureMode](archiveencryptioncontext/signaturemode-swift.struct.md): Constants that describe the signature modes of an encryption context.

### Getting and setting encryption context properties

- [decryptAttributes()](archiveencryptioncontext/decryptattributes%28%29.md): Validates decryption keys, collects archive attributes, and updates the context with decrypted archive attributes.
- [archiveIdentifier](archiveencryptioncontext/archiveidentifier.md): An optional set of data that represents the archive identifier.
- [authData](archiveencryptioncontext/authdata.md): An optional, unencrypted set of data that’s stored in the archive prologue.
- [checksumMode](archiveencryptioncontext/checksummode-swift.property.md): The checksum mode, such as the 256-bit SHA-256 checksum.
- [ArchiveEncryptionContext.ChecksumMode](archiveencryptioncontext/checksummode-swift.struct.md): Constants that describe the checksum modes of an encryption context.
- [containerSize](archiveencryptioncontext/containersize.md): The size of the compressed and encrypted archive.
- [encryptionMode](archiveencryptioncontext/encryptionmode-swift.property.md): The encryption mode, such as symmetric key encryption.
- [ArchiveEncryptionContext.EncryptionMode](archiveencryptioncontext/encryptionmode-swift.struct.md): Constants that describe the checksum modes of an encryption context.
- [compressionAlgorithm](archiveencryptioncontext/compressionalgorithm.md): The compression algorithm, such as LZFSE.
- [ArchiveCompression](archivecompression.md): Constants that describe compression algorithms.
- [compressionBlockSize](archiveencryptioncontext/compressionblocksize.md): The compression block size that defines the size of the blocks, in bytes, that the context splits data into.
- [paddingSize](archiveencryptioncontext/paddingsize.md): An integer value that, if not zero, specifies that the size of the final archive is a multiple of the padding size.
- [profile](archiveencryptioncontext/profile-swift.property.md): The profile of the archve.
- [ArchiveEncryptionContext.Profile](archiveencryptioncontext/profile-swift.struct.md): Constants that describe the profile of an encryption context.
- [rawSize](archiveencryptioncontext/rawsize.md): The size of the archive raw data.
- [signatureEncryptionKey](archiveencryptioncontext/signatureencryptionkey.md): The signature encryption key that the context requires to sign an encrypted archive.

### Setting a password

- [password](archiveencryptioncontext/password.md): The password used to encrypt or decrypt an archive.
- [generatePassword()](archiveencryptioncontext/generatepassword%28%29.md): Generates a new password.
- [setPassword(\_:)](archiveencryptioncontext/setpassword%28__%29.md): Sets the password from the supplied string.

## See Also

### Apple Encrypted Archive essentials

- [Encrypting and Decrypting a String](encrypting-and-decrypting-a-string.md): Encrypt the contents of a string and save the result to the file system, then decrypt and recreate the string from the archive file using Apple Encrypted Archive.
- [Encrypting and Decrypting a Single File](encrypting-and-decrypting-a-single-file.md): Encrypt a single file and save the result to the file system, then decrypt and recreate the original file from the archive file using Apple Encrypted Archive.
- [Encrypting and Decrypting Directories](encrypting-and-decrypting-directories.md): Compress and encrypt the contents of an entire directory or decompress and decrypt an archived directory using Apple Encrypted Archive.
