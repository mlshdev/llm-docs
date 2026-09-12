> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/maxpooling2dgradient(withgradienttensor:indicestensor:outputshapetensor:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/maxpooling2dgradient(withgradienttensor:indicestensor:outputshapetensor:descriptor:name:))

# maxPooling2DGradient(withGradientTensor:indicesTensor:outputShapeTensor:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a max-pooling gradient operation and returns the result tensor.

## Declaration

```swift
func maxPooling2DGradient(withGradientTensor gradient: MPSGraphTensor, indicesTensor indices: MPSGraphTensor, outputShapeTensor outputShape: MPSGraphTensor, descriptor: MPSGraphPooling2DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: A 2D input gradient tensor - must be of rank=4. The layout is defined by `descriptor.dataLayout`.
- `indices`: The indices tensor returned from [maxPooling2DReturnIndices(\_:descriptor:name:)](maxpooling2dreturnindices%28__descriptor_name_%29.md).
- `outputShape`: A tensor containing the shape of the destination gradient.
- `descriptor`: A pooling operation descriptor that specifies pooling window sizes, strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

Destination gradient tensor.

<a id="discussion"></a>

## Discussion

With this API MPSGraph computes the max-pooling gradient efficiently by reusing the indices from the forward API instead of recomputing them. The descriptor must set `returnIndicesMode` and `returnIndicesDataType` to the same value as that set by the forward pass.

# maxPooling2DGradientWithGradientTensor:indicesTensor:outputShapeTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a max-pooling gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) maxPooling2DGradientWithGradientTensor:(MPSGraphTensor *) gradient indicesTensor:(MPSGraphTensor *) indices outputShapeTensor:(MPSGraphTensor *) outputShape descriptor:(MPSGraphPooling2DOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `gradient`: A 2D input gradient tensor - must be of rank=4. The layout is defined by `descriptor.dataLayout`.
- `indices`: The indices tensor returned from [maxPooling2DReturnIndicesWithSourceTensor:descriptor:name:](maxpooling2dreturnindices%28__descriptor_name_%29.md).
- `outputShape`: A tensor containing the shape of the destination gradient.
- `descriptor`: A pooling operation descriptor that specifies pooling window sizes, strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

Destination gradient tensor.

<a id="discussion"></a>

## Discussion

With this API MPSGraph computes the max-pooling gradient efficiently by reusing the indices from the forward API instead of recomputing them. The descriptor must set `returnIndicesMode` and `returnIndicesDataType` to the same value as that set by the forward pass.
