> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestream/encodestream(writingto:selectusing:flags:threadcount:)](https://developer.apple.com/documentation/applearchive/archivestream/encodestream(writingto:selectusing:flags:threadcount:))

# encodeStream(writingTo:selectUsing:flags:threadCount:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Opens an encode output archive stream.

## Declaration

```swift
static func encodeStream(writingTo stream: ArchiveByteStream, selectUsing filter: ArchiveHeader.EntryFilter? = nil, flags: ArchiveFlags = [], threadCount: Int = 0) -> ArchiveStream?
```

## Parameters

- `stream`: The byte stream that recieves the encoded data.
- `filter`: A closure that’s called for each entry that’s received by the stream.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.

<a id="return-value"></a>

## Return Value

A new archive stream.

## See Also

### Encoding Data

- [withEncodeStream(writingTo:selectUsing:flags:threadCount:\_:)](withencodestream%28writingto_selectusing_flags_threadcount___%29.md): Calls the given closure with an encode output archive stream.
