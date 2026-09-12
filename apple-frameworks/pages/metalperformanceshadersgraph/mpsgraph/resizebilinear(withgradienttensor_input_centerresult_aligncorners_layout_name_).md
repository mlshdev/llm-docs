> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/resizebilinear(withgradienttensor:input:centerresult:aligncorners:layout:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/resizebilinear(withgradienttensor:input:centerresult:aligncorners:layout:name:))

# resizeBilinear(withGradientTensor:input:centerResult:alignCorners:layout:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a Resize gradient operation and returns the result tensor.

## Declaration

```swift
func resizeBilinear(withGradientTensor gradient: MPSGraphTensor, input: MPSGraphTensor, centerResult: Bool, alignCorners: Bool, layout: MPSGraphTensorNamedDataLayout, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: Incoming gradient tensor
- `input`: Forward pass input tensor
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

# resizeBilinearWithGradientTensor:input:centerResult:alignCorners:layout:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a Resize gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) resizeBilinearWithGradientTensor:(MPSGraphTensor *) gradient input:(MPSGraphTensor *) input centerResult:(BOOL) centerResult alignCorners:(BOOL) alignCorners layout:(MPSGraphTensorNamedDataLayout) layout name:(NSString *) name;
```

## Parameters

- `gradient`: Incoming gradient tensor
- `input`: Forward pass input tensor
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
