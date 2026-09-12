> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/filewrapperdocumentreader](https://developer.apple.com/documentation/swiftui/filewrapperdocumentreader)

# FileWrapperDocumentReader

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A document reader that deserializes a `FileWrapper` into a snapshot.

## Declaration

```swift
struct FileWrapperDocumentReader<Snapshot>
```

<a id="overview"></a>

## Overview

This is the recommended reader for most documents. Provide a closure that converts a `FileWrapper` into your snapshot type, and `FileWrapperDocumentReader` handles file coordination and loading.

```swift
func reader(configuration: sending ReadConfiguration) -> sending FileWrapperDocumentReader<String> {
    FileWrapperDocumentReader(configuration) { fileWrapper in
        guard let data =
            fileWrapper.regularFileContents else {
            throw CocoaError(.fileReadCorruptFile)
        }
        return String(decoding: data, as: UTF8.self)
    }
}
```

For package documents, navigate the `FileWrapper` hierarchy:

```swift
FileWrapperDocumentReader(configuration) { directory in
    let children = directory.fileWrappers ?? [:]
    guard let metadataData = children["metadata.json"]?
        .regularFileContents else {
        throw CocoaError(.fileReadCorruptFile)
    }
    return try JSONDecoder().decode(
        Metadata.self, from: metadataData
    )
}
```

> **Important**

> `FileWrapper` loads file contents on demand. A child file may be gone by the time you call `regularFileContents`. Always handle errors when reading children of a package.

The closure does not receive a `Subprogress`. To report progress during reads, use a custom [DocumentReader](documentreader.md) instead.

## Topics

### Creating a reader

- [init(\_:makeSnapshot:)](filewrapperdocumentreader/init%28__makesnapshot_%29.md): Creates a reader that converts a `FileWrapper` into a snapshot.
- [FileWrapperDocumentReader.ReadConfiguration](filewrapperdocumentreader/readconfiguration.md)

## Relationships

### Conforms To

- [DocumentReader](documentreader.md)

## See Also

### Reading and writing documents

- [DocumentReadConfiguration](documentreadconfiguration.md): The context SwiftUI passes to [reader(configuration:)](readabledocument/reader%28configuration_%29.md).
- [DocumentWriteConfiguration](documentwriteconfiguration.md): The context SwiftUI passes to [writer(configuration:)](writabledocument/writer%28configuration_%29.md).
- [DocumentReader](documentreader.md): A type that reads a document’s content from a file.
- [DocumentWriter](documentwriter.md): A type that writes a document’s content to a file.
- [FileWrapperDocumentWriter](filewrapperdocumentwriter.md): A document writer that serializes a snapshot into a `FileWrapper`.
