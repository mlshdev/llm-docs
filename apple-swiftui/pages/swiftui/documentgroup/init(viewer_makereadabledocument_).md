> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentgroup/init(viewer:makereadabledocument:)](https://developer.apple.com/documentation/swiftui/documentgroup/init(viewer:makereadabledocument:))

# init(viewer:makeReadableDocument:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a document group capable of opening and viewing read-only documents.

## Declaration

```swift
nonisolated init(@ContentBuilder viewer: @escaping (Document) -> Content, makeReadableDocument: @escaping @MainActor (URLDocumentConfiguration, DocumentCreationContext) async throws -> Document)
```

## Parameters

- `viewer`: The viewing UI for the provided document.

## See Also

### Creating a document group

- [init(allowCreating:editor:makeDocument:)](init%28allowcreating_editor_makedocument_%29.md): Conforms when `Document` conforms to `Observable`, `Document` conforms to `Document`, `Content` conforms to `View`, `Document.Reader.Source` is `URL`, and `Document.Writer.Destination` is `URL`. Creates a document group capable of creating, viewing, and editing documents.
