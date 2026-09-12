> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/writabledocument/writeconfiguration](https://developer.apple.com/documentation/swiftui/writabledocument/writeconfiguration)

# WritableDocument.WriteConfiguration

**Framework:** SwiftUI  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The configuration for writing document contents.

## Declaration

```swift
typealias WriteConfiguration = DocumentWriteConfiguration
```

## See Also

### Writing a document

- [writableContentTypes](writablecontenttypes.md): The content types this document can save or export to.
- [Writer](writer.md): A type that implements writing to disk.
- [writer(configuration:)](writer%28configuration_%29.md): Creates a writer to save this document to disk.
- [snapshot(contentType:)](snapshot%28contenttype_%29.md): Captures the document’s current state for saving.
