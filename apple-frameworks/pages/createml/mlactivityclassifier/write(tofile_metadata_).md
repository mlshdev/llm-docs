> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/write(tofile:metadata:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/write(tofile:metadata:))

# write(toFile:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Exports the activity classifier as a Core ML model file.

## Declaration

```swift
func write(toFile path: String, metadata: MLModelMetadata? = MLModelMetadata()) throws
```

## Parameters

- `path`: A file-system path.
- `metadata`: The model’s description, author, version, and license information.

## See Also

### Saving an activity classifier

- [write(to:metadata:)](write%28to_metadata_%29.md): Exports the activity classifier as a Core ML model file.
