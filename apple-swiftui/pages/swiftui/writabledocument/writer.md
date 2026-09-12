> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/writabledocument/writer](https://developer.apple.com/documentation/swiftui/writabledocument/writer)

# Writer

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A type that implements writing to disk.

## Declaration

```swift
associatedtype Writer : DocumentWriter
```

## See Also

### Writing a document

- [writableContentTypes](writablecontenttypes.md): The content types this document can save or export to.
- [WritableDocument.WriteConfiguration](writeconfiguration.md): The configuration for writing document contents.
- [writer(configuration:)](writer%28configuration_%29.md): Creates a writer to save this document to disk.
- [snapshot(contentType:)](snapshot%28contenttype_%29.md): Captures the document’s current state for saving.
