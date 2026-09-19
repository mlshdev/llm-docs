> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/updatableestimator/adaptedassupervised(annotationtype:)

# adaptedAsSupervised(annotationType:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Exposes this estimator as a supervised estimator.

## Declaration

```swift
func adaptedAsSupervised<Annotation>(annotationType: Annotation.Type = Annotation.self) -> UpdatableEstimatorToSupervisedAdaptor<Self, Annotation> where Annotation : Equatable
```

## See Also

### Adapting

- [adaptedAsTemporal()](adaptedastemporal%28%29.md): Deprecated. Exposes this estimator as a temporal estimator.
