> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/confidencethresholds

# confidenceThresholds

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

A dictionary of label and confidence thresholds.

## Declaration

```swift
var confidenceThresholds: [Label : Float] { get }
```

## See Also

### Getting the properties

- [exampleCount](examplecount.md): The number of examples used to compute the metrics.
- [labels](labels.md): The classifier labels.
- [meanAveragePrecision](meanaverageprecision.md): The mean average precision.
