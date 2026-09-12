> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/lossreduction/weightedmean](https://developer.apple.com/documentation/accelerate/bnns/lossreduction/weightedmean)

# BNNS.LossReduction.weightedMean

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Sums the loss of all samples in the batch and divides by the sum of all weights.

> Use the BNNSGraph API instead.

## Declaration

```swift
case weightedMean
```

## See Also

### Loss Reduction Functions

- [BNNS.LossReduction.none](none.md): Deprecated. Returns the loss without any reduction.
- [BNNS.LossReduction.reductionMean](reductionmean.md): Deprecated. Sums the loss of all samples in the batch and divides by the number of samples.
- [BNNS.LossReduction.sum](sum.md): Deprecated. Sums the loss of all samples in the batch.
- [BNNS.LossReduction.zeroWeightMean](zeroweightmean.md): Deprecated. Sums the loss of all samples in the batch and divides by the number of non-zero weights.
