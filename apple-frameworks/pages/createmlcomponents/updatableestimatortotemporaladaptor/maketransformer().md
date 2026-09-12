> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatableestimatortotemporaladaptor/maketransformer()](https://developer.apple.com/documentation/createmlcomponents/updatableestimatortotemporaladaptor/maketransformer())

# makeTransformer()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a default-initialized transformer suitable for incremental fitting.

## Declaration

```swift
func makeTransformer() -> UpdatableEstimatorToTemporalAdaptor<Base>.Transformer
```

## See Also

### Fitting and updating

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of examples.
- [UpdatableEstimatorToTemporalAdaptor.Input](input.md): Deprecated. The input type.
- [UpdatableEstimatorToTemporalAdaptor.Output](output.md): Deprecated. The output type.
- [UpdatableEstimatorToTemporalAdaptor.Transformer](transformer.md): Deprecated. The transformer type created by this estimator.
