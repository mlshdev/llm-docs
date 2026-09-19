> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatialpreview/documentpreviewsession/updatecontents(url:)

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
