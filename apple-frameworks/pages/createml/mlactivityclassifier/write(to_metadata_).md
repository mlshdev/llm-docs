> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlactivityclassifier/write(to:metadata:)

# write(to:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Exports the activity classifier as a Core ML model file.

## Declaration

```swift
func write(to fileURL: URL, metadata: MLModelMetadata? = MLModelMetadata()) throws
```

## Parameters

- `fileURL`: A file-system URL.
- `metadata`: The model’s description, author, version, and license information.

## See Also

### Saving an activity classifier

- [write(toFile:metadata:)](write%28tofile_metadata_%29.md): Exports the activity classifier as a Core ML model file.
