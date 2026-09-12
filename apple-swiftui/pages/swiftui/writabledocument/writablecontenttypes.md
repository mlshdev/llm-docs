> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/writabledocument/writablecontenttypes](https://developer.apple.com/documentation/swiftui/writabledocument/writablecontenttypes)

# writableContentTypes

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The content types this document can save or export to.

## Declaration

```swift
static var writableContentTypes: [UTType] { get }
```

<a id="discussion"></a>

## Discussion

The save panel uses this list to offer format options. When a document also conforms to [ReadableDocument](../readabledocument.md), the default implementation returns [readableContentTypes](../readabledocument/readablecontenttypes.md).

## See Also

### Writing a document

- [WritableDocument.WriteConfiguration](writeconfiguration.md): The configuration for writing document contents.
- [Writer](writer.md): A type that implements writing to disk.
- [writer(configuration:)](writer%28configuration_%29.md): Creates a writer to save this document to disk.
- [snapshot(contentType:)](snapshot%28contenttype_%29.md): Captures the document’s current state for saving.
