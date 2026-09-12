> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/write(tofile:metadata:)](https://developer.apple.com/documentation/createml/mlimageclassifier/write(tofile:metadata:))

# write(toFile:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Exports the image classifier as a Core ML model file to the file path.

## Declaration

```swift
func write(toFile path: String, metadata: MLModelMetadata? = nil) throws
```

## Parameters

- `path`: The location path in the file system where you want to save the model.
- `metadata`: Descriptive information to include with the exported model file.

## See Also

### Saving an image classifier

- [write(to:metadata:)](write%28to_metadata_%29.md): Exports the image classifier as a Core ML model file to a location in the file system.
