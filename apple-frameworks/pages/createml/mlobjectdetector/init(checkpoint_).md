> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlobjectdetector/init(checkpoint:)

# init(checkpoint:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates an object detector from a training session checkpoint.

## Declaration

```swift
init(checkpoint: MLCheckpoint) throws
```

## Parameters

- `checkpoint`: A checkpoint from an object-detector training session.
