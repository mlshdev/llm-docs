> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/preprocessingtabularestimator/fitted(topreprocessed:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/preprocessingtabularestimator/fitted(topreprocessed:eventhandler:))

# fitted(toPreprocessed:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a transformer to a data frame of preprocessed features.

## Declaration

```swift
func fitted(toPreprocessed preprocessed: DataFrame, eventHandler: EventHandler? = nil) async throws -> PreprocessingTabularEstimator<Preprocessor, Estimator>.Transformer
```

## Parameters

- `preprocessed`: A data frame of preprocessed features.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Preprocesing and fitting

- [preprocessed(from:eventHandler:)](preprocessed%28from_eventhandler_%29.md): Preprocesses a data frame of examples.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a composed transformer to a data frame of examples.
- [PreprocessingTabularEstimator.Input](input.md): The input type.
- [PreprocessingTabularEstimator.Intermediate](intermediate.md): The intermediate type.
- [PreprocessingTabularEstimator.Output](output.md): The output type.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
