> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltrainingsession/reuseextractedfeatures(from:)](https://developer.apple.com/documentation/createml/mltrainingsession/reuseextractedfeatures(from:))

# reuseExtractedFeatures(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Uses the features another session has already extracted from its dataset.

## Declaration

```swift
final func reuseExtractedFeatures(from session: MLTrainingSession<Task>) throws
```

## Parameters

- `session`: Another training session that’s already completed its feature extraction phase.

<a id="discussion"></a>

## Discussion

You can only use this method for a new training session that doesn’t already have its own checkpoints.

> **Note**

> This method throws an error if the training session has one or more checkpoints.
