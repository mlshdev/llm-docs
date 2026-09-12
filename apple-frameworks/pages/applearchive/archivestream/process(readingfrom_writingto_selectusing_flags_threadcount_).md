> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestream/process(readingfrom:writingto:selectusing:flags:threadcount:)](https://developer.apple.com/documentation/applearchive/archivestream/process(readingfrom:writingto:selectusing:flags:threadcount:))

# process(readingFrom:writingTo:selectUsing:flags:threadCount:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Processes archive elements between two archive streams.

## Declaration

```swift
static func process(readingFrom input: ArchiveStream, writingTo output: ArchiveStream, selectUsing filter: ArchiveHeader.EntryFilter? = nil, flags: ArchiveFlags = [], threadCount: Int = 0) throws -> Int
```

## Parameters

- `input`: The input stream.
- `output`: The output stream.
- `filter`: A closure that’s called for each entry that’s received by the stream.
- `flags`: Flags that control the behavior of the operation.
- `threadCount`: The number of worker threads that the operation uses, set to `0` for default.

<a id="return-value"></a>

## Return Value

The number of processed bytes.
