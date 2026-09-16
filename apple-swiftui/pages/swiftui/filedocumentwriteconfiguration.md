> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/filedocumentwriteconfiguration

# FileDocumentWriteConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+

The configuration for serializing file contents.

> Use the Document protocol and URLDocumentConfiguration.

## Declaration

```swift
struct FileDocumentWriteConfiguration
```

## Topics

### Writing the content

- [contentType](filedocumentwriteconfiguration/contenttype.md): Deprecated. The expected uniform type of the file contents.
- [existingFile](filedocumentwriteconfiguration/existingfile.md): Deprecated. The file wrapper containing the current document content. `nil` if the document is unsaved.

## See Also

### Deprecated

- [FileDocument](filedocument.md): Deprecated. A type that you use to serialize documents to and from file.
- [FileDocumentConfiguration](filedocumentconfiguration.md): Deprecated. The properties of an open file document.
- [FileDocumentReadConfiguration](filedocumentreadconfiguration.md): Deprecated. The configuration for reading file contents.
- [NewDocumentAction](newdocumentaction.md): An action that presents a new document.
- [ReferenceFileDocument](referencefiledocument.md): Deprecated. A type that you use to serialize reference type documents to and from file.
- [ReferenceFileDocumentConfiguration](referencefiledocumentconfiguration.md): Deprecated. The properties of an open reference file document.
