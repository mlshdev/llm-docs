> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentbasebox](https://developer.apple.com/documentation/swiftui/documentbasebox)

# DocumentBaseBox

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A Box that allows setting its Document base not requiring the caller to know the exact types of the box and its base.

## Declaration

```swift
protocol DocumentBaseBox<Document> : AnyObject
```

## Topics

### Specifying the document type

- [Document](documentbasebox/document.md): The underlying document type.

### Accessing the document

- [base](documentbasebox/base.md): Updates the underlying document to a new value.

## See Also

### Storing document data in a reference type instance

- [Document](document.md): A document that supports both reading and writing.
- [ReadableDocument](readabledocument.md): A document type that supports reading from file.
- [WritableDocument](writabledocument.md): A document type that supports writing to file.
- [URLDocumentConfiguration](urldocumentconfiguration.md): The configuration of an open document that stores its file URL, last modification date, and related metadata.
- [DocumentCreationContext](documentcreationcontext.md): Context about how a document was created.
