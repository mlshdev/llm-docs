> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/estimator/adaptedastemporal()](https://developer.apple.com/documentation/createmlcomponents/estimator/adaptedastemporal())

# adaptedAsTemporal()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Exposes this estimator as a temporal estimator.

## Declaration

```swift
func adaptedAsTemporal() -> EstimatorToTemporalAdaptor<Self>
```

## See Also

### Fitting and adapting

- [adaptedAsSupervised(annotationType:)](adaptedassupervised%28annotationtype_%29.md): Exposes this estimator as a supervised estimator.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a transformer to a sequence of examples.
- [fitted(to:)](fitted%28to_%29.md)
