> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/write(to:metadata:)](https://developer.apple.com/documentation/createml/mlactionclassifier/write(to:metadata:))

# write(to:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Exports the action classifier as a Core ML model file to a location in the file system.

## Declaration

```swift
func write(to fileURL: URL, metadata: MLModelMetadata? = nil) throws
```

## Parameters

- `fileURL`: The location URL in the file system where you want to save the model.
- `metadata`: Descriptive information to include with the exported model file.

## See Also

### Saving an action classifier

- [write(toFile:metadata:)](write%28tofile_metadata_%29.md): Exports the action classifier as a Core ML model file to the file path.
