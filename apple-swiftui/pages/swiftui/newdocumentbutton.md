> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/newdocumentbutton](https://developer.apple.com/documentation/swiftui/newdocumentbutton)

# NewDocumentButton

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A button that creates and opens new documents.

## Declaration

```swift
nonisolated struct NewDocumentButton<Label> where Label : View
```

<a id="overview"></a>

## Overview

Use a new document button to give people the option to create documents in your app. In the following example, there are two new document buttons, both support [Text](text.md) labels. When the user taps or clicks the first button, the system creates a new document in the directory currently open in the document browser. The second button presents a template picker, where a document can be prepopulated or preconfigured using a template.

```swift
@State private var isTemplatePickerPresented = false
@State private var documentCreationContinuation:
    CheckedContinuation<TextDocument?, any Error>?

var body: some Scene {
    DocumentGroupLaunchScene("My Documents") {
        NewDocumentButton(Text("Start Writing…"))
        NewDocumentButton(Text("Choose a Template"), for: TextDocument.self) {
            try await withCheckedThrowingContinuation { continuation in
                documentCreationContinuation = continuation
                isTemplatePickerPresented = true
            }
        }
        .fullScreenCover(isPresented: $isTemplatePickerPresented) {
            TemplatePicker(
                continuation: $documentCreationContinuation
            )
        }
    }

    DocumentGroup(newDocument: TextDocument()) { configuration in
        MyDocumentView(document: configuration.$document))
    }
}

struct TemplatePicker: View {
    @Binding var continuation:
        CheckedContinuation<TextDocument?, any Error>?
    @Environment(\.dismiss) var dismiss

    var body: some View {
        VStack {
            Text("Choose a template")
                .font(.title)
            Button("Meeting minutes") {
                let document = makeMeetingMinutes()
                documentCreationContinuation?.resume(returning: document)
                dismiss()
            }
            Button("Letter") {
                let document = makeLetter()
                documentCreationContinuation?.resume(returning: document)
                dismiss()
            }
            Button("Cancel") {
                documentCreationContinuation?.resume(throwing: CancellationError())
                dismiss()
            }
        }
    }

    private func makeMeetingMinutes() -> TextDocument { ... }
    private func makeLetter() -> TextDocument { ... }
}

struct TextDocument: FileDocument { ... }
```

If you don’t provide a custom label, the system provides a button with the default “Create Document” label.

## Topics

### Creating and opening a document

- [init(\_:contentType:)](newdocumentbutton/init%28__contenttype_%29.md): Conforms when `Label` is `Text`. Creates and opens new documents.
- [init(\_:contentType:prepareDocumentURL:)](newdocumentbutton/init%28__contenttype_preparedocumenturl_%29.md): Conforms when `Label` is `Text`. Creates and opens new documents.

### Creating and opening a document with a creation source

- [init(\_:contentType:source:)](newdocumentbutton/init%28__contenttype_source_%29.md): Conforms when `Label` is `Text`. Creates and opens new documents, tagging them with a creation source.
- [init(\_:contentType:source:\_:)](newdocumentbutton/init%28__contenttype_source___%29.md): Conforms when `Label` is `Text`. Creates and opens new URL-based documents from a template picker.
- [init(\_:contentType:source:prepareDocumentURL:)](newdocumentbutton/init%28__contenttype_source_preparedocumenturl_%29.md): Conforms when `Label` is `Text`. Creates and opens new URL-based documents from a template picker.

### Deprecated

- [init(\_:for:contentType:prepareDocument:)](newdocumentbutton/init%28__for_contenttype_preparedocument_%29.md): Deprecated. Conforms when `Label` is `Text`.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Configuring the document launch experience

- [DocumentGroupLaunchScene](documentgrouplaunchscene.md): A launch scene for document-based applications.
- [documentLaunchTitle(\_:)](scene/documentlaunchtitle%28__%29.md): Sets the title displayed on the document launch card.
- [documentLaunchSubtitle(\_:)](scene/documentlaunchsubtitle%28__%29.md): Sets the subtitle displayed beneath the title on the document launch card.
- [DocumentLaunchView](documentlaunchview.md): A view to present when launching document-related user experience.
- [documentLaunchTitle(\_:)](view/documentlaunchtitle%28__%29.md): Sets the title displayed on the document launch card.
- [documentLaunchSubtitle(\_:)](view/documentlaunchsubtitle%28__%29.md): Sets the subtitle displayed beneath the title on the document launch card.
- [documentBrowserContextMenu(\_:)](view/documentbrowsercontextmenu%28__%29.md): Adds to a `DocumentLaunchView` actions that accept a list of selected files as their parameter.
- [DocumentLaunchGeometryProxy](documentlaunchgeometryproxy.md): A proxy for access to the frame of the scene and its title view.
- [DefaultDocumentGroupLaunchActions](defaultdocumentgrouplaunchactions.md): The default actions for the document group launch scene and the document launch view.
- [DefaultNewDocumentButtonLabel](defaultnewdocumentbuttonlabel.md): The default label used for a new document button.
- [DocumentCreationSource](documentcreationsource.md): Describes the source used to create a new document.
