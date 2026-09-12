> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/depthwiseconvolution2d(_:weights:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/depthwiseconvolution2d(_:weights:descriptor:name:))

# depthwiseConvolution2D(\_:weights:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D-depthwise convolution operation and returns the result tensor.

## Declaration

```swift
func depthwiseConvolution2D(_ source: MPSGraphTensor, weights: MPSGraphTensor, descriptor: MPSGraphDepthwiseConvolution2DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `source`: A 2D Image source as tensor - must be of rank=4. The layout is defined by `descriptor.dataLayout`.
- `weights`: The weights tensor, must be rank=4. The layout is defined by `descriptor.weightsLayout`.
- `descriptor`: The descriptor object that specifies strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# depthwiseConvolution2DWithSourceTensor:weightsTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D-depthwise convolution operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) depthwiseConvolution2DWithSourceTensor:(MPSGraphTensor *) source weightsTensor:(MPSGraphTensor *) weights descriptor:(MPSGraphDepthwiseConvolution2DOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `source`: A 2D Image source as tensor - must be of rank=4. The layout is defined by `descriptor.dataLayout`.
- `weights`: The weights tensor, must be rank=4. The layout is defined by `descriptor.weightsLayout`.
- `descriptor`: The descriptor object that specifies strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
