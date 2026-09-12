> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestream/convertstream(writingto:insertkeyset:removekeyset:selectusing:flags:threadcount:)](https://developer.apple.com/documentation/applearchive/archivestream/convertstream(writingto:insertkeyset:removekeyset:selectusing:flags:threadcount:))

# convertStream(writingTo:insertKeySet:removeKeySet:selectUsing:flags:threadCount:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Opens a convert output archive stream.

## Declaration

```swift
static func convertStream(writingTo stream: ArchiveStream, insertKeySet: ArchiveHeader.FieldKeySet, removeKeySet: ArchiveHeader.FieldKeySet, selectUsing filter: ArchiveHeader.EntryFilter? = nil, flags: ArchiveFlags = [], threadCount: Int = 0) -> ArchiveStream?
```

## Parameters

- `stream`: The stream that receives the converted archive stream.
- `insertKeySet`: A set of keys to fields that the operation inserts into the converted archive.
- `removeKeySet`: A set of keys to fields that the operation removes from the converted archive.
- `filter`: A closure that’s called for each entry that’s received by the stream.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.

<a id="return-value"></a>

## Return Value

A new archive stream.

## See Also

### Converting Data

- [withConvertStream(writingTo:insertKeySet:removeKeySet:selectUsing:flags:threadCount:\_:)](withconvertstream%28writingto_insertkeyset_removekeyset_selectusing_flags_threadcount___%29.md): Calls the given closure with a convert output archive stream.
