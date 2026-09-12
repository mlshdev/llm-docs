> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/normalizationtype/instance(movingmean:movingvariance:)](https://developer.apple.com/documentation/accelerate/bnns/normalizationtype/instance(movingmean:movingvariance:))

# BNNS.NormalizationType.instance(movingMean:movingVariance:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Instance normalization with optional moving averages.

> Use the BNNSGraph API instead.

## Declaration

```swift
case instance(movingMean: BNNSNDArrayDescriptor?, movingVariance: BNNSNDArrayDescriptor?)
```

## See Also

### Normalization Types

- [BNNS.NormalizationType.batch(movingMean:movingVariance:)](batch%28movingmean_movingvariance_%29.md): Deprecated. Batch normalization with optional moving averages.
- [BNNS.NormalizationType.group(groupCount:)](group%28groupcount_%29.md): Deprecated. Group normalization.
- [BNNS.NormalizationType.layer(normalizationAxis:)](layer%28normalizationaxis_%29.md): Deprecated. Layer normalization.
