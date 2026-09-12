> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetectormetrics/meanaverageprecision](https://developer.apple.com/documentation/createml/mlobjectdetectormetrics/meanaverageprecision)

# meanAveragePrecision

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

Two mean-average precisions at different thresholds.

## Declaration

```swift
var meanAveragePrecision: (variedIoU: Double, IoU50: Double) { get }
```

## Parameters

- `variedIoU`: The mean of the average precision values across all classes at various thresholds, varying from 50% to 95%, of the intersection-over-union metric.
- `IoU50`: The mean of the average precision values across all classes at a 50% threshold of intersection-over-union metric.

## See Also

### Assessing the model

- [averagePrecision](averageprecision.md): Two dictionaries of average precisions at different thresholds.
