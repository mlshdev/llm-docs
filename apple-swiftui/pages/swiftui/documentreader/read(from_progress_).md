> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentreader/read(from:progress:)](https://developer.apple.com/documentation/swiftui/documentreader/read(from:progress:))

# read(from:progress:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Reads the document’s content from disk.

## Declaration

```swift
@concurrent func read(from source: sending Self.Source, progress: consuming Subprogress) async throws -> sending Self.Snapshot
```

## Parameters

- `source`: The file URL to read from.
- `progress`: A `Subprogress` value to report reading progress. Consume it once with `reporter(totalCount:)` and call `complete(count:)` as units finish.

<a id="return-value"></a>

## Return Value

A snapshot representing the document’s content.

<a id="discussion"></a>

## Discussion

SwiftUI calls this method in the background with coordinated file access. Perform all deserialization and disk access here — the returned snapshot is delivered to [apply(snapshot:previous:)](../readabledocument/apply%28snapshot_previous_%29.md) on the main actor.

For most documents, use [FileWrapperDocumentReader](../filewrapperdocumentreader.md) instead of implementing a custom reader. Only implement `read` yourself when you need capabilities `FileWrapperDocumentReader` doesn’t provide — such as direct URL access for Core Graphics, AVFoundation, or other frameworks that operate on file paths:

```swift
@concurrent
func read(from source: URL, progress: consuming Subprogress)
    async throws -> sending CGImage {
    guard let imageSource =
        CGImageSourceCreateWithURL(source as CFURL, nil),
          let image = CGImageSourceCreateImageAtIndex(
              imageSource, 0, nil
          ) else {
        throw CocoaError(.fileReadCorruptFile)
    }
    return image
}
```

## See Also

### Reading a document

- [Snapshot](snapshot.md): The type representing the document’s content after reading.
- [Source](source.md): The type of the source location to read from.
