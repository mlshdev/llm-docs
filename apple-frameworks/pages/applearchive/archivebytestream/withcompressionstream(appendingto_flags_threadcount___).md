> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/withcompressionstream(appendingto:flags:threadcount:_:)](https://developer.apple.com/documentation/applearchive/archivebytestream/withcompressionstream(appendingto:flags:threadcount:_:))

# withCompressionStream(appendingTo:flags:threadCount:\_:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Reopens a compression sequential output stream and calls the given closure.

## Declaration

```swift
static func withCompressionStream<E>(appendingTo compressedStream: ArchiveByteStream, flags: ArchiveFlags = [], threadCount: Int = 0, _ body: (ArchiveByteStream) throws -> E) throws -> E
```

## Parameters

- `compressedStream`: The output stream that the function reopens and receives the compressed data.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.
- `body`: A closure with the archive byte stream passed as a parameter.

<a id="return-value"></a>

## Return Value

The result of the closure.

<a id="Discussion"></a>

## Discussion

This function opens a stream created by [compressionStream(appendingTo:flags:threadCount:)](compressionstream%28appendingto_flags_threadcount_%29.md), calls the specified closure, and closes the stream.

## See Also

### Compressing Data

- [compressionStream(using:writingTo:blockSize:flags:threadCount:)](compressionstream%28using_writingto_blocksize_flags_threadcount_%29.md): Creates a compression sequential output stream.
- [withCompressionStream(using:writingTo:blockSize:flags:threadCount:\_:)](withcompressionstream%28using_writingto_blocksize_flags_threadcount___%29.md): Calls the given closure with a compression sequential output stream.
- [compressionStream(appendingTo:flags:threadCount:)](compressionstream%28appendingto_flags_threadcount_%29.md): Reopens a compression sequential output stream.
