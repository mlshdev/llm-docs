> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/convolutiontranspose2dweightsgradient(_:weights:outputshape:forwardconvolutiondescriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/convolutiontranspose2dweightsgradient(_:weights:outputshape:forwardconvolutiondescriptor:name:))

# convolutionTranspose2DWeightsGradient(\_:weights:outputShape:forwardConvolutionDescriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a convolution transpose gradient operation with respect to the weights tensor of the convolution transpose operation and returns the result tensor.

## Declaration

```swift
func convolutionTranspose2DWeightsGradient(_ incomingGradientTensor: MPSGraphTensor, weights source: MPSGraphTensor, outputShape: [NSNumber], forwardConvolutionDescriptor: MPSGraphConvolution2DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `incomingGradientTensor`: Incoming gradient tensor
- `source`: Forward pass source tensor
- `outputShape`: Shape of the forward pass source weights tensor
- `forwardConvolutionDescriptor`: Forward pass op descriptor
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Inserts an operation in graph to compute gradient of convolution transpose with respect to the weights tensor of the corresponding convolution transpose operation.

# convolutionTranspose2DWeightsGradientWithIncomingGradientTensor:sourceTensor:outputShape:forwardConvolutionDescriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a convolution transpose gradient operation with respect to the weights tensor of the convolution transpose operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) convolutionTranspose2DWeightsGradientWithIncomingGradientTensor:(MPSGraphTensor *) incomingGradientTensor sourceTensor:(MPSGraphTensor *) source outputShape:(MPSShape *) outputShape forwardConvolutionDescriptor:(MPSGraphConvolution2DOpDescriptor *) forwardConvolutionDescriptor name:(NSString *) name;
```

## Parameters

- `incomingGradientTensor`: Incoming gradient tensor
- `source`: Forward pass source tensor
- `outputShape`: Shape of the forward pass source weights tensor
- `forwardConvolutionDescriptor`: Forward pass op descriptor
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Inserts an operation in graph to compute gradient of convolution transpose with respect to the weights tensor of the corresponding convolution transpose operation.
