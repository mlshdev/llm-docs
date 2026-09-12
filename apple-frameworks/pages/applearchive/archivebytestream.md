> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream](https://developer.apple.com/documentation/applearchive/archivebytestream)

# ArchiveByteStream

**Framework:** Apple Archive  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An archive stream that reads from and writes to buffers.

## Declaration

```swift
class ArchiveByteStream
```

## Topics

### Creating an Archive Byte Stream

- [init(object:owned:)](archivebytestream/init%28object_owned_%29.md): Returns a new archive byte stream from the specified traits and entry message processing callback.

### Using Archive Byte Streams

- [close(updatingContext:)](archivebytestream/close%28updatingcontext_%29.md): Closes the stream, releases associated resources, and writes the sealed container attributes to the specified encryption context.

### Compressing Data

- [compressionStream(using:writingTo:blockSize:flags:threadCount:)](archivebytestream/compressionstream%28using_writingto_blocksize_flags_threadcount_%29.md): Creates a compression sequential output stream.
- [withCompressionStream(using:writingTo:blockSize:flags:threadCount:\_:)](archivebytestream/withcompressionstream%28using_writingto_blocksize_flags_threadcount___%29.md): Calls the given closure with a compression sequential output stream.
- [compressionStream(appendingTo:flags:threadCount:)](archivebytestream/compressionstream%28appendingto_flags_threadcount_%29.md): Reopens a compression sequential output stream.
- [withCompressionStream(appendingTo:flags:threadCount:\_:)](archivebytestream/withcompressionstream%28appendingto_flags_threadcount___%29.md): Reopens a compression sequential output stream and calls the given closure.

### Decompressing Data

- [decompressionStream(readingFrom:flags:threadCount:)](archivebytestream/decompressionstream%28readingfrom_flags_threadcount_%29.md): Creates a decompression sequential input stream.
- [withDecompressionStream(readingFrom:flags:threadCount:\_:)](archivebytestream/withdecompressionstream%28readingfrom_flags_threadcount___%29.md): Calls the given closure with a decompression sequential input stream.
- [randomAccessDecompressionStream(readingFrom:allocationLimit:flags:threadCount:)](archivebytestream/randomaccessdecompressionstream%28readingfrom_allocationlimit_flags_threadcount_%29.md): Creates a decompression random-access input stream.
- [withRandomAccessDecompressionStream(readingFrom:allocationLimit:flags:threadCount:\_:)](archivebytestream/withrandomaccessdecompressionstream%28readingfrom_allocationlimit_flags_threadcount___%29.md): Calls the given closure with a decompression random access input stream.

### Encrypting Data

- [encryptionStream(appendingTo:encryptionContext:flags:threadCount:)](archivebytestream/encryptionstream%28appendingto_encryptioncontext_flags_threadcount_%29.md): Reopens an existing encryption sequential output stream.
- [encryptionStream(writingTo:encryptionContext:flags:threadCount:)](archivebytestream/encryptionstream%28writingto_encryptioncontext_flags_threadcount_%29.md): Creates a encryption sequential input stream.

### Decrypting Data

- [decryptionStream(readingFrom:encryptionContext:flags:threadCount:)](archivebytestream/decryptionstream%28readingfrom_encryptioncontext_flags_threadcount_%29.md): Creates a decryption sequential input stream.
- [randomAccessDecryptionStream(readingFrom:encryptionContext:allocationLimit:flags:threadCount:)](archivebytestream/randomaccessdecryptionstream%28readingfrom_encryptioncontext_allocationlimit_flags_threadcount_%29.md): Creates a decryption random access input stream.

### Processing Data

- [process(readingFrom:writingTo:)](archivebytestream/process%28readingfrom_writingto_%29.md): Processes data between two byte streams.

### File Streaming

- [fileStream(fd:automaticClose:)](archivebytestream/filestream%28fd_automaticclose_%29.md): Creates a stream from an open file descriptor.
- [withFileStream(fd:automaticClose:\_:)](archivebytestream/withfilestream%28fd_automaticclose___%29.md): Calls the given closure with a file stream created from the specified file descriptor.
- [fileStream(path:mode:options:permissions:)](archivebytestream/filestream%28path_mode_options_permissions_%29.md): Opens a new file descriptor using the given path and parameters, and creates a stream from the file descriptor.
- [withFileStream(path:mode:options:permissions:\_:)](archivebytestream/withfilestream%28path_mode_options_permissions___%29.md): Calls the given closure with a file stream.
- [temporaryFileStream()](archivebytestream/temporaryfilestream%28%29.md): Creates a new temporary file stream.
- [withTemporaryFileStream(\_:)](archivebytestream/withtemporaryfilestream%28__%29.md): Calls the given closure with a temporary file stream.

### Streaming with Custom Streams

- [customStream(instance:)](archivebytestream/customstream%28instance_%29.md): Returns a new archive byte stream instance mapped to an object that conforms to the archive byte stream protocol.
- [withStream(wrapping:\_:)](archivebytestream/withstream%28wrapping___%29.md): Calls the given closure with an archive byte stream instance mapped to an object that conforms to the archive byte stream protocol.
- [sharedBufferPipe(capacity:)](archivebytestream/sharedbufferpipe%28capacity_%29.md): Creates a pair of streams and links them by a shared buffer.

## Relationships

### Conforms To

- [ArchiveByteStreamProtocol](archivebytestreamprotocol.md)

## See Also

### Apple Archive streams

- [ArchiveStreamProtocol](archivestreamprotocol.md): A set of methods that defines the interface for using an archive stream that reads from and writes to data blobs.
- [ArchiveStream](archivestream.md): An archive stream that reads from and writes to data blobs
- [ArchiveByteStreamProtocol](archivebytestreamprotocol.md): A set of methods that defines the interface for using an archive stream that reads from and writes to buffers.
