> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/write(tofile:metadata:)](https://developer.apple.com/documentation/createml/mlwordtagger/write(tofile:metadata:))

# write(toFile:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Exports the word tagger as a Core ML model file at the specified file path.

## Declaration

```swift
func write(toFile path: String, metadata: MLModelMetadata? = nil) throws
```

## Parameters

- `path`: A file system path where the model file should be written.
- `metadata`: Descriptive information to include with the exported model file.

## See Also

### Saving a word tagger

- [write(to:metadata:)](write%28to_metadata_%29.md): Exports the word tagger as a Core ML model file at the specified URL.
