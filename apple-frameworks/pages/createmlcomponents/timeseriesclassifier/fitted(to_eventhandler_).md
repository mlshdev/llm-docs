> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesclassifier/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifier/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Fits a time series classifier model to a sequence of examples.

## Declaration

```swift
func fitted(to input: some Sequence<AnnotatedFeature<MLShapedArray<Scalar>, Label>>, eventHandler: EventHandler? = nil) async throws -> TimeSeriesClassifier<Scalar, Label>.Model
```

## Parameters

- `input`: A sequence of annotated features for training. Each feature’s shape should be `[sequenceLength, featureSize]` and each annotation should be one-hot encoded with shape `[labelCount]`.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted time series classifier model.

<a id="discussion"></a>

## Discussion

The training process partitions the input into random batches according to the batch size configuration parameter. Training stops when the validation loss stops improving or when the maximum number of iterations is reached.

## See Also

### Fitting a time series classifier

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a time series classifier model to a sequence of examples.
