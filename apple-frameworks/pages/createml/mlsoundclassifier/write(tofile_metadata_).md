> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/write(tofile:metadata:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/write(tofile:metadata:))

# write(toFile:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Exports the sound classifier as a model file to a path in the file system.

## Declaration

```swift
func write(toFile path: String, metadata: MLModelMetadata? = nil) throws
```

## Parameters

- `path`: The location path in the file system where you want to save the model.
- `metadata`: Descriptive information to include with the exported model file.

<a id="discussion"></a>

## Discussion

Use this method to save the sound classifier as a Core ML model to a path.

This method:

- Uses the name `SoundClassifier.mlmodel` if the path’s location is a directory
- Appends `mlmodel` as the extension if you don’t provide one
- Replaces the tilde (~) with the path to your home directory
- Creates intermediate directories if none exist

## See Also

### Saving a sound classifier

- [write(to:metadata:)](write%28to_metadata_%29.md): Exports the sound classifier as a model file to a location in the file system.
