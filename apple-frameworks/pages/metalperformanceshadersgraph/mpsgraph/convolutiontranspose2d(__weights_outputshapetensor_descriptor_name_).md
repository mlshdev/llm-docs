> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/convolutiontranspose2d(_:weights:outputshapetensor:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/convolutiontranspose2d(_:weights:outputshapetensor:descriptor:name:))

# convolutionTranspose2D(\_:weights:outputShapeTensor:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a convolution transpose operation and returns the result tensor.

## Declaration

```swift
func convolutionTranspose2D(_ source: MPSGraphTensor, weights: MPSGraphTensor, outputShapeTensor outputShape: MPSGraphTensor, descriptor: MPSGraphConvolution2DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `source`: Input tensor
- `weights`: Weights tensor
- `outputShape`: 1D Int32 or Int64 tensor. shape of the result tensor.
- `descriptor`: Descriptor for the corresponding forward Conv2D operation
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# convolutionTranspose2DWithSourceTensor:weightsTensor:outputShapeTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a convolution transpose operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) convolutionTranspose2DWithSourceTensor:(MPSGraphTensor *) source weightsTensor:(MPSGraphTensor *) weights outputShapeTensor:(MPSGraphTensor *) outputShape descriptor:(MPSGraphConvolution2DOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `source`: Input tensor
- `weights`: Weights tensor
- `outputShape`: 1D Int32 or Int64 tensor. shape of the result tensor.
- `descriptor`: Descriptor for the corresponding forward Conv2D operation
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
