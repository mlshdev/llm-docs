> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivecompression](https://developer.apple.com/documentation/applearchive/archivecompression)

# ArchiveCompression

**Framework:** Apple Archive  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Constants that describe compression algorithms.

## Declaration

```swift
struct ArchiveCompression
```

## Topics

### Type Properties

- [none](archivecompression/none.md): A constant that represents no compression.
- [lzfse](archivecompression/lzfse.md): The LZFSE compression algorithm, that’s recommended for use on Apple platforms.
- [lz4](archivecompression/lz4.md): The LZ4 compression algorithm, that’s recommended for fast compression.
- [lzma](archivecompression/lzma.md): The LZMA compression algorithm, that’s recommended for high-compression ratio.
- [zlib](archivecompression/zlib.md): The zlib compression algorithm, that’s recommended for cross-platform compression.
- [lzbitmap](archivecompression/lzbitmap.md)
- [lzraven](archivecompression/lzraven.md)

### Initializers

- [init(algo:)](archivecompression/init%28algo_%29.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

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
- [compressionBlockSize](archiveencryptioncontext/compressionblocksize.md): The compression block size that defines the size of the blocks, in bytes, that the context splits data into.
- [paddingSize](archiveencryptioncontext/paddingsize.md): An integer value that, if not zero, specifies that the size of the final archive is a multiple of the padding size.
- [profile](archiveencryptioncontext/profile-swift.property.md): The profile of the archve.
- [ArchiveEncryptionContext.Profile](archiveencryptioncontext/profile-swift.struct.md): Constants that describe the profile of an encryption context.
- [rawSize](archiveencryptioncontext/rawsize.md): The size of the archive raw data.
- [signatureEncryptionKey](archiveencryptioncontext/signatureencryptionkey.md): The signature encryption key that the context requires to sign an encrypted archive.
