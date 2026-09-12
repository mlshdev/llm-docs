> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/resizenearest(withgradienttensor:input:scaleoffsettensor:nearestroundingmode:layout:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/resizenearest(withgradienttensor:input:scaleoffsettensor:nearestroundingmode:layout:name:))

# resizeNearest(withGradientTensor:input:scaleOffsetTensor:nearestRoundingMode:layout:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a Resize gradient operation and returns the result tensor.

## Declaration

```swift
func resizeNearest(withGradientTensor gradient: MPSGraphTensor, input: MPSGraphTensor, scaleOffsetTensor scaleOffset: MPSGraphTensor, nearestRoundingMode: MPSGraphResizeNearestRoundingMode, layout: MPSGraphTensorNamedDataLayout, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: Incoming gradient tensor
- `input`: Forward pass input tensor
- `scaleOffset`: 1D float tensor. A 4-element shape as \[scaleY, scaleX, offsetY, offsetX\]
- `nearestRoundingMode`: The rounding mode to use when using nearest resampling.
- `layout`: Specifies what layout the provided tensor is in. The returned tensor will follow the same layout. Valid layouts are NHWC, NCHW, HWC, CHW, and HW.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Computes the gradient for the forward pass Resize op with identical parameters. See discussion of resizeTensor for more in depth description of resize paramters.

# resizeNearestWithGradientTensor:input:scaleOffsetTensor:nearestRoundingMode:layout:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a Resize gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) resizeNearestWithGradientTensor:(MPSGraphTensor *) gradient input:(MPSGraphTensor *) input scaleOffsetTensor:(MPSGraphTensor *) scaleOffset nearestRoundingMode:(MPSGraphResizeNearestRoundingMode) nearestRoundingMode layout:(MPSGraphTensorNamedDataLayout) layout name:(NSString *) name;
```

## Parameters

- `gradient`: Incoming gradient tensor
- `input`: Forward pass input tensor
- `scaleOffset`: 1D float tensor. A 4-element shape as \[scaleY, scaleX, offsetY, offsetX\]
- `nearestRoundingMode`: The rounding mode to use when using nearest resampling.
- `layout`: Specifies what layout the provided tensor is in. The returned tensor will follow the same layout. Valid layouts are NHWC, NCHW, HWC, CHW, and HW.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Computes the gradient for the forward pass Resize op with identical parameters. See discussion of resizeTensor for more in depth description of resize paramters.
