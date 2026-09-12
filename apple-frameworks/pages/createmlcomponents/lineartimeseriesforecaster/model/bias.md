> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecaster/model/bias](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/model/bias)

# bias

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The bias coefficients.

## Declaration

```swift
var bias: MLShapedArray<Scalar>? { get }
```

## See Also

### Inspecting the model

- [annotationSize](annotationsize.md): The number of annotations per sample.
- [featureSize](featuresize.md): The number of features per sample.
- [forecastWindowSize](forecastwindowsize.md): The number of prediction samples.
- [inputWindowSize](inputwindowsize.md): The number of input samples.
- [stride](stride.md): The number of samples between windows.
- [weight](weight.md): The linear coefficients.
