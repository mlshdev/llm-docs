> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/documentgroup/init(allowcreating:editor:makedocument:)

# init(allowCreating:editor:makeDocument:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a document group capable of creating, viewing, and editing documents.

## Declaration

```swift
nonisolated init(allowCreating: Bool = true, @ContentBuilder editor: @escaping (Document) -> Content, makeDocument: @escaping @MainActor (URLDocumentConfiguration, DocumentCreationContext) async throws -> Document)
```

## Parameters

- `allowCreating`: Whether the document group supports creating new documents in addition to opening and editing existing ones.
- `editor`: The editing UI for the provided document.
- `makeDocument`: A closure that creates the document instance. Throw `CancellationError` to indicate that document creation was cancelled.

## See Also

### Creating a document group

- [init(viewer:makeReadableDocument:)](init%28viewer_makereadabledocument_%29.md): Conforms when `Document` conforms to `Observable`, `Document` conforms to `ReadableDocument`, `Content` conforms to `View`, and `Document.Reader.Source` is `URL`. Creates a document group capable of opening and viewing read-only documents.
