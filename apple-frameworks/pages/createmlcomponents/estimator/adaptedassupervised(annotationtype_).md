> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/estimator/adaptedassupervised(annotationtype:)](https://developer.apple.com/documentation/createmlcomponents/estimator/adaptedassupervised(annotationtype:))

# adaptedAsSupervised(annotationType:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Exposes this estimator as a supervised estimator.

## Declaration

```swift
func adaptedAsSupervised<Annotation>(annotationType: Annotation.Type = Annotation.self) -> EstimatorToSupervisedAdaptor<Self, Annotation> where Annotation : Equatable
```

## See Also

### Fitting and adapting

- [adaptedAsTemporal()](adaptedastemporal%28%29.md): Deprecated. Exposes this estimator as a temporal estimator.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a transformer to a sequence of examples.
- [fitted(to:)](fitted%28to_%29.md)
