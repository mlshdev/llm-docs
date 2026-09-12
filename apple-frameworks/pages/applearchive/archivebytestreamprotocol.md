> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestreamprotocol](https://developer.apple.com/documentation/applearchive/archivebytestreamprotocol)

# ArchiveByteStreamProtocol

**Framework:** Apple Archive  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A set of methods that defines the interface for using an archive stream that reads from and writes to buffers.

## Declaration

```swift
protocol ArchiveByteStreamProtocol
```

## Topics

### Reading and Writing Data

- [read(into:)](archivebytestreamprotocol/read%28into_%29.md): Reads data to the specified buffer, not exceeding the buffer’s previously allocated size.
- [read(into:atOffset:)](archivebytestreamprotocol/read%28into_atoffset_%29.md): Reads data at the supplied offset to the specified buffer, not exceeding the buffer’s previously allocated size.
- [write(from:)](archivebytestreamprotocol/write%28from_%29.md): Writes data from the specified buffer, not exceeding the buffer’s allocated size.
- [write(from:atOffset:)](archivebytestreamprotocol/write%28from_atoffset_%29.md): Writes data at the supplied offset from the specified buffer, not exceeding the buffer’s allocated size.

### Using Archive Byte Streams

- [seek(toOffset:relativeTo:)](archivebytestreamprotocol/seek%28tooffset_relativeto_%29.md): Updates the internal stream position to the specified offset relative to the specified origin.
- [cancel()](archivebytestreamprotocol/cancel%28%29.md): Cancels stream operations.
- [close()](archivebytestreamprotocol/close%28%29.md): Closes the stream and releases associated resources.

## Relationships

### Conforming Types

- [ArchiveByteStream](archivebytestream.md)

## See Also

### Apple Archive streams

- [ArchiveStreamProtocol](archivestreamprotocol.md): A set of methods that defines the interface for using an archive stream that reads from and writes to data blobs.
- [ArchiveStream](archivestream.md): An archive stream that reads from and writes to data blobs
- [ArchiveByteStream](archivebytestream.md): An archive stream that reads from and writes to buffers.
