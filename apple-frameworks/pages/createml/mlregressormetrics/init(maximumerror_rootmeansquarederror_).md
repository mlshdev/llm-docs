> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlregressormetrics/init(maximumerror:rootmeansquarederror:)](https://developer.apple.com/documentation/createml/mlregressormetrics/init(maximumerror:rootmeansquarederror:))

# init(maximumError:rootMeanSquaredError:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates regressor metrics describing the quality of your model.

## Declaration

```swift
init(maximumError: Double, rootMeanSquaredError: Double)
```

## Parameters

- `maximumError`: The maximum error of the model for the training data.
- `rootMeanSquaredError`: The root mean squared error of the model for the training data.

<a id="discussion"></a>

## Discussion

You typically don’t initialize metrics directly. Instead you get metrics about your model after training. For example, when you train an [MLRegressor](../mlregressor.md), you can look at its [trainingMetrics](../mlregressor/trainingmetrics.md) and [validationMetrics](../mlregressor/validationmetrics.md) properties. Additionally, you can check the performance on a test set with the [evaluation(on:)](https://developer.apple.com/documentation/createml/mlregressor/evaluation%28on:%29-7pirm) method.
