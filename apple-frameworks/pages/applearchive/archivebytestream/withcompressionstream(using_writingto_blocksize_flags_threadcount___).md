> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/withcompressionstream(using:writingto:blocksize:flags:threadcount:_:)](https://developer.apple.com/documentation/applearchive/archivebytestream/withcompressionstream(using:writingto:blocksize:flags:threadcount:_:))

# withCompressionStream(using:writingTo:blockSize:flags:threadCount:\_:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Calls the given closure with a compression sequential output stream.

## Declaration

```swift
static func withCompressionStream<E>(using compressionAlgorithm: ArchiveCompression, writingTo compressedStream: ArchiveByteStream, blockSize: Int = (1<<20), flags: ArchiveFlags = [], threadCount: Int = 0, _ body: (ArchiveByteStream) throws -> E) throws -> E
```

## Parameters

- `compressionAlgorithm`: The compression algorithm.
- `compressedStream`: An output stream that receives compressed data, the operation only calls write methods.
- `blockSize`: The compression block size, in bytes.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.
- `body`: A closure with the archive byte stream passed as a parameter.

<a id="return-value"></a>

## Return Value

The result of the closure.

## See Also

### Compressing Data

- [compressionStream(using:writingTo:blockSize:flags:threadCount:)](compressionstream%28using_writingto_blocksize_flags_threadcount_%29.md): Creates a compression sequential output stream.
- [compressionStream(appendingTo:flags:threadCount:)](compressionstream%28appendingto_flags_threadcount_%29.md): Reopens a compression sequential output stream.
- [withCompressionStream(appendingTo:flags:threadCount:\_:)](withcompressionstream%28appendingto_flags_threadcount___%29.md): Reopens a compression sequential output stream and calls the given closure.
