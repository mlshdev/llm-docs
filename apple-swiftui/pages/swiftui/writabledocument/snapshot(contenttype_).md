> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/writabledocument/snapshot(contenttype:)](https://developer.apple.com/documentation/swiftui/writabledocument/snapshot(contenttype:))

# snapshot(contentType:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Captures the document’s current state for saving.

## Declaration

```swift
@MainActor func snapshot(contentType: UTType) async throws -> sending Self.Writer.Snapshot
```

## Parameters

- `contentType`: The format requested (one of [writableContentTypes](writablecontenttypes.md)).

<a id="discussion"></a>

## Discussion

SwiftUI calls this on the main actor when a save is needed. Keep this method lightweight — return a value that represents what to save, and perform actual serialization in [write(snapshot:to:previous:progress:)](../documentwriter/write%28snapshot_to_previous_progress_%29.md).

## See Also

### Writing a document

- [writableContentTypes](writablecontenttypes.md): The content types this document can save or export to.
- [WritableDocument.WriteConfiguration](writeconfiguration.md): The configuration for writing document contents.
- [Writer](writer.md): A type that implements writing to disk.
- [writer(configuration:)](writer%28configuration_%29.md): Creates a writer to save this document to disk.
