> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentreadconfiguration](https://developer.apple.com/documentation/swiftui/documentreadconfiguration)

# DocumentReadConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The context SwiftUI passes to [reader(configuration:)](readabledocument/reader%28configuration_%29.md).

## Declaration

```swift
struct DocumentReadConfiguration
```

<a id="overview"></a>

## Overview

Contains the [contentType](documentreadconfiguration/contenttype.md) of the file being read (one of the document’s [readableContentTypes](readabledocument/readablecontenttypes.md)). Use it to choose the correct deserialization strategy when a document supports multiple formats.

Access this type through the [ReadableDocument.ReadConfiguration](readabledocument/readconfiguration.md) typealias.

## Topics

### Accessing read properties

- [contentType](documentreadconfiguration/contenttype.md): The content type of the file being read.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Reading and writing documents

- [DocumentWriteConfiguration](documentwriteconfiguration.md): The context SwiftUI passes to [writer(configuration:)](writabledocument/writer%28configuration_%29.md).
- [DocumentReader](documentreader.md): A type that reads a document’s content from a file.
- [DocumentWriter](documentwriter.md): A type that writes a document’s content to a file.
- [FileWrapperDocumentReader](filewrapperdocumentreader.md): A document reader that deserializes a `FileWrapper` into a snapshot.
- [FileWrapperDocumentWriter](filewrapperdocumentwriter.md): A document writer that serializes a snapshot into a `FileWrapper`.
