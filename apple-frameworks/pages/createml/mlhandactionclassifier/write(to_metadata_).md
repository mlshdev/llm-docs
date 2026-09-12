> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/write(to:metadata:)](https://developer.apple.com/documentation/createml/mlhandactionclassifier/write(to:metadata:))

# write(to:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Exports the hand action classifier as a CoreML model file.

## Declaration

```swift
func write(to fileURL: URL, metadata: MLModelMetadata? = nil) throws
```

## Parameters

- `fileURL`: A file-system URL.
- `metadata`: The model’s description, author, version, and license information.

## See Also

### Saving a hand action classifier

- [write(toFile:metadata:)](write%28tofile_metadata_%29.md): Exports the hand action classifier as a Core ML model file.
