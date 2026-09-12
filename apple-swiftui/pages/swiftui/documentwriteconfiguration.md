> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentwriteconfiguration](https://developer.apple.com/documentation/swiftui/documentwriteconfiguration)

# DocumentWriteConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The context SwiftUI passes to [writer(configuration:)](writabledocument/writer%28configuration_%29.md).

## Declaration

```swift
struct DocumentWriteConfiguration
```

<a id="overview"></a>

## Overview

Contains the [contentType](documentwriteconfiguration/contenttype.md) of the file being written (one of the document’s [writableContentTypes](writabledocument/writablecontenttypes.md)). Use it to choose the correct serialization strategy when a document supports exporting to multiple formats.

Access this type through the [WritableDocument.WriteConfiguration](writabledocument/writeconfiguration.md) typealias.

## Topics

### Accessing write properties

- [contentType](documentwriteconfiguration/contenttype.md): The content type of the file being written.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Reading and writing documents

- [DocumentReadConfiguration](documentreadconfiguration.md): The context SwiftUI passes to [reader(configuration:)](readabledocument/reader%28configuration_%29.md).
- [DocumentReader](documentreader.md): A type that reads a document’s content from a file.
- [DocumentWriter](documentwriter.md): A type that writes a document’s content to a file.
- [FileWrapperDocumentReader](filewrapperdocumentreader.md): A document reader that deserializes a `FileWrapper` into a snapshot.
- [FileWrapperDocumentWriter](filewrapperdocumentwriter.md): A document writer that serializes a snapshot into a `FileWrapper`.
