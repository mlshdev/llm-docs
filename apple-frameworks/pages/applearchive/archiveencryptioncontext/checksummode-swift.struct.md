> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveencryptioncontext/checksummode-swift.struct](https://developer.apple.com/documentation/applearchive/archiveencryptioncontext/checksummode-swift.struct)

# ArchiveEncryptionContext.ChecksumMode

**Framework:** Apple Archive  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Constants that describe the checksum modes of an encryption context.

## Declaration

```swift
struct ChecksumMode
```

## Topics

### Checksum Mode Constants

- [none](checksummode-swift.struct/none.md): A constant that represents no checksum.
- [murmurhash64](checksummode-swift.struct/murmurhash64.md): A constant that represents the 64-bit MurmurHash 2 checksum.
- [sha256](checksummode-swift.struct/sha256.md): A constant that represents the 256-bit SHA-256 checksum.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Getting and setting encryption context properties

- [decryptAttributes()](decryptattributes%28%29.md): Validates decryption keys, collects archive attributes, and updates the context with decrypted archive attributes.
- [archiveIdentifier](archiveidentifier.md): An optional set of data that represents the archive identifier.
- [authData](authdata.md): An optional, unencrypted set of data that’s stored in the archive prologue.
- [checksumMode](checksummode-swift.property.md): The checksum mode, such as the 256-bit SHA-256 checksum.
- [containerSize](containersize.md): The size of the compressed and encrypted archive.
- [encryptionMode](encryptionmode-swift.property.md): The encryption mode, such as symmetric key encryption.
- [ArchiveEncryptionContext.EncryptionMode](encryptionmode-swift.struct.md): Constants that describe the checksum modes of an encryption context.
- [compressionAlgorithm](compressionalgorithm.md): The compression algorithm, such as LZFSE.
- [ArchiveCompression](../archivecompression.md): Constants that describe compression algorithms.
- [compressionBlockSize](compressionblocksize.md): The compression block size that defines the size of the blocks, in bytes, that the context splits data into.
- [paddingSize](paddingsize.md): An integer value that, if not zero, specifies that the size of the final archive is a multiple of the padding size.
- [profile](profile-swift.property.md): The profile of the archve.
- [ArchiveEncryptionContext.Profile](profile-swift.struct.md): Constants that describe the profile of an encryption context.
- [rawSize](rawsize.md): The size of the archive raw data.
- [signatureEncryptionKey](signatureencryptionkey.md): The signature encryption key that the context requires to sign an encrypted archive.
