> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/compressionstream(appendingto:flags:threadcount:)](https://developer.apple.com/documentation/applearchive/archivebytestream/compressionstream(appendingto:flags:threadcount:))

# compressionStream(appendingTo:flags:threadCount:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Reopens a compression sequential output stream.

## Declaration

```swift
static func compressionStream(appendingTo compressedStream: ArchiveByteStream, flags: ArchiveFlags = [], threadCount: Int = 0) -> ArchiveByteStream?
```

## Parameters

- `compressedStream`: The output stream that the function reopens and receives the compressed data.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.

<a id="return-value"></a>

## Return Value

A new archive byte stream.

<a id="Discussion"></a>

## Discussion

The operation writes compressed data to the end of the supplied archive byte stream, `compressedStream`. `compressedStream` must implement [seek(toOffset:relativeTo:)](../archivebytestreamprotocol/seek%28tooffset_relativeto_%29.md), and the read and write functions.

The stream that the function returns only implements [write(from:)](../archivebytestreamprotocol/write%28from_%29.md) and [write(from:atOffset:)](../archivebytestreamprotocol/write%28from_atoffset_%29.md).

## See Also

### Compressing Data

- [compressionStream(using:writingTo:blockSize:flags:threadCount:)](compressionstream%28using_writingto_blocksize_flags_threadcount_%29.md): Creates a compression sequential output stream.
- [withCompressionStream(using:writingTo:blockSize:flags:threadCount:\_:)](withcompressionstream%28using_writingto_blocksize_flags_threadcount___%29.md): Calls the given closure with a compression sequential output stream.
- [withCompressionStream(appendingTo:flags:threadCount:\_:)](withcompressionstream%28appendingto_flags_threadcount___%29.md): Reopens a compression sequential output stream and calls the given closure.
