> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/readabledocument/reader(configuration:)](https://developer.apple.com/documentation/swiftui/readabledocument/reader(configuration:))

# reader(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a reader to load this document from disk.

## Declaration

```swift
func reader(configuration: sending Self.ReadConfiguration) -> sending Self.Reader
```

## Parameters

- `configuration`: The content type of the file being read.

<a id="discussion"></a>

## Discussion

SwiftUI calls this method each time it needs to read or re-read the document (on open, or when another process changes the file). Return a [FileWrapperDocumentReader](../filewrapperdocumentreader.md) for cases that don’t require custom reading logic, or a [DocumentReader](../documentreader.md) for direct URL access.

## See Also

### Reading a document

- [readableContentTypes](readablecontenttypes.md): The content types this document can open.
- [ReadableDocument.ReadConfiguration](readconfiguration.md): The configuration for reading document contents.
- [Reader](reader.md): A type that implements reading from disk.
- [apply(snapshot:previous:)](apply%28snapshot_previous_%29.md): Applies a loaded snapshot to the document model.
- [writableContentTypes](writablecontenttypes.md): Conforms when `Self` conforms to `WritableDocument`. By default, a document that supports reading also supports writing the same content types.
