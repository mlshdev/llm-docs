> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mltextclassifier/write(tofile:metadata:)

# write(toFile:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Exports the text classifier as a Core ML model file at the specified file path.

## Declaration

```swift
func write(toFile path: String, metadata: MLModelMetadata? = nil) throws
```

## Parameters

- `path`: A file system path where the model file should be written.
- `metadata`: Descriptive information to include with the exported model file.

## See Also

### Saving a text classifier

- [write(to:metadata:)](write%28to_metadata_%29.md): Exports the text classifier as a Core ML model file at the specified URL.
