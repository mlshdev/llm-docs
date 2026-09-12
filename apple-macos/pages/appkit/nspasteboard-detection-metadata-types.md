> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard-detection-metadata-types](https://developer.apple.com/documentation/appkit/nspasteboard-detection-metadata-types)

# Pasteboard detection metadata types (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Common types of metadata that the data detection system matches for a pasteboard.

## Topics

### Accessing metadata

- [metadataTypes](nspasteboard/detectedmetadata/metadatatypes.md): A set of key paths that represent metadata types that the data detection system identifies.
- [contentType](nspasteboard/detectedmetadata/contenttype.md): The content type of a file that the data detection system identifies when the pasteboard contains a file URL.

## See Also

### Detecting patterns and metadata in pasteboard items

- [detectedPatterns(for:)](nspasteboard/detectedpatterns%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectedValues(for:)](nspasteboard/detectedvalues%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [NSPasteboard.DetectedValues](nspasteboard/detectedvalues.md): A type that contains common types of data that the data detection system matches for a pasteboard.
- [Pasteboard detection patterns](nspasteboard-detection-patterns.md): Common types of data that the data detection system matches for a pasteboard.
- [detectedMetadata(for:)](nspasteboard/detectedmetadata%28for_%29.md): Determines available metadata from the specified metadata types for the first pasteboard item, without notifying the person using the app.
- [NSPasteboard.DetectedMetadata](nspasteboard/detectedmetadata.md): An object that contains common types of metadata that the data detection system matches for a pasteboard.

# Pasteboard detection metadata types (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Common types of metadata that the data detection system matches for a pasteboard.

## Topics

### Accessing metadata

- [NSPasteboardMetadataType](nspasteboardmetadatatype.md): A metadata type to detect on the pasteboard.
- [NSPasteboardMetadataTypeContentType](nspasteboardmetadatatypecontenttype.md): A metadata type that returns the content type if the pasteboard detects a reference to a file.

## See Also

### Detecting patterns and metadata in pasteboard items

- [detectPatternsForPatterns:completionHandler:](nspasteboard/detectpatternsforpatterns_completionhandler_.md): Determines whether the first pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectValuesForPatterns:completionHandler:](nspasteboard/detectvaluesforpatterns_completionhandler_.md): Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [Pasteboard detection patterns](nspasteboard-detection-patterns.md): Common types of data that the data detection system matches for a pasteboard.
- [detectMetadataForTypes:completionHandler:](nspasteboard/detectmetadatafortypes_completionhandler_.md): Determines available metadata from the specified metadata types for the first pasteboard item, without notifying the person using the app.
