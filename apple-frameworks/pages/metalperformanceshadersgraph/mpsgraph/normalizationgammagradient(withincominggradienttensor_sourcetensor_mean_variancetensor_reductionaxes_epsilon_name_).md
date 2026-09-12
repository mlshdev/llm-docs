> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/normalizationgammagradient(withincominggradienttensor:sourcetensor:mean:variancetensor:reductionaxes:epsilon:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/normalizationgammagradient(withincominggradienttensor:sourcetensor:mean:variancetensor:reductionaxes:epsilon:name:))

# normalizationGammaGradient(withIncomingGradientTensor:sourceTensor:mean:varianceTensor:reductionAxes:epsilon:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a normalization gamma-gradient operation and returns the result tensor.

## Declaration

```swift
func normalizationGammaGradient(withIncomingGradientTensor incomingGradientTensor: MPSGraphTensor, sourceTensor: MPSGraphTensor, mean meanTensor: MPSGraphTensor, varianceTensor: MPSGraphTensor, reductionAxes axes: [NSNumber], epsilon: Float, name: String?) -> MPSGraphTensor
```

## Parameters

- `incomingGradientTensor`: The incoming original `resultTensor` gradient.
- `sourceTensor`: The original input source in forward direction.
- `meanTensor`: The mean tensor.
- `varianceTensor`: The variance tensor.
- `axes`: The axes of normalization.
- `epsilon`: A small value to add to the variance when normalizing the inputs.
- `name`: An optional name for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object.

<a id="discussion"></a>

## Discussion

The mean and variance tensors should be outputs of `meanWithTensor:axes:name` and `varianceWithTensor:meanTensor:axes:name`. Use the axes parameter to achieve different types of normalizations. For example (assuming your data is in `NxHxWxC` format) Batch normalization: axes = \[0, 1, 2\] Instance normalization: axes = \[1, 2\]

# normalizationGammaGradientWithIncomingGradientTensor:sourceTensor:meanTensor:varianceTensor:reductionAxes:epsilon:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a normalization gamma-gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) normalizationGammaGradientWithIncomingGradientTensor:(MPSGraphTensor *) incomingGradientTensor sourceTensor:(MPSGraphTensor *) sourceTensor meanTensor:(MPSGraphTensor *) meanTensor varianceTensor:(MPSGraphTensor *) varianceTensor reductionAxes:(NSArray<NSNumber *> *) axes epsilon:(float) epsilon name:(NSString *) name;
```

## Parameters

- `incomingGradientTensor`: The incoming original `resultTensor` gradient.
- `sourceTensor`: The original input source in forward direction.
- `meanTensor`: The mean tensor.
- `varianceTensor`: The variance tensor.
- `axes`: The axes of normalization.
- `epsilon`: A small value to add to the variance when normalizing the inputs.
- `name`: An optional name for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object.

<a id="discussion"></a>

## Discussion

The mean and variance tensors should be outputs of `meanWithTensor:axes:name` and `varianceWithTensor:meanTensor:axes:name`. Use the axes parameter to achieve different types of normalizations. For example (assuming your data is in `NxHxWxC` format) Batch normalization: axes = \[0, 1, 2\] Instance normalization: axes = \[1, 2\]
