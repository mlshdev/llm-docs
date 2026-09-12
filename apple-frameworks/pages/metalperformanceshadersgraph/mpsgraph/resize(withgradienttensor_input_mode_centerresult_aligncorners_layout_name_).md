> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/resize(withgradienttensor:input:mode:centerresult:aligncorners:layout:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/resize(withgradienttensor:input:mode:centerresult:aligncorners:layout:name:))

# resize(withGradientTensor:input:mode:centerResult:alignCorners:layout:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Resize gradient operation and returns the result tensor.

## Declaration

```swift
func resize(withGradientTensor gradient: MPSGraphTensor, input: MPSGraphTensor, mode: MPSGraphResizeMode, centerResult: Bool, alignCorners: Bool, layout: MPSGraphTensorNamedDataLayout, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: Incoming gradient tensor
- `input`: Forward pass input tensor
- `mode`: The resampling mode to use. If nearest sampling is specifed, RoundPreferCeil mode will be used.
- `centerResult`: Controls if the result image is centered on the input image. When NO, the result will have the top left corner aligned
- `alignCorners`: When YES, the result image will have the same value as the input image in the corners
- `layout`: Specifies what layout the provided tensor is in. The returned tensor will follow the same layout. Valid layouts are NHWC, NCHW, HWC, CHW, and HW.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Computes the gradient for the forward pass Resize op with identical parameters. See discussion of resizeTensor for more in depth description of resize paramters.

# resizeWithGradientTensor:input:mode:centerResult:alignCorners:layout:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Resize gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) resizeWithGradientTensor:(MPSGraphTensor *) gradient input:(MPSGraphTensor *) input mode:(MPSGraphResizeMode) mode centerResult:(BOOL) centerResult alignCorners:(BOOL) alignCorners layout:(MPSGraphTensorNamedDataLayout) layout name:(NSString *) name;
```

## Parameters

- `gradient`: Incoming gradient tensor
- `input`: Forward pass input tensor
- `mode`: The resampling mode to use. If nearest sampling is specifed, RoundPreferCeil mode will be used.
- `centerResult`: Controls if the result image is centered on the input image. When NO, the result will have the top left corner aligned
- `alignCorners`: When YES, the result image will have the same value as the input image in the corners
- `layout`: Specifies what layout the provided tensor is in. The returned tensor will follow the same layout. Valid layouts are NHWC, NCHW, HWC, CHW, and HW.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Computes the gradient for the forward pass Resize op with identical parameters. See discussion of resizeTensor for more in depth description of resize paramters.
