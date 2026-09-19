> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatialpreview/documentpreviewsession/updatecontents(data:)

# updateContents(data:)

**Framework:** Spatial Preview  
**Kind:** Instance Method  
**Availability:** macOS 27.0+ · visionOS

Update the contents of the document with the provided data.

## Declaration

```swift
final nonisolated(nonsending) func updateContents(data: Data) async throws
```

## Parameters

- `data`: The new document contents.
