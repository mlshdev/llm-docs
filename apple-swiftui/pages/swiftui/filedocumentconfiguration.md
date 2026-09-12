> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/filedocumentconfiguration](https://developer.apple.com/documentation/swiftui/filedocumentconfiguration)

# FileDocumentConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The properties of an open file document.

> Conform your type to Document and use URLDocumentConfiguration instead.

## Declaration

```swift
struct FileDocumentConfiguration<Document> where Document : FileDocument
```

<a id="overview"></a>

## Overview

You receive an instance of this structure when you create a [DocumentGroup](documentgroup.md) with a value file type. Use it to access the document in your viewer or editor.

## Topics

### Getting and setting the document

- [document](filedocumentconfiguration/document.md): Deprecated. The current document model.
- [$document](filedocumentconfiguration/$document.md): Deprecated.

### Getting document properties

- [fileURL](filedocumentconfiguration/fileurl.md): Deprecated. The URL of the open file document.
- [isEditable](filedocumentconfiguration/iseditable.md): Deprecated. A Boolean that indicates whether you can edit the document.

### Instance Properties

- [creationSource](filedocumentconfiguration/creationsource.md): Deprecated. Conforms when `Document` conforms to `FileDocument`. The source associated with the button that created this document.

## See Also

### Deprecated

- [FileDocument](filedocument.md): Deprecated. A type that you use to serialize documents to and from file.
- [FileDocumentReadConfiguration](filedocumentreadconfiguration.md): Deprecated. The configuration for reading file contents.
- [FileDocumentWriteConfiguration](filedocumentwriteconfiguration.md): Deprecated. The configuration for serializing file contents.
- [NewDocumentAction](newdocumentaction.md): An action that presents a new document.
- [ReferenceFileDocument](referencefiledocument.md): Deprecated. A type that you use to serialize reference type documents to and from file.
- [ReferenceFileDocumentConfiguration](referencefiledocumentconfiguration.md): Deprecated. The properties of an open reference file document.
