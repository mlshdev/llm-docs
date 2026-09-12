> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslossreductionsum](https://developer.apple.com/documentation/accelerate/bnnslossreductionsum)

# BNNSLossReductionSum (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sums the loss of all samples in the batch.

## Declaration

```swift
var BNNSLossReductionSum: BNNSLossReductionFunction { get }
```

<a id="Discussion"></a>

## Discussion

[BNNSLossReductionSum](bnnslossreductionsum.md) sums the loss of all samples in the batch.

## See Also

### Reduction Functions

- [rawValue](bnnslossreductionfunction/rawvalue.md)
- [init(\_:)](bnnslossreductionfunction/init%28__%29.md)
- [init(rawValue:)](bnnslossreductionfunction/init%28rawvalue_%29.md)
- [BNNSLossReductionMean](bnnslossreductionmean.md): Sums the loss of all samples in the batch and divides by the number of samples.
- [BNNSLossReductionNonZeroWeightMean](bnnslossreductionnonzeroweightmean.md): Sums the loss of all samples in the batch and divides by the number of non-zero weights.
- [BNNSLossReductionWeightedMean](bnnslossreductionweightedmean.md): Sums the loss of all samples in the batch and divides by the sum of all weights.
- [BNNSLossReductionNone](bnnslossreductionnone.md): Returns the loss without any reduction.

# BNNSLossReductionSum (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sums the loss of all samples in the batch.

## Declaration

```objectivec
BNNSLossReductionSum
```

<a id="Discussion"></a>

## Discussion

[BNNSLossReductionSum](bnnslossreductionsum.md) sums the loss of all samples in the batch.

## See Also

### Reduction Functions

- [BNNSLossReductionMean](bnnslossreductionmean.md): Sums the loss of all samples in the batch and divides by the number of samples.
- [BNNSLossReductionNonZeroWeightMean](bnnslossreductionnonzeroweightmean.md): Sums the loss of all samples in the batch and divides by the number of non-zero weights.
- [BNNSLossReductionWeightedMean](bnnslossreductionweightedmean.md): Sums the loss of all samples in the batch and divides by the sum of all weights.
- [BNNSLossReductionNone](bnnslossreductionnone.md): Returns the loss without any reduction.
