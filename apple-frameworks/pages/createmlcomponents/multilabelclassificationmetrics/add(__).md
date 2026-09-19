> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/add(_:)

# add(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Updates the metrics with more pairs of classifications and ground truth labels.

## Declaration

```swift
mutating func add(_ pairs: some Sequence<(classification: ClassificationDistribution<Label>, labels: Set<Label>)>)
```

## Parameters

- `pairs`: A sequence of classifications and true label pairs.

## See Also

### Updating the metrics

- [add(classifications:groundTruth:)](add%28classifications_groundtruth_%29.md): Conforms when `Label` conforms to `Hashable`. Updates the metrics with more classifications and ground truth labels.
