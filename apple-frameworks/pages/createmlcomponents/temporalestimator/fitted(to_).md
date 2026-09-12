> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporalestimator/fitted(to:)](https://developer.apple.com/documentation/createmlcomponents/temporalestimator/fitted(to:))

# fitted(to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

## Declaration

```swift
func fitted<InputSequence>(to input: InputSequence) async throws -> Self.Transformer where InputSequence : Sequence, InputSequence.Element : TemporalSequence, Self.Transformer.Input == InputSequence.Element.Feature
```

## See Also

### Adapting and fitting

- [adaptedAsSupervised(annotationType:)](adaptedassupervised%28annotationtype_%29.md): Deprecated. Exposes this temporal estimator as a supervised temporal estimator.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [Transformer](transformer.md): Deprecated. The transformer type created by this estimator.
