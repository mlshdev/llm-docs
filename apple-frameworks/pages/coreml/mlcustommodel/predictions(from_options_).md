> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcustommodel/predictions(from:options:)](https://developer.apple.com/documentation/coreml/mlcustommodel/predictions(from:options:))

# predictions(from:options:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Predicts output values from the given batch of input features.

## Declaration

```swift
optional func predictions(from inputBatch: any MLBatchProvider, options: MLPredictionOptions) throws -> any MLBatchProvider
```

## Parameters

- `inputBatch`: The batch of feature values the model needs to make its predictions.
- `options`: The options to be applied to the predictions.

<a id="return-value"></a>

## Return Value

A batch provider that represents the model’s predictions for the batch of inputs.

## See Also

### Making predictions

- [prediction(from:options:)](prediction%28from_options_%29.md): Predicts output values from the given input features.

# predictionsFromBatch:options:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Predicts output values from the given batch of input features.

## Declaration

```objectivec
- (id<MLBatchProvider>) predictionsFromBatch:(id<MLBatchProvider>) inputBatch options:(MLPredictionOptions *) options error:(NSError **) error;
```

## Parameters

- `inputBatch`: The batch of feature values the model needs to make its predictions.
- `options`: The options to be applied to the predictions.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A batch provider that represents the model’s predictions for the batch of inputs. On failure, this method returns `nil`.

## See Also

### Making predictions

- [predictionFromFeatures:options:error:](prediction%28from_options_%29.md): Predicts output values from the given input features.
