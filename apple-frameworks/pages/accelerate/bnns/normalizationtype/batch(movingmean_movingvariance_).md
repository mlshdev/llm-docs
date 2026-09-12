> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/normalizationtype/batch(movingmean:movingvariance:)](https://developer.apple.com/documentation/accelerate/bnns/normalizationtype/batch(movingmean:movingvariance:))

# BNNS.NormalizationType.batch(movingMean:movingVariance:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Batch normalization with optional moving averages.

> Use the BNNSGraph API instead.

## Declaration

```swift
case batch(movingMean: BNNSNDArrayDescriptor?, movingVariance: BNNSNDArrayDescriptor?)
```

## See Also

### Normalization Types

- [BNNS.NormalizationType.group(groupCount:)](group%28groupcount_%29.md): Deprecated. Group normalization.
- [BNNS.NormalizationType.instance(movingMean:movingVariance:)](instance%28movingmean_movingvariance_%29.md): Deprecated. Instance normalization with optional moving averages.
- [BNNS.NormalizationType.layer(normalizationAxis:)](layer%28normalizationaxis_%29.md): Deprecated. Layer normalization.
