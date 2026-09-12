> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/prediction(from:using:options:)](https://developer.apple.com/documentation/coreml/mlmodel/prediction(from:using:options:))

# prediction(from:using:options:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func prediction(from inputFeatures: any MLFeatureProvider, using state: MLState, options: MLPredictionOptions) throws -> any MLFeatureProvider
```

## See Also

### Making predictions

- [prediction(from:)](prediction%28from_%29.md)
- [prediction(from:options:)](prediction%28from_options_%29.md)
- [predictions(fromBatch:)](predictions%28frombatch_%29.md): Generates predictions for each input feature provider within the batch provider.
- [predictions(from:options:)](predictions%28from_options_%29.md): Generates a prediction for each input feature provider within the batch provider using the prediction options.
- [prediction(from:using:)](prediction%28from_using_%29.md)
- [MLPredictionOptions](../mlpredictionoptions.md): The options available when making a prediction.
- [Background Inference](../../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.inference.md): An entitlement that lets a background task run inference on the Neural Engine.
