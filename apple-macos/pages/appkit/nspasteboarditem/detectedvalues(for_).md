> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem/detectedvalues(for:)](https://developer.apple.com/documentation/appkit/nspasteboarditem/detectedvalues(for:))

# detectedValues(for:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Determines whether this pasteboard item matches the specified patterns, reading the contents if it finds a match.

## Declaration

```swift
func detectedValues(for keyPaths: Set<PartialKeyPath<NSPasteboardItem.DetectedValues>>) async throws -> NSPasteboardItem.DetectedValues
```

## Parameters

- `keyPaths`: The patterns to detect on the pasteboard.

<a id="return-value"></a>

## Return Value

An [NSPasteboard.DetectedValues](../nspasteboard/detectedvalues.md) instance containing the values for the patterns detected on the pasteboard item.

<a id="discussion"></a>

## Discussion

For details about the types returned for each pattern, see [NSPasteboard.DetectedValues](../nspasteboard/detectedvalues.md).

The following example shows how to use this method to find links in each item on the pasteboard:

```swift
guard let pasteboardItems = NSPasteboard.general.pasteboardItems else { return }
for (index, item) in pasteboardItems.enumerated() {
    do {
        let valueResults = try await item.detectedValues(for: [\.links])
        let links = valueResults.links
        guard !links.isEmpty else {
            print ("Item \(index) - No links found in item.")
            continue
        }
        for link in links {
            print("Item \(index) - Link retrieved: \(link.url).")
        }
    } catch {
        print("Item \(index) - Error: \(error).")
    }
}
```

> **Important**

> If the system finds a match when calling this method, the system informs the person using the app that the app is trying to read the contents of the pasteboard. If the person denies access to the pasteboard, the method throws an error.

## See Also

### Detecting patterns and metadata in pasteboard items

- [detectedPatterns(for:)](detectedpatterns%28for_%29.md): Determines whether the pasteboard item matches the specified patterns, without notifying the person using the app.
- [NSPasteboardItem.DetectedValues](detectedvalues.md)
- [detectedMetadata(for:)](detectedmetadata%28for_%29.md): Determines available metadata from the specified metadata types for this pasteboard item, without notifying the person using the app.
- [NSPasteboardItem.DetectedMetadata](detectedmetadata.md)
