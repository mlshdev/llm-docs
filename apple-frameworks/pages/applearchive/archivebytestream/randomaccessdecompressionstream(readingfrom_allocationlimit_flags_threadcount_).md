> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/randomaccessdecompressionstream(readingfrom:allocationlimit:flags:threadcount:)](https://developer.apple.com/documentation/applearchive/archivebytestream/randomaccessdecompressionstream(readingfrom:allocationlimit:flags:threadcount:))

# randomAccessDecompressionStream(readingFrom:allocationLimit:flags:threadCount:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a decompression random-access input stream.

## Declaration

```swift
static func randomAccessDecompressionStream(readingFrom compressedStream: ArchiveByteStream, allocationLimit: Int = Int.max, flags: ArchiveFlags = [], threadCount: Int = 0) -> ArchiveByteStream?
```

## Parameters

- `compressedStream`: An input stream that provides compressed data.
- `allocationLimit`: The requested memory allocation size, in bytes. Set to `0` for lowest memory footprint or [max](https://developer.apple.com/documentation/swift/int/max) for best performance.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.

<a id="return-value"></a>

## Return Value

A new archive byte stream.

<a id="Discussion"></a>

## Discussion

The operation reads compressed data from the suppled archive byte stream, `compressedStream`. The stream that the function returns implements read and seek methods.

Pass `allocationLimit` as a hint to control the stream’s memory allocation for in-out buffers for each thread and cache for uncompressed data. The stream creation adjusts both the actual number of decompression threads and the cache size to attempt to satisfy the allocation request.

## See Also

### Decompressing Data

- [decompressionStream(readingFrom:flags:threadCount:)](decompressionstream%28readingfrom_flags_threadcount_%29.md): Creates a decompression sequential input stream.
- [withDecompressionStream(readingFrom:flags:threadCount:\_:)](withdecompressionstream%28readingfrom_flags_threadcount___%29.md): Calls the given closure with a decompression sequential input stream.
- [withRandomAccessDecompressionStream(readingFrom:allocationLimit:flags:threadCount:\_:)](withrandomaccessdecompressionstream%28readingfrom_allocationlimit_flags_threadcount___%29.md): Calls the given closure with a decompression random access input stream.
