> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingestimator/fitted(topreprocessed:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingestimator/fitted(topreprocessed:eventhandler:))

# fitted(toPreprocessed:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a transformer to a sequence of preprocessed features.

## Declaration

```swift
func fitted<S>(toPreprocessed preprocessed: S, eventHandler: EventHandler? = nil) async throws -> PreprocessingEstimator<Preprocessor, Estimator>.Transformer where S : Sequence, Preprocessor.Output == S.Element, S.Element == Estimator.Transformer.Input
```

## Parameters

- `preprocessed`: A sequence of preprocessed features.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Preprocesses a sequence of examples.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [PreprocessingEstimator.Input](input.md): The input type.
- [PreprocessingEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
