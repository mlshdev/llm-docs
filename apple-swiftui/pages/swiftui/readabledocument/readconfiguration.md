> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/readabledocument/readconfiguration](https://developer.apple.com/documentation/swiftui/readabledocument/readconfiguration)

# ReadableDocument.ReadConfiguration

**Framework:** SwiftUI  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The configuration for reading document contents.

## Declaration

```swift
typealias ReadConfiguration = DocumentReadConfiguration
```

## See Also

### Reading a document

- [readableContentTypes](readablecontenttypes.md): The content types this document can open.
- [Reader](reader.md): A type that implements reading from disk.
- [reader(configuration:)](reader%28configuration_%29.md): Creates a reader to load this document from disk.
- [apply(snapshot:previous:)](apply%28snapshot_previous_%29.md): Applies a loaded snapshot to the document model.
- [writableContentTypes](writablecontenttypes.md): Conforms when `Self` conforms to `WritableDocument`. By default, a document that supports reading also supports writing the same content types.
