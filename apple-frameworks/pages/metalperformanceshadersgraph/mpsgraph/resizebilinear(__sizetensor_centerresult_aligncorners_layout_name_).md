> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/resizebilinear(_:sizetensor:centerresult:aligncorners:layout:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/resizebilinear(_:sizetensor:centerresult:aligncorners:layout:name:))

# resizeBilinear(\_:sizeTensor:centerResult:alignCorners:layout:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Resamples input images to given size using bilinear sampling.

## Declaration

```swift
func resizeBilinear(_ imagesTensor: MPSGraphTensor, sizeTensor size: MPSGraphTensor, centerResult: Bool, alignCorners: Bool, layout: MPSGraphTensorNamedDataLayout, name: String?) -> MPSGraphTensor
```

## Parameters

- `imagesTensor`: Tensor containing input images.
- `size`: 1D Int32 or Int64 tensor. A 2-element shape as \[newHeight, newWidth\]
- `centerResult`: Controls if the result image is centered on the input image. When NO, the result will have the top left corner aligned
- `alignCorners`: When YES, the result image will have the same value as the input image in the corners
- `layout`: Specifies what layout the provided tensor is in. The returned tensor will follow the same layout. Valid layouts are NHWC, NCHW, HWC, CHW, and HW.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Resamples input images to given size using nearest neighbor sampling. Result images will be distorted if size is of different aspect ratio. Destination indices are computed using direct index scaling by default, with no offset added. If the centerResult parameter is true, the destination indices will be scaled and shifted to be centered on the input image. If the alignCorners parameter is true, the corners of the result images will match the input images. Scaling will be modified to a factor of (size - 1) / (inputSize - 1). When alignCorners is true, the centerResult parameter does nothing. In order to achieve the same behavior as OpenCV’s resize and TensorFlowV2’s resize,

```md
centerResult = YES;
alginCorners = NO;
```

To achieve the same behavior as TensorFlowV1 resize

```md
centerResult = NO;
```

# resizeBilinearWithTensor:sizeTensor:centerResult:alignCorners:layout:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Resamples input images to given size using bilinear sampling.

## Declaration

```objectivec
- (MPSGraphTensor *) resizeBilinearWithTensor:(MPSGraphTensor *) imagesTensor sizeTensor:(MPSGraphTensor *) size centerResult:(BOOL) centerResult alignCorners:(BOOL) alignCorners layout:(MPSGraphTensorNamedDataLayout) layout name:(NSString *) name;
```

## Parameters

- `imagesTensor`: Tensor containing input images.
- `size`: 1D Int32 or Int64 tensor. A 2-element shape as \[newHeight, newWidth\]
- `centerResult`: Controls if the result image is centered on the input image. When NO, the result will have the top left corner aligned
- `alignCorners`: When YES, the result image will have the same value as the input image in the corners
- `layout`: Specifies what layout the provided tensor is in. The returned tensor will follow the same layout. Valid layouts are NHWC, NCHW, HWC, CHW, and HW.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Resamples input images to given size using nearest neighbor sampling. Result images will be distorted if size is of different aspect ratio. Destination indices are computed using direct index scaling by default, with no offset added. If the centerResult parameter is true, the destination indices will be scaled and shifted to be centered on the input image. If the alignCorners parameter is true, the corners of the result images will match the input images. Scaling will be modified to a factor of (size - 1) / (inputSize - 1). When alignCorners is true, the centerResult parameter does nothing. In order to achieve the same behavior as OpenCV’s resize and TensorFlowV2’s resize,

```md
centerResult = YES;
alginCorners = NO;
```

To achieve the same behavior as TensorFlowV1 resize

```md
centerResult = NO;
```
