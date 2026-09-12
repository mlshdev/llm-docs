> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/filedocument/readconfiguration](https://developer.apple.com/documentation/swiftui/filedocument/readconfiguration)

# FileDocument.ReadConfiguration

**Framework:** SwiftUI  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The configuration for reading document contents.

> Conform your type to Document instead.

## Declaration

```swift
typealias ReadConfiguration = FileDocumentReadConfiguration
```

<a id="discussion"></a>

## Discussion

This type is an alias for [FileDocumentReadConfiguration](../filedocumentreadconfiguration.md), which contains a content type and a file wrapper that you use to access the contents of a document file. You get a value of this type as an input to the [init(configuration:)](init%28configuration_%29.md) initializer. Use it to load a document from a file.

## See Also

### Reading a document

- [init(configuration:)](init%28configuration_%29.md): Deprecated. Creates a document and initializes it with the contents of a file.
- [readableContentTypes](readablecontenttypes.md): Deprecated. The file and data types that the document reads from.
