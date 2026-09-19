> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlregressormetrics/rootmeansquarederror

# rootMeanSquaredError

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A common metric used to determine the deviation between correct and predicted values.

## Declaration

```swift
var rootMeanSquaredError: Double { get }
```

## Mentioned In

- [Improving Your Model’s Accuracy](../improving-your-model-s-accuracy.md)

<a id="discussion"></a>

## Discussion

The [rootMeanSquaredError](rootmeansquarederror.md) is calculated by taking the square-root of the average squared distance between the correct and predicted value.

## See Also

### Understanding the model

- [maximumError](maximumerror.md): The largest absolute difference between the expected values and the model’s predicted values during testing or training.
