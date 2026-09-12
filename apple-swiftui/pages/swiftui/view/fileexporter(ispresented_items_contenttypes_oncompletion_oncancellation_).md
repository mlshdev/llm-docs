> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/fileexporter(ispresented:items:contenttypes:oncompletion:oncancellation:)](https://developer.apple.com/documentation/swiftui/view/fileexporter(ispresented:items:contenttypes:oncompletion:oncancellation:))

# fileExporter(isPresented:items:contentTypes:onCompletion:onCancellation:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Presents a system dialog allowing the user to export a collection of `Transferable` items to files on disk.

## Declaration

```swift
nonisolated func fileExporter<C, T>(isPresented: Binding<Bool>, items: C, contentTypes: [UTType] = [], onCompletion: @escaping (Result<[URL], any Error>) -> Void, onCancellation: @escaping () -> Void = { }) -> some View where C : Collection, T : Transferable, T == C.Element

```

## Parameters

- `isPresented`: A binding to whether the dialog should be shown.
- `items`: Collection of values to be saved on disk.
- `contentTypes`: The content types to use for the exported files. If empty, SwiftUI uses the content types from the `transferRepresentation` property provided for `Transferable` conformance.
- `onCompletion`: A callback that will be invoked when the operation has succeeded or failed.
- `onCancellation`: A callback that will be invoked if the user cancels the operation.

<a id="discussion"></a>

## Discussion

In order for the dialog to appear, `isPresented` must be set to `true`. When the operation is finished, `isPresented` will be set to `false` before `onCompletion` is called. If the user cancels the operation, `isPresented` will be set to `false` and `onCancellation` will be called.

For example, a button that exports a collection of photos might look like this:

```swift
struct ExportPhotosButton: View {
    @State private var isExporterPresented = false
    var photos: [Photo]

    var body: some View {
        Button("Export Photos") {
            isExporterPresented = true
        }
        .fileExporter(
            isPresented: $isExporterPresented,
            items: photos
        ) { result in
            switch result {
            case .success(let urls):
                urls.forEach { print("Saved to \($0)") }
            case .failure(let error):
                print(error)
            }
        }
    }
}

struct Photo: Transferable { ... }
```

To further configure the dialog’s appearance and behavior, use these view modifiers: [fileDialogDefaultDirectory(\_:)](filedialogdefaultdirectory%28__%29.md), [fileDialogConfirmationLabel(\_:)](filedialogconfirmationlabel%28__%29.md), [fileDialogMessage(\_:)](filedialogmessage%28__%29.md), [fileDialogBrowserOptions(\_:)](filedialogbrowseroptions%28__%29.md), [fileExporterFilenameLabel(\_:)](fileexporterfilenamelabel%28__%29.md), and [fileDialogCustomizationID(\_:)](filedialogcustomizationid%28__%29.md).

## See Also

### Exporting to file

- [fileExporter(isPresented:document:contentType:defaultFilename:onCompletion:onCancellation:)](fileexporter%28ispresented_document_contenttype_defaultfilename_oncompletion_oncancellation_%29.md): Presents a system dialog for allowing the user to export a `WritableDocument` to a file on disk.
- [fileExporter(isPresented:documents:contentTypes:onCompletion:onCancellation:)](fileexporter%28ispresented_documents_contenttypes_oncompletion_oncancellation_%29.md): Presents a system dialog for allowing the user to export a collection of objects conforming to `WritableDocument` to files on disk.
- [fileExporter(isPresented:item:contentTypes:defaultFilename:onCompletion:onCancellation:)](fileexporter%28ispresented_item_contenttypes_defaultfilename_oncompletion_oncancellation_%29.md): Presents a system dialog allowing the user to export a `Transferable` item to a file on disk.
- [fileExporterFilenameLabel(\_:)](fileexporterfilenamelabel%28__%29.md): On macOS, configures the `fileExporter` with a label for the file name field.
