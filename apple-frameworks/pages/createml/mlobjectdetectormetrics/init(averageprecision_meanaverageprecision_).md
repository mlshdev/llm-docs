> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlobjectdetectormetrics/init(averageprecision:meanaverageprecision:)

# init(averagePrecision:meanAveragePrecision:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates metrics for an object detector given an average precision and a mean average precision.

## Declaration

```swift
init(averagePrecision: (variedIoU: [String : Double], IoU50: [String : Double]), meanAveragePrecision: (variedIoU: Double, IoU50: Double))
```

## Parameters

- `averagePrecision`: The `averagePrecision` for this `MLObjectDetectorMetrics`.
- `meanAveragePrecision`: The `meanAveragePrecision` for this `MLObjectDetectorMetrics`.

<a id="discussion"></a>

## Discussion

You do not use this initializer. Create ML uses this initializer to generate metrics for you when train an object detector or when you use an evaluation method.
