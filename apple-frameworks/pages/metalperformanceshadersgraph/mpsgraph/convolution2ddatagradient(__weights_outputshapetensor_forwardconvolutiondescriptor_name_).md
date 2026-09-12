> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/convolution2ddatagradient(_:weights:outputshapetensor:forwardconvolutiondescriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/convolution2ddatagradient(_:weights:outputshapetensor:forwardconvolutiondescriptor:name:))

# convolution2DDataGradient(\_:weights:outputShapeTensor:forwardConvolutionDescriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a 2D convolution gradient operation with respect to the source tensor of the forward convolution.

## Declaration

```swift
func convolution2DDataGradient(_ gradient: MPSGraphTensor, weights: MPSGraphTensor, outputShapeTensor: MPSGraphTensor, forwardConvolutionDescriptor: MPSGraphConvolution2DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `weights`: Forward pass weights tensor
- `outputShapeTensor`: 4-element 1D Int32 or Int64 tensor. Shape of the forward pass source tensor
- `forwardConvolutionDescriptor`: Forward convolution 2D op `descriptor`
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

If `S` is source tensor to forward convolution, `R` is the result/returned tensor of forward convolution, and `L` is the loss function, convolution2DDataGradientWithIncomingGradientTensor returns tensor `dL/dS = dL/dR * dR/dS`, where `dL/dR` is the incomingGradient parameter.

# convolution2DDataGradientWithIncomingGradientTensor:weightsTensor:outputShapeTensor:forwardConvolutionDescriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a 2D convolution gradient operation with respect to the source tensor of the forward convolution.

## Declaration

```objectivec
- (MPSGraphTensor *) convolution2DDataGradientWithIncomingGradientTensor:(MPSGraphTensor *) gradient weightsTensor:(MPSGraphTensor *) weights outputShapeTensor:(MPSGraphTensor *) outputShapeTensor forwardConvolutionDescriptor:(MPSGraphConvolution2DOpDescriptor *) forwardConvolutionDescriptor name:(NSString *) name;
```

## Parameters

- `weights`: Forward pass weights tensor
- `outputShapeTensor`: 4-element 1D Int32 or Int64 tensor. Shape of the forward pass source tensor
- `forwardConvolutionDescriptor`: Forward convolution 2D op `descriptor`
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

If `S` is source tensor to forward convolution, `R` is the result/returned tensor of forward convolution, and `L` is the loss function, convolution2DDataGradientWithIncomingGradientTensor returns tensor `dL/dS = dL/dR * dR/dS`, where `dL/dR` is the incomingGradient parameter.
