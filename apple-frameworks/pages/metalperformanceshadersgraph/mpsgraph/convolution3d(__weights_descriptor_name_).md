> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/convolution3d(_:weights:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/convolution3d(_:weights:descriptor:name:))

# convolution3D(\_:weights:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

Creates a 3D forward convolution operation and returns the result tensor.

## Declaration

```swift
func convolution3D(_ source: MPSGraphTensor, weights: MPSGraphTensor, descriptor: MPSGraphConvolution3DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `source`: Source tensor - must be of rank 5. The layout is defined by `descriptor.dataLayout`.
- `weights`: Weights tensor, must be rank 5. The layout is defined by `descriptor.weightsLayout`.
- `descriptor`: Specifies strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# convolution3DWithSourceTensor:weightsTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

Creates a 3D forward convolution operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) convolution3DWithSourceTensor:(MPSGraphTensor *) source weightsTensor:(MPSGraphTensor *) weights descriptor:(MPSGraphConvolution3DOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `source`: Source tensor - must be of rank 5. The layout is defined by `descriptor.dataLayout`.
- `weights`: Weights tensor, must be rank 5. The layout is defined by `descriptor.weightsLayout`.
- `descriptor`: Specifies strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
