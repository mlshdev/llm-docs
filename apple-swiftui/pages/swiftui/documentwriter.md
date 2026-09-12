> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentwriter](https://developer.apple.com/documentation/swiftui/documentwriter)

# DocumentWriter

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A type that writes a document’s content to a file.

## Declaration

```swift
protocol DocumentWriter<Snapshot>
```

<a id="overview"></a>

## Overview

SwiftUI calls your document’s [snapshot(contentType:)](writabledocument/snapshot%28contenttype_%29.md) on the main actor to capture the current state, then obtains a `DocumentWriter` from [writer(configuration:)](writabledocument/writer%28configuration_%29.md) and invokes `write(content:to:previous:progress:)` in the background with coordinated file access.

Use [FileWrapperDocumentWriter](filewrapperdocumentwriter.md) for cases cases that don’t require custom file write logic. Implement a `DocumentWriter` when you need direct URL access or streaming writes:

```swift
struct ImageWriter: DocumentWriter {
    @concurrent
    func write(content image: sending CGImage, to destination: URL,
        previous: sending CGImage?, progress: consuming Subprogress
    ) async throws {
        guard let imageDestination =
            CGImageDestinationCreateWithURL(
                destination as CFURL,
                UTType.jpeg.identifier as CFString,
                1, nil
            ) else {
            throw CocoaError(.fileWriteUnknown)
        }
        CGImageDestinationAddImage(
            imageDestination, image, nil
        )
        guard CGImageDestinationFinalize(
            imageDestination
        ) else {
            throw CocoaError(.fileWriteUnknown)
        }
    }
}
```

## Topics

### Writing a document

- [write(snapshot:to:previous:progress:)](documentwriter/write%28snapshot_to_previous_progress_%29.md): Writes the document content to disk.
- [Snapshot](documentwriter/snapshot.md): The type representing the document’s content to write.
- [Destination](documentwriter/destination.md): The type of the destination location to write to.

## Relationships

### Conforming Types

- [FileWrapperDocumentWriter](filewrapperdocumentwriter.md)

## See Also

### Reading and writing documents

- [DocumentReadConfiguration](documentreadconfiguration.md): The context SwiftUI passes to [reader(configuration:)](readabledocument/reader%28configuration_%29.md).
- [DocumentWriteConfiguration](documentwriteconfiguration.md): The context SwiftUI passes to [writer(configuration:)](writabledocument/writer%28configuration_%29.md).
- [DocumentReader](documentreader.md): A type that reads a document’s content from a file.
- [FileWrapperDocumentReader](filewrapperdocumentreader.md): A document reader that deserializes a `FileWrapper` into a snapshot.
- [FileWrapperDocumentWriter](filewrapperdocumentwriter.md): A document writer that serializes a snapshot into a `FileWrapper`.
