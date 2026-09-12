> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/filewrapperdocumentwriter](https://developer.apple.com/documentation/swiftui/filewrapperdocumentwriter)

# FileWrapperDocumentWriter

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A document writer that serializes a snapshot into a `FileWrapper`.

## Declaration

```swift
struct FileWrapperDocumentWriter<Snapshot>
```

<a id="overview"></a>

## Overview

The `makeFileWrapper` closure in [init(\_:makeFileWrapper:)](filewrapperdocumentwriter/init%28__makefilewrapper_%29.md) turns the document’s snapshot into a `FileWrapper` that SwiftUI writes to disk. It receives the current snapshot and, when available, the `FileWrapper` from the document’s last read or write. For documents written as a single file, ignore `previous` and return a freshly built wrapper:

```swift
extension TextDocument: WritableDocument {
    func writer(
        configuration: sending WriteConfiguration
    ) -> sending FileWrapperDocumentWriter<String> {
        FileWrapperDocumentWriter(configuration) { snapshot, _ in
            FileWrapper(regularFileWithContents: Data(snapshot.utf8))
        }
    }

    // ...
}
```

## Topics

### Creating a writer

- [init(\_:makeFileWrapper:)](filewrapperdocumentwriter/init%28__makefilewrapper_%29.md): Creates a writer that converts a snapshot into a `FileWrapper`.
- [FileWrapperDocumentWriter.WriteConfiguration](filewrapperdocumentwriter/writeconfiguration.md)

## Relationships

### Conforms To

- [DocumentWriter](documentwriter.md)

## See Also

### Reading and writing documents

- [DocumentReadConfiguration](documentreadconfiguration.md): The context SwiftUI passes to [reader(configuration:)](readabledocument/reader%28configuration_%29.md).
- [DocumentWriteConfiguration](documentwriteconfiguration.md): The context SwiftUI passes to [writer(configuration:)](writabledocument/writer%28configuration_%29.md).
- [DocumentReader](documentreader.md): A type that reads a document’s content from a file.
- [DocumentWriter](documentwriter.md): A type that writes a document’s content to a file.
- [FileWrapperDocumentReader](filewrapperdocumentreader.md): A document reader that deserializes a `FileWrapper` into a snapshot.
