> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetectormetrics/averageprecision](https://developer.apple.com/documentation/createml/mlobjectdetectormetrics/averageprecision)

# averagePrecision

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

Two dictionaries of average precisions at different thresholds.

## Declaration

```swift
var averagePrecision: (variedIoU: [String : Double], IoU50: [String : Double]) { get }
```

## Parameters

- `variedIoU`: The average precision values of all classes at various thresholds, varying from 50% to 95%, for the intersection-over-union metric. The keys of the dictionary are each object’s label.
- `IoU50`: The average precision values of all classes at a 50% threshold of intersection-over-union metric. The keys of the dictionary are each object’s label.

## See Also

### Assessing the model

- [meanAveragePrecision](meanaverageprecision.md): Two mean-average precisions at different thresholds.
