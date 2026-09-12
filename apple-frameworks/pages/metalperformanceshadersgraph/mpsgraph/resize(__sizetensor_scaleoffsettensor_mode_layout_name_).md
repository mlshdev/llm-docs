> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/resize(_:sizetensor:scaleoffsettensor:mode:layout:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/resize(_:sizetensor:scaleoffsettensor:mode:layout:name:))

# resize(\_:sizeTensor:scaleOffsetTensor:mode:layout:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Resamples input images to given size using the provided scale and offset. Destination indices are computed using

## Declaration

```swift
func resize(_ imagesTensor: MPSGraphTensor, sizeTensor size: MPSGraphTensor, scaleOffsetTensor scaleOffset: MPSGraphTensor, mode: MPSGraphResizeMode, layout: MPSGraphTensorNamedDataLayout, name: String?) -> MPSGraphTensor
```

## Parameters

- `imagesTensor`: Tensor containing input images.
- `size`: 1D Int32 or Int64 tensor. A 2-element shape as \[newHeight, newWidth\]
- `scaleOffset`: 1D float tensor. A 4-element shape as \[scaleY, scaleX, offsetY, offsetX\]
- `mode`: The resampling mode to use. If nearest sampling is specifed, RoundPreferCeil mode will be used.
- `layout`: Specifies what layout the provided tensor is in. The returned tensor will follow the same layout. Valid layouts are NHWC, NCHW, HWC, CHW, and HW.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

```md
dst_indices = (src_indicesscale) + offset 
```

For most use cases passing the scale and offset directly is unnecessary, and it is preferable to use the API specifying centerResult and alignCorners.

# resizeTensor:sizeTensor:scaleOffsetTensor:mode:layout:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Resamples input images to given size using the provided scale and offset. Destination indices are computed using

## Declaration

```objectivec
- (MPSGraphTensor *) resizeTensor:(MPSGraphTensor *) imagesTensor sizeTensor:(MPSGraphTensor *) size scaleOffsetTensor:(MPSGraphTensor *) scaleOffset mode:(MPSGraphResizeMode) mode layout:(MPSGraphTensorNamedDataLayout) layout name:(NSString *) name;
```

## Parameters

- `imagesTensor`: Tensor containing input images.
- `size`: 1D Int32 or Int64 tensor. A 2-element shape as \[newHeight, newWidth\]
- `scaleOffset`: 1D float tensor. A 4-element shape as \[scaleY, scaleX, offsetY, offsetX\]
- `mode`: The resampling mode to use. If nearest sampling is specifed, RoundPreferCeil mode will be used.
- `layout`: Specifies what layout the provided tensor is in. The returned tensor will follow the same layout. Valid layouts are NHWC, NCHW, HWC, CHW, and HW.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

```md
dst_indices = (src_indicesscale) + offset 
```

For most use cases passing the scale and offset directly is unnecessary, and it is preferable to use the API specifying centerResult and alignCorners.
