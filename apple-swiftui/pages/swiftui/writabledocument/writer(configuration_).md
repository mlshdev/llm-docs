> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/writabledocument/writer(configuration:)](https://developer.apple.com/documentation/swiftui/writabledocument/writer(configuration:))

# writer(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a writer to save this document to disk.

## Declaration

```swift
func writer(configuration: sending Self.WriteConfiguration) -> sending Self.Writer
```

## Parameters

- `configuration`: The content type of the file being written.

<a id="discussion"></a>

## Discussion

Return a [FileWrapperDocumentWriter](../filewrapperdocumentwriter.md) for cases that don’t require custom writing logic, or a [DocumentWriter](../documentwriter.md) for direct URL access or streaming writes.

## See Also

### Writing a document

- [writableContentTypes](writablecontenttypes.md): The content types this document can save or export to.
- [WritableDocument.WriteConfiguration](writeconfiguration.md): The configuration for writing document contents.
- [Writer](writer.md): A type that implements writing to disk.
- [snapshot(contentType:)](snapshot%28contenttype_%29.md): Captures the document’s current state for saving.
