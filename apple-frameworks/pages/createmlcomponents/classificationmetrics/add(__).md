> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/classificationmetrics/add(_:)](https://developer.apple.com/documentation/createmlcomponents/classificationmetrics/add(_:))

# add(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Updates the metrics with more predicted and ground truth label pairs.

## Declaration

```swift
mutating func add(_ pairs: some Sequence<(predicted: Label, label: Label)>)
```

## Parameters

- `pairs`: A collection of predicted and true label pairs.

## See Also

### Updating the metrics

- [add(predicted:groundTruth:)](add%28predicted_groundtruth_%29.md): Updates the metrics with more predicted and ground truth labels.
