> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/compressionstream(using:writingto:blocksize:flags:threadcount:)](https://developer.apple.com/documentation/applearchive/archivebytestream/compressionstream(using:writingto:blocksize:flags:threadcount:))

# compressionStream(using:writingTo:blockSize:flags:threadCount:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a compression sequential output stream.

## Declaration

```swift
static func compressionStream(using compressionAlgorithm: ArchiveCompression, writingTo compressedStream: ArchiveByteStream, blockSize: Int = (1<<20), flags: ArchiveFlags = [], threadCount: Int = 0) -> ArchiveByteStream?
```

## Parameters

- `compressionAlgorithm`: The compression algorithm.
- `compressedStream`: An output stream that receives compressed data, the operation only calls write methods.
- `blockSize`: The compression block size, in bytes.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.

<a id="return-value"></a>

## Return Value

A new archive byte stream.

<a id="Discussion"></a>

## Discussion

The new stream writes compressed data to the supplied archive byte stream.

The stream that the function returns only implements [write(from:)](../archivebytestreamprotocol/write%28from_%29.md) and [write(from:atOffset:)](../archivebytestreamprotocol/write%28from_atoffset_%29.md).

During compression the operation splits the data into blocks of `blockSize` bytes, compressing each block independently. Larger blocks provide better compression, but require more memory (for compression and decompression) and increase latency in random access.

Good values for `blockSize` are between 256 KB and 16 MB. The 1 MB default value provides a good compromise between compression ratio and memory requirement.

## See Also

### Compressing Data

- [withCompressionStream(using:writingTo:blockSize:flags:threadCount:\_:)](withcompressionstream%28using_writingto_blocksize_flags_threadcount___%29.md): Calls the given closure with a compression sequential output stream.
- [compressionStream(appendingTo:flags:threadCount:)](compressionstream%28appendingto_flags_threadcount_%29.md): Reopens a compression sequential output stream.
- [withCompressionStream(appendingTo:flags:threadCount:\_:)](withcompressionstream%28appendingto_flags_threadcount___%29.md): Reopens a compression sequential output stream and calls the given closure.
