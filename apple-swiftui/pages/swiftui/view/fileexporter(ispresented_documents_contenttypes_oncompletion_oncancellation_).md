> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/fileexporter(ispresented:documents:contenttypes:oncompletion:oncancellation:)](https://developer.apple.com/documentation/swiftui/view/fileexporter(ispresented:documents:contenttypes:oncompletion:oncancellation:))

# fileExporter(isPresented:documents:contentTypes:onCompletion:onCancellation:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Presents a system dialog for allowing the user to export a collection of objects conforming to `WritableDocument` to files on disk.

## Declaration

```swift
nonisolated func fileExporter<C>(isPresented: Binding<Bool>, documents: C, contentTypes: [UTType] = [], onCompletion: @escaping (Result<[URL], any Error>) -> Void, onCancellation: (() -> Void)? = nil) -> some View where C : Collection, C.Element : WritableDocument, C.Element.Writer.Destination == URL

```

## Parameters

- `isPresented`: A binding to whether the dialog should be shown.
- `documents`: The in-memory documents to export.
- `contentTypes`: The content types to export to. If not provided, `WritableDocument.writableContentTypes` are used.
- `onCompletion`: A callback that will be invoked when the operation has succeeded or failed. The `result` indicates whether the operation succeeded or failed.
- `onCancellation`: A callback that will be invoked if the user cancels the operation.

<a id="discussion"></a>

## Discussion

In order for the dialog to appear, `documents` must be non-empty. When the operation is finished, `isPresented` will be set to `false` before `onCompletion` is called. If the user cancels the operation, `isPresented` will be set to `false` and `onCancellation` will be called.

```swift
@MainActor
final class TextDocument: WritableDocument {
    static let writableContentTypes: [UTType] = [.utf8PlainText]

    var text: String = ""

    nonisolated func writer(
        configuration: sending WriteConfiguration
    ) -> sending FileWrapperDocumentWriter<String> {
        FileWrapperDocumentWriter(configuration) { snapshot, _ in
            FileWrapper(regularFileWithContents: Data(snapshot.utf8))
        }
    }

    func snapshot(contentType: UTType) async throws -> String {
        text
    }
}

struct ExportView: View {
    @Binding var documents: [TextDocument]
    @State private var isExporting = false

    var body: some View {
        Button("Export…") { isExporting = true }
            .fileExporter(
                isPresented: $isExporting,
                documents: documents
            ) { _ in }
    }
}
```

## See Also

### Exporting to file

- [fileExporter(isPresented:document:contentType:defaultFilename:onCompletion:onCancellation:)](fileexporter%28ispresented_document_contenttype_defaultfilename_oncompletion_oncancellation_%29.md): Presents a system dialog for allowing the user to export a `WritableDocument` to a file on disk.
- [fileExporter(isPresented:item:contentTypes:defaultFilename:onCompletion:onCancellation:)](fileexporter%28ispresented_item_contenttypes_defaultfilename_oncompletion_oncancellation_%29.md): Presents a system dialog allowing the user to export a `Transferable` item to a file on disk.
- [fileExporter(isPresented:items:contentTypes:onCompletion:onCancellation:)](fileexporter%28ispresented_items_contenttypes_oncompletion_oncancellation_%29.md): Presents a system dialog allowing the user to export a collection of `Transferable` items to files on disk.
- [fileExporterFilenameLabel(\_:)](fileexporterfilenamelabel%28__%29.md): On macOS, configures the `fileExporter` with a label for the file name field.
