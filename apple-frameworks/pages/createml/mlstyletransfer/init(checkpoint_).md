> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer/init(checkpoint:)](https://developer.apple.com/documentation/createml/mlstyletransfer/init(checkpoint:))

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
