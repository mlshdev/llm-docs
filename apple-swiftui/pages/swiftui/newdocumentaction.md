> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/newdocumentaction](https://developer.apple.com/documentation/swiftui/newdocumentaction)

# NewDocumentAction

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 13.0+

An action that presents a new document.

## Declaration

```swift
@MainActor @preconcurrency struct NewDocumentAction
```

<a id="overview"></a>

## Overview

Use the [newDocument](environmentvalues/newdocument.md) environment value to get the instance of this structure for a given [Environment](environment.md). Then call the instance to present a new document. You call the instance directly because it defines a [callAsFunction(\_:)](newdocumentaction/callasfunction%28__%29.md) method that Swift calls when you call the instance.

For example, you can define a button that creates a new document from the selected text:

```swift
struct NewDocumentFromSelection: View {
    @FocusedBinding(\.selectedText) private var selectedText: String?
    @Environment(\.newDocument) private var newDocument

    var body: some View {
        Button("New Document With Selection") {
            newDocument(TextDocument(text: selectedText))
        }
        .disabled(selectedText?.isEmpty != false)
    }
}
```

The above example assumes that you define a `TextDocument` that conforms to the [FileDocument](filedocument.md) or [ReferenceFileDocument](referencefiledocument.md) protocol, and a [DocumentGroup](documentgroup.md) that handles the associated file type.

## Topics

### Calling the action

- [callAsFunction(\_:)](newdocumentaction/callasfunction%28__%29.md): Presents a new document window.
- [callAsFunction(contentType:)](newdocumentaction/callasfunction%28contenttype_%29.md): Presents a new document window.
- [callAsFunction(contentType:prepareDocument:)](newdocumentaction/callasfunction%28contenttype_preparedocument_%29.md): Presents a new document window with preset contents.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [FileDocument](filedocument.md): Deprecated. A type that you use to serialize documents to and from file.
- [FileDocumentConfiguration](filedocumentconfiguration.md): Deprecated. The properties of an open file document.
- [FileDocumentReadConfiguration](filedocumentreadconfiguration.md): Deprecated. The configuration for reading file contents.
- [FileDocumentWriteConfiguration](filedocumentwriteconfiguration.md): Deprecated. The configuration for serializing file contents.
- [ReferenceFileDocument](referencefiledocument.md): Deprecated. A type that you use to serialize reference type documents to and from file.
- [ReferenceFileDocumentConfiguration](referencefiledocumentconfiguration.md): Deprecated. The properties of an open reference file document.
