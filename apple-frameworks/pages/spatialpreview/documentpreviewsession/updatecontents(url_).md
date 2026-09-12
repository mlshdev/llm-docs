> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/documentpreviewsession/updatecontents(url:)](https://developer.apple.com/documentation/spatialpreview/documentpreviewsession/updatecontents(url:))

# updateContents(url:)

**Framework:** Spatial Preview  
**Kind:** Instance Method  
**Availability:** macOS 27.0+ · visionOS

Update the contents of the document with the provided URL.

## Declaration

```swift
final nonisolated(nonsending) func updateContents(url: URL) async throws
```

## Parameters

- `url`: A file URL pointing to the new document contents.
