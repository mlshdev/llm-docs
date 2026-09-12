> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/resizebilinear(_:sizetensor:scaletensor:offsettensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/resizebilinear(_:sizetensor:scaletensor:offsettensor:name:))

# resizeBilinear(\_:sizeTensor:scaleTensor:offsetTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a Resize operation and returns the result tensor.

## Declaration

```swift
func resizeBilinear(_ imagesTensor: MPSGraphTensor, sizeTensor size: MPSGraphTensor, scaleTensor scale: MPSGraphTensor, offsetTensor offset: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `imagesTensor`: Tensor containing input images.
- `size`: The target size of the result tensor.  1D Int32 or Int64 tensor of size equal to rank of input.
- `scale`: 1D float tensor of size equal to rank of input.
- `offset`: 1D float tensor of size equal to rank of input.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Resamples input images to given size using the provided scale and offset and bilinear sampling. Destination indices are computed using

```md
dst_indices = (src_indices * scale) + offset
```

For most use cases passing the scale and offset directly is unnecessary, and it is preferable to use the API specifying centerResult and alignCorners.

# resizeBilinearWithTensor:sizeTensor:scaleTensor:offsetTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a Resize operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) resizeBilinearWithTensor:(MPSGraphTensor *) imagesTensor sizeTensor:(MPSGraphTensor *) size scaleTensor:(MPSGraphTensor *) scale offsetTensor:(MPSGraphTensor *) offset name:(NSString *) name;
```

## Parameters

- `imagesTensor`: Tensor containing input images.
- `size`: The target size of the result tensor.  1D Int32 or Int64 tensor of size equal to rank of input.
- `scale`: 1D float tensor of size equal to rank of input.
- `offset`: 1D float tensor of size equal to rank of input.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Resamples input images to given size using the provided scale and offset and bilinear sampling. Destination indices are computed using

```md
dst_indices = (src_indices * scale) + offset
```

For most use cases passing the scale and offset directly is unnecessary, and it is preferable to use the API specifying centerResult and alignCorners.
