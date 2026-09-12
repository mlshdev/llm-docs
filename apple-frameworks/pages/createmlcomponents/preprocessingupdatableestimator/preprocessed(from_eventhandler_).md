> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingupdatableestimator/preprocessed(from:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingupdatableestimator/preprocessed(from:eventhandler:))

# preprocessed(from:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Preprocesses a sequence of examples.

## Declaration

```swift
func preprocessed<S>(from input: S, eventHandler: EventHandler? = nil) async throws -> [Preprocessor.Output] where S : Sequence, Preprocessor.Input == S.Element
```

## Parameters

- `input`: A sequence of examples.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The preprocessed examples.

## See Also

### Preprocesing and fitting

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a composed transformer to a sequence of examples.
- [fitted(toPreprocessed:eventHandler:)](fitted%28topreprocessed_eventhandler_%29.md): Fits a transformer to a sequence of preprocessed features.
- [makeTransformer()](maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [update(\_:withPreprocessed:eventHandler:)](update%28__withpreprocessed_eventhandler_%29.md): Updates a transformer with a new sequence of preprocessed features.
- [PreprocessingUpdatableEstimator.Input](input.md): The input type.
- [PreprocessingUpdatableEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingUpdatableEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
