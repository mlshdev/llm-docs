> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/depthwiseconvolution2ddatagradient(_:weights:outputshape:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/depthwiseconvolution2ddatagradient(_:weights:outputshape:descriptor:name:))

# depthwiseConvolution2DDataGradient(\_:weights:outputShape:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D-depthwise convolution gradient for data operation and returns the result tensor.

## Declaration

```swift
func depthwiseConvolution2DDataGradient(_ incomingGradient: MPSGraphTensor, weights: MPSGraphTensor, outputShape: [NSNumber], descriptor: MPSGraphDepthwiseConvolution2DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `incomingGradient`: A 2D input gradient tensor - must be of rank=4. The layout is defined by `descriptor.dataLayout`.
- `weights`: The weights tensor, must be rank=4. The layout is defined by `descriptor.weightsLayout`.
- `outputShape`: The shape of the οutput tensor (and therefore input tensor of forward pass).
- `descriptor`: The descriptor object that specifies strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# depthwiseConvolution2DDataGradientWithIncomingGradientTensor:weightsTensor:outputShape:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D-depthwise convolution gradient for data operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) depthwiseConvolution2DDataGradientWithIncomingGradientTensor:(MPSGraphTensor *) incomingGradient weightsTensor:(MPSGraphTensor *) weights outputShape:(MPSShape *) outputShape descriptor:(MPSGraphDepthwiseConvolution2DOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `incomingGradient`: A 2D input gradient tensor - must be of rank=4. The layout is defined by `descriptor.dataLayout`.
- `weights`: The weights tensor, must be rank=4. The layout is defined by `descriptor.weightsLayout`.
- `outputShape`: The shape of the οutput tensor (and therefore input tensor of forward pass).
- `descriptor`: The descriptor object that specifies strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
