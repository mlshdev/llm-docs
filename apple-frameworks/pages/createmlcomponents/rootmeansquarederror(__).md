> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/rootmeansquarederror(_:)](https://developer.apple.com/documentation/createmlcomponents/rootmeansquarederror(_:))

# rootMeanSquaredError(\_:)

**Framework:** Create ML Components  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Computes the root mean squared error between predicted and ground truth values.

## Declaration

```swift
func rootMeanSquaredError<T>(_ annotatedPredictions: [AnnotatedPrediction<T, T>]) -> T where T : FloatingPoint
```

## Parameters

- `annotatedPredictions`: An `AnnotatedPrediction` object.

<a id="return-value"></a>

## Return Value

The root mean squared error.

<a id="discussion"></a>

## Discussion

If an empty `AnnotatedPrediction` is supplied, the result will be NaN.

## See Also

### Metrics

- [Classification](classification.md): An item in a classification result.
- [ClassificationDistribution](classificationdistribution.md): A classification distribution that contains a probability for each classification label.
- [ClassificationMetrics](classificationmetrics.md): Classification metrics.
- [MultiLabelClassificationMetrics](multilabelclassificationmetrics.md): Multi-label classification metrics.
- [rootMeanSquaredError(\_:\_:)](rootmeansquarederror%28____%29.md): Computes the root mean squared error between predicted and ground truth values.
- [maximumAbsoluteError(\_:)](maximumabsoluteerror%28__%29.md): Computes the maximum absolute error between predicted and ground truth values.
- [maximumAbsoluteError(\_:\_:)](maximumabsoluteerror%28____%29.md): Computes the maximum absolute error between predicted and ground truth values.
- [meanAbsoluteError(\_:)](meanabsoluteerror%28__%29.md): Computes the mean absolute error between predicted and ground truth values.
- [meanAbsoluteError(\_:\_:)](meanabsoluteerror%28____%29.md): Computes the mean absolute error between predicted and ground truth values.
- [meanAbsolutePercentageError(\_:)](meanabsolutepercentageerror%28__%29.md): Computes the mean absolute percentage error between predicted and ground truth values.
- [meanSquaredError(\_:)](meansquarederror%28__%29.md): Computes the root mean squared error between predicted and ground truth values.
- [meanSquaredError(\_:\_:)](meansquarederror%28____%29.md): Computes the mean squared error between predicted and ground truth values.
