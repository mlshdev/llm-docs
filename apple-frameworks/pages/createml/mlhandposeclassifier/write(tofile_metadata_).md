> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlhandposeclassifier/write(tofile:metadata:)

# write(toFile:metadata:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Exports the hand pose classifier as a Core ML model file.

## Declaration

```swift
func write(toFile path: String, metadata: MLModelMetadata? = nil) throws
```

## Parameters

- `path`: A file-system path.
- `metadata`: The model’s description, author, version, and license information.

## See Also

### Saving a hand pose classifier

- [write(to:metadata:)](write%28to_metadata_%29.md): Exports the hand pose classifier as a CoreML model file.
