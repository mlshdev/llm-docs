> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/fileexporterfilenamelabel(_:)](https://developer.apple.com/documentation/swiftui/view/fileexporterfilenamelabel(_:))

# fileExporterFilenameLabel(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

On macOS, configures the `fileExporter` with a label for the file name field.

## Declaration

```swift
@export(implementation) nonisolated func fileExporterFilenameLabel(_ label: LocalizedStringResource) -> some View

```

## Parameters

- `label`: The localized string resource to display.

## See Also

### Exporting to file

- [fileExporter(isPresented:document:contentType:defaultFilename:onCompletion:onCancellation:)](fileexporter%28ispresented_document_contenttype_defaultfilename_oncompletion_oncancellation_%29.md): Presents a system dialog for allowing the user to export a `WritableDocument` to a file on disk.
- [fileExporter(isPresented:documents:contentTypes:onCompletion:onCancellation:)](fileexporter%28ispresented_documents_contenttypes_oncompletion_oncancellation_%29.md): Presents a system dialog for allowing the user to export a collection of objects conforming to `WritableDocument` to files on disk.
- [fileExporter(isPresented:item:contentTypes:defaultFilename:onCompletion:onCancellation:)](fileexporter%28ispresented_item_contenttypes_defaultfilename_oncompletion_oncancellation_%29.md): Presents a system dialog allowing the user to export a `Transferable` item to a file on disk.
- [fileExporter(isPresented:items:contentTypes:onCompletion:onCancellation:)](fileexporter%28ispresented_items_contenttypes_oncompletion_oncancellation_%29.md): Presents a system dialog allowing the user to export a collection of `Transferable` items to files on disk.
