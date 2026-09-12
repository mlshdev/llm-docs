> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/write(to:metadata:)](https://developer.apple.com/documentation/createml/mlrecommender/write(to:metadata:))

# write(to:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Exports the recommender as a Core ML model file at the given URL.

## Declaration

```swift
func write(to fileURL: URL, metadata: MLModelMetadata? = nil) throws
```

## Parameters

- `fileURL`: The location in the file system to which the file should be written.
- `metadata`: Descriptive information to include with the exported model file.

## See Also

### Saving a recommender

- [write(toFile:metadata:)](write%28tofile_metadata_%29.md): Exports the recommender as a Core ML model file at the given file path.
