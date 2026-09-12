> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/depthwiseconvolution3ddatagradient(_:weights:outputshape:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/depthwiseconvolution3ddatagradient(_:weights:outputshape:descriptor:name:))

# depthwiseConvolution3DDataGradient(\_:weights:outputShape:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a 3D depthwise convolution gradient for data operation and returns the result tensor.

## Declaration

```swift
func depthwiseConvolution3DDataGradient(_ incomingGradient: MPSGraphTensor, weights: MPSGraphTensor, outputShape: [NSNumber]?, descriptor: MPSGraphDepthwiseConvolution3DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `incomingGradient`: A 3D input gradient tensor - must be at least rank=4 (CDHW).
- `weights`: The weights tensor, must be rank=4 - axes are interpreted as CDHW.
- `outputShape`: The shape of the οutput tensor (and therefore input tensor of forward pass).
- `descriptor`: The descriptor object that  specifies strides, dilation rates and paddings.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# depthwiseConvolution3DDataGradientWithIncomingGradientTensor:weightsTensor:outputShape:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a 3D depthwise convolution gradient for data operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) depthwiseConvolution3DDataGradientWithIncomingGradientTensor:(MPSGraphTensor *) incomingGradient weightsTensor:(MPSGraphTensor *) weights outputShape:(MPSShape *) outputShape descriptor:(MPSGraphDepthwiseConvolution3DOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `incomingGradient`: A 3D input gradient tensor - must be at least rank=4 (CDHW).
- `weights`: The weights tensor, must be rank=4 - axes are interpreted as CDHW.
- `outputShape`: The shape of the οutput tensor (and therefore input tensor of forward pass).
- `descriptor`: The descriptor object that  specifies strides, dilation rates and paddings.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
