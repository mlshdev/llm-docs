> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/write(to:metadata:)](https://developer.apple.com/documentation/createml/mltextclassifier/write(to:metadata:))

# write(to:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Exports the text classifier as a Core ML model file at the specified URL.

## Declaration

```swift
func write(to fileURL: URL, metadata: MLModelMetadata? = nil) throws
```

## Parameters

- `fileURL`: The location in the file system to which the file should be written.
- `metadata`: Descriptive information to include with the exported model file.

## Mentioned In

- [Creating a text classifier model](../creating-a-text-classifier-model.md)
- [Creating a word tagger model](../creating-a-word-tagger-model.md)

## See Also

### Saving a text classifier

- [write(toFile:metadata:)](write%28tofile_metadata_%29.md): Exports the text classifier as a Core ML model file at the specified file path.
