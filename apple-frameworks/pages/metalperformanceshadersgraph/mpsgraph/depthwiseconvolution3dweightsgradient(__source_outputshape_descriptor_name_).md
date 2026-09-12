> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/depthwiseconvolution3dweightsgradient(_:source:outputshape:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/depthwiseconvolution3dweightsgradient(_:source:outputshape:descriptor:name:))

# depthwiseConvolution3DWeightsGradient(\_:source:outputShape:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 3D depthwise convolution gradient for weights operation and returns the result tensor.

## Declaration

```swift
func depthwiseConvolution3DWeightsGradient(_ incomingGradient: MPSGraphTensor, source: MPSGraphTensor, outputShape: [NSNumber], descriptor: MPSGraphDepthwiseConvolution3DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `incomingGradient`: A 3D input gradient tensor - must be at least rank=4 (NCDHW).
- `source`: The forward pass 3D Image source as tensor - must be at least rank=4 (NCDHW).
- `outputShape`: The shape of the οutput tensor (and therefore weight tensor of forward pass).
- `descriptor`: The descriptor object that specifies strides, dilation rates and paddings.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# depthwiseConvolution3DWeightsGradientWithIncomingGradientTensor:sourceTensor:outputShape:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 3D depthwise convolution gradient for weights operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) depthwiseConvolution3DWeightsGradientWithIncomingGradientTensor:(MPSGraphTensor *) incomingGradient sourceTensor:(MPSGraphTensor *) source outputShape:(MPSShape *) outputShape descriptor:(MPSGraphDepthwiseConvolution3DOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `incomingGradient`: A 3D input gradient tensor - must be at least rank=4 (NCDHW).
- `source`: The forward pass 3D Image source as tensor - must be at least rank=4 (NCDHW).
- `outputShape`: The shape of the οutput tensor (and therefore weight tensor of forward pass).
- `descriptor`: The descriptor object that specifies strides, dilation rates and paddings.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
