> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlobjectdetector/write(tofile:metadata:)

# write(toFile:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Exports the object detector as a Core ML model file.

## Declaration

```swift
func write(toFile path: String, metadata: MLModelMetadata? = MLModelMetadata()) throws
```

## Parameters

- `path`: A file-system path.
- `metadata`: The model’s description, author, version, and license information.

## See Also

### Saving an object detector

- [write(to:metadata:)](write%28to_metadata_%29.md): Exports the object detector as a Core ML model file.
