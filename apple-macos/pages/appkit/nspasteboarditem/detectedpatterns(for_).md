> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem/detectedpatterns(for:)](https://developer.apple.com/documentation/appkit/nspasteboarditem/detectedpatterns(for:))

# detectedPatterns(for:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Determines whether the pasteboard item matches the specified patterns, without notifying the person using the app.

## Declaration

```swift
func detectedPatterns(for keyPaths: Set<PartialKeyPath<NSPasteboardItem.DetectedValues>>) async throws -> Set<PartialKeyPath<NSPasteboardItem.DetectedValues>>
```

## Parameters

- `keyPaths`: The patterns to detect on the pasteboard item.

<a id="return-value"></a>

## Return Value

A set with the patterns found on the pasteboard item.

<a id="discussion"></a>

## Discussion

This method only gives an indication of whether a pasteboard item matches a particular pattern and doesn’t allow the app to access the contents. As a result, the system doesn’t notify the person using the app about reading the contents of the pasteboard.

The following example shows how to use this method to find calendar events in each item on the pasteboard:

```swift
guard let pasteboardItems = NSPasteboard.general.pasteboardItems else { return }
for (index, item) in pasteboardItems.enumerated() {
    do {
        let patternResults = try await item.detectedPatterns(for: [\.calendarEvents])
        if patternResults.contains(\.calendarEvents) {
            print("Item \(index) - Calendar event(s) detected.")
        } else {
            print("Item \(index) - Didn't detect any calendar events.")
        }
    } catch {
        print("Item \(index) - Error: \(error).")
    }
}
```

## See Also

### Detecting patterns and metadata in pasteboard items

- [detectedValues(for:)](detectedvalues%28for_%29.md): Determines whether this pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [NSPasteboardItem.DetectedValues](detectedvalues.md)
- [detectedMetadata(for:)](detectedmetadata%28for_%29.md): Determines available metadata from the specified metadata types for this pasteboard item, without notifying the person using the app.
- [NSPasteboardItem.DetectedMetadata](detectedmetadata.md)
