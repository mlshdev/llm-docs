> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/referencefiledocument/writeconfiguration](https://developer.apple.com/documentation/swiftui/referencefiledocument/writeconfiguration)

# ReferenceFileDocument.WriteConfiguration

**Framework:** SwiftUI  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+

The configuration for writing document contents.

> Use Document protocol instead.

## Declaration

```swift
typealias WriteConfiguration = FileDocumentWriteConfiguration
```

<a id="discussion"></a>

## Discussion

This type is an alias for [FileDocumentWriteConfiguration](../filedocumentwriteconfiguration.md), which contains a content type and a file wrapper that you use to access the contents of a document file, if one already exists. You get a value of this type as an input to the [fileWrapper(snapshot:configuration:)](filewrapper%28snapshot_configuration_%29.md) method.

## See Also

### Writing a document

- [fileWrapper(snapshot:configuration:)](filewrapper%28snapshot_configuration_%29.md): Deprecated. Serializes a document snapshot to a file wrapper.
- [writableContentTypes](writablecontenttypes.md): Deprecated. The file types that the document supports saving or exporting to.
