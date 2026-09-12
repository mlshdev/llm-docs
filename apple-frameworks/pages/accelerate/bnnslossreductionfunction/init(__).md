> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslossreductionfunction/init(_:)](https://developer.apple.com/documentation/accelerate/bnnslossreductionfunction/init(_:))

# init(\_:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
init(_ rawValue: UInt32)
```

## See Also

### Reduction Functions

- [rawValue](rawvalue.md)
- [init(rawValue:)](init%28rawvalue_%29.md)
- [BNNSLossReductionMean](../bnnslossreductionmean.md): Sums the loss of all samples in the batch and divides by the number of samples.
- [BNNSLossReductionNonZeroWeightMean](../bnnslossreductionnonzeroweightmean.md): Sums the loss of all samples in the batch and divides by the number of non-zero weights.
- [BNNSLossReductionSum](../bnnslossreductionsum.md): Sums the loss of all samples in the batch.
- [BNNSLossReductionWeightedMean](../bnnslossreductionweightedmean.md): Sums the loss of all samples in the batch and divides by the sum of all weights.
- [BNNSLossReductionNone](../bnnslossreductionnone.md): Returns the loss without any reduction.
