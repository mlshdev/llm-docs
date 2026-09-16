> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/filedocumentwriteconfiguration/existingfile

# existingFile

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.2) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+

The file wrapper containing the current document content. `nil` if the document is unsaved.

> Use the Document protocol and URLDocumentConfiguration.

## Declaration

```swift
let existingFile: FileWrapper?
```

## See Also

### Writing the content

- [contentType](contenttype.md): Deprecated. The expected uniform type of the file contents.
