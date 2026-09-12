> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/classificationmetrics/add(predicted:groundtruth:)](https://developer.apple.com/documentation/createmlcomponents/classificationmetrics/add(predicted:groundtruth:))

# add(predicted:groundTruth:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Updates the metrics with more predicted and ground truth labels.

## Declaration

```swift
mutating func add(predicted: some Sequence<Label>, groundTruth: some Sequence<Label>)
```

## Parameters

- `predicted`: The predicted labels.
- `groundTruth`: The true labels.

<a id="discussion"></a>

## Discussion

The predicted and ground truth sequences are matched element by element in the order they are provided. Both sequences must have the same number of elements.

## See Also

### Updating the metrics

- [add(\_:)](add%28__%29.md): Updates the metrics with more predicted and ground truth label pairs.
