> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnslossreductionfunction/rawvalue

# rawValue

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
var rawValue: UInt32
```

## See Also

### Reduction Functions

- [init(\_:)](init%28__%29.md)
- [init(rawValue:)](init%28rawvalue_%29.md)
- [BNNSLossReductionMean](../bnnslossreductionmean.md): Sums the loss of all samples in the batch and divides by the number of samples.
- [BNNSLossReductionNonZeroWeightMean](../bnnslossreductionnonzeroweightmean.md): Sums the loss of all samples in the batch and divides by the number of non-zero weights.
- [BNNSLossReductionSum](../bnnslossreductionsum.md): Sums the loss of all samples in the batch.
- [BNNSLossReductionWeightedMean](../bnnslossreductionweightedmean.md): Sums the loss of all samples in the batch and divides by the sum of all weights.
- [BNNSLossReductionNone](../bnnslossreductionnone.md): Returns the loss without any reduction.
