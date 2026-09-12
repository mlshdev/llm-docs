> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/lossreduction](https://developer.apple.com/documentation/accelerate/bnns/lossreduction)

# BNNS.LossReduction

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An enumeration that describes loss reduction functions.

> Use the BNNSGraph API instead.

## Declaration

```swift
enum LossReduction
```

## Topics

### Loss Reduction Functions

- [BNNS.LossReduction.none](lossreduction/none.md): Deprecated. Returns the loss without any reduction.
- [BNNS.LossReduction.reductionMean](lossreduction/reductionmean.md): Deprecated. Sums the loss of all samples in the batch and divides by the number of samples.
- [BNNS.LossReduction.sum](lossreduction/sum.md): Deprecated. Sums the loss of all samples in the batch.
- [BNNS.LossReduction.weightedMean](lossreduction/weightedmean.md): Deprecated. Sums the loss of all samples in the batch and divides by the sum of all weights.
- [BNNS.LossReduction.zeroWeightMean](lossreduction/zeroweightmean.md): Deprecated. Sums the loss of all samples in the batch and divides by the number of non-zero weights.

### Instance Properties

- [bnnsLossReductionFunction](lossreduction/bnnslossreductionfunction.md): Deprecated. The underlying loss reduction function structure.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
