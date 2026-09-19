> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlwordtagger/write(to:metadata:)

# write(to:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Exports the word tagger as a Core ML model file at the specified URL.

## Declaration

```swift
func write(to fileURL: URL, metadata: MLModelMetadata? = nil) throws
```

## Parameters

- `fileURL`: The location in the file system to which the file should be written.
- `metadata`: Descriptive information to include with the exported model file.

## See Also

### Saving a word tagger

- [write(toFile:metadata:)](write%28tofile_metadata_%29.md): Exports the word tagger as a Core ML model file at the specified file path.
