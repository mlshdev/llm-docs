> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/resizenearest(withgradienttensor:input:scale:offsettensor:nearestroundingmode:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/resizenearest(withgradienttensor:input:scale:offsettensor:nearestroundingmode:name:))

# resizeNearest(withGradientTensor:input:scale:offsetTensor:nearestRoundingMode:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a Resize gradient operation and returns the result tensor.

## Declaration

```swift
func resizeNearest(withGradientTensor gradient: MPSGraphTensor, input: MPSGraphTensor, scale: MPSGraphTensor, offsetTensor offset: MPSGraphTensor, nearestRoundingMode: MPSGraphResizeNearestRoundingMode, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: Incoming gradient tensor
- `input`: Forward pass input tensor
- `scale`: 1D float tensor of size equal to rank of input.
- `offset`: 1D float tensor of size equal to rank of input.
- `nearestRoundingMode`: The rounding mode to use when using nearest resampling. Default is roundPreferCeil.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Computes the gradient for the forward pass Resize op with nearest neighbor sampling and identical parameters. See discussion of resizeTensor for more in depth description of resize paramters.

# resizeNearestWithGradientTensor:input:scaleTensor:offsetTensor:nearestRoundingMode:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a Resize gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) resizeNearestWithGradientTensor:(MPSGraphTensor *) gradient input:(MPSGraphTensor *) input scaleTensor:(MPSGraphTensor *) scale offsetTensor:(MPSGraphTensor *) offset nearestRoundingMode:(MPSGraphResizeNearestRoundingMode) nearestRoundingMode name:(NSString *) name;
```

## Parameters

- `gradient`: Incoming gradient tensor
- `input`: Forward pass input tensor
- `scale`: 1D float tensor of size equal to rank of input.
- `offset`: 1D float tensor of size equal to rank of input.
- `nearestRoundingMode`: The rounding mode to use when using nearest resampling. Default is roundPreferCeil.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Computes the gradient for the forward pass Resize op with nearest neighbor sampling and identical parameters. See discussion of resizeTensor for more in depth description of resize paramters.
