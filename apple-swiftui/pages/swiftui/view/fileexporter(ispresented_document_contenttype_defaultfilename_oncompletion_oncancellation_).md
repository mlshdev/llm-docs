> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/fileexporter(ispresented:document:contenttype:defaultfilename:oncompletion:oncancellation:)](https://developer.apple.com/documentation/swiftui/view/fileexporter(ispresented:document:contenttype:defaultfilename:oncompletion:oncancellation:))

# fileExporter(isPresented:document:contentType:defaultFilename:onCompletion:onCancellation:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Presents a system dialog for allowing the user to export a `WritableDocument` to a file on disk.

## Declaration

```swift
nonisolated func fileExporter<D>(isPresented: Binding<Bool>, document: D?, contentType: UTType? = nil, defaultFilename: String? = nil, onCompletion: @escaping (Result<URL, any Error>) -> Void, onCancellation: (() -> Void)? = nil) -> some View where D : WritableDocument, D.Writer.Destination == URL

```

## Parameters

- `isPresented`: A binding to whether the dialog should be shown.
- `document`: The in-memory document to export.
- `contentType`: The content type to export to. If not provided, `WritableDocument.writableContentTypes` are used.
- `defaultFilename`: If provided, the default name to use for the exported file, which the user will have an opportunity to edit prior to the export.
- `onCompletion`: A callback that will be invoked when the operation has succeeded or failed. The `result` indicates whether the operation succeeded or failed.
- `onCancellation`: A callback that will be invoked if the user cancels the operation.

<a id="discussion"></a>

## Discussion

In order for the dialog to appear, `document` must be non-nil. When the operation is finished, `isPresented` will be set to `false` before `onCompletion` is called. If the user cancels the operation, `isPresented` will be set to `false` and `onCancellation` will be called.

Below is an example of a simple implementation of `WritableDocument`. Instead of `String`, you can use `Data` or any other type as the snapshot.

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
    @State private var document = TextDocument()
    @State private var isExporting = false

    var body: some View {
        Button("Export…") { isExporting = true }
            .fileExporter(
                isPresented: $isExporting,
                document: document,
                defaultFilename: "Untitled"
            ) { _ in }
    }
}
```

## See Also

### Exporting to file

- [fileExporter(isPresented:documents:contentTypes:onCompletion:onCancellation:)](fileexporter%28ispresented_documents_contenttypes_oncompletion_oncancellation_%29.md): Presents a system dialog for allowing the user to export a collection of objects conforming to `WritableDocument` to files on disk.
- [fileExporter(isPresented:item:contentTypes:defaultFilename:onCompletion:onCancellation:)](fileexporter%28ispresented_item_contenttypes_defaultfilename_oncompletion_oncancellation_%29.md): Presents a system dialog allowing the user to export a `Transferable` item to a file on disk.
- [fileExporter(isPresented:items:contentTypes:onCompletion:onCancellation:)](fileexporter%28ispresented_items_contenttypes_oncompletion_oncancellation_%29.md): Presents a system dialog allowing the user to export a collection of `Transferable` items to files on disk.
- [fileExporterFilenameLabel(\_:)](fileexporterfilenamelabel%28__%29.md): On macOS, configures the `fileExporter` with a label for the file name field.
