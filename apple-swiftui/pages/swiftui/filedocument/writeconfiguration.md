> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/filedocument/writeconfiguration

# FileDocument.WriteConfiguration

**Framework:** SwiftUI  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The configuration for writing document contents.

> Conform your type to Document instead.

## Declaration

```swift
typealias WriteConfiguration = FileDocumentWriteConfiguration
```

<a id="discussion"></a>

## Discussion

This type is an alias for [FileDocumentWriteConfiguration](../filedocumentwriteconfiguration.md), which contains a content type and a file wrapper that you use to access the contents of a document file, if one already exists. You get a value of this type as an input to the [fileWrapper(configuration:)](filewrapper%28configuration_%29.md) method.

## See Also

### Writing a document

- [fileWrapper(configuration:)](filewrapper%28configuration_%29.md): Deprecated. Serializes a document snapshot to a file wrapper.
- [writableContentTypes](writablecontenttypes.md): Deprecated. The file types that the document supports saving or exporting to.
