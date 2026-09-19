> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/updatableestimator/adaptedastemporal()

# adaptedAsTemporal()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Exposes this estimator as a temporal estimator.

## Declaration

```swift
func adaptedAsTemporal() -> UpdatableEstimatorToTemporalAdaptor<Self>
```

## See Also

### Adapting

- [adaptedAsSupervised(annotationType:)](adaptedassupervised%28annotationtype_%29.md): Exposes this estimator as a supervised estimator.
