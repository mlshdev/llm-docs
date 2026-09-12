> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/detectedmetadata](https://developer.apple.com/documentation/appkit/nspasteboard/detectedmetadata)

# NSPasteboard.DetectedMetadata

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 15.4+

An object that contains common types of metadata that the data detection system matches for a pasteboard.

## Declaration

```swift
struct DetectedMetadata
```

## Topics

### Accessing metadata

- [metadataTypes](detectedmetadata/metadatatypes.md): A set of key paths that represent metadata types that the data detection system identifies.
- [contentType](detectedmetadata/contenttype.md): The content type of a file that the data detection system identifies when the pasteboard contains a file URL.

## See Also

### Detecting patterns and metadata in pasteboard items

- [detectedPatterns(for:)](detectedpatterns%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectedValues(for:)](detectedvalues%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [NSPasteboard.DetectedValues](detectedvalues.md): A type that contains common types of data that the data detection system matches for a pasteboard.
- [Pasteboard detection patterns](../nspasteboard-detection-patterns.md): Common types of data that the data detection system matches for a pasteboard.
- [detectedMetadata(for:)](detectedmetadata%28for_%29.md): Determines available metadata from the specified metadata types for the first pasteboard item, without notifying the person using the app.
- [Pasteboard detection metadata types](../nspasteboard-detection-metadata-types.md): Common types of metadata that the data detection system matches for a pasteboard.
