> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestream/withencodestream(writingto:selectusing:flags:threadcount:_:)](https://developer.apple.com/documentation/applearchive/archivestream/withencodestream(writingto:selectusing:flags:threadcount:_:))

# withEncodeStream(writingTo:selectUsing:flags:threadCount:\_:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Calls the given closure with an encode output archive stream.

## Declaration

```swift
static func withEncodeStream<E>(writingTo stream: ArchiveByteStream, selectUsing filter: ArchiveHeader.EntryFilter? = nil, flags: ArchiveFlags = [], threadCount: Int = 0, _ body: (ArchiveStream) throws -> E) throws -> E
```

## Parameters

- `stream`: The byte stream that receives the encoded data.
- `filter`: A closure that’s called for each entry that’s received by the stream.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.
- `body`: A closure with the archive stream passed as a parameter.

<a id="return-value"></a>

## Return Value

The result of the closure.

<a id="Discussion"></a>

## Discussion

This function opens a stream created by [encodeStream(writingTo:selectUsing:flags:threadCount:)](encodestream%28writingto_selectusing_flags_threadcount_%29.md), calls the specified closure, and closes the stream.

## See Also

### Encoding Data

- [encodeStream(writingTo:selectUsing:flags:threadCount:)](encodestream%28writingto_selectusing_flags_threadcount_%29.md): Opens an encode output archive stream.
