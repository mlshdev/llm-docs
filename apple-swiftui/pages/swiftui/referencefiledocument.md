> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/referencefiledocument](https://developer.apple.com/documentation/swiftui/referencefiledocument)

# ReferenceFileDocument

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+

A type that you use to serialize reference type documents to and from file.

> Use Document protocol instead.

## Declaration

```swift
@preconcurrency protocol ReferenceFileDocument : ObservableObject, Sendable
```

<a id="overview"></a>

## Overview

To store a document as a reference type — like a class — create a type that conforms to the `ReferenceFileDocument` protocol and implement the required methods and properties. Your implementation:

- Provides a list of the content types that the document can read from and write to by defining [readableContentTypes](referencefiledocument/readablecontenttypes.md). If the list of content types that the document can write to is different from those that it reads from, you can optionally also define [writableContentTypes](referencefiledocument/writablecontenttypes.md).
- Loads documents from file in the [init(configuration:)](referencefiledocument/init%28configuration_%29.md) initializer.
- Stores documents to file by providing a snapshot of the document’s content in the [snapshot(contentType:)](referencefiledocument/snapshot%28contenttype_%29.md) method, and then serializing that content in the [fileWrapper(snapshot:configuration:)](referencefiledocument/filewrapper%28snapshot_configuration_%29.md) method.

Ensure that types that conform to this protocol are `Sendable`. In particular, SwiftUI calls the protocol’s methods from different isolation domains. Don’t perform serialization and deserialization on `MainActor`.

```swift
final class PDFDocument: ReferenceFileDocument {
    struct Storage {
        var contents: Data
    }

    static let readableContentTypes: [UTType] = [.pdf]
    let storage: Mutex<Storage>

    required init(configuration: ReadConfiguration) throws {
       guard let data = configuration.file.regularFileContents else {
           throw CocoaError(.fileReadCorruptFile)
       }
        self.storage = .init(.init(contents: data))
    }

    func snapshot(contentType: UTType) throws -> Data {
        storage.withLock { $0.contents }
    }

    func fileWrapper(snapshot: Data, configuration: WriteConfiguration) throws -> FileWrapper {
        return FileWrapper(regularFileWithContents: snapshot)
    }
}
```

> **Important**

> If you store your document as a value type — like a structure — use [FileDocument](filedocument.md) instead.

## Topics

### Reading a document

- [init(configuration:)](referencefiledocument/init%28configuration_%29.md): Deprecated. Creates a document and initializes it with the contents of a file.
- [readableContentTypes](referencefiledocument/readablecontenttypes.md): Deprecated. The file and data types that the document reads from.
- [ReferenceFileDocument.ReadConfiguration](referencefiledocument/readconfiguration.md): Deprecated. The configuration for reading document contents.

### Getting a snapshot

- [snapshot(contentType:)](referencefiledocument/snapshot%28contenttype_%29.md): Deprecated. Creates a snapshot that represents the current state of the document.
- [Snapshot](referencefiledocument/snapshot.md): Deprecated. A type that represents the document’s stored content.

### Writing a document

- [fileWrapper(snapshot:configuration:)](referencefiledocument/filewrapper%28snapshot_configuration_%29.md): Deprecated. Serializes a document snapshot to a file wrapper.
- [writableContentTypes](referencefiledocument/writablecontenttypes.md): Deprecated. The file types that the document supports saving or exporting to.
- [ReferenceFileDocument.WriteConfiguration](referencefiledocument/writeconfiguration.md): Deprecated. The configuration for writing document contents.

## Relationships

### Inherits From

- [ObservableObject](https://developer.apple.com/documentation/combine/observableobject)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [FileDocument](filedocument.md): Deprecated. A type that you use to serialize documents to and from file.
- [FileDocumentConfiguration](filedocumentconfiguration.md): Deprecated. The properties of an open file document.
- [FileDocumentReadConfiguration](filedocumentreadconfiguration.md): Deprecated. The configuration for reading file contents.
- [FileDocumentWriteConfiguration](filedocumentwriteconfiguration.md): Deprecated. The configuration for serializing file contents.
- [NewDocumentAction](newdocumentaction.md): An action that presents a new document.
- [ReferenceFileDocumentConfiguration](referencefiledocumentconfiguration.md): Deprecated. The properties of an open reference file document.
