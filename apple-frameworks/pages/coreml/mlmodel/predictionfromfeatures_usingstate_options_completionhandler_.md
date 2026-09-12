> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/predictionfromfeatures:usingstate:options:completionhandler:](https://developer.apple.com/documentation/coreml/mlmodel/predictionfromfeatures:usingstate:options:completionhandler:)

# predictionFromFeatures:usingState:options:completionHandler:

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Run a stateful prediction asynchronously.

## Declaration

```objectivec
- (void) predictionFromFeatures:(id<MLFeatureProvider>) inputFeatures usingState:(MLState *) state options:(MLPredictionOptions *) options completionHandler:(void (^)(id<MLFeatureProvider>output, NSError *error)) completionHandler;
```

<a id="discussion"></a>

## Discussion

Use this method to run predictions on a stateful model.

Do not request a prediction while another prediction that shares the same state is in-flight, otherwise the behavior is undefined.

```swift
let state = model.newState()
let prediction = try await model.prediction(from: inputFeatures, using: state)
```

- Parameters
- input: The input features to make a prediction from.
- state: The state object created by `newState()` method.
- options: Prediction options to modify how the prediction is run.
- completionHandler: A block that will be invoked once the prediction has completed successfully or unsuccessfully. On success, it is invoked with a valid model output. On failure, it is invoked with a nil output and NSError

## See Also

### Loading a model

- [predictionFromFeatures:completionHandler:](predictionfromfeatures_completionhandler_.md): Generates a prediction asynchronously from the feature values within the input feature provider.
- [predictionFromFeatures:options:completionHandler:](predictionfromfeatures_options_completionhandler_.md): Generates a prediction asynchronously from the feature values within the input feature provider using the prediction options.
