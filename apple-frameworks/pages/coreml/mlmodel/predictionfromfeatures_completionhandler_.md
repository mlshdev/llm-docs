> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/predictionfromfeatures:completionhandler:](https://developer.apple.com/documentation/coreml/mlmodel/predictionfromfeatures:completionhandler:)

# predictionFromFeatures:completionHandler:

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Generates a prediction asynchronously from the feature values within the input feature provider.

## Declaration

```objectivec
- (void) predictionFromFeatures:(id<MLFeatureProvider>) input completionHandler:(void (^)(id<MLFeatureProvider>output, NSError *error)) completionHandler;
```

## Parameters

- `input`: A feature provider that stores all the input feature values the model needs for a prediction.
- `completionHandler`: The callback the system invokes when it completes the prediction.

  - **output**: A feature provider that contains the outputs of the prediction.
  - **error**: If an error occurs, an error object that describes the error; otherwise, `nil`.

## See Also

### Loading a model

- [predictionFromFeatures:options:completionHandler:](predictionfromfeatures_options_completionhandler_.md): Generates a prediction asynchronously from the feature values within the input feature provider using the prediction options.
- [predictionFromFeatures:usingState:options:completionHandler:](predictionfromfeatures_usingstate_options_completionhandler_.md): Run a stateful prediction asynchronously.
