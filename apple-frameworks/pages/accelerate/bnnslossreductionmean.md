> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslossreductionmean](https://developer.apple.com/documentation/accelerate/bnnslossreductionmean)

# BNNSLossReductionMean (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sums the loss of all samples in the batch and divides by the number of samples.

## Declaration

```swift
var BNNSLossReductionMean: BNNSLossReductionFunction { get }
```

<a id="Discussion"></a>

## Discussion

[BNNSLossReductionMean](bnnslossreductionmean.md) sums the loss of all samples in the batch and divides by number of samples.

## See Also

### Reduction Functions

- [rawValue](bnnslossreductionfunction/rawvalue.md)
- [init(\_:)](bnnslossreductionfunction/init%28__%29.md)
- [init(rawValue:)](bnnslossreductionfunction/init%28rawvalue_%29.md)
- [BNNSLossReductionNonZeroWeightMean](bnnslossreductionnonzeroweightmean.md): Sums the loss of all samples in the batch and divides by the number of non-zero weights.
- [BNNSLossReductionSum](bnnslossreductionsum.md): Sums the loss of all samples in the batch.
- [BNNSLossReductionWeightedMean](bnnslossreductionweightedmean.md): Sums the loss of all samples in the batch and divides by the sum of all weights.
- [BNNSLossReductionNone](bnnslossreductionnone.md): Returns the loss without any reduction.

# BNNSLossReductionMean (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sums the loss of all samples in the batch and divides by the number of samples.

## Declaration

```objectivec
BNNSLossReductionMean
```

<a id="Discussion"></a>

## Discussion

[BNNSLossReductionMean](bnnslossreductionmean.md) sums the loss of all samples in the batch and divides by number of samples.

## See Also

### Reduction Functions

- [BNNSLossReductionNonZeroWeightMean](bnnslossreductionnonzeroweightmean.md): Sums the loss of all samples in the batch and divides by the number of non-zero weights.
- [BNNSLossReductionSum](bnnslossreductionsum.md): Sums the loss of all samples in the batch.
- [BNNSLossReductionWeightedMean](bnnslossreductionweightedmean.md): Sums the loss of all samples in the batch and divides by the sum of all weights.
- [BNNSLossReductionNone](bnnslossreductionnone.md): Returns the loss without any reduction.
