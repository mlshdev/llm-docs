> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/writabledocument](https://developer.apple.com/documentation/swiftui/writabledocument)

# WritableDocument

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A document type that supports writing to file.

## Declaration

```swift
protocol WritableDocument : AnyObject
```

<a id="overview"></a>

## Overview

Conform to `WritableDocument` to add save and export capabilities. Most documents also conform to [ReadableDocument](readabledocument.md) — use the [Document](document.md) protocol as a shorthand for both.

The document saving has three steps:

1. SwiftUI calls [snapshot(contentType:)](writabledocument/snapshot%28contenttype_%29.md) on the main actor.
2. SwiftUI calls [writer(configuration:)](writabledocument/writer%28configuration_%29.md) to get a writer.
3. The writer’s `DocumentWriter/write(content:to:previous:progress:)` runs in the background with coordinated file access.

> **Important**

> Without registered undo actions, SwiftUI won’t trigger autosave. Register undo actions with the undo manager from the `View` environment for every user-facing change.

Example using [FileWrapperDocumentWriter](filewrapperdocumentwriter.md):

```swift
@Observable
final class NoteDocument: WritableDocument {
    static let writableContentTypes: [UTType] = [.markdown]

    var text = ""

    func writer(configuration: sending WriteConfiguration) -> sending FileWrapperDocumentWriter<String> {
        FileWrapperDocumentWriter(configuration) { snapshot, _ in
            FileWrapper(
                regularFileWithContents: Data(snapshot.utf8)
            )
        }
    }

    @MainActor
    func snapshot(contentType: UTType) async throws -> sending String { text }
}
```

Register undo actions in the view using the environment’s `UndoManager`. This ensures SwiftUI detects unsaved changes and triggers autosave:

```swift
struct NoteEditorView: View {
    @Bindable var document: NoteDocument
    @Environment(\.undoManager) private var undoManager

    var body: some View {
        TextEditor(text: $document.text)
            .onChange(of: document.text) { oldValue, _ in
                undoManager?.registerUndo(
                    withTarget: document
                ) { document in
                    document.text = oldValue
                }
            }
    }
}
```

## Topics

### Writing a document

- [writableContentTypes](writabledocument/writablecontenttypes.md): The content types this document can save or export to.
- [WritableDocument.WriteConfiguration](writabledocument/writeconfiguration.md): The configuration for writing document contents.
- [Writer](writabledocument/writer.md): A type that implements writing to disk.
- [writer(configuration:)](writabledocument/writer%28configuration_%29.md): Creates a writer to save this document to disk.
- [snapshot(contentType:)](writabledocument/snapshot%28contenttype_%29.md): Captures the document’s current state for saving.

## Relationships

### Inherited By

- [Document](document.md)

## See Also

### Storing document data in a reference type instance

- [Document](document.md): A document that supports both reading and writing.
- [ReadableDocument](readabledocument.md): A document type that supports reading from file.
- [URLDocumentConfiguration](urldocumentconfiguration.md): The configuration of an open document that stores its file URL, last modification date, and related metadata.
- [DocumentCreationContext](documentcreationcontext.md): Context about how a document was created.
- [DocumentBaseBox](documentbasebox.md): A Box that allows setting its Document base not requiring the caller to know the exact types of the box and its base.
