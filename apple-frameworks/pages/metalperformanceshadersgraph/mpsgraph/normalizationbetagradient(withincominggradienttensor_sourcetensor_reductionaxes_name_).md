> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/normalizationbetagradient(withincominggradienttensor:sourcetensor:reductionaxes:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/normalizationbetagradient(withincominggradienttensor:sourcetensor:reductionaxes:name:))

# normalizationBetaGradient(withIncomingGradientTensor:sourceTensor:reductionAxes:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a normalization beta-gradient operation and returns the result tensor.

## Declaration

```swift
func normalizationBetaGradient(withIncomingGradientTensor incomingGradientTensor: MPSGraphTensor, sourceTensor: MPSGraphTensor, reductionAxes axes: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `incomingGradientTensor`: The incoming original `resultTensor` gradient.
- `sourceTensor`: The original input source in forward direction.
- `axes`: The axes of normalization.
- `name`: An optional name for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object.

<a id="discussion"></a>

## Discussion

The mean and variance tensors should be outputs of `meanWithTensor:axes:name` and `varianceWithTensor:meanTensor:axes:name`. Use the axes parameter to achieve different types of normalizations. For example (assuming your data is in `NxHxWxC` format) Batch normalization: axes = \[0, 1, 2\] Instance normalization: axes = \[1, 2\]

# normalizationBetaGradientWithIncomingGradientTensor:sourceTensor:reductionAxes:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a normalization beta-gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) normalizationBetaGradientWithIncomingGradientTensor:(MPSGraphTensor *) incomingGradientTensor sourceTensor:(MPSGraphTensor *) sourceTensor reductionAxes:(NSArray<NSNumber *> *) axes name:(NSString *) name;
```

## Parameters

- `incomingGradientTensor`: The incoming original `resultTensor` gradient.
- `sourceTensor`: The original input source in forward direction.
- `axes`: The axes of normalization.
- `name`: An optional name for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` object.

<a id="discussion"></a>

## Discussion

The mean and variance tensors should be outputs of `meanWithTensor:axes:name` and `varianceWithTensor:meanTensor:axes:name`. Use the axes parameter to achieve different types of normalizations. For example (assuming your data is in `NxHxWxC` format) Batch normalization: axes = \[0, 1, 2\] Instance normalization: axes = \[1, 2\]
