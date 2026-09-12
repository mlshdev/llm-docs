> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/supervisedestimator/adaptedastemporal()](https://developer.apple.com/documentation/createmlcomponents/supervisedestimator/adaptedastemporal())

# adaptedAsTemporal()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Exposes this supervised estimator as a temporal supervised estimator.

## Declaration

```swift
func adaptedAsTemporal() -> SupervisedEstimatorToTemporalAdaptor<Self>
```

## See Also

### Adapting and fitting

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a transformer to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a sequence of examples while validating with a validation sequence.
- [fitted(to:)](fitted%28to_%29.md)
- [fitted(to:validateOn:)](fitted%28to_validateon_%29.md)
