> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/detectedpatterns(for:)](https://developer.apple.com/documentation/appkit/nspasteboard/detectedpatterns(for:))

# detectedPatterns(for:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Determines whether the first pasteboard item matches the specified patterns, without notifying the person using the app.

## Declaration

```swift
func detectedPatterns(for keyPaths: Set<PartialKeyPath<NSPasteboard.DetectedValues>>) async throws -> Set<PartialKeyPath<NSPasteboard.DetectedValues>>
```

## Parameters

- `keyPaths`: The patterns to detect on the pasteboard.

<a id="return-value"></a>

## Return Value

A set with the patterns found on the pasteboard.

<a id="discussion"></a>

## Discussion

This method only gives an indication of whether the first pasteboard item matches a particular pattern, and doesn’t allow the app to access the item’s contents. As a result, the system doesn’t notify the person using the app about reading the contents of the pasteboard.

The following example shows how to use this method to find calendar events in the first pasteboard item:

```swift
do {
    let patternResults = try await NSPasteboard.general.detectedPatterns(for: [\.calendarEvents])
    if patternResults.contains(\.calendarEvents) {
        print("Calendar event(s) detected.")
    } else {
        print("Didn't detect any calendar events.")
    }
} catch {
    print("Error: \(error).")
}
```

## See Also

### Detecting patterns and metadata in pasteboard items

- [detectedValues(for:)](detectedvalues%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [NSPasteboard.DetectedValues](detectedvalues.md): A type that contains common types of data that the data detection system matches for a pasteboard.
- [Pasteboard detection patterns](../nspasteboard-detection-patterns.md): Common types of data that the data detection system matches for a pasteboard.
- [detectedMetadata(for:)](detectedmetadata%28for_%29.md): Determines available metadata from the specified metadata types for the first pasteboard item, without notifying the person using the app.
- [NSPasteboard.DetectedMetadata](detectedmetadata.md): An object that contains common types of metadata that the data detection system matches for a pasteboard.
- [Pasteboard detection metadata types](../nspasteboard-detection-metadata-types.md): Common types of metadata that the data detection system matches for a pasteboard.
