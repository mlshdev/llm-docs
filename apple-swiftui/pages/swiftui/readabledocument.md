> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/readabledocument](https://developer.apple.com/documentation/swiftui/readabledocument)

# ReadableDocument

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A document type that supports reading from file.

## Declaration

```swift
protocol ReadableDocument : AnyObject
```

<a id="overview"></a>

## Overview

Conform to `ReadableDocument` to build a read-only document viewer, or combine with [WritableDocument](writabledocument.md) (via the [Document](document.md) protocol) for full read-write support.

A readable document is a reference type so that SwiftUI can maintain a stable identity across updates. Use `@Observable` to enable per-property change tracking:

```swift
@Observable
final class MarkdownViewer: ReadableDocument {
    static let readableContentTypes: [UTType] = [.markdown]

    var attributedText = AttributedString()

    func reader(configuration: sending ReadConfiguration) -> sending FileWrapperDocumentReader<String> {
        FileWrapperDocumentReader(configuration) { fileWrapper in
            guard let data =
                fileWrapper.regularFileContents else {
                throw CocoaError(.fileReadCorruptFile)
            }
            return String(decoding: data, as: UTF8.self)
        }
    }

    @MainActor
    func apply(snapshot: sending String, previous: sending String?) async throws {
        attributedText = try AttributedString(
            markdown: snapshot
        )
    }
}
```

Present a read-only document with [DocumentGroup](documentgroup.md) using the viewer initializer:

```swift
DocumentGroup { document in
    MarkdownView(document: document)
} makeReadableDocument: { configuration, context in
    MarkdownViewer()
}
```

Set `CFBundleTypeRole` to `Viewer` in your Info.plist for read-only document types.

## Topics

### Reading a document

- [readableContentTypes](readabledocument/readablecontenttypes.md): The content types this document can open.
- [ReadableDocument.ReadConfiguration](readabledocument/readconfiguration.md): The configuration for reading document contents.
- [Reader](readabledocument/reader.md): A type that implements reading from disk.
- [reader(configuration:)](readabledocument/reader%28configuration_%29.md): Creates a reader to load this document from disk.
- [apply(snapshot:previous:)](readabledocument/apply%28snapshot_previous_%29.md): Applies a loaded snapshot to the document model.
- [writableContentTypes](readabledocument/writablecontenttypes.md): Conforms when `Self` conforms to `WritableDocument`. By default, a document that supports reading also supports writing the same content types.

## Relationships

### Inherited By

- [Document](document.md)

## See Also

### Storing document data in a reference type instance

- [Document](document.md): A document that supports both reading and writing.
- [WritableDocument](writabledocument.md): A document type that supports writing to file.
- [URLDocumentConfiguration](urldocumentconfiguration.md): The configuration of an open document that stores its file URL, last modification date, and related metadata.
- [DocumentCreationContext](documentcreationcontext.md): Context about how a document was created.
- [DocumentBaseBox](documentbasebox.md): A Box that allows setting its Document base not requiring the caller to know the exact types of the box and its base.
