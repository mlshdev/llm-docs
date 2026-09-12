> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestream/withextractstream(extractingto:selectusing:flags:threadcount:_:)](https://developer.apple.com/documentation/applearchive/archivestream/withextractstream(extractingto:selectusing:flags:threadcount:_:))

# withExtractStream(extractingTo:selectUsing:flags:threadCount:\_:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Calls the given closure with an extract output archive stream.

## Declaration

```swift
static func withExtractStream<E>(extractingTo directory: FilePath, selectUsing filter: ArchiveHeader.EntryFilter? = nil, flags: ArchiveFlags = [], threadCount: Int = 0, _ body: (ArchiveStream) throws -> E) throws -> E
```

## Parameters

- `directory`: The directory that the archive stream writes the extracted entries to.
- `filter`: A closure that’s called for each entry that’s received by the stream.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.
- `body`: A closure with the archive stream passed as a parameter.

<a id="return-value"></a>

## Return Value

The result of the closure.

<a id="Discussion"></a>

## Discussion

This function opens a stream created by [extractStream(extractingTo:selectUsing:flags:threadCount:)](extractstream%28extractingto_selectusing_flags_threadcount_%29.md), calls the specified closure, and closes the stream.

## See Also

### Extracting Data

- [extractStream(extractingTo:selectUsing:flags:threadCount:)](extractstream%28extractingto_selectusing_flags_threadcount_%29.md): Opens an extract output archive stream.
