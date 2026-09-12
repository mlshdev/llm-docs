> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentcreationcontext](https://developer.apple.com/documentation/swiftui/documentcreationcontext)

# DocumentCreationContext

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Context about how a document was created.

## Declaration

```swift
struct DocumentCreationContext
```

<a id="overview"></a>

## Overview

SwiftUI passes this to the `makeDocument` closure of [DocumentGroup](documentgroup.md). Use [creationSource](documentcreationcontext/creationsource.md) to determine which [NewDocumentButton](newdocumentbutton.md) the person tapped and configure the document accordingly:

```swift
DocumentGroup { document in
    EditorView(document: document)
} makeDocument: { configuration, context in
    let document = NotesDocument()
    if context.creationSource == .checklist {
        document.template = .checklist
    }
    return document
}
```

## Topics

### Accessing creation properties

- [creationSource](documentcreationcontext/creationsource.md): The source associated with the button that created this document.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Storing document data in a reference type instance

- [Document](document.md): A document that supports both reading and writing.
- [ReadableDocument](readabledocument.md): A document type that supports reading from file.
- [WritableDocument](writabledocument.md): A document type that supports writing to file.
- [URLDocumentConfiguration](urldocumentconfiguration.md): The configuration of an open document that stores its file URL, last modification date, and related metadata.
- [DocumentBaseBox](documentbasebox.md): A Box that allows setting its Document base not requiring the caller to know the exact types of the box and its base.
