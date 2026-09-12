> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/predictions(frombatch:)](https://developer.apple.com/documentation/coreml/mlmodel/predictions(frombatch:))

# predictions(fromBatch:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Generates predictions for each input feature provider within the batch provider.

## Declaration

```swift
func predictions(fromBatch inputBatch: any MLBatchProvider) throws -> any MLBatchProvider
```

## Parameters

- `inputBatch`: A batch provider that contains multiple input feature providers. The model makes a prediction for each feature provider.

<a id="return-value"></a>

## Return Value

A batch provider that contains an output feature provider for each prediction.

<a id="Discussion"></a>

## Discussion

Use this method to make more than one prediction at one time.

## See Also

### Making predictions

- [prediction(from:)](prediction%28from_%29.md)
- [prediction(from:options:)](prediction%28from_options_%29.md)
- [predictions(from:options:)](predictions%28from_options_%29.md): Generates a prediction for each input feature provider within the batch provider using the prediction options.
- [prediction(from:using:)](prediction%28from_using_%29.md)
- [prediction(from:using:options:)](prediction%28from_using_options_%29.md)
- [MLPredictionOptions](../mlpredictionoptions.md): The options available when making a prediction.
- [Background Inference](../../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.inference.md): An entitlement that lets a background task run inference on the Neural Engine.

# predictionsFromBatch:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Generates predictions for each input feature provider within the batch provider.

## Declaration

```objectivec
- (id<MLBatchProvider>) predictionsFromBatch:(id<MLBatchProvider>) inputBatch error:(NSError **) error;
```

## Parameters

- `inputBatch`: A batch provider that contains multiple input feature providers. The model makes a prediction for each feature provider.
- `error`: On return in Objective-C, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

A batch provider that contains an output feature provider for each prediction. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to make more than one prediction at one time.
