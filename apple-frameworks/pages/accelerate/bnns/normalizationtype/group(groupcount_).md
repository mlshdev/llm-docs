> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnns/normalizationtype/group(groupcount:)

# BNNS.NormalizationType.group(groupCount:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Group normalization.

> Use the BNNSGraph API instead.

## Declaration

```swift
case group(groupCount: Int)
```

## See Also

### Normalization Types

- [BNNS.NormalizationType.batch(movingMean:movingVariance:)](batch%28movingmean_movingvariance_%29.md): Deprecated. Batch normalization with optional moving averages.
- [BNNS.NormalizationType.instance(movingMean:movingVariance:)](instance%28movingmean_movingvariance_%29.md): Deprecated. Instance normalization with optional moving averages.
- [BNNS.NormalizationType.layer(normalizationAxis:)](layer%28normalizationaxis_%29.md): Deprecated. Layer normalization.
