> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingsupervisedtabularestimator/preprocessed(from:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingsupervisedtabularestimator/preprocessed(from:eventhandler:))

# preprocessed(from:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Preprocesses a data frame of examples.

## Declaration

```swift
func preprocessed(from input: DataFrame, eventHandler: EventHandler? = nil) async throws -> DataFrame
```

## Parameters

- `input`: A data frame of examples.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The preprocessed examples.

## See Also

### Preprocesing and fitting

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a data frame
- [fitted(toPreprocessed:validateOn:eventHandler:)](fitted%28topreprocessed_validateon_eventhandler_%29.md): Fits a transformer to a data frame of preprocessed examples while validating.
- [PreprocessingSupervisedTabularEstimator.Annotation](annotation.md): The annotation type.
- [PreprocessingSupervisedTabularEstimator.Input](input.md): The input type.
- [PreprocessingSupervisedTabularEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingSupervisedTabularEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
