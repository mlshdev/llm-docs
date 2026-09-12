> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/convolution2d(_:weights:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/convolution2d(_:weights:descriptor:name:))

# convolution2D(\_:weights:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D (forward) convolution operation and returns the result tensor.

## Declaration

```swift
func convolution2D(_ source: MPSGraphTensor, weights: MPSGraphTensor, descriptor: MPSGraphConvolution2DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `source`: Source tensor - must be a rank 4 tensor. The layout is defined by `descriptor.dataLayout`.
- `weights`: Weights tensor, must be rank 4. The layout is defined by `descriptor.weightsLayout`.
- `descriptor`: Specifies strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# convolution2DWithSourceTensor:weightsTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D (forward) convolution operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) convolution2DWithSourceTensor:(MPSGraphTensor *) source weightsTensor:(MPSGraphTensor *) weights descriptor:(MPSGraphConvolution2DOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `source`: Source tensor - must be a rank 4 tensor. The layout is defined by `descriptor.dataLayout`.
- `weights`: Weights tensor, must be rank 4. The layout is defined by `descriptor.weightsLayout`.
- `descriptor`: Specifies strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
