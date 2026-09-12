> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatablesupervisedtemporalestimator/output](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatablesupervisedtemporalestimator/output)

# PreprocessingUpdatableSupervisedTemporalEstimator.Output

**Framework:** Create ML Components  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The output type.

## Declaration

```swift
typealias Output = Estimator.Transformer.Output
```

## See Also

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Deprecated. Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](fitted%28topreprocessed_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of preprocessed features.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of examples while validating with a validation sequence.
- [fitted(toPreprocessed:validateOn:eventHandler:)](fitted%28topreprocessed_validateon_eventhandler_%29.md): Deprecated. Fits a transformer to a sequence of preprocessed features while validating.
- [makeTransformer()](maketransformer%28%29.md): Deprecated. Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of examples.
- [update(\_:withPreprocessed:eventHandler:)](update%28__withpreprocessed_eventhandler_%29.md): Deprecated. Updates a transformer with a new sequence of preprocessed features.
- [PreprocessingUpdatableSupervisedTemporalEstimator.Annotation](annotation.md): Deprecated. The annotation type.
- [PreprocessingUpdatableSupervisedTemporalEstimator.Input](input.md): Deprecated. The input type.
- [PreprocessingUpdatableSupervisedTemporalEstimator.Intermediate](intermediate.md): Deprecated. The intermediate type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
