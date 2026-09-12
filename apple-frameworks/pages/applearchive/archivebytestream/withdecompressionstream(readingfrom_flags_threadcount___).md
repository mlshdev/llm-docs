> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/withdecompressionstream(readingfrom:flags:threadcount:_:)](https://developer.apple.com/documentation/applearchive/archivebytestream/withdecompressionstream(readingfrom:flags:threadcount:_:))

# withDecompressionStream(readingFrom:flags:threadCount:\_:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Calls the given closure with a decompression sequential input stream.

## Declaration

```swift
static func withDecompressionStream<E>(readingFrom compressedStream: ArchiveByteStream, flags: ArchiveFlags = [], threadCount: Int = 0, _ body: (ArchiveByteStream) throws -> E) throws -> E
```

## Parameters

- `compressedStream`: An input stream that provides compressed data, the operation only calls [read(into:)](../archivebytestreamprotocol/read%28into_%29.md) and [read(into:atOffset:)](../archivebytestreamprotocol/read%28into_atoffset_%29.md).
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.
- `body`: A closure with the archive byte stream passed as a parameter.

<a id="return-value"></a>

## Return Value

The result of the closure.

<a id="Discussion"></a>

## Discussion

This function opens a stream created by [decompressionStream(readingFrom:flags:threadCount:)](decompressionstream%28readingfrom_flags_threadcount_%29.md), calls the specified closure, and closes the stream.

## See Also

### Decompressing Data

- [decompressionStream(readingFrom:flags:threadCount:)](decompressionstream%28readingfrom_flags_threadcount_%29.md): Creates a decompression sequential input stream.
- [randomAccessDecompressionStream(readingFrom:allocationLimit:flags:threadCount:)](randomaccessdecompressionstream%28readingfrom_allocationlimit_flags_threadcount_%29.md): Creates a decompression random-access input stream.
- [withRandomAccessDecompressionStream(readingFrom:allocationLimit:flags:threadCount:\_:)](withrandomaccessdecompressionstream%28readingfrom_allocationlimit_flags_threadcount___%29.md): Calls the given closure with a decompression random access input stream.
