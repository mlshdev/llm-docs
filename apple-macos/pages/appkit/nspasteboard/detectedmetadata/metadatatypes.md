> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/detectedmetadata/metadatatypes](https://developer.apple.com/documentation/appkit/nspasteboard/detectedmetadata/metadatatypes)

# metadataTypes

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A set of key paths that represent metadata types that the data detection system identifies.

## Declaration

```swift
var metadataTypes: Set<PartialKeyPath<NSPasteboard.DetectedMetadata>> { get }
```

## See Also

### Accessing metadata

- [contentType](contenttype.md): The content type of a file that the data detection system identifies when the pasteboard contains a file URL.
