> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentreader/snapshot](https://developer.apple.com/documentation/swiftui/documentreader/snapshot)

# Snapshot

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The type representing the document’s content after reading.

## Declaration

```swift
associatedtype Snapshot
```

<a id="discussion"></a>

## Discussion

This can be any type: a `String`, a custom struct, or even the document type itself. SwiftUI delivers it to [apply(snapshot:previous:)](../readabledocument/apply%28snapshot_previous_%29.md) on the main actor after reading completes.

## See Also

### Reading a document

- [read(from:progress:)](read%28from_progress_%29.md): Reads the document’s content from disk.
- [Source](source.md): The type of the source location to read from.
