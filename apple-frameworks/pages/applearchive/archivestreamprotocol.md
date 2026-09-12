> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestreamprotocol](https://developer.apple.com/documentation/applearchive/archivestreamprotocol)

# ArchiveStreamProtocol

**Framework:** Apple Archive  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A set of methods that defines the interface for using an archive stream that reads from and writes to data blobs.

## Declaration

```swift
protocol ArchiveStreamProtocol
```

## Topics

### Reading and Writing Blobs

- [readBlob(key:into:)](archivestreamprotocol/readblob%28key_into_%29.md): Reads the current entry blob data.
- [writeBlob(key:from:)](archivestreamprotocol/writeblob%28key_from_%29.md): Writes an entry blob data.

### Reading and Writing Headers

- [readHeader()](archivestreamprotocol/readheader%28%29.md): Reads the next entry header.
- [writeHeader(\_:)](archivestreamprotocol/writeheader%28__%29.md): Writes an entry header.

### Using Archive Streams

- [cancel()](archivestreamprotocol/cancel%28%29.md): Cancels stream operations.
- [close()](archivestreamprotocol/close%28%29.md): Closes the stream and releases associated resources.

## Relationships

### Conforming Types

- [ArchiveStream](archivestream.md)

## See Also

### Apple Archive streams

- [ArchiveStream](archivestream.md): An archive stream that reads from and writes to data blobs
- [ArchiveByteStreamProtocol](archivebytestreamprotocol.md): A set of methods that defines the interface for using an archive stream that reads from and writes to buffers.
- [ArchiveByteStream](archivebytestream.md): An archive stream that reads from and writes to buffers.
