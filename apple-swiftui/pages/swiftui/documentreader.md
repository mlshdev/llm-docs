> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentreader](https://developer.apple.com/documentation/swiftui/documentreader)

# DocumentReader

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A type that reads a document’s content from a file.

## Declaration

```swift
protocol DocumentReader<Snapshot>
```

<a id="overview"></a>

## Overview

SwiftUI calls your document’s [reader(configuration:)](readabledocument/reader%28configuration_%29.md) method to obtain a `DocumentReader`, then invokes [read(from:progress:)](documentreader/read%28from_progress_%29.md) in the background with coordinated file access. The returned snapshot is delivered to [apply(snapshot:previous:)](readabledocument/apply%28snapshot_previous_%29.md) on the main actor.

Use [FileWrapperDocumentReader](filewrapperdocumentreader.md) for cases that don’t require custom file read logic. Implement a `DocumentReader` when you need direct URL access for frameworks like Core Graphics, AVFoundation, or PDFKit:

```swift
struct ImageReader: DocumentReader {
    @concurrent
    func read(from source: URL, progress: consuming Subprogress)
        async throws -> sending CGImage {
        guard let provider =
            CGDataProvider(url: source as CFURL),
              let image = CGImage(
                  jpegDataProviderSource: provider,
                  decode: nil, shouldInterpolate: true,
                  intent: .defaultIntent
              ) else {
            throw CocoaError(.fileReadCorruptFile)
        }
        return image
    }
}
```

SwiftUI provides the document’s file URL as the reader’s source.

## Topics

### Reading a document

- [read(from:progress:)](documentreader/read%28from_progress_%29.md): Reads the document’s content from disk.
- [Snapshot](documentreader/snapshot.md): The type representing the document’s content after reading.
- [Source](documentreader/source.md): The type of the source location to read from.

## Relationships

### Conforming Types

- [FileWrapperDocumentReader](filewrapperdocumentreader.md)

## See Also

### Reading and writing documents

- [DocumentReadConfiguration](documentreadconfiguration.md): The context SwiftUI passes to [reader(configuration:)](readabledocument/reader%28configuration_%29.md).
- [DocumentWriteConfiguration](documentwriteconfiguration.md): The context SwiftUI passes to [writer(configuration:)](writabledocument/writer%28configuration_%29.md).
- [DocumentWriter](documentwriter.md): A type that writes a document’s content to a file.
- [FileWrapperDocumentReader](filewrapperdocumentreader.md): A document reader that deserializes a `FileWrapper` into a snapshot.
- [FileWrapperDocumentWriter](filewrapperdocumentwriter.md): A document writer that serializes a snapshot into a `FileWrapper`.
