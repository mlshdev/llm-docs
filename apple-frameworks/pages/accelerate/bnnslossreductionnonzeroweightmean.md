> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslossreductionnonzeroweightmean](https://developer.apple.com/documentation/accelerate/bnnslossreductionnonzeroweightmean)

# BNNSLossReductionNonZeroWeightMean (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sums the loss of all samples in the batch and divides by the number of non-zero weights.

## Declaration

```swift
var BNNSLossReductionNonZeroWeightMean: BNNSLossReductionFunction { get }
```

<a id="Discussion"></a>

## Discussion

[BNNSLossReductionNonZeroWeightMean](bnnslossreductionnonzeroweightmean.md) sums the loss of all samples in the batch and divides by number of non-zero weights.

Non-zero weighted mean reduction returns 0 in case all weights are zero.

## See Also

### Reduction Functions

- [rawValue](bnnslossreductionfunction/rawvalue.md)
- [init(\_:)](bnnslossreductionfunction/init%28__%29.md)
- [init(rawValue:)](bnnslossreductionfunction/init%28rawvalue_%29.md)
- [BNNSLossReductionMean](bnnslossreductionmean.md): Sums the loss of all samples in the batch and divides by the number of samples.
- [BNNSLossReductionSum](bnnslossreductionsum.md): Sums the loss of all samples in the batch.
- [BNNSLossReductionWeightedMean](bnnslossreductionweightedmean.md): Sums the loss of all samples in the batch and divides by the sum of all weights.
- [BNNSLossReductionNone](bnnslossreductionnone.md): Returns the loss without any reduction.

# BNNSLossReductionNonZeroWeightMean (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sums the loss of all samples in the batch and divides by the number of non-zero weights.

## Declaration

```objectivec
BNNSLossReductionNonZeroWeightMean
```

<a id="Discussion"></a>

## Discussion

[BNNSLossReductionNonZeroWeightMean](bnnslossreductionnonzeroweightmean.md) sums the loss of all samples in the batch and divides by number of non-zero weights.

Non-zero weighted mean reduction returns 0 in case all weights are zero.

## See Also

### Reduction Functions

- [BNNSLossReductionMean](bnnslossreductionmean.md): Sums the loss of all samples in the batch and divides by the number of samples.
- [BNNSLossReductionSum](bnnslossreductionsum.md): Sums the loss of all samples in the batch.
- [BNNSLossReductionWeightedMean](bnnslossreductionweightedmean.md): Sums the loss of all samples in the batch and divides by the sum of all weights.
- [BNNSLossReductionNone](bnnslossreductionnone.md): Returns the loss without any reduction.
