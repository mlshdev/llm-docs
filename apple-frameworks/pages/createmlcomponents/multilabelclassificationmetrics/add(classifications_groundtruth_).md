> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multilabelclassificationmetrics/add(classifications:groundtruth:)](https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/add(classifications:groundtruth:))

# add(classifications:groundTruth:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Updates the metrics with more classifications and ground truth labels.

## Declaration

```swift
mutating func add(classifications: some Sequence<ClassificationDistribution<Label>>, groundTruth: some Sequence<Set<Label>>)
```

## Parameters

- `classifications`: A collection of classifications.
- `groundTruth`: A collection of true labels.

<a id="discussion"></a>

## Discussion

The classifications and ground truth sequences are matched element by element in the order they are provided. Both sequences must have the same number of elements.

## See Also

### Updating the metrics

- [add(\_:)](add%28__%29.md): Conforms when `Label` conforms to `Hashable`. Updates the metrics with more pairs of classifications and ground truth labels.
