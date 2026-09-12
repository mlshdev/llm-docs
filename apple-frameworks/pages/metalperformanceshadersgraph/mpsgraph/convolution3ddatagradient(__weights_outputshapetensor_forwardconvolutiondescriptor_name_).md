> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/convolution3ddatagradient(_:weights:outputshapetensor:forwardconvolutiondescriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/convolution3ddatagradient(_:weights:outputshapetensor:forwardconvolutiondescriptor:name:))

# convolution3DDataGradient(\_:weights:outputShapeTensor:forwardConvolutionDescriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

Creates a 3D convolution gradient operation with respect to the source tensor of the forward convolution.

## Declaration

```swift
func convolution3DDataGradient(_ gradient: MPSGraphTensor, weights: MPSGraphTensor, outputShapeTensor: MPSGraphTensor, forwardConvolutionDescriptor: MPSGraphConvolution3DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `weights`: Forward pass weights tensor
- `outputShapeTensor`: 4D Int32 or Int64 tensor. Shape of the forward pass source tensor
- `forwardConvolutionDescriptor`: Forward convolution 2D op `descriptor`
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

If `S` is source tensor to forward convolution, `R` is the result/returned tensor of forward convolution, and `L` is the loss function, convolution3DDataGradientWithIncomingGradientTensor returns tensor `dL/dS = dL/dR * dR/dS`, where `dL/dR` is the incomingGradient parameter.

# convolution3DDataGradientWithIncomingGradientTensor:weightsTensor:outputShapeTensor:forwardConvolutionDescriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

Creates a 3D convolution gradient operation with respect to the source tensor of the forward convolution.

## Declaration

```objectivec
- (MPSGraphTensor *) convolution3DDataGradientWithIncomingGradientTensor:(MPSGraphTensor *) gradient weightsTensor:(MPSGraphTensor *) weights outputShapeTensor:(MPSGraphTensor *) outputShapeTensor forwardConvolutionDescriptor:(MPSGraphConvolution3DOpDescriptor *) forwardConvolutionDescriptor name:(NSString *) name;
```

## Parameters

- `weights`: Forward pass weights tensor
- `outputShapeTensor`: 4D Int32 or Int64 tensor. Shape of the forward pass source tensor
- `forwardConvolutionDescriptor`: Forward convolution 2D op `descriptor`
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

If `S` is source tensor to forward convolution, `R` is the result/returned tensor of forward convolution, and `L` is the loss function, convolution3DDataGradientWithIncomingGradientTensor returns tensor `dL/dS = dL/dR * dR/dS`, where `dL/dR` is the incomingGradient parameter.
