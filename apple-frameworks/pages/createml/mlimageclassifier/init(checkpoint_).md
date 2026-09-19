> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlimageclassifier/init(checkpoint:)

# init(checkpoint:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Creates an image classifier from a training session checkpoint.

## Declaration

```swift
init(checkpoint: MLCheckpoint) throws
```

## Parameters

- `checkpoint`: A checkpoint from an image classifier training session.

<a id="discussion"></a>

## Discussion

You can only use a checkpoint from an image classifier’s training session if its [phase](../mlcheckpoint/phase.md) property is [MLPhase.training](../mlphase/training.md).
