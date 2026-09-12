> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecaster/update(_:with:)](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/update(_:with:))

# update(\_:with:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Updates a model with a new batch of examples.

## Declaration

```swift
func update(_ model: inout LinearTimeSeriesForecaster<Scalar>.Transformer, with input: AnnotatedBatch<Scalar>) async throws -> Scalar
```

## Parameters

- `model`: The model to update.
- `input`: A shaped array of windowed features. The shape should be `[batchSize, inputWindowSize, featureSize]`.

<a id="discussion"></a>

## Discussion

Use [TimeSeriesForecasterBatches](../timeseriesforecasterbatches.md) to convert a shaped array of features into batches of windowed features and annotations. Here is an example of training a forecaster:

```
let estimator = LinearTimeSeriesForecaster<Float>(configuration: configuration)
var model = estimator.makeTransformer()

let batches = try TimeSeriesForecasterBatches(
    features: features,       // shape [N, featureSize]
    annotations: annotations, // shape [N, annotationSize]
    batchSize: 32,
    inputWindowSize: configuration.inputWindowSize,
    forecastWindowSize: configuration.forecastWindowSize,
    shufflesBatches: true
)

for iteration in 0 ..< configuration.maximumIterationCount {
    for batch in batches {
        let loss = try await estimator.update(&model, with: batch)
        print("Loss: \(loss)")
    }
}
```

## See Also

### Updating and fitting

- [update(\_:withWindows:eventHandler:)](update%28__withwindows_eventhandler_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a model with a sequence of windows.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a model to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a model to a sequence of examples with validation.
- [fitted(toWindows:eventHandler:)](fitted%28towindows_eventhandler_%29.md): Fits a model to a sequence of windows.
- [fitted(toWindows:validateOn:eventHandler:)](fitted%28towindows_validateon_eventhandler_%29.md): Fits a model to a sequence of annotated windows with validation.
