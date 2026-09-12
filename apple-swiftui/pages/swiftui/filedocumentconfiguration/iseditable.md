> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/filedocumentconfiguration/iseditable](https://developer.apple.com/documentation/swiftui/filedocumentconfiguration/iseditable)

# isEditable

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean that indicates whether you can edit the document.

> Conform your type to Document and use URLDocumentConfiguration instead.

## Declaration

```swift
var isEditable: Bool
```

<a id="discussion"></a>

## Discussion

This value is `false` if the document is in viewing mode, or if the file is not writable.

## See Also

### Getting document properties

- [fileURL](fileurl.md): Deprecated. The URL of the open file document.
