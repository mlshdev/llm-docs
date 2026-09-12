> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/readabledocument/readablecontenttypes](https://developer.apple.com/documentation/swiftui/readabledocument/readablecontenttypes)

# readableContentTypes

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The content types this document can open.

## Declaration

```swift
static var readableContentTypes: [UTType] { get }
```

<a id="discussion"></a>

## Discussion

The document browser and open panel use this list to filter which files the person can select.

## See Also

### Reading a document

- [ReadableDocument.ReadConfiguration](readconfiguration.md): The configuration for reading document contents.
- [Reader](reader.md): A type that implements reading from disk.
- [reader(configuration:)](reader%28configuration_%29.md): Creates a reader to load this document from disk.
- [apply(snapshot:previous:)](apply%28snapshot_previous_%29.md): Applies a loaded snapshot to the document model.
- [writableContentTypes](writablecontenttypes.md): Conforms when `Self` conforms to `WritableDocument`. By default, a document that supports reading also supports writing the same content types.
