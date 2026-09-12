> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcustommodel/prediction(from:options:)](https://developer.apple.com/documentation/coreml/mlcustommodel/prediction(from:options:))

# prediction(from:options:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Predicts output values from the given input features.

## Declaration

```swift
func prediction(from input: any MLFeatureProvider, options: MLPredictionOptions) throws -> any MLFeatureProvider
```

## Parameters

- `input`: The feature values the models needs to make its prediction.
- `options`: The options to be applied to the prediction.

<a id="return-value"></a>

## Return Value

A feature provider that represents the model’s prediction.

## See Also

### Making predictions

- [predictions(from:options:)](predictions%28from_options_%29.md): Predicts output values from the given batch of input features.

# predictionFromFeatures:options:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Predicts output values from the given input features.

## Declaration

```objectivec
- (id<MLFeatureProvider>) predictionFromFeatures:(id<MLFeatureProvider>) input options:(MLPredictionOptions *) options error:(NSError **) error;
```

## Parameters

- `input`: The feature values the models needs to make its prediction.
- `options`: The options to be applied to the prediction.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A feature provider that represents the model’s prediction. On failure, this method returns `nil`.

## See Also

### Making predictions

- [predictionsFromBatch:options:error:](predictions%28from_options_%29.md): Predicts output values from the given batch of input features.
