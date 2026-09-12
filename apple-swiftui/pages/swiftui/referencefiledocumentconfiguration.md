> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/referencefiledocumentconfiguration](https://developer.apple.com/documentation/swiftui/referencefiledocumentconfiguration)

# ReferenceFileDocumentConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+

The properties of an open reference file document.

> Use Document protocol and URLDocumentConfiguration instead.

## Declaration

```swift
@MainActor @preconcurrency struct ReferenceFileDocumentConfiguration<Document> where Document : ReferenceFileDocument
```

<a id="overview"></a>

## Overview

You receive an instance of this structure when you create a [DocumentGroup](documentgroup.md) with a reference file type. Use it to access the document in your viewer or editor.

## Topics

### Getting and setting the document

- [document](referencefiledocumentconfiguration/document.md): Deprecated. The current document model.
- [$document](referencefiledocumentconfiguration/$document.md): Deprecated.

### Getting document properties

- [fileURL](referencefiledocumentconfiguration/fileurl.md): Deprecated. The URL of the open file document.
- [isEditable](referencefiledocumentconfiguration/iseditable.md): Deprecated. A Boolean that indicates whether you can edit the document.

## See Also

### Deprecated

- [FileDocument](filedocument.md): Deprecated. A type that you use to serialize documents to and from file.
- [FileDocumentConfiguration](filedocumentconfiguration.md): Deprecated. The properties of an open file document.
- [FileDocumentReadConfiguration](filedocumentreadconfiguration.md): Deprecated. The configuration for reading file contents.
- [FileDocumentWriteConfiguration](filedocumentwriteconfiguration.md): Deprecated. The configuration for serializing file contents.
- [NewDocumentAction](newdocumentaction.md): An action that presents a new document.
- [ReferenceFileDocument](referencefiledocument.md): Deprecated. A type that you use to serialize reference type documents to and from file.
