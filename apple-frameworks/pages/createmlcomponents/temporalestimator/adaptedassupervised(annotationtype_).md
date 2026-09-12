> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporalestimator/adaptedassupervised(annotationtype:)](https://developer.apple.com/documentation/createmlcomponents/temporalestimator/adaptedassupervised(annotationtype:))

# adaptedAsSupervised(annotationType:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Exposes this temporal estimator as a supervised temporal estimator.

## Declaration

```swift
func adaptedAsSupervised<Annotation>(annotationType: Annotation.Type = Annotation.self) -> TemporalEstimatorToSupervisedAdaptor<Self, Annotation> where Annotation : Equatable, Annotation : Sendable
```

## See Also

### Adapting and fitting

- [fitted(to:)](fitted%28to_%29.md): Deprecated.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [Transformer](transformer.md): Deprecated. The transformer type created by this estimator.
