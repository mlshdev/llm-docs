> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/referencefiledocument/readablecontenttypes](https://developer.apple.com/documentation/swiftui/referencefiledocument/readablecontenttypes)

# readableContentTypes

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+

The file and data types that the document reads from.

> Use Document protocol instead.

## Declaration

```swift
static var readableContentTypes: [UTType] { get }
```

<a id="discussion"></a>

## Discussion

Define this list to indicate the content types that your document can read. By default, SwiftUI assumes that your document can also write the same set of content types. If you need to indicate a different set of types for writing files, define the [writableContentTypes](writablecontenttypes.md) property in addition to this property.

## See Also

### Reading a document

- [init(configuration:)](init%28configuration_%29.md): Deprecated. Creates a document and initializes it with the contents of a file.
- [ReferenceFileDocument.ReadConfiguration](readconfiguration.md): Deprecated. The configuration for reading document contents.
