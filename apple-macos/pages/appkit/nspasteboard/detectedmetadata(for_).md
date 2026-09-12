> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/detectedmetadata(for:)](https://developer.apple.com/documentation/appkit/nspasteboard/detectedmetadata(for:))

# detectedMetadata(for:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Determines available metadata from the specified metadata types for the first pasteboard item, without notifying the person using the app.

## Declaration

```swift
func detectedMetadata(for keyPaths: Set<PartialKeyPath<NSPasteboard.DetectedMetadata>>) async throws -> NSPasteboard.DetectedMetadata
```

## Parameters

- `keyPaths`: The metadata types to detect on the pasteboard.

<a id="return-value"></a>

## Return Value

An [NSPasteboard.DetectedMetadata](detectedmetadata.md) instance containing the metadata for the metadata types found on the pasteboard.

<a id="discussion"></a>

## Discussion

This method only gives access to limited types of metadata and doesn’t allow the app to access the contents. As a result, the system doesn’t notify the person using the app about reading the contents of the pasteboard.

For details about the metadata returned for each type, see [NSPasteboard.DetectedMetadata](detectedmetadata.md).

The following example shows how to use this method to find the content type of a file reference in the first item on the pasteboard:

```swift
do {
    let metadataResults = try await NSPasteboard.general.detectedMetadata(for:     /// [\.contentType])
    if let contentType = metadataResults.contentType {
        print("Content type is: \(contentType.identifier).")
    } else {
        print("Couldn't get content type.")
    }
} catch {
    print("Error: \(error).")
}
```

## See Also

### Detecting patterns and metadata in pasteboard items

- [detectedPatterns(for:)](detectedpatterns%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectedValues(for:)](detectedvalues%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [NSPasteboard.DetectedValues](detectedvalues.md): A type that contains common types of data that the data detection system matches for a pasteboard.
- [Pasteboard detection patterns](../nspasteboard-detection-patterns.md): Common types of data that the data detection system matches for a pasteboard.
- [NSPasteboard.DetectedMetadata](detectedmetadata.md): An object that contains common types of metadata that the data detection system matches for a pasteboard.
- [Pasteboard detection metadata types](../nspasteboard-detection-metadata-types.md): Common types of metadata that the data detection system matches for a pasteboard.
