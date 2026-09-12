> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive](https://developer.apple.com/documentation/applearchive)

# Apple Archive (Swift)

**Framework:** Apple Archive  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Perform multithreaded lossless compression of directories, files, and data.

<a id="overview"></a>

## Overview

Apple Archive provides fast compression that includes file attributes, such as, ownership, permissions, flags, times, extended attributes, and error correction. Apple Archive offers these features:

- Multithreaded processing that uses all cores, is energy efficient, and yields faster results
- An ability to transport files and their attributes and use Apple File System (APFS) features when they’re available, for example, filesystem compression, full clones, and sparse files
- Flexible encoding formats, so you can use archives, for example, for error correction, digests, manifests, and external data storage
- API support for in-memory archive processing, streaming access, random access, and back-to-back archive and extraction

## Topics

### Apple Archive essentials

- [Compressing single files](accelerate/compressing-single-files.md): Compress a single file and store the result on the file system.
- [Decompressing single files](accelerate/decompressing-single-files.md): Recreate a single file from a compressed file.
- [Compressing file system directories](accelerate/compressing-file-system-directories.md): Compress the contents of an entire directory and store the result on the file system.
- [Decompressing and extracting an archived directory](accelerate/decompressing-and-extracting-an-archived-directory.md): Recreate an entire file system directory from an archive file.
- [Compressing and saving a string to the file system](accelerate/compressing-and-saving-a-string-to-the-file-system.md): Compress the contents of a Unicode string and store the result on the file system.
- [Decompressing and parsing an archived string](accelerate/decompressing-and-parsing-an-archived-string.md): Recreate a string from an archive file.

### Apple Encrypted Archive essentials

- [Encrypting and Decrypting a String](applearchive/encrypting-and-decrypting-a-string.md): Encrypt the contents of a string and save the result to the file system, then decrypt and recreate the string from the archive file using Apple Encrypted Archive.
- [Encrypting and Decrypting a Single File](applearchive/encrypting-and-decrypting-a-single-file.md): Encrypt a single file and save the result to the file system, then decrypt and recreate the original file from the archive file using Apple Encrypted Archive.
- [Encrypting and Decrypting Directories](applearchive/encrypting-and-decrypting-directories.md): Compress and encrypt the contents of an entire directory or decompress and decrypt an archived directory using Apple Encrypted Archive.
- [ArchiveEncryptionContext](applearchive/archiveencryptioncontext.md): An object that encapsulates all parameters, keys, and data necessary to open an encrypted archive for both encryption and decryption streams.

### Apple Archive headers

- [ArchiveHeader](applearchive/archiveheader.md): An AppleArchive entry header.

### Apple Archive streams

- [ArchiveStreamProtocol](applearchive/archivestreamprotocol.md): A set of methods that defines the interface for using an archive stream that reads from and writes to data blobs.
- [ArchiveStream](applearchive/archivestream.md): An archive stream that reads from and writes to data blobs
- [ArchiveByteStreamProtocol](applearchive/archivebytestreamprotocol.md): A set of methods that defines the interface for using an archive stream that reads from and writes to buffers.
- [ArchiveByteStream](applearchive/archivebytestream.md): An archive stream that reads from and writes to buffers.

### Apple Archive errors

- [ArchiveError](applearchive/archiveerror.md): Error codes for AppleArchive.

### Constants

- [APPLE_ARCHIVE_API_VERSION](applearchive/apple_archive_api_version.md): The version of the framework at compile time.

### Reference

- [Apple Archive structures](applearchive/apple-archive-structures.md)

## See Also

### Related Documentation

- [About Apple File System](foundation/about-apple-file-system.md): Use high-level APIs to get the most out of Apple File System.

# Apple Archive (Objective-C)

**Framework:** Apple Archive  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Perform multithreaded lossless compression of directories, files, and data.

<a id="overview"></a>

## Overview

Apple Archive provides fast compression that includes file attributes, such as, ownership, permissions, flags, times, extended attributes, and error correction. Apple Archive offers these features:

- Multithreaded processing that uses all cores, is energy efficient, and yields faster results
- An ability to transport files and their attributes and use Apple File System (APFS) features when they’re available, for example, filesystem compression, full clones, and sparse files
- Flexible encoding formats, so you can use archives, for example, for error correction, digests, manifests, and external data storage
- API support for in-memory archive processing, streaming access, random access, and back-to-back archive and extraction

## Topics

### Apple Archive essentials

- [Compressing single files](accelerate/compressing-single-files.md): Compress a single file and store the result on the file system.
- [Decompressing single files](accelerate/decompressing-single-files.md): Recreate a single file from a compressed file.
- [Compressing file system directories](accelerate/compressing-file-system-directories.md): Compress the contents of an entire directory and store the result on the file system.
- [Decompressing and extracting an archived directory](accelerate/decompressing-and-extracting-an-archived-directory.md): Recreate an entire file system directory from an archive file.
- [Compressing and saving a string to the file system](accelerate/compressing-and-saving-a-string-to-the-file-system.md): Compress the contents of a Unicode string and store the result on the file system.
- [Decompressing and parsing an archived string](accelerate/decompressing-and-parsing-an-archived-string.md): Recreate a string from an archive file.

### Apple Encrypted Archive essentials

- [Encrypting and Decrypting a String](applearchive/encrypting-and-decrypting-a-string.md): Encrypt the contents of a string and save the result to the file system, then decrypt and recreate the string from the archive file using Apple Encrypted Archive.
- [Encrypting and Decrypting a Single File](applearchive/encrypting-and-decrypting-a-single-file.md): Encrypt a single file and save the result to the file system, then decrypt and recreate the original file from the archive file using Apple Encrypted Archive.
- [Encrypting and Decrypting Directories](applearchive/encrypting-and-decrypting-directories.md): Compress and encrypt the contents of an entire directory or decompress and decrypt an archived directory using Apple Encrypted Archive.

### Constants

- [APPLE_ARCHIVE_API_VERSION](applearchive/apple_archive_api_version.md): The version of the framework at compile time.

### Reference

- [Apple Archive structures](applearchive/apple-archive-structures.md)
- [Apple Archive data types](applearchive/apple-archive-data-types.md)
- [Apple Archive functions](applearchive/apple-archive-functions.md)
- [Apple Archive macros](applearchive/apple-archive-macros.md)

## See Also

### Related Documentation

- [About Apple File System](foundation/about-apple-file-system.md): Use high-level APIs to get the most out of Apple File System.
