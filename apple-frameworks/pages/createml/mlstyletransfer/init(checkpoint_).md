> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlstyletransfer/init(checkpoint:)

# init(checkpoint:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Creates a style transfer model from a training session checkpoint.

## Declaration

```swift
init(checkpoint: MLCheckpoint) throws
```

## Parameters

- `checkpoint`: A checkpoint from a style transfer training session.

<a id="discussion"></a>

## Discussion

You can only use a checkpoint from a style transfer model’s training session if its [phase](../mlcheckpoint/phase.md) property is [MLPhase.training](../mlphase/training.md).
