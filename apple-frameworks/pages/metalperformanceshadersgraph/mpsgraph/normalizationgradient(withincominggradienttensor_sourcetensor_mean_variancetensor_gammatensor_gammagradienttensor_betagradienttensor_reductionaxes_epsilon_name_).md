> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/normalizationgradient(withincominggradienttensor:sourcetensor:mean:variancetensor:gammatensor:gammagradienttensor:betagradienttensor:reductionaxes:epsilon:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/normalizationgradient(withincominggradienttensor:sourcetensor:mean:variancetensor:gammatensor:gammagradienttensor:betagradienttensor:reductionaxes:epsilon:name:))

# normalizationGradient(withIncomingGradientTensor:sourceTensor:mean:varianceTensor:gammaTensor:gammaGradientTensor:betaGradientTensor:reductionAxes:epsilon:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a normalization input gradient operation and returns the result tensor.

## Declaration

```swift
func normalizationGradient(withIncomingGradientTensor incomingGradientTensor: MPSGraphTensor, sourceTensor: MPSGraphTensor, mean meanTensor: MPSGraphTensor, varianceTensor: MPSGraphTensor, gammaTensor gamma: MPSGraphTensor?, gammaGradientTensor gammaGradient: MPSGraphTensor?, betaGradientTensor betaGradient: MPSGraphTensor?, reductionAxes axes: [NSNumber], epsilon: Float, name: String?) -> MPSGraphTensor
```

## Parameters

- `incomingGradientTensor`: The incoming original `resultTensor` gradient.
- `sourceTensor`: The original input source in forward direction.
- `meanTensor`: The mean tensor.
- `varianceTensor`: The variance tensor.
- `gamma`: The gamma tensor.
- `gammaGradient`: The `gammaGradient` tensor.
- `betaGradient`: The `betaGradient` tensor
- `axes`: The axes of normalization.
- `epsilon`: A small value to add to the variance when normalizing the inputs.
- `name`: An optional name for the operation.

<a id="discussion"></a>

## Discussion

The mean and variance tensors should be outputs of `meanWithTensor:axes:name` and `varianceWithTensor:meanTensor:axes:name`. Use the axes parameter to achieve different types of normalizations. For example (assuming your data is in `NxHxWxC` format) Batch normalization: axes = \[0, 1, 2\] Instance normalization: axes = \[1, 2\]

# normalizationGradientWithIncomingGradientTensor:sourceTensor:meanTensor:varianceTensor:gammaTensor:gammaGradientTensor:betaGradientTensor:reductionAxes:epsilon:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a normalization input gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) normalizationGradientWithIncomingGradientTensor:(MPSGraphTensor *) incomingGradientTensor sourceTensor:(MPSGraphTensor *) sourceTensor meanTensor:(MPSGraphTensor *) meanTensor varianceTensor:(MPSGraphTensor *) varianceTensor gammaTensor:(MPSGraphTensor *) gamma gammaGradientTensor:(MPSGraphTensor *) gammaGradient betaGradientTensor:(MPSGraphTensor *) betaGradient reductionAxes:(NSArray<NSNumber *> *) axes epsilon:(float) epsilon name:(NSString *) name;
```

## Parameters

- `incomingGradientTensor`: The incoming original `resultTensor` gradient.
- `sourceTensor`: The original input source in forward direction.
- `meanTensor`: The mean tensor.
- `varianceTensor`: The variance tensor.
- `gamma`: The gamma tensor.
- `gammaGradient`: The `gammaGradient` tensor.
- `betaGradient`: The `betaGradient` tensor
- `axes`: The axes of normalization.
- `epsilon`: A small value to add to the variance when normalizing the inputs.
- `name`: An optional name for the operation.

<a id="discussion"></a>

## Discussion

The mean and variance tensors should be outputs of `meanWithTensor:axes:name` and `varianceWithTensor:meanTensor:axes:name`. Use the axes parameter to achieve different types of normalizations. For example (assuming your data is in `NxHxWxC` format) Batch normalization: axes = \[0, 1, 2\] Instance normalization: axes = \[1, 2\]
