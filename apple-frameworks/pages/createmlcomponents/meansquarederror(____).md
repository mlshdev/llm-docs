> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/meansquarederror(_:_:)](https://developer.apple.com/documentation/createmlcomponents/meansquarederror(_:_:))

# meanSquaredError(\_:\_:)

**Framework:** Create ML Components  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Computes the mean squared error between predicted and ground truth values.

## Declaration

```swift
@backDeployed(before: macOS 15.0, iOS 18.0, tvOS 18.0, visionOS 2.0)
func meanSquaredError<T>(_ predicted: some Collection, _ groundTruth: some Collection) -> T where T : FloatingPoint
```

## Parameters

- `predicted`: The predicted values.
- `groundTruth`: The ground truth values. The collection must have same number of elements as the predicted values.

<a id="return-value"></a>

## Return Value

The mean squared error.

<a id="discussion"></a>

## Discussion

Empty collections of predicted and ground truth values will return a value of NaN.

## See Also

### Metrics

- [Classification](classification.md): An item in a classification result.
- [ClassificationDistribution](classificationdistribution.md): A classification distribution that contains a probability for each classification label.
- [ClassificationMetrics](classificationmetrics.md): Classification metrics.
- [MultiLabelClassificationMetrics](multilabelclassificationmetrics.md): Multi-label classification metrics.
- [rootMeanSquaredError(\_:)](rootmeansquarederror%28__%29.md): Computes the root mean squared error between predicted and ground truth values.
- [rootMeanSquaredError(\_:\_:)](rootmeansquarederror%28____%29.md): Computes the root mean squared error between predicted and ground truth values.
- [maximumAbsoluteError(\_:)](maximumabsoluteerror%28__%29.md): Computes the maximum absolute error between predicted and ground truth values.
- [maximumAbsoluteError(\_:\_:)](maximumabsoluteerror%28____%29.md): Computes the maximum absolute error between predicted and ground truth values.
- [meanAbsoluteError(\_:)](meanabsoluteerror%28__%29.md): Computes the mean absolute error between predicted and ground truth values.
- [meanAbsoluteError(\_:\_:)](meanabsoluteerror%28____%29.md): Computes the mean absolute error between predicted and ground truth values.
- [meanAbsolutePercentageError(\_:)](meanabsolutepercentageerror%28__%29.md): Computes the mean absolute percentage error between predicted and ground truth values.
- [meanSquaredError(\_:)](meansquarederror%28__%29.md): Computes the root mean squared error between predicted and ground truth values.
