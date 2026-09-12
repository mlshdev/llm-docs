> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/write(to:metadata:)](https://developer.apple.com/documentation/createml/mlobjectdetector/write(to:metadata:))

# write(to:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Exports the object detector as a Core ML model file.

## Declaration

```swift
func write(to fileURL: URL, metadata: MLModelMetadata? = MLModelMetadata()) throws
```

## Parameters

- `fileURL`: A file-system URL.
- `metadata`: The model’s description, author, version, and license information.

## See Also

### Saving an object detector

- [write(toFile:metadata:)](write%28tofile_metadata_%29.md): Exports the object detector as a Core ML model file.
